import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2, Upload, X } from 'lucide-react';
import { uploadImageToCloudinarySecure, uploadMultipleImagesToCloudinary } from '@/lib/cloudinary';

interface Gallery {
  _id: string;
  year: string;
  category: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

export default function GalleryManagement() {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    year: '',
    category: '',
    title: '',
    imageUrl: ''
  });

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        console.error('No admin token found');
        setError('Authentication required. Please login again.');
        return;
      }

      console.log('Loading gallery with token...');
      const response = await fetch('/api/admin/gallery', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        // Sort gallery items by creation date (newest first)
        const sortedGallery = (data.data || []).sort((a: Gallery, b: Gallery) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setGallery(sortedGallery);
        console.log('Gallery loaded successfully:', sortedGallery.length || 0);
      } else {
        const errorData = await response.json();
        console.error('Failed to load gallery:', errorData);
        setError(errorData.message || 'Failed to load gallery');
        
        if (response.status === 403 || response.status === 401) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('admin_user');
          window.location.href = '/admin/login';
        }
      }
    } catch (error) {
      console.error('Error loading gallery:', error);
      setError('Network error while loading gallery');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    if (selectedFiles.length === 0) return [];

    setIsUploading(true);
    try {
      const uploadPromises = selectedFiles.map(file => uploadImageToCloudinarySecure(file));
      const uploadedUrls = await Promise.all(uploadPromises);
      return uploadedUrls.filter(url => url !== null);
    } catch (error) {
      console.error('Upload error:', error);
      setError('Failed to upload images. Please try again.');
      return [];
    } finally {
      setIsUploading(false);
    }
  };

  const handleBulkUpload = async () => {
    if (selectedFiles.length === 0) {
      setError('Please select at least one image');
      return;
    }

    if (!formData.year || !formData.category) {
      setError('Please fill in year and category for bulk upload');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const uploadedUrls = await uploadImages();

      if (uploadedUrls.length === 0) {
        setError('No images were uploaded successfully');
        return;
      }

      const token = localStorage.getItem('adminToken');

      // Create gallery items for each uploaded image
      const createPromises = uploadedUrls.map((imageUrl, index) => 
        fetch('/api/admin/gallery', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            year: formData.year,
            category: formData.category,
            title: formData.title || `${formData.category} ${index + 1}`,
            imageUrl
          })
        })
      );

      await Promise.all(createPromises);
      await loadGallery();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      setError('Error creating gallery items. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFiles.length > 0) {
      // Handle bulk upload
      await handleBulkUpload();
      return;
    }

    // Handle single item creation/update
    setIsLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      const url = editingGallery 
        ? `/api/admin/gallery/${editingGallery._id}`
        : '/api/admin/gallery';

      const method = editingGallery ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await loadGallery();
        setIsDialogOpen(false);
        resetForm();
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await loadGallery();
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  const handleEdit = (galleryItem: Gallery) => {
    setEditingGallery(galleryItem);
    setFormData({
      year: galleryItem.year,
      category: galleryItem.category,
      title: galleryItem.title,
      imageUrl: galleryItem.imageUrl
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      year: '',
      category: '',
      title: '',
      imageUrl: ''
    });
    setEditingGallery(null);
    setSelectedFiles([]);
    setError('');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Gallery Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Gallery Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editingGallery ? 'Edit Gallery Item' : 'Add New Gallery Item(s)'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select 
                  value={formData.year} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Events">Events</SelectItem>
                    <SelectItem value="Campus">Campus</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {!editingGallery && (
                <div className="space-y-2">
                  <Label htmlFor="images">Upload Multiple Images</Label>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  {selectedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Selected files ({selectedFiles.length}):</p>
                      <div className="max-h-32 overflow-y-auto space-y-1">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm truncate flex-1">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Title {selectedFiles.length > 1 && '(will be auto-numbered for multiple files)'}</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Gallery item title"
                  required={editingGallery || selectedFiles.length === 0}
                />
              </div>

              {(editingGallery || selectedFiles.length === 0) && (
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    required={!selectedFiles.length}
                  />
                </div>
              )}

              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading || isUploading}>
                  {isLoading || isUploading ? (
                    <>
                      <Upload className="h-4 w-4 mr-2 animate-spin" />
                      {isUploading ? 'Uploading...' : 'Saving...'}
                    </>
                  ) : (
                    editingGallery ? 'Update' : selectedFiles.length > 0 ? `Add ${selectedFiles.length} Items` : 'Add'
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gallery.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="h-10 w-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {gallery.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No gallery items found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
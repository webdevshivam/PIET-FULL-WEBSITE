import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Upload } from 'lucide-react';
import { uploadImageToCloudinarySecure } from '@/lib/cloudinary';

interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  priority: number;
  isActive: boolean;
  createdAt: string;
}

export default function BannerManagement() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    priority: 1,
    isActive: true
  });

  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = async () => {
    console.log('=== loadBanners function called ===');
    try {
      const token = localStorage.getItem('adminToken');
      console.log('Token found:', !!token);
      
      if (!token) {
        console.error('No admin token found');
        setError('Authentication required. Please login again.');
        return;
      }

      console.log('Making API request to /api/admin/banners...');
      const response = await fetch('/api/admin/banners', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const data = await response.json();
        console.log('Raw banner data received:', data);
        
        // Handle different response structures
        let bannerData = [];
        if (Array.isArray(data)) {
          bannerData = data;
        } else if (data.data && Array.isArray(data.data)) {
          bannerData = data.data;
        } else {
          console.warn('Unexpected response format:', data);
          bannerData = [];
        }
        
        console.log('Processed banner data:', bannerData);
        
        // Sort banners by priority (ascending) then by creation date (newest first)
        const sortedBanners = bannerData.sort((a: Banner, b: Banner) => {
          if (a.priority !== b.priority) {
            return a.priority - b.priority;
          }
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        
        setBanners(sortedBanners);
        console.log('Banners set successfully:', sortedBanners.length, 'banners');
        setError(''); // Clear any previous errors
      } else {
        const responseText = await response.text();
        console.error('Failed response text:', responseText);
        
        let errorData;
        try {
          errorData = JSON.parse(responseText);
        } catch {
          errorData = { message: responseText || 'Unknown error' };
        }
        
        console.error('Failed to load banners:', response.status, errorData);
        setError(errorData.message || `Failed to load banners (${response.status})`);
        
        if (response.status === 403 || response.status === 401) {
          console.log('Authentication failed, redirecting to login...');
          localStorage.removeItem('adminToken');
          localStorage.removeItem('admin_user');
          window.location.href = '/admin/login';
        }
      }
    } catch (error) {
      console.error('Network error loading banners:', error);
      setError(`Network error while loading banners: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) return null;

    setIsUploading(true);
    try {
      console.log('Starting image upload for:', selectedFile.name);
      const uploadedUrl = await uploadImageToCloudinarySecure(selectedFile);
      
      if (!uploadedUrl) {
        throw new Error('Upload returned null URL');
      }
      
      console.log('Image uploaded successfully:', uploadedUrl);
      return uploadedUrl;
    } catch (error) {
      console.error('Upload error:', error);
      setError(`Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      let imageUrl = formData.imageUrl;

      // Upload image if file is selected
      if (selectedFile) {
        console.log('Uploading file:', selectedFile.name);
        const uploadedUrl = await uploadImage();
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
          console.log('Upload successful, URL:', uploadedUrl);
        } else {
          setError('Failed to upload image. Please try again.');
          setIsLoading(false);
          return;
        }
      }

      // Validate that we have an image URL
      if (!imageUrl || imageUrl.trim() === '') {
        setError('Please provide an image URL or upload an image file.');
        setIsLoading(false);
        return;
      }

      // Validate other required fields
      if (!formData.title || formData.title.trim() === '') {
        setError('Please provide a banner title.');
        setIsLoading(false);
        return;
      }

      if (!formData.priority || formData.priority < 1) {
        setError('Please provide a valid priority (minimum 1).');
        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem('adminToken');
      const url = editingBanner 
        ? `/api/admin/banners/${editingBanner._id}`
        : '/api/admin/banners';

      const method = editingBanner ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          imageUrl
        })
      });

      if (response.ok) {
        await loadBanners();
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
    if (!confirm('Are you sure you want to delete this banner?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/banners/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await loadBanners();
      }
    } catch (error) {
      console.error('Error deleting banner:', error);
    }
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      title: banner.title,
      imageUrl: banner.imageUrl,
      priority: banner.priority,
      isActive: banner.isActive
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      imageUrl: '',
      priority: 1,
      isActive: true
    });
    setEditingBanner(null);
    setSelectedFile(null);
    setError('');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Banner Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add Banner
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingBanner ? 'Edit Banner' : 'Add New Banner'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Banner title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-600">Selected: {selectedFile.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Or Image URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                  placeholder="https://example.com/banner.jpg"
                />
                <p className="text-sm text-gray-500">
                  Provide either an image URL or upload a file above
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Input
                  id="priority"
                  type="number"
                  min="1"
                  value={formData.priority}
                  onChange={(e) => setFormData(prev => ({ ...prev, priority: parseInt(e.target.value) }))}
                  placeholder="1"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isActive: checked }))}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>

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
                    editingBanner ? 'Update' : 'Add'
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
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {banners.map((banner) => (
              <TableRow key={banner._id}>
                <TableCell className="font-medium">{banner.title}</TableCell>
                <TableCell>{banner.priority}</TableCell>
                <TableCell>
                  <Badge variant={banner.isActive ? 'default' : 'secondary'}>
                    {banner.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <img 
                    src={banner.imageUrl} 
                    alt={banner.title}
                    className="h-10 w-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleEdit(banner)}
                      variant="outline"
                      size="sm"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(banner._id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {banners.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No banners found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
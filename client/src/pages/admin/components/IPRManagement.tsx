import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface IPR {
  _id: string;
  year: string;
  grantNo: string;
  affiliation: string;
  title: string;
  createdAt: string;
}

export default function IPRManagement() {
  const [iprs, setIprs] = useState<IPR[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIPR, setEditingIPR] = useState<IPR | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    year: '',
    grantNo: '',
    affiliation: '',
    title: ''
  });

  useEffect(() => {
    loadIPRs();
  }, []);

  const loadIPRs = async () => {
    try {
      const response = await fetch('/api/admin/ipr', {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setIprs(data.data || []);
      }
    } catch (error) {
      console.error('Error loading IPRs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const url = editingIPR 
        ? `/api/admin/ipr/${editingIPR._id}`
        : '/api/admin/ipr';

      const method = editingIPR ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await loadIPRs();
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
    if (!confirm('Are you sure you want to delete this IPR record?')) return;

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/admin/ipr/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await loadIPRs();
      }
    } catch (error) {
      console.error('Error deleting IPR:', error);
    }
  };

  const handleEdit = (ipr: IPR) => {
    setEditingIPR(ipr);
    setFormData({
      year: ipr.year,
      grantNo: ipr.grantNo,
      affiliation: ipr.affiliation,
      title: ipr.title
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      year: '',
      grantNo: '',
      affiliation: '',
      title: ''
    });
    setEditingIPR(null);
    setError('');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">IPR Management</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Add IPR
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingIPR ? 'Edit IPR' : 'Add New IPR'}
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
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                  placeholder="Year"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grantNo">Grant Number</Label>
                <Input
                  id="grantNo"
                  value={formData.grantNo}
                  onChange={(e) => setFormData(prev => ({ ...prev, grantNo: e.target.value }))}
                  placeholder="Grant number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="affiliation">Affiliation</Label>
                <Input
                  id="affiliation"
                  value={formData.affiliation}
                  onChange={(e) => setFormData(prev => ({ ...prev, affiliation: e.target.value }))}
                  placeholder="Affiliation"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="IPR title"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : editingIPR ? 'Update' : 'Add'}
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
              <TableHead>Year</TableHead>
              <TableHead>Grant No</TableHead>
              <TableHead>Affiliation</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {iprs.map((ipr) => (
              <TableRow key={ipr._id}>
                <TableCell>{ipr.year}</TableCell>
                <TableCell>{ipr.grantNo}</TableCell>
                <TableCell>{ipr.affiliation}</TableCell>
                <TableCell className="font-medium">{ipr.title}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(ipr)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(ipr._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {iprs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No IPR records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
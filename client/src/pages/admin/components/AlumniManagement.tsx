
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2, User } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Alumni {
  _id: string;
  name: string;
  batch: string;
  fromCity: string;
  currentCity: string;
  companyName: string;
  position: string;
  email: string;
  phone: string;
  achievements?: string;
  photoUrl?: string;
  createdAt: string;
}

const AlumniManagement: React.FC = () => {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  useEffect(() => {
    loadAlumni();
  }, []);

  const loadAlumni = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/alumni', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAlumni(data.data);
      }
    } catch (error) {
      console.error('Error loading alumni:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAlumni = async (id: string) => {
    if (!confirm('Are you sure you want to delete this alumni record?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/alumni/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        loadAlumni();
      }
    } catch (error) {
      console.error('Error deleting alumni:', error);
    }
  };

  const exportToPdf = () => {
    const doc = new jsPDF();

    const tableData = alumni.map(alum => [
      alum.name,
      alum.batch,
      alum.email,
      alum.companyName,
      alum.position,
      alum.currentCity,
      new Date(alum.createdAt).toLocaleDateString(),
    ]);

    autoTable(doc, {
      head: [['Name', 'Batch', 'Email', 'Company', 'Position', 'City', 'Registered']],
      body: tableData,
    });

    doc.save('alumni.pdf');
  };

  const viewAlumni = (alumni: Alumni) => {
    setSelectedAlumni(alumni);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Alumni Management</h3>
        <Button onClick={exportToPdf}>Export to PDF</Button>
      </div>

      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="text-left p-3">Alumni Details</th>
                <th className="text-left p-3">Batch</th>
                <th className="text-left p-3">Company</th>
                <th className="text-left p-3">Position</th>
                <th className="text-left p-3">Location</th>
                <th className="text-left p-3">Registered</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center p-8">Loading alumni...</td>
                </tr>
              ) : alumni.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-8">No alumni found</td>
                </tr>
              ) : (
                alumni.map((alum) => (
                  <tr key={alum._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        {alum.photoUrl ? (
                          <img 
                            src={alum.photoUrl} 
                            alt={alum.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium">{alum.name}</div>
                          <div className="text-sm text-gray-500">{alum.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="secondary">{alum.batch}</Badge>
                    </td>
                    <td className="p-3">{alum.companyName}</td>
                    <td className="p-3">{alum.position}</td>
                    <td className="p-3">{alum.currentCity}</td>
                    <td className="p-3">
                      {new Date(alum.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewAlumni(alum)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteAlumni(alum._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Alumni Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Alumni Details</DialogTitle>
          </DialogHeader>
          {selectedAlumni && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                {selectedAlumni.photoUrl ? (
                  <img 
                    src={selectedAlumni.photoUrl} 
                    alt={selectedAlumni.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-500" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold">{selectedAlumni.name}</h3>
                  <p className="text-gray-600">Batch {selectedAlumni.batch}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Email:</strong> {selectedAlumni.email}
                </div>
                <div>
                  <strong>Phone:</strong> {selectedAlumni.phone}
                </div>
                <div>
                  <strong>From City:</strong> {selectedAlumni.fromCity}
                </div>
                <div>
                  <strong>Current City:</strong> {selectedAlumni.currentCity}
                </div>
                <div>
                  <strong>Company:</strong> {selectedAlumni.companyName}
                </div>
                <div>
                  <strong>Position:</strong> {selectedAlumni.position}
                </div>
              </div>
              
              {selectedAlumni.achievements && (
                <div>
                  <strong>Achievements:</strong>
                  <p className="bg-gray-50 p-3 rounded mt-2">{selectedAlumni.achievements}</p>
                </div>
              )}
              
              <div>
                <strong>Registered:</strong> {new Date(selectedAlumni.createdAt).toLocaleString()}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlumniManagement;

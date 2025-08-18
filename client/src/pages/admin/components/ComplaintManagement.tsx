
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Trash2, AlertCircle } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Complaint {
  _id: string;
  fullName: string;
  studentId: string;
  email: string;
  phone: string;
  department: string;
  batch: string;
  complaintCategory: string;
  subject: string;
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  attachmentUrl?: string;
  createdAt: string;
}

const ComplaintManagement: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/complaints', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setComplaints(data.data);
      }
    } catch (error) {
      console.error('Error loading complaints:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/complaints/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        loadComplaints();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteComplaint = async (id: string) => {
    if (!confirm('Are you sure you want to delete this complaint?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/complaints/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        loadComplaints();
      }
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'closed': return 'bg-gray-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const exportToPdf = () => {
    const doc = new jsPDF();

    const tableData = complaints.map(complaint => [
      complaint.fullName,
      complaint.studentId,
      complaint.email,
      complaint.department,
      complaint.subject,
      complaint.urgency,
      complaint.status,
      new Date(complaint.createdAt).toLocaleDateString(),
    ]);

    autoTable(doc, {
      head: [['Name', 'Student ID', 'Email', 'Department', 'Subject', 'Urgency', 'Status', 'Date']],
      body: tableData,
    });

    doc.save('complaints.pdf');
  };

  const viewComplaint = (complaint: Complaint) => {
    setSelectedComplaint(complaint);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Complaint Management</h3>
        <Button onClick={exportToPdf}>Export to PDF</Button>
      </div>

      <div className="border rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="text-left p-3">Student Details</th>
                <th className="text-left p-3">Subject</th>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Urgency</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center p-8">Loading complaints...</td>
                </tr>
              ) : complaints.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-8">No complaints found</td>
                </tr>
              ) : (
                complaints.map((complaint) => (
                  <tr key={complaint._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <div className="font-medium">{complaint.fullName}</div>
                        <div className="text-sm text-gray-500">{complaint.studentId}</div>
                        <div className="text-sm text-gray-500">{complaint.email}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="max-w-xs truncate">{complaint.subject}</div>
                    </td>
                    <td className="p-3">{complaint.complaintCategory}</td>
                    <td className="p-3">
                      <Badge className={`${getUrgencyColor(complaint.urgency)} text-white`}>
                        {complaint.urgency}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Select
                        value={complaint.status}
                        onValueChange={(value) => updateStatus(complaint._id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3">
                      {new Date(complaint.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewComplaint(complaint)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteComplaint(complaint._id)}
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

      {/* View Complaint Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Complaint Details</DialogTitle>
          </DialogHeader>
          {selectedComplaint && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Name:</strong> {selectedComplaint.fullName}
                </div>
                <div>
                  <strong>Student ID:</strong> {selectedComplaint.studentId}
                </div>
                <div>
                  <strong>Email:</strong> {selectedComplaint.email}
                </div>
                <div>
                  <strong>Phone:</strong> {selectedComplaint.phone}
                </div>
                <div>
                  <strong>Department:</strong> {selectedComplaint.department}
                </div>
                <div>
                  <strong>Batch:</strong> {selectedComplaint.batch}
                </div>
                <div>
                  <strong>Category:</strong> {selectedComplaint.complaintCategory}
                </div>
                <div>
                  <strong>Urgency:</strong> 
                  <Badge className={`ml-2 ${getUrgencyColor(selectedComplaint.urgency)} text-white`}>
                    {selectedComplaint.urgency}
                  </Badge>
                </div>
              </div>
              <div>
                <strong>Subject:</strong>
                <p>{selectedComplaint.subject}</p>
              </div>
              <div>
                <strong>Description:</strong>
                <p className="bg-gray-50 p-3 rounded">{selectedComplaint.description}</p>
              </div>
              {selectedComplaint.attachmentUrl && (
                <div>
                  <strong>Attachment:</strong>
                  <a 
                    href={selectedComplaint.attachmentUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline ml-2"
                  >
                    View Attachment
                  </a>
                </div>
              )}
              <div>
                <strong>Submitted:</strong> {new Date(selectedComplaint.createdAt).toLocaleString()}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComplaintManagement;

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2, Mail, Phone } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function ContactManagement() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data.data || []);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await loadContacts();
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleView = (contact: Contact) => {
    setSelectedContact(contact);
    setIsViewDialogOpen(true);
  };

  const exportToPdf = () => {
    const doc = new jsPDF();

    const tableData = contacts.map(contact => [
      contact.fullName,
      contact.email,
      contact.subject,
      new Date(contact.createdAt).toLocaleDateString(),
      contact.message,
    ]);

    autoTable(doc, {
      head: [['Name', 'Email', 'Subject', 'Date', 'Message']],
      body: tableData,
    });

    doc.save('contacts.pdf');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Contact Form Submissions</h3>
        <Button onClick={exportToPdf}>Export to PDF</Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell className="font-medium">{contact.fullName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell className="max-w-xs truncate">{contact.subject}</TableCell>
                <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleView(contact)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(contact._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {contacts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No contact submissions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="font-medium">{selectedContact.fullName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Date</label>
                  <p>{new Date(selectedContact.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p>{selectedContact.email}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p>{selectedContact.phoneNumber}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Subject</label>
                <p className="font-medium">{selectedContact.subject}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Message</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => setIsViewDialogOpen(false)}
                >
                  Close
                </Button>
                <Button
                  onClick={() => window.location.href = `mailto:${selectedContact.email}`}
                >
                  Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
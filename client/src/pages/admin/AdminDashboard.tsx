import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  Image, 
  Newspaper, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X,
  FileText,
  UserCheck,
  Briefcase
} from 'lucide-react';
import FacultyManagement from './components/FacultyManagement';
import BannerManagement from './components/BannerManagement';
import NewsManagement from './components/NewsManagement';
import GalleryManagement from './components/GalleryManagement';
import ContactManagement from './components/ContactManagement';
import IPRManagement from './components/IPRManagement';
import ManagementTeamManagement from './components/ManagementTeamManagement';
import CellsCommitteesManagement from './components/CellsCommitteesManagement';
import { useLocation } from 'wouter';
import ComplaintManagement from './components/ComplaintManagement';
import AlumniManagement from './components/AlumniManagement';

type ActiveSection = 'dashboard' | 'faculty' | 'banners' | 'news' | 'gallery' | 'contacts' | 'ipr' | 'management-team' | 'cells-committees' | 'complaints' | 'alumni';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [dashboardData, setDashboardData] = useState({
    faculty: 0,
    news: 0,
    gallery: 0,
    contacts: 0,
    ipr: 0,
    managementTeam: 0,
    cellsCommittees: 0,
    complaints: 0,
    alumni: 0
  });

  const loadDashboardData = async () => {
    try {
      const token = localStorage.getItem('admin_token') || localStorage.getItem('adminToken');
      
      if (!token) {
        console.warn('No admin token found, redirecting to login');
        setLocation('/admin/login');
        return;
      }

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const endpoints = [
        '/api/admin/faculty',
        '/api/admin/news',
        '/api/admin/gallery',
        '/api/admin/contacts',
        '/api/admin/ipr',
        '/api/admin/management-team',
        '/api/admin/cells-committees',
        '/api/admin/complaints',
        '/api/admin/alumni'
      ];

      const responses = await Promise.allSettled(
        endpoints.map(endpoint => 
          fetch(endpoint, { headers }).then(async res => {
            if (!res.ok) {
              if (res.status === 401) {
                throw new Error('Unauthorized');
              }
              throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }
            return res.json();
          })
        )
      );

      const defaultData = {
        faculty: 0,
        news: 0,
        gallery: 0,
        contacts: 0,
        ipr: 0,
        managementTeam: 0,
        cellsCommittees: 0,
        complaints: 0,
        alumni: 0
      };

      const newData = { ...defaultData };
      const keys = ['faculty', 'news', 'gallery', 'contacts', 'ipr', 'managementTeam', 'cellsCommittees', 'complaints', 'alumni'];

      responses.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value?.data) {
          newData[keys[index]] = Array.isArray(result.value.data) ? result.value.data.length : 0;
        } else if (result.status === 'rejected') {
          console.warn(`Failed to load ${keys[index]}:`, result.reason);
          if (result.reason?.message === 'Unauthorized') {
            setLocation('/admin/login');
            return;
          }
        }
      });

      setDashboardData(newData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      if (error.message?.includes('Unauthorized')) {
        setLocation('/admin/login');
      }
    }
  };

  React.useEffect(() => {
    if (activeSection === 'dashboard') {
      loadDashboardData();
    }
  }, [activeSection]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setLocation('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      setLocation('/admin/login');
    }
  };

  const menuItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: Settings },
    { id: 'faculty' as const, label: 'Faculty', icon: Users },
    { id: 'banners' as const, label: 'Banners', icon: Image },
    { id: 'news' as const, label: 'News', icon: Newspaper },
    { id: 'gallery' as const, label: 'Gallery', icon: Image },
    { id: 'contacts' as const, label: 'Contacts', icon: MessageSquare },
    { id: 'complaints' as const, label: 'Complaints', icon: MessageSquare },
    { id: 'alumni' as const, label: 'Alumni', icon: Users },
    { id: 'ipr' as const, label: 'IPR Collection', icon: FileText },
    { id: 'management-team' as const, label: 'Management Team', icon: UserCheck },
    { id: 'cells-committees' as const, label: 'Cells & Committees', icon: Briefcase }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'faculty':
        return <FacultyManagement />;
      case 'banners':
        return <BannerManagement />;
      case 'news':
        return <NewsManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'contacts':
        return <ContactManagement />;
      case 'complaints':
        return <ComplaintManagement />;
      case 'alumni':
        return <AlumniManagement />;
      case 'ipr':
        return <IPRManagement />;
      case 'management-team':
        return <ManagementTeamManagement />;
      case 'cells-committees':
        return <CellsCommitteesManagement />;
      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Admin Dashboard</h2>
              <p className="text-muted-foreground">
                Manage your PIET website content and data
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('faculty')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Faculty</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.faculty}</div>
                  <p className="text-xs text-muted-foreground">
                    Faculty members
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('news')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">News</CardTitle>
                  <Newspaper className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.news}</div>
                  <p className="text-xs text-muted-foreground">
                    News articles
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('gallery')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Gallery</CardTitle>
                  <Image className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.gallery}</div>
                  <p className="text-xs text-muted-foreground">
                    Gallery images
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('contacts')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contacts</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.contacts}</div>
                  <p className="text-xs text-muted-foreground">
                    Contact submissions
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('complaints')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Complaints</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.complaints}</div>
                  <p className="text-xs text-muted-foreground">
                    Complaint submissions
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('alumni')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Alumni</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.alumni}</div>
                  <p className="text-xs text-muted-foreground">
                    Alumni registrations
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('ipr')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">IPR Collection</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.ipr}</div>
                  <p className="text-xs text-muted-foreground">
                    IPR records
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('management-team')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Management Team</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.managementTeam}</div>
                  <p className="text-xs text-muted-foreground">
                    Team members
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setActiveSection('cells-committees')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cells & Committees</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.cellsCommittees}</div>
                  <p className="text-xs text-muted-foreground">
                    Active cells/committees
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h1 className="text-xl font-semibold">PIET Admin</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <Separator className="my-4 mx-4" />

          <div className="px-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Welcome back, Admin
              </span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

const fetchData = async (endpoint: string, setter: (data: any) => void) => {
    try {
      const response = await fetch(`/api/admin/${endpoint}`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setter(data.data || []);
      } else {
        console.error(`Failed to fetch ${endpoint}`);
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };
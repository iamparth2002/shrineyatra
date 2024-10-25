import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Package, Map, BookOpen, Landmark } from 'lucide-react';

const AdminSidebar = ({
  setActiveSection,
  setIsSidebarOpen,
  setSelectedItem,
  setIsCreating,
  setIsEditing,
  activeSection,
  isSidebarOpen,
}) => {
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-white shadow-md transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0`}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Travel Dashboard</h1>
        <nav>
          <Button
            variant={activeSection === 'packages' ? 'default' : 'ghost'}
            className="w-full justify-start mb-2"
            onClick={() => {
              setActiveSection('packages');
              setIsSidebarOpen(false);
              setSelectedItem(null);
              setIsCreating(false);
              setIsEditing(false);
            }}
          >
            <Package className="mr-2 h-4 w-4" /> Packages
          </Button>
          <Button
            variant={activeSection === 'trips' ? 'default' : 'ghost'}
            className="w-full justify-start mb-2"
            onClick={() => {
              setActiveSection('trips');
              setIsSidebarOpen(false);
              setSelectedItem(null);
              setIsCreating(false);
              setIsEditing(false);
            }}
          >
            <Map className="mr-2 h-4 w-4" /> Trips
          </Button>
          <Button
            variant={activeSection === 'blogs' ? 'default' : 'ghost'}
            className="w-full justify-start mb-2"
            onClick={() => {
              setActiveSection('blogs');
              setIsSidebarOpen(false);
              setSelectedItem(null);
              setIsCreating(false);
              setIsEditing(false);
            }}
          >
            <BookOpen className="mr-2 h-4 w-4" /> Blogs
          </Button>
          <Button
            variant={activeSection === 'attractions' ? 'default' : 'ghost'}
            className="w-full justify-start mb-2"
            onClick={() => {
              setActiveSection('attractions');
              setIsSidebarOpen(false);
              setSelectedItem(null);
              setIsCreating(false);
              setIsEditing(false);
            }}
          >
            <Landmark className="mr-2 h-4 w-4" /> Attractions
          </Button>
        </nav>
      </div>
      <div className="p-4 border-t">
        <Button onClick={handleLogout} variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;

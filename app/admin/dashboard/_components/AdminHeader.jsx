import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Plus, Menu,Search } from 'lucide-react';

const AdminHeader = ({
  activeSection,
  setIsSidebarOpen,
  isSidebarOpen,
  handleCreate,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </h2>
        <div className="flex items-center">
          <div className="hidden md:block relative mr-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button onClick={handleCreate} className="mr-2">
            <Plus className="mr-2 h-4 w-4" /> Create{' '}
            {activeSection.slice(0, -1)}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;

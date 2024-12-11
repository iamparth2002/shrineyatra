'use client'

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Trash2, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Dummy data for demonstration
const dummyQueries = [
  {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '1234567890',
    travelDate: '2024-05-15',
    travelCount: 2,
    description: 'Interested in a beach vacation package',
    tripId: 'TRIP001'
  },
  {
    _id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phoneNumber: '9876543210',
    travelDate: '2024-06-20',
    travelCount: 4,
    description: 'Looking for a family-friendly mountain retreat',
    tripId: 'TRIP002'
  },
  {
    _id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phoneNumber: '5555555555',
    travelDate: '2024-07-10',
    travelCount: 1,
    description: 'Seeking a solo adventure trip',
    tripId: 'TRIP003'
  },
];

export default function QueriesTable({
  queries,
  handleDeleteQuery = (id) => console.log(`Delete query with id: ${id}`),
}) {
  const [selectedQuery, setSelectedQuery] = useState(null);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="">Phone</TableHead>
            <TableHead className="hidden lg:table-cell">Travel Date</TableHead>
            <TableHead className="hidden md:table-cell">Travellers</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queries.map((query) => (
            <TableRow key={query._id}>
              <TableCell className="font-medium">{query.name}</TableCell>
              <TableCell className="hidden md:table-cell">{query.email}</TableCell>
              <TableCell className="">{query.phoneno}</TableCell>
              <TableCell className="hidden lg:table-cell">
                {new Date(query.travelDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="hidden md:table-cell">{query.travelCount}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedQuery(query)}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Query Details</DialogTitle>
                      </DialogHeader>
                      {selectedQuery && (
                        <div className="mt-4 space-y-2">
                          <p><strong>Name:</strong> {selectedQuery.name}</p>
                          <p><strong>Email:</strong> {selectedQuery.email}</p>
                          <p><strong>Phone:</strong> {selectedQuery.phoneno}</p>
                          <p><strong>Travel Date:</strong> {new Date(selectedQuery.travelDate).toLocaleDateString()}</p>
                          <p><strong>Travellers:</strong> {selectedQuery.travelCount}</p>
                          {selectedQuery?.message && <p><strong>Description:</strong> {selectedQuery.message}</p>}
                          
                          <p><strong>Trip :</strong> {selectedQuery.tripId.name}</p>
                          {/* <p><strong>Trip ID:</strong> {selectedQuery.tripId}</p> */}
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteQuery(query._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete query</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
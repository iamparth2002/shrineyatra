'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../button';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
    const router = useRouter()
  return (
    <Button className="mb-2" onClick={() => router.back()} >
      {' '}
      <ArrowLeft className="w-4 h-4 mr-2" /> Go
      Back
    </Button>
  );
};

export default BackButton;

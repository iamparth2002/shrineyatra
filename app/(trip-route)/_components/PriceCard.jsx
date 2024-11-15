'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  handleEmailClick,
  handleSupportClick,
  handleWhatsAppClick,
} from '@/lib/utils';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const PriceCard = ({ tourData }) => {
  return (
    <div className="border rounded-lg p-6 top-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex w-full items-baseline justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold">INR {tourData?.price}</span>
            <span className="text-gray-400 line-through text-xs">
              INR {tourData?.realPrice}
            </span>
          </div>
          <span className="bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full">
            SAVE INR {tourData?.realPrice - tourData?.price}
          </span>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        <div className="font-semibold text-lg">Contact Us</div>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
          onClick={handleSupportClick}
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Support
        </Button>
        <Button
          className="w-full flex items-center justify-center"
          variant="outline"
          onClick={handleEmailClick}
        >
          <Mail className="w-4 h-4 mr-2" />
          Email Us
        </Button>
        <Button
          className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;

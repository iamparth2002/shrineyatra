"use client"

import { Phone, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UserForm from './UserForm'
import { handleSupportClick, handleWhatsAppClick } from '@/lib/utils'

export function MobileBar() {
  return (
    <div className="fixed shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] bottom-0 left-0 right-0 z-50 flex gap-2 h-20 items-center justify-between bg-white px-4 text-white md:hidden">
      <Button variant="ghost" size="icon" className="text-primary border border-primary hover:text-primary">
        <Phone className="h-5 w-5" onClick={handleSupportClick} fill='#F87F2C'/>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex-1 text-base font-medium text-white bg-primary hover:bg-primary/80 hover:text-white"
          >
            Get All Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-2">
          <UserForm/>
        </DialogContent>
      </Dialog>
      <Button variant="ghost" size="icon" className="text-primary border border-primary hover:text-primary" onClick={handleWhatsAppClick}>
        {/* <MessageCircle className="h-5 w-5" /> */}
        <img src="/whatsapp.svg" alt="Whatsapp" width={28} height={28} />
      </Button>
    </div>
  )
}


import { details } from "@/utils/data";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleSupportClick = () => {
  window.open(`tel:+${details.contact}`, "_self"); // Directly dials the support number
};

export const handleEmailClick = () => {
  window.open(`mailto:${details.email}`, "_self"); // Opens the default mail client
};

export const handleWhatsAppClick = () => {
  window.open(`https://wa.me/${details.contact}`, "_blank"); // Opens WhatsApp chat in a new tab
};
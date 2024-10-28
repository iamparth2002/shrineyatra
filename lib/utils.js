import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleSupportClick = () => {
  window.open("tel:+919456583256", "_self"); // Directly dials the support number
};

export const handleEmailClick = () => {
  window.open("mailto:support@shrineyatra.com", "_self"); // Opens the default mail client
};

export const handleWhatsAppClick = () => {
  window.open("https://wa.me/919456583256", "_blank"); // Opens WhatsApp chat in a new tab
};
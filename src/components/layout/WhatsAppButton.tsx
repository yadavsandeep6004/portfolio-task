// src/components/layout/WhatsAppButton.tsx
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const WA_NUMBER = '919876543210';
  const WA_MESSAGE = encodeURIComponent(
    'Hello NexusPro! I am interested in your B2B services. Could you please share more details?'
  );

  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      id="whatsapp-floating-btn"
      className="whatsapp-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </motion.a>
  );
}

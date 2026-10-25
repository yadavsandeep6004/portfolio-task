// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Process', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  Services: [
    { label: 'Home', href: '/' },
    { label: 'All Categories', href: '/categories' },
    { label: 'Custom Solutions', href: '#' },
    { label: 'B2B Partnerships', href: '#' },
  ],
  Support: [
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Twitter', href: '#', icon: '𝕏' },
  { label: 'Instagram', href: '#', icon: '▲' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-16 pb-8">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow-sm">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Nexus<span className="gradient-text">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              One platform connecting global buyers with premium B2B manufacturers across 12+ industry verticals.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: <Mail className="w-4 h-4" />, text: 'hello@nexuspro.com' },
                { icon: <Phone className="w-4 h-4" />, text: '+91 98765 43210' },
                { icon: <MapPin className="w-4 h-4" />, text: 'Mumbai, Maharashtra, India' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <span className="text-indigo-400">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300 font-bold text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 NexusPro B2B Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-green-500 hover:text-green-400 transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            WhatsApp Support
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

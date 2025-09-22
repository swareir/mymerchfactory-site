export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="container py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MyMerchFactory" className="h-8 w-auto" />
          <span className="font-semibold tracking-tight">MyMerchFactory</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/solutions">Solutions</a>
          <a href="/how-it-works">How it works</a>
          <a href="/pricing">Pricing</a>
          <a href="/portfolio">Work</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/contact" className="btn">Contact</a>
          <a href="/contact" className="btn btn-primary">Book a demo</a>
        </div>
      </div>
    </header>
  )
}
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const NavLinks = () => (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-lg md:text-sm">
      <Link href="/solutions" className="hover:opacity-80">Solutions</Link>
      <Link href="/how-it-works" className="hover:opacity-80">How it works</Link>
      <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
      <Link href="/portfolio" className="hover:opacity-80">Work</Link>
      <Link href="/faq" className="hover:opacity-80">FAQ</Link>
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MyMerchFactory" className="h-8 w-auto" />
          <span className="font-semibold tracking-tight">MyMerchFactory</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn">Contact</Link>
            <Link href="/contact" className="btn btn-primary">Book a demo</Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden btn px-3 py-2"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile sheet menu */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute inset-y-0 right-0 w-5/6 max-w-sm bg-white border-l p-6 flex flex-col gap-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <img src="/logo.png" alt="MyMerchFactory" className="h-8 w-auto" />
                <span className="font-semibold">MyMerchFactory</span>
              </Link>
              <button
                aria-label="Close menu"
                className="btn px-3 py-2"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <NavLinks />

            <div className="mt-auto flex flex-col gap-3">
              <Link href="/contact" className="btn w-full">Contact</Link>
              <Link href="/contact" className="btn btn-primary w-full">Book a demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

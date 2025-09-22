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

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">MyMerchFactory</div>
          <p className="mt-2 max-w-sm">A one‑stop shop to create and manage a merch store without the hassle.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a href="/solutions">Solutions</a>
          <a href="/how-it-works">How it works</a>
          <a href="/pricing">Pricing</a>
          <a href="/portfolio">Work</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="md:text-right">
          <a href="/contact" className="btn btn-primary">Book a demo</a>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight">Solutions</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">Two ways to work together. Most choose Full‑Service so we handle everything end‑to‑end.</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-title">Full‑Service</div>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-700">
            <li>We build and host your storefront (or Shopify)</li>
            <li>Design creation & product uploads</li>
            <li>Card processing & tax handling</li>
            <li>On‑demand printing & shipping</li>
            <li>Monthly profit payouts</li>
          </ul>
          <a href="/contact" className="btn btn-primary mt-6">Book a demo</a>
        </div>

        <div className="card">
          <div className="card-title">Self‑Serve (optional)</div>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-700">
            <li>You manage the storefront</li>
            <li>We print, ship, and support</li>
            <li>Simple product sync</li>
          </ul>
          <a href="/contact" className="btn mt-6">Talk to sales</a>
        </div>
      </div>
    </section>
  )
}

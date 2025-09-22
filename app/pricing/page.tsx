export default function Page() {
  const tiers = [
    {name: "Starter", price: "$0/mo", note: "Pay as you sell", features: ["Full‑service setup", "Standard print costs", "Card processing included", "Monthly payouts"]},
    {name: "Growth", price: "$199/mo", note: "Lower per‑unit costs", features: ["Priority design time", "Volume print discounts", "Custom domain & theme", "Analytics dashboard"]},
    {name: "Enterprise", price: "Talk to us", note: "SLAs & support", features: ["Dedicated manager", "Bulk/team stores", "Advanced tax handling", "API & SSO options"]},
  ];
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight">Simple pricing</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">Choose a plan or start with rev‑share. Either way, you keep the profit.</p>
      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <div className="card" key={i}>
            <div className="flex items-center justify-between">
              <div className="card-title">{t.name}</div>
              <div className="text-2xl font-bold">{t.price}</div>
            </div>
            <div className="caption mt-1">{t.note}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map((f, j) => (<li key={j}>• {f}</li>))}
            </ul>
            <a href="/contact" className="btn btn-primary mt-6 w-full">Choose {t.name}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  const steps = [
    {title: "Kickoff", desc: "Tell us about your audience and goals. We align on brand & product ideas."},
    {title: "Store build", desc: "We create your site, pages, and product templates—then connect payments."},
    {title: "Design upload", desc: "Approve designs, pricing, and margins. We generate mockups & variants."},
    {title: "Go live & fulfill", desc: "We print and ship every order automatically. You track sales and payouts."},
  ];
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight">How it works</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">A guided launch with zero up‑front cost. We only earn when you sell.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <div className="card" key={i}>
            <div className="card-title">{i+1}. {s.title}</div>
            <p className="mt-2 text-neutral-700">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {k: "$0", l: "Up‑front cost"},
            {k: "2–5 days", l: "Typical delivery"},
            {k: "24/7", l: "Automated fulfillment"},
            {k: "Monthly", l: "Profit payouts"},
          ].map((k, i) => (
            <div className="card" key={i}>
              <div className="text-3xl font-bold">{k.k}</div>
              <div className="caption">{k.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

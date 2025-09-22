export default function Page() {
  const faqs = [
    {q: "What does “full‑service” include?", a: "Site creation, design uploads, merchant services, printing, shipping, and monthly profit payouts."},
    {q: "Is there any upfront cost?", a: "No. We use revenue‑share or a flat monthly plan—your choice."},
    {q: "Do I need inventory?", a: "Never. Everything is printed on‑demand in the USA."},
    {q: "How are payouts handled?", a: "We handle card processing and pay out profits monthly to your account."},
  ];
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight">FAQ</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {faqs.map((f, i) => (
          <div className="card" key={i}>
            <div className="card-title">{f.q}</div>
            <p className="mt-2 text-neutral-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <section className="container py-16">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Recent launches</h1>
        <a href="/contact" className="btn">Work with us</a>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div className="card overflow-hidden" key={i}>
            <div className="aspect-[16/10] bg-neutral-200" />
            <div className="card-title mt-4">Client project {i}</div>
            <p className="mt-2 text-neutral-600">Custom storefront, payment setup, and on‑demand fulfillment.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

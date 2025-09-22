export default function Page() {
  return (
    <section className="relative">
      <div className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            Full‑service merch & storefronts
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            We build your merch business—<span className="underline decoration-black/20 decoration-4 underline-offset-4">storefront, payments, designs, and shipping</span>—so you keep the profit.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-xl">
            From zero to launch in days. We design your site, upload products, process payments, and fulfill orders. No inventory. No headaches.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="btn btn-primary">Get started</a>
            <a href="/portfolio" className="btn btn-outline">See a live demo</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">No upfront fees</div>
            <div className="flex items-center gap-2">You still make profit</div>
            <div className="flex items-center gap-2">US printing & 2‑5 day ship</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border shadow-sm bg-white p-4">
            <div className="h-full w-full rounded-xl border bg-white grid grid-rows-6 grid-cols-12 overflow-hidden">
              <div className="col-span-12 row-span-1 border-b px-4 flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-neutral-200"/>
                <div className="h-8 w-28 rounded-full bg-black"/>
              </div>
              <div className="col-span-6 row-span-5 border-r p-6 flex flex-col justify-between">
                <div>
                  <div className="h-8 w-3/4 rounded bg-neutral-100"/>
                  <div className="mt-2 h-4 w-5/6 rounded bg-neutral-100"/>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl border p-2 flex flex-col gap-2">
                      <div className="h-full w-full rounded-lg bg-neutral-100"/>
                      <div className="h-2 w-3/4 rounded bg-neutral-100"/>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-6 row-span-5 p-6 grid gap-3">
                {["Orders", "Payouts", "Inventory", "Shipping"].map((label, i) => (
                  <div key={i} className="rounded-xl border p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-neutral-100"/>
                      <div>
                        <div className="h-3.5 w-28 rounded bg-neutral-100"/>
                        <div className="mt-1 h-2.5 w-44 rounded bg-neutral-100"/>
                      </div>
                    </div>
                    <div className="h-8 w-20 rounded-full bg-black"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions strip */}
      <div className="bg-neutral-50">
        <div className="container py-16 grid lg:grid-cols-4 gap-4">
          {[
            {title: "Site creation", desc: "We design and launch your storefront—domain, theme, pages, and analytics included."},
            {title: "Design & catalog", desc: "Our studio creates and uploads product designs and mockups."},
            {title: "Merchant services", desc: "We handle card processing and taxes. Monthly profit payouts to you."},
            {title: "Print & ship", desc: "US‑based production with 2–5 day delivery windows. No inventory ever."},
          ].map((b, i) => (
            <div className="card" key={i}>
              <div className="card-title">{b.title}</div>
              <p className="mt-2 text-neutral-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

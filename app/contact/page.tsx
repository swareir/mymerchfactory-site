export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tight">Let’s build your merch business</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">Tell us what you want to sell—we’ll handle the rest. You still make the profit.</p>

      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="border rounded-xl px-4 py-3" placeholder="Name" />
        <input className="border rounded-xl px-4 py-3" placeholder="Email" type="email" />
        <input className="border rounded-xl px-4 py-3" placeholder="Company / Organization" />
        <textarea className="border rounded-xl px-4 py-3 min-h-[120px]" placeholder="What do you want to launch?" />
        <button className="btn btn-primary w-full" type="button">Send inquiry</button>
        <p className="caption">Hook this button to your scheduler (Cal.com) or form tool.</p>
      </form>
    </section>
  )
}

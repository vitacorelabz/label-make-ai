import Link from 'next/link';

const features = [
  'AI supplement label copy',
  'Risky claim checker',
  'Logo prompt generator',
  'Bottle label design prompt',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Label Make AI</div>
          <Link className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-slate-950" href="/create">
            Start prototype
          </Link>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Built for supplement brands, Shopify sellers, and private label products
            </p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Create supplement labels with AI.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Generate front label copy, back label copy, safer claim suggestions, logo prompts, and premium bottle label design prompts in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-300" href="/create">
                Create Label
              </Link>
              <Link className="rounded-xl bg-white/10 px-6 py-3 font-bold hover:bg-white/20" href="/claim-checker">
                Check Claims
              </Link>
              <Link className="rounded-xl bg-white/10 px-6 py-3 font-bold hover:bg-white/20" href="/logo">
                Logo Prompt
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Preview</p>
              <h2 className="mt-4 text-3xl font-black">IRON LIFE SUPS</h2>
              <div className="mt-6 rounded-2xl border border-emerald-300/40 p-5">
                <p className="text-sm text-slate-400">MAGNESIUM COMPLEX</p>
                <p className="mt-2 text-4xl font-black">60 CAPSULES</p>
                <p className="mt-4 text-slate-300">Supports muscle function and nervous system health.</p>
              </div>
              <ul className="mt-6 grid gap-3 text-sm text-slate-300">
                {features.map((feature) => (
                  <li key={feature} className="rounded-xl bg-white/5 px-4 py-3">✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

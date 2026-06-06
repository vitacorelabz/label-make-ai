export default function CreateLabelPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <a href="/" className="text-sm text-emerald-300">Back to home</a>
        <h1 className="mt-6 text-4xl font-black">Create Supplement Label</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Fill in your product details. This prototype creates safe draft label copy without using paid AI yet.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form className="rounded-3xl border border-white/10 bg-white/5 p-6">
            {['Brand name','Product name','Product type','Format','Pack size','Main ingredients','Claims or benefits','Design style'].map((label) => (
              <label key={label} className="mb-4 block">
                <span className="mb-2 block text-sm font-bold text-slate-200">{label}</span>
                <input className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-300" placeholder={label} />
              </label>
            ))}
            <button type="button" className="mt-2 w-full rounded-xl bg-emerald-400 px-6 py-3 font-black text-slate-950">Generate sample label</button>
          </form>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Sample Output</p>
            <h2 className="mt-4 text-3xl font-black">IRON LIFE SUPS</h2>
            <h3 className="mt-2 text-xl font-bold">MAGNESIUM COMPLEX</h3>
            <p className="mt-4 text-slate-300">Supports muscle function, nervous system health, and general wellbeing.</p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p><strong className="text-white">Directions:</strong> Take as directed on pack, or as advised by your healthcare professional.</p>
              <p><strong className="text-white">Warnings:</strong> Supplements should not replace a balanced diet. Consult a healthcare professional if pregnant, breastfeeding, taking medication, or managing a medical condition.</p>
              <p><strong className="text-white">Storage:</strong> Store below 25C in a cool, dry place away from direct sunlight.</p>
              <p><strong className="text-white">Design prompt:</strong> Premium black and gold vitamin bottle label, bold gym supplement typography, clean modern layout.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

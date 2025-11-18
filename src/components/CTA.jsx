function CTA() {
  return (
    <section id="apply" className="relative py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to shape your future?</h3>
        <p className="mt-4 text-slate-300">Start your application today. Our admissions team will guide you through every step.</p>
        <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Full name" className="px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500" required />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500" required />
          <button className="px-4 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:opacity-90">Request Info</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our admissions policy.</p>
      </div>
    </section>
  )
}

export default CTA

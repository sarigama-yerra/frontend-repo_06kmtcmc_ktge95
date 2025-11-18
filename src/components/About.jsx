function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white">Why Futurum?</h3>
            <p className="mt-4 text-slate-300">
              We combine rigorous academics with real-world projects, mentored by industry leaders.
              Our campus is wired for experimentation — from AI labs to fabrication studios.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li>• Project-based learning with capstone showcases</li>
              <li>• Partnerships with top tech companies</li>
              <li>• Scholarships and flexible learning paths</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/10 grid place-items-center text-cyan-300">
                Campus Insights & Metrics
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-slate-200">
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-xs opacity-70">Placement</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-xs opacity-70">Labs</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-xs opacity-70">Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

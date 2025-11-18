function Programs() {
  const programs = [
    { title: 'Computer Science', desc: 'AI, Machine Learning, Systems, and Human-Computer Interaction.', tag: 'Tech' },
    { title: 'Design & Media', desc: 'UI/UX, Motion Graphics, Interactive Media, and 3D Visualization.', tag: 'Creative' },
    { title: 'Business & Innovation', desc: 'Entrepreneurship, Analytics, Product, and Strategy.', tag: 'Business' },
    { title: 'Engineering', desc: 'Robotics, Embedded Systems, and Sustainable Engineering.', tag: 'Engineering' },
  ]

  return (
    <section id="programs" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Programs</h3>
          <p className="text-slate-300 mt-3">Cutting-edge courses designed for the next generation of innovators.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 hover:from-slate-800 hover:to-slate-700 transition-all">
              <div className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 inline-block">{p.tag}</div>
              <h4 className="mt-4 text-xl font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              <button className="mt-6 text-sm text-cyan-300 group-hover:text-cyan-200">View curriculum →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

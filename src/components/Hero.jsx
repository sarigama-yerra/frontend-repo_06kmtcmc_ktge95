import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[90vh]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/90 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Interactive 3D Campus Experience
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Step into the Future of Learning
          </h2>
          <p className="mt-4 text-lg text-slate-200/90">
            Explore programs, labs, and student life through an immersive, interactive interface. Built with modern web tech and a minimalist, futuristic aesthetic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90">Start Application</a>
            <a href="#programs" className="px-6 py-3 rounded-lg bg-slate-800/70 text-white border border-white/20 hover:bg-slate-800/90">Explore Programs</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]"></div>
    </section>
  )
}

export default Hero

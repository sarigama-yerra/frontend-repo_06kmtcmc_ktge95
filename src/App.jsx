import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <CTA />
      <footer id="contact" className="border-t border-white/10 bg-slate-950/90 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-300 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Futurum College. All rights reserved.</p>
          <div className="text-sm">
            <a href="/test" className="hover:text-white">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

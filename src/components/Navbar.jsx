import { useEffect, useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="text-white">
            <p className="text-sm opacity-70">Welcome to</p>
            <h1 className="font-semibold leading-none">Futurum College</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('programs')} className="text-slate-200 hover:text-white">Programs</button>
          <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white">About</button>
          <button onClick={() => scrollTo('contact')} className="text-slate-200 hover:text-white">Contact</button>
          <a href="#apply" onClick={(e)=>{e.preventDefault(); scrollTo('apply')}} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90">
            Apply Now
          </a>
        </div>

        <button onClick={() => setOpen(v=>!v)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <button onClick={() => scrollTo('programs')} className="block w-full text-left text-slate-200 py-2">Programs</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left text-slate-200 py-2">About</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-slate-200 py-2">Contact</button>
            <button onClick={() => scrollTo('apply')} className="block w-full text-left text-slate-900 bg-white rounded-lg py-2">Apply Now</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

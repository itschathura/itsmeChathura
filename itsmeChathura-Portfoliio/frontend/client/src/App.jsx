// ============================================================
// App.jsx — ItsChathura Portfolio  |  Chathura Dharmasiri  .
// ============================================================
import f1Cover from './assets/images/p1_pitstop.png'
import math from './assets/images/p2_math.png'
import xtreme from './assets/images/p3_xtreme.png'
import { useEffect, useRef, useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'

/* ─── SVG ICONS ──────────────────────────────────────────────── */
const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const LinkedinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const MailIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
  </svg>
)
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

/* ─── DATA ───────────────────────────────────────────────────── */
const NAV = ['home', 'skills', 'projects', 'contact']

const TIMELINE = [
  { year: '2023', title: 'BSc CS (Hons) — Started', sub: 'University of Vavuniya' },
  { year: '2025', title: 'AI Math Solver',           sub: 'DeepScaler-powered problem solver' },
  { year: '2025', title: 'Xtreeme E-Commerce',       sub: 'Full-stack MERN computer store' },
  { year: '2026', title: 'F1 Pit-Stop Predictor',    sub: 'Scikit-learn ML racing strategy tool' },
]

const PROJECTS = [
  {
    id: 1, cat: 'ai',
    img: f1Cover,
    title: 'F1 Pit-Stop Predictor',
    year: '2026',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'AI/ML'],
    desc: 'ML model that predicts optimal F1 pit-stop windows using real telemetry, tyre-degradation curves, and historical race data.',
    github: 'https://github.com/itschathura/Pit-Stop-predictor',
  },
  {
    id: 2, cat: 'ai',
    img: math,
    title: 'AI Math Solver — DeepScaler',
    year: '2025',
    tags: ['Python', 'DeepScaler', 'LLM', 'FastAPI'],
    desc: 'AI-powered maths solver using DeepScaler reasoning to solve algebraic, calculus, and proof-based problems step-by-step.',
    github: 'https://github.com/itschathura/AI-powered-Math-Solver-using-DeepScaler',
  },
  {
    id: 3, cat: 'web',
    img: xtreme,
    title: 'Xtreeme E-Commerce',
    year: '2025',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    desc: 'Full-stack computer hardware e-commerce platform with product catalogue, cart, authentication, and order management.',
    github: 'https://github.com/itschathura/Xtreeme-E-commerce-site',
  },
  {
    id: 4, cat: 'motor',
    img: 'https://dummyimage.com/1980x1080/0c0c1e/6c63ff&text=Motorsport+Simulation',
    title: 'Motorsport Simulation',
    year: 'Coming Soon',
    tags: ['C++', 'CUDA', 'Physics', 'OpenGL'],
    desc: 'Real-time motorsport physics engine with CUDA-accelerated aerodynamic models, tyre mechanics, and live telemetry dashboard.',
    github: null,
    future: true,
  },
]

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',      logo: `${CDN}/react/react-original.svg` },
      { name: 'JavaScript', logo: `${CDN}/javascript/javascript-original.svg` },
      { name: 'TypeScript', logo: `${CDN}/typescript/typescript-original.svg` },
      { name: 'HTML5',      logo: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3',       logo: `${CDN}/css3/css3-original.svg` },
      { name: 'Tailwind',   logo: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Flutter',    logo: `${CDN}/flutter/flutter-original.svg` },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', logo: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express', logo: `${CDN}/express/express-original.svg` },
      { name: 'Python',  logo: `${CDN}/python/python-original.svg` },
      { name: 'FastAPI', logo: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'C++',     logo: `${CDN}/cplusplus/cplusplus-original.svg` },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB',  logo: `${CDN}/mongodb/mongodb-original.svg` },
      { name: 'MySQL',    logo: `${CDN}/mysql/mysql-original.svg` },
      { name: 'Firebase', logo: `${CDN}/firebase/firebase-plain.svg` },
    ],
  },
  {
    label: 'Libraries & Tools',
    items: [
      { name: 'Scikit-learn', logo: `${CDN}/scikitlearn/scikitlearn-original.svg` },
      { name: 'Pandas',       logo: `${CDN}/pandas/pandas-original.svg` },
      { name: 'NumPy',        logo: `${CDN}/numpy/numpy-original.svg` },
      { name: 'TensorFlow',   logo: `${CDN}/tensorflow/tensorflow-original.svg` },
      { name: 'Git',          logo: `${CDN}/git/git-original.svg` },
      { name: 'Docker',       logo: `${CDN}/docker/docker-original.svg` },
      { name: 'Linux',        logo: `${CDN}/linux/linux-original.svg` },
      { name: 'Figma',        logo: `${CDN}/figma/figma-original.svg` },
    ],
  },
]

const TW_PHRASES = [
  'AI / ML pipelines',
  'full-stack web apps',
  'high-performance systems',
  'motorsport tools',
]

/* ─── HOOKS ──────────────────────────────────────────────────── */
function useTypewriter(phrases) {
  const [text, setText] = useState('')
  const st = useRef({ i: 0, ch: 0, del: false })
  useEffect(() => {
    let t
    const tick = () => {
      const { i, ch, del } = st.current
      const cur = phrases[i]
      if (!del) {
        const n = ch + 1
        setText(cur.slice(0, n))
        if (n === cur.length) { st.current = { i, ch: n, del: true }; t = setTimeout(tick, 1800) }
        else { st.current = { i, ch: n, del: false }; t = setTimeout(tick, 65) }
      } else {
        const n = ch - 1
        setText(cur.slice(0, n))
        if (n === 0) { st.current = { i: (i + 1) % phrases.length, ch: 0, del: false }; t = setTimeout(tick, 180) }
        else { st.current = { i, ch: n, del: true }; t = setTimeout(tick, 38) }
      }
    }
    t = setTimeout(tick, 1400)
    return () => clearTimeout(t)
  }, [])
  return text
}

function useReveal() {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); obs.disconnect() }
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, on]
}

/* ─── PARTICLES ──────────────────────────────────────────────── */
function Canvas() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let W, H, pts = [], raf
    const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight }
    addEventListener('resize', resize); resize()
    const COLS = ['rgba(0,255,170,', 'rgba(34,211,238,', 'rgba(108,99,255,']
    class P {
      r() { this.x=Math.random()*W; this.y=Math.random()*H; this.vx=(Math.random()-.5)*.22; this.vy=(Math.random()-.5)*.22; this.rad=Math.random()*1.1+.3; this.a=Math.random()*.38+.07; this.c=COLS[Math.floor(Math.random()*COLS.length)] }
      constructor() { this.r() }
      u() { this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>W||this.y<0||this.y>H) this.r() }
      d() { ctx.beginPath(); ctx.arc(this.x,this.y,this.rad,0,Math.PI*2); ctx.fillStyle=this.c+this.a+')'; ctx.fill() }
    }
    for(let i=0;i<88;i++) pts.push(new P())
    const loop = () => {
      ctx.clearRect(0,0,W,H)
      for(let i=0;i<pts.length;i++) {
        pts[i].u(); pts[i].d()
        for(let j=i+1;j<pts.length;j++) {
          const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy)
          if(d<88) { ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(0,255,170,${.028*(1-d/88)})`; ctx.lineWidth=.5; ctx.stroke() }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="bg-canvas" />
}

/* ─── REVEAL WRAPPER ─────────────────────────────────────────── */
function Rv({ children, dir = 'up', delay = 0 }) {
  const [ref, on] = useReveal()
  const cls = dir === 'l' ? 'rv-l' : dir === 'r' ? 'rv-r' : 'rv'
  return (
    <div ref={ref} className={`${cls}${on ? ' on' : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}>
      {children}
    </div>
  )
}

/* ─── APP ────────────────────────────────────────────────────── */
export default function App() {
  const [loaded,    setLoaded]   = useState(false)
  const [scrolled,  setScrolled] = useState(false)
  const [menuOpen,  setMenu]     = useState(false)
  const [backTop,   setBackTop]  = useState(false)
  const [prog,      setProg]     = useState(0)
  const [cx, setCx] = useState(0); const [cy, setCy] = useState(0)
  const [rx, setRx] = useState(0); const [ry, setRy] = useState(0)
  const [bigCur,    setBigCur]   = useState(false)
  const [activeNav, setActiveNav]= useState('home')
  const [filter,    setFilter]   = useState('all')
  const [sent,      setSent]     = useState(false)
  const ringRef = useRef({ x:0, y:0, mx:0, my:0 })
  const rafRef  = useRef(null)
  const tw = useTypewriter(TW_PHRASES)

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 2100); return () => clearTimeout(t) }, [])

  useEffect(() => {
    const mv = e => { ringRef.current.mx=e.clientX; ringRef.current.my=e.clientY; setCx(e.clientX); setCy(e.clientY) }
    const ov = e => setBigCur(!!e.target.closest('a,button'))
    document.addEventListener('mousemove', mv)
    document.addEventListener('mouseover', ov)
    const anim = () => {
      const r = ringRef.current
      r.x += (r.mx-r.x)*.12; r.y += (r.my-r.y)*.12
      setRx(r.x); setRy(r.y)
      rafRef.current = requestAnimationFrame(anim)
    }
    rafRef.current = requestAnimationFrame(anim)
    return () => { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseover', ov); cancelAnimationFrame(rafRef.current) }
  }, [])

  useEffect(() => {
    const fn = () => {
      setProg(scrollY / (document.body.scrollHeight - innerHeight) * 100)
      setScrolled(scrollY > 40); setBackTop(scrollY > 400)
      const secs = NAV.map(id => document.getElementById(id)).filter(Boolean)
      for (let i = secs.length-1; i >= 0; i--) { if (scrollY+80 >= secs[i].offsetTop) { setActiveNav(NAV[i]); break } }
    }
    addEventListener('scroll', fn)
    return () => removeEventListener('scroll', fn)
  }, [])

  const goto = useCallback(id => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setMenu(false) }, [])

  const filtered = PROJECTS.filter(p => filter === 'all' || p.cat === filter)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      from_name:  form.from_name.value,
      from_email: form.from_email.value,
      subject:    form.subject.value || 'Portfolio Contact',
      message:    form.message.value,
      reply_to:   form.from_email.value,
    }
    try {
      const res = await emailjs.send(
        'service_62hc33e',
        'template_vhhqj89',
        data,
        'BzpTD2dEEX0F3onqg'
      )
      if (res.status === 200) {
        setSent(true)
        form.reset()
        setTimeout(() => setSent(false), 4000)
      } else {
        throw new Error(`Status ${res.status}`)
      }
    } catch (err) {
      console.error('EmailJS error:', err)
      alert(`Failed to send: ${err?.text || err?.message || JSON.stringify(err)}`)
    }
  }

  return (
    <>
      <Canvas />

      {/* Loader */}
      <div className={`loader${loaded ? ' out' : ''}`}>
        <div className="loader-name">ItsChathura</div>
        <div className="loader-track"><div className="loader-fill" style={{ width: 0 }} /></div>
        <div className="loader-sub">Loading portfolio...</div>
      </div>

      {/* Cursor */}
      <div className="cur-dot"  style={{ left: cx, top: cy }} />
      <div className={`cur-ring${bigCur ? ' big' : ''}`} style={{ left: rx, top: ry }} />

      {/* Progress bar */}
      <div className="prog-bar" style={{ width: `${prog}%` }} />

      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <button className="nav-logo" onClick={() => goto('home')}>
          ITS<span>CHATHURA</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(id => (
            <button key={id} className={`nav-link${activeNav === id ? ' active' : ''}`} onClick={() => goto(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          onClick={() => setMenu(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[var(--neon)] transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[var(--neon)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[var(--neon)] transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        {NAV.map(id => (
          <button key={id} className="mob-link" onClick={() => goto(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section
        id="home"
        className="section relative min-h-screen flex flex-col items-center justify-center text-center pt-[90px] pb-[80px]"
      >
        <div className="grid-bg" />

        {/* Role chips */}
        <div className="hero-roles">
          <span className="role-chip">CS Undergraduate</span>
          <span className="role-dot">·</span>
          <span className="role-chip">Gamer</span>
          <span className="role-dot">·</span>
          <span className="role-chip">Editor</span>
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span style={{ color: 'var(--text)' }}>Chathura </span>
          <span className="grad">Dharmasiri</span>
        </h1>

        {/* Typewriter */}
        <p className="hero-tw-line">
          I build&nbsp;<span className="tw">{tw}</span><span className="tw-cur" />
        </p>

        {/* ── FIX 1 & 2: wider width, split into 2 paragraphs ── */}
        <div className="w-full max-w-3xl mx-auto mb-10 px-4 text-center" style={{ opacity: 0, animation: 'su .7s .78s forwards' }}>
          <p className="text-[var(--muted)] text-[clamp(.92rem,1.4vw,1.02rem)] leading-[1.8] mb-4">
            I'm Chathura Dharmasiri, a Computer Science (Hons) undergraduate at the University of Vavuniya, Sri Lanka.
            I focus on AI/ML engineering, full-stack web development, and performance-oriented systems.
          </p>
          <p className="text-[var(--muted)] text-[clamp(.92rem,1.4vw,1.02rem)] leading-[1.8]">
            I enjoy building practical solutions to real-world problems — from predictive models to scalable web applications.
            I'm particularly interested in data-driven systems, optimization, and modern web technologies.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-3 justify-center mb-12">
          <button className="btn-solid" onClick={() => goto('projects')}>
            <CodeIcon /> View Projects
          </button>
          <button className="btn-ghost" onClick={() => goto('contact')}>
            Get In Touch
          </button>
        </div>

        {/* ── FIX 3: no scrollbar on desktop, scroll only on mobile ── */}
        <div className="hero-timeline w-full max-w-4xl mx-auto px-4">
          <div className="htl-track justify-center">
            {TIMELINE.map((item, i) => (
              <div key={i} className="htl-item">
                <div className="htl-dot" />
                <div className="htl-year">{item.year}</div>
                <div className="htl-title">{item.title}</div>
                <div className="htl-sub">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rotating badge */}
        <div className="badge-wrap hidden lg:block">
          <svg width="118" height="118" viewBox="0 0 118 118">
            <defs>
              <path id="cp" d="M 59,59 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
            </defs>
            <text fill="rgba(0,255,170,.5)" fontFamily="DM Sans" fontSize="8.5" letterSpacing="2.8">
              <textPath href="#cp">CS STUDENT · DEV · GAMER · EDITOR · </textPath>
            </text>
          </svg>
          <div className="badge-center">
            <span>{'{ }'}</span>
            <small>CODE</small>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="s-mouse"><div className="s-wheel" /></div>
          <span>SCROLL</span>
        </div>
      </section>

      {/* ══════════════════════════════════
          SKILLS
      ══════════════════════════════════ */}
      <section id="skills" className="section">
        <Rv><div className="sec-label">Skills</div></Rv>
        <Rv><h2 className="sec-title">Tech <span className="acc">Arsenal</span></h2></Rv>
        <Rv><div className="sec-rule" /></Rv>

        <div className="flex flex-col gap-10">
          {SKILL_GROUPS.map((g, gi) => (
            <Rv key={g.label} delay={gi * 80}>
              <div className="sg-title">{g.label}</div>
              <div className="flex flex-wrap gap-3">
                {g.items.map(sk => (
                  <div key={sk.name} className="sk-pill">
                    <img src={sk.logo} alt={sk.name} onError={e => { e.target.style.display='none' }} />
                    {sk.name}
                  </div>
                ))}
              </div>
            </Rv>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          PROJECTS
      ══════════════════════════════════ */}
      <section id="projects" className="section">
        <Rv><div className="sec-label">Projects</div></Rv>
        <Rv><h2 className="sec-title">Featured <span className="acc">Work</span></h2></Rv>
        <Rv><div className="sec-rule" /></Rv>

        <Rv>
          <div className="flex flex-wrap gap-3 mb-8">
            {[['all','All'], ['ai','AI / ML'], ['web','Web'], ['motor','Motorsport']].map(([v,l]) => (
              <button key={v} className={`f-btn${filter === v ? ' on' : ''}`} onClick={() => setFilter(v)}>{l}</button>
            ))}
          </div>
        </Rv>

        {/* ── FIX 4: 3-col grid on large screens, smaller cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Rv key={p.id} delay={i * 70}>
              <div className="p-card">
                <img
                  src={p.img} alt={p.title} className="p-img"
                  onError={e => { e.target.src='https://dummyimage.com/1980x1080/0c0c1e/00ffaa&text=Project' }}
                />
                <div className="p-body">
                  <div className="flex flex-wrap gap-2 items-center mb-1">
                    {p.tags.map(t => <span key={t} className="p-tag">{t}</span>)}
                    {p.future && <span className="future-chip ml-auto">UPCOMING</span>}
                  </div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="p-title">{p.title}</h3>
                    <span className="font-[var(--fm)] text-[.68rem] text-[var(--muted)]">{p.year}</span>
                  </div>
                  <p className="p-desc">{p.desc}</p>
                  <div className="flex gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-link">
                        <GithubIcon size={13} /> GitHub
                      </a>
                    )}
                    {p.future && (
                      <span className="font-[var(--fm)] text-[.68rem] text-[var(--muted)]">
                        In Development
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Rv>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTACT
      ══════════════════════════════════ */}
      <section id="contact" className="section">
        <Rv><div className="sec-label">Contact</div></Rv>
        <Rv><h2 className="sec-title">Get In <span className="acc">Touch</span></h2></Rv>
        <Rv><div className="sec-rule" /></Rv>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          <Rv dir="l">
            <div className="c-box">
              <h3 className="font-[var(--fd)] text-[1.15rem] font-[700] text-[var(--text)] mb-3">
                Let's work together
              </h3>
              <p className="text-[var(--sub)] text-[.98rem] leading-[1.75] mb-8">
                Open to internships, collaborations, and interesting conversations about tech, AI, and motorsport.
              </p>

              <div className="flex flex-col divide-y divide-[var(--border)]">
                <div className="c-row">
                  <div className="c-icon"><MailIcon /></div>
                  <div>
                    <div className="c-lbl">Email</div>
                    <div className="c-val">itsmechathura@outlook.com</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="https://github.com/itschathura" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/dharmasiri17/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="mailto:itsmechathura@outlook.com" className="social-btn" title="Email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </Rv>

          <Rv dir="r">
            <div className="form-box">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="f-label">Name</label>
                    <input name="from_name" type="text" className="f-input" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="f-label">Email</label>
                    <input name="from_email" type="email" className="f-input" placeholder="you@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="f-label">Subject</label>
                  <input name="subject" type="text" className="f-input" placeholder="What's this about?" />
                </div>
                <div>
                  <label className="f-label">Message</label>
                  <textarea name="message" className="f-input" placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="btn-solid self-start">
                  {sent ? '✓ Message Sent!' : <><SendIcon /> Send Message</>}
                </button>
                {sent && (
                  <p className="text-[var(--neon)] text-[.82rem] font-[var(--fm)] mt-1">
                    ✓ Message delivered successfully!
                  </p>
                )}
              </form>
            </div>
          </Rv>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="f-brand">ItsChathura</div>
        <div className="f-text">© 2026 Chathura Dharmasiri — @ph3on1x</div>
      </footer>

      {/* Back to top */}
      <button
        className={`back-btn${backTop ? ' show' : ''}`}
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpIcon />
      </button>
    </>
  )
}

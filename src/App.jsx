import { useState } from 'react'
import PatternWaves from './PatternWaves.jsx'
import './App.css'

const pathway = [
  {
    level: '01',
    label: 'Start here',
    title: 'IT Support Technician',
    experience: '0–2 years',
    description:
      'Build a strong foundation by helping people solve everyday hardware, software, and access issues.',
    responsibilities: [
      'Troubleshoot devices, applications, and connectivity',
      'Set up accounts, workstations, and peripherals',
      'Document fixes and escalate complex incidents',
    ],
    skills: ['Customer support', 'Windows & macOS', 'Ticketing systems'],
    icon: 'support',
  },
  {
    level: '02',
    label: 'Grow your scope',
    title: 'System Administrator',
    experience: '2–5 years',
    description:
      'Keep an organization’s systems dependable, secure, and ready for the people who rely on them.',
    responsibilities: [
      'Administer servers, user accounts, and permissions',
      'Monitor backups, updates, and system performance',
      'Automate routine tasks and strengthen security',
    ],
    skills: ['Linux & Windows Server', 'Networking', 'PowerShell or Bash'],
    icon: 'server',
  },
  {
    level: '03',
    label: 'Lead what’s next',
    title: 'Systems Engineer',
    experience: '5+ years',
    description:
      'Design and improve resilient infrastructure across cloud, networks, and enterprise platforms.',
    responsibilities: [
      'Plan scalable infrastructure and migrations',
      'Lead automation, reliability, and security initiatives',
      'Mentor teams and guide technical decisions',
    ],
    skills: ['Cloud platforms', 'Infrastructure as code', 'Architecture'],
    icon: 'cloud',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Operating systems',
    text: 'Manage Windows and Linux environments, users, services, updates, and permissions.',
  },
  {
    number: '02',
    title: 'Networking',
    text: 'Understand IP addressing, DNS, DHCP, routing, and how devices communicate.',
  },
  {
    number: '03',
    title: 'Troubleshooting',
    text: 'Diagnose issues methodically, communicate clearly, and prevent repeat incidents.',
  },
  {
    number: '04',
    title: 'Security fundamentals',
    text: 'Apply least privilege, patching, backups, and safe account-management practices.',
  },
  {
    number: '05',
    title: 'Scripting & automation',
    text: 'Use PowerShell, Bash, or Python to reduce repetitive work and human error.',
  },
  {
    number: '06',
    title: 'Cloud & virtualization',
    text: 'Explore virtual machines and cloud services to support flexible, modern infrastructure.',
  },
]

const roles = [
  {
    title: 'Help Desk Technician',
    focus: 'People & endpoints',
    detail:
      'Resolves first-line requests, supports user devices, and records clear ticket histories.',
    tag: 'The essential first step',
  },
  {
    title: 'System Administrator',
    focus: 'Systems & services',
    detail:
      'Maintains servers, identity, permissions, backups, and the day-to-day health of IT systems.',
    tag: 'The operational backbone',
  },
  {
    title: 'Systems Engineer',
    focus: 'Design & scale',
    detail:
      'Builds and evolves infrastructure, automates delivery, and plans for resilience at scale.',
    tag: 'The infrastructure architect',
  },
]

const tools = [
  { name: 'Linux', category: 'Operating systems', description: 'Practice managing users, services, and permissions.' },
  { name: 'Windows Server', category: 'Identity & services', description: 'Explore directory services and server administration.' },
  { name: 'PowerShell', category: 'Automation', description: 'Automate repeatable Windows administration tasks.' },
  { name: 'Microsoft Azure', category: 'Cloud', description: 'Learn cloud identity, compute, and core infrastructure.' },
  { name: 'Git', category: 'Version control', description: 'Track scripts and infrastructure changes over time.' },
  { name: 'VirtualBox', category: 'Virtualization', description: 'Build a safe local lab to test systems and networks.' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  )
}

function RoleIcon({ name }) {
  const paths = {
    support: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4m-4-9 2 2 4-4" /></>,
    server: <><rect x="4" y="3" width="16" height="8" rx="2" /><rect x="4" y="13" width="16" height="8" rx="2" /><path d="M8 7h.01M8 17h.01m4-10h4m-4 10h4" /></>,
    cloud: <><path d="M7 18h11a4 4 0 0 0 .2-8A6 6 0 0 0 6.7 8.5 4.8 4.8 0 0 0 7 18Z" /><path d="m9 14 3-3 3 3m-3-3v7" /></>,
  }

  return (
    <svg className="role-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: 600, y: 325 })

  const trackCursor = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setCursor({
      x: ((event.clientX - bounds.left) / bounds.width) * 1200,
      y: ((event.clientY - bounds.top) / bounds.height) * 650,
    })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Career Pathways home">
          <span className="brand-mark"><span /></span>
          <span>career<span className="brand-light">pathways</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#pathway" onClick={closeMenu}>Career pathway</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#roles" onClick={closeMenu}>Job roles</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a className="nav-about" href="#about" onClick={closeMenu}>About me <ArrowIcon /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" onPointerMove={trackCursor}>
          <div className="hero-waves" aria-hidden="true">
            <PatternWaves
              preset="silk"
              color="#ffffff"
              backgroundColor="#000000"
              fade="edges"
              interactive
              cursorSize={50}
              cursorStrength={0.6}
              cursor={cursor}
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow eyebrow-light"><span className="status-dot" /> A FIELD GUIDE TO IT CAREERS</div>
            <h1>Build the systems.<br /><span>Shape what’s next.</span></h1>
            <p className="hero-intro">
              A practical guide to growing from IT support into a career in system administration—and beyond.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#pathway">Explore the pathway <ArrowIcon /></a>
              <a className="text-link" href="#skills">Discover the skills <span>↓</span></a>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>People-first. Systems-minded.</span>
          </div>
          <div className="hero-index"><span>01</span><i /> 06</div>
          <a className="scroll-cue" href="#intro"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-shell" id="intro">
          <div className="intro-label"><span className="section-index">01 / THE FIELD</span></div>
          <div className="intro-copy">
            <p className="eyebrow">A CAREER THAT KEEPS THINGS MOVING</p>
            <h2>Behind every seamless digital experience is a system someone <em>thoughtfully maintains.</em></h2>
            <div className="intro-bottom">
              <p>System administration brings technology and people together. It’s a hands-on career built on curiosity, steady problem-solving, and the satisfaction of making complex systems work simply.</p>
              <a className="inline-link" href="#pathway">See where it can take you <ArrowIcon /></a>
            </div>
          </div>
          <div className="intro-aside">
            <span className="aside-number">IT</span>
            <span>Reliable systems<br />make room for<br /><b>better work.</b></span>
          </div>
        </section>

        <section className="pathway-section section-dark" id="pathway">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <span className="section-index section-index-light">02 / YOUR NEXT CHAPTER</span>
                <p className="eyebrow eyebrow-accent">THE CAREER PATHWAY</p>
                <h2>One strong foundation.<br /><em>Many directions.</em></h2>
              </div>
              <p className="heading-aside">Career growth isn’t always a straight line. These milestones are a useful map—not a rulebook.</p>
            </div>
            <div className="pathway-grid">
              {pathway.map((step) => (
                <article className="path-card" key={step.level}>
                  <div className="path-card-top">
                    <span className="path-number">{step.level}</span>
                    <span className="path-experience">{step.experience}</span>
                  </div>
                  <div className="path-icon-wrap"><RoleIcon name={step.icon} /></div>
                  <p className="path-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p className="path-description">{step.description}</p>
                  <div className="path-details">
                    <h4>WHAT YOU’LL DO</h4>
                    <ul>
                      {step.responsibilities.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="path-tags">
                    {step.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <div className="pathway-footnote"><span className="footnote-icon">↗</span><span>There’s no single route. Specialize in cloud, security, networking, or leadership as your interests evolve.</span></div>
          </div>
        </section>

        <section className="skills-section section-shell" id="skills">
          <div className="skills-intro">
            <span className="section-index">03 / WHAT YOU’LL LEARN</span>
            <p className="eyebrow">SKILLS & QUALIFICATIONS</p>
            <h2>Learn the fundamentals.<br /><em>Keep your curiosity.</em></h2>
            <p className="skills-lede">You don’t need to know everything on day one. Build these capabilities step by step, and let real-world practice do the rest.</p>
            <div className="skills-aside"><span className="skills-aside-mark">+</span><span>Progress over<br />perfection.</span></div>
          </div>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability-row" key={item.number}>
                <span className="capability-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="capability-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="roles-section section-dark" id="roles">
          <div className="section-shell">
            <div className="section-heading roles-heading">
              <div>
                <span className="section-index section-index-light">04 / THE PEOPLE BEHIND THE SYSTEMS</span>
                <p className="eyebrow eyebrow-accent">JOB ROLES & RESPONSIBILITIES</p>
                <h2>Different focus.<br /><em>One connected team.</em></h2>
              </div>
              <p className="heading-aside">Each role solves a different part of the puzzle. Together, they keep technology useful, secure, and ready for what’s next.</p>
            </div>
            <div className="role-table">
              <div className="role-table-head"><span>ROLE</span><span>PRIMARY FOCUS</span><span>HOW THEY CONTRIBUTE</span><span /></div>
              {roles.map((role, index) => (
                <article className="role-row" key={role.title}>
                  <span className="role-num">0{index + 1}</span>
                  <div className="role-title-wrap"><h3>{role.title}</h3><span className="role-tag">{role.tag}</span></div>
                  <span className="role-focus">{role.focus}</span>
                  <p>{role.detail}</p>
                  <span className="role-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <p className="role-note"><span>↗</span> Titles and responsibilities vary between organizations. Keep learning, and look for opportunities to take on the next challenge.</p>
          </div>
        </section>

        <section className="toolkit-section section-shell" id="toolkit">
          <div className="toolkit-heading">
            <div>
              <span className="section-index">05 / YOUR PRACTICE KIT</span>
              <p className="eyebrow">REQUIRED SKILLS & TOOLS</p>
              <h2>Get hands-on.<br /><em>Make it yours.</em></h2>
            </div>
            <p>A small home lab and a willingness to experiment can turn concepts into confidence. Start with the tools below and build at your own pace.</p>
          </div>
          <div className="tool-grid">
            {tools.map((tool, index) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-card-top"><span>0{index + 1}</span><span className="tool-category">{tool.category}</span></div>
                <div className="tool-symbol" aria-hidden="true">{['⌘', '▤', '›_', '☁', '⑂', '▦'][index]}</div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span className="tool-rule" />
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-art" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="orbit-center"><span>GG</span><i /></div>
            <span className="orbit-caption caption-top">STAY CURIOUS</span>
            <span className="orbit-caption caption-bottom">KEEP BUILDING</span>
          </div>
          <div className="about-content">
            <span className="section-index section-index-light">06 / A LITTLE ABOUT ME</span>
            <p className="eyebrow eyebrow-accent">ABOUT THE DEVELOPER</p>
            <h2>Hi, I’m <em>Geronimo Gonzaga.</em></h2>
            <p className="about-lede">An Information Technology student with a curiosity for the systems that make our digital world work.</p>
            <div className="about-divider" />
            <div className="about-facts">
              <div><span>MY DIRECTION</span><p>System Administration & Infrastructure</p></div>
              <div><span>MY GOAL</span><p>Build a strong technical foundation, keep learning, and help teams do their best work with technology.</p></div>
            </div>
            <a className="button button-outline" href="#home">Back to the beginning <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><span /></span><span>career<span className="brand-light">pathways</span></span></a>
        <span className="footer-note">A field guide to a future in system administration.</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="footer-credit">DESIGNED WITH PURPOSE · 2026</span>
      </footer>
    </>
  )
}

export default App

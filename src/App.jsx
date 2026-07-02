import './App.css'

const SKILLS = [
  { cat: 'Automation & Scripting', items: ['Google Apps Script', 'Gmail API', 'JavaScript', 'Python', 'SQLite', 'Bash / Terminal'] },
  { cat: 'Growth & Outreach', items: ['Cold Email Systems', 'Campaign Automation', 'Lead Management', 'A/B Testing', 'Stakeholder Reporting'] },
  { cat: 'Data & Analytics', items: ['Google Sheets', 'Campaign Analytics', 'Attribution Tracking', 'Pandas', 'scikit-learn'] },
  { cat: 'AI & ML', items: ['Claude API', 'OpenCV', 'Face Recognition', 'NLP / Spam Detection', 'cryptography'] },
]

const EXPERIENCE = [
  {
    org: 'Myluigi.ai',
    role: 'Growth & Outbound Systems Intern',
    points: [
      'Built a multi-stage cold outreach system targeting 500+ game studios and SaaS companies.',
      'Designed automated Fresh → F1 → F2 → F3 follow-ups that lifted response rates by 35%.',
      'Integrated the Gmail API to map thread-level data to campaigns for accurate performance analysis.',
      'Presented results and strategy directly to founders, turning data into actionable insight.',
    ],
  },
  {
    org: 'JustBaat.ai',
    role: 'Growth & Outbound Systems Intern',
    points: [
      'Built an automated outbound engine converting cold lists into structured campaigns across 20+ cycles.',
      'Automated execution and tracking with Google Apps Script, cutting manual effort by 60%.',
      'Refined attribution logic and debugged tracking, reducing reporting errors by 45%.',
    ],
  },
]

const PROJECTS = [
  { name: 'SmartScheduler', tagline: 'AI timetable generator that builds conflict-free schedules from your tasks and time slots.', tech: ['Python', 'JS', 'Apps Script'] },
  { name: 'VaultKey', tagline: 'Password manager that AES-encrypts every credential behind a master key — no plaintext, ever.', tech: ['Python', 'cryptography', 'SQLite'] },
  { name: 'FaceLog', tagline: 'Real-time facial-recognition attendance with timestamped logging and 95%+ accuracy.', tech: ['Python', 'OpenCV', 'face_recognition'] },
  { name: 'SpamShield', tagline: 'NLP spam detector trained on real inbox data, flagging spam in real time at 92%+ accuracy.', tech: ['Python', 'Gmail API', 'scikit-learn'] },
]

function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Growth &amp; Automation · ECE Undergraduate</p>
          <h1>Sahid Modi</h1>
          <p className="lede">
            I build automation and outbound systems that turn cold lists into
            real conversations — cold-email engines, Gmail-API data pipelines,
            and the dashboards that make them measurable.
          </p>
          <div className="cta-row">
            <a className="btn" href="https://github.com/sahidmodi45" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://linkedin.com/in/sahid-modi-7300942aa" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="meta">Bengaluru, India · B.E. ECE @ CMR Institute of Technology (2027)</p>
        </div>
      </header>

      <main>
        <section className="block">
          <h2>Skills</h2>
          <div className="skills">
            {SKILLS.map((s) => (
              <div className="skill-group" key={s.cat}>
                <h3>{s.cat}</h3>
                <div className="tags">
                  {s.items.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="block">
          <h2>Experience</h2>
          {EXPERIENCE.map((e) => (
            <div className="entry" key={e.org}>
              <div className="entry-head">
                <span className="entry-org">{e.org}</span>
                <span className="entry-role">{e.role}</span>
              </div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="block">
          <h2>Projects</h2>
          <div className="projects">
            {PROJECTS.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <div className="tags">
                  {p.tech.map((t) => <span className="tag mono" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Let's build something.</p>
        <a href="mailto:contactsahidmodi@gmail.com">contactsahidmodi@gmail.com</a>
        <p className="fine">© {new Date().getFullYear()} Sahid Modi</p>
      </footer>
    </div>
  )
}

export default App

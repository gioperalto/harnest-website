const chicks = [
  {
    id: 'fullstack',
    name: 'Fullstack',
    emoji: '🏗️',
    tagline: 'Build complete features end to end',
    description:
      'A full engineering team in your terminal. The architect plans, senior engineers implement, juniors assist, and the test engineer verifies — all running in parallel.',
    roles: [
      { name: 'Architect', icon: '🧠', model: 'opus' },
      { name: 'Sr. Engineer', icon: '💻', model: 'sonnet' },
      { name: 'Jr. Engineer', icon: '⌨️', model: 'haiku' },
      { name: 'Test Engineer', icon: '🧪', model: 'sonnet' },
    ],
    color: '#0077B6',
    lightColor: '#F0F7FF',
  },
  {
    id: 'webpage',
    name: 'Webpage',
    emoji: '🎨',
    tagline: 'Design and ship polished web pages',
    description:
      'A creative web team. The strategist interviews you, the artist generates images, the builder codes the React site, and the UX tester signs off before shipping.',
    roles: [
      { name: 'Strategist', icon: '🎯', model: 'opus' },
      { name: 'Artist', icon: '🖼️', model: 'sonnet' },
      { name: 'Builder', icon: '🔨', model: 'sonnet' },
      { name: 'UX Tester', icon: '🔬', model: 'sonnet' },
    ],
    color: '#00B4D8',
    lightColor: '#F0FBFF',
  },
]

export default function ChicksShowcase() {
  return (
    <section id="chicks" className="chicks-section">
      <div className="container">
        <div className="chicks-header">
          <p className="section-label">Available Chicks</p>
          <h2 className="section-title">Pick your team, hatch and go</h2>
          <p className="section-subtitle">
            Each chick is a fully configured agent team ready to handle a specific type of work.
            More chicks hatching soon.
          </p>
        </div>

        <div className="chicks-grid">
          {chicks.map((chick) => (
            <div key={chick.id} className="chick-card">
              {/* Card image area */}
              <div
                className="chick-card-hero"
                style={{ background: `linear-gradient(135deg, ${chick.color}22, ${chick.color}44)` }}
              >
                <img
                  src={`/chick-${chick.id}.svg`}
                  alt={`${chick.name} chick illustration`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="chick-emoji-badge">{chick.emoji}</div>
              </div>

              <div className="chick-card-body">
                <div className="chick-card-header">
                  <h3 className="chick-name">{chick.name}</h3>
                  <span className="chick-tag" style={{ background: `${chick.color}18`, color: chick.color }}>
                    chick
                  </span>
                </div>
                <p className="chick-tagline">{chick.tagline}</p>
                <p className="chick-desc">{chick.description}</p>

                <div className="chick-roles">
                  <p className="roles-label">Team composition</p>
                  <div className="roles-grid">
                    {chick.roles.map((role) => (
                      <div key={role.name} className="role-chip">
                        <span className="role-icon">{role.icon}</span>
                        <div className="role-info">
                          <span className="role-name">{role.name}</span>
                          <span className="role-model">{role.model}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="chick-footer">
                  <code className="chick-command">harnest hatch {chick.id}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="chicks-more">
          <div className="more-card">
            <span className="more-icon">🐥</span>
            <h3>More chicks coming soon</h3>
            <p>Data pipeline, API service, mobile app... the flock is growing.</p>
            <a
              href="https://github.com/gioperalto/harnest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: '16px' }}
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .chicks-section {
          padding: 100px 0;
          background: white;
        }

        .chicks-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .chicks-header .section-subtitle {
          margin: 0 auto;
        }

        .chicks-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 40px;
        }

        .chick-card {
          border-radius: var(--radius);
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: transform var(--transition), box-shadow var(--transition);
          background: white;
        }

        .chick-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0, 119, 182, 0.18);
        }

        .chick-card-hero {
          position: relative;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .chick-emoji-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 2rem;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: var(--shadow-card);
        }

        .chick-card-body {
          padding: 28px;
        }

        .chick-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .chick-name {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-dark);
        }

        .chick-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .chick-tagline {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-weight: 500;
        }

        .chick-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .chick-roles {
          margin-bottom: 24px;
        }

        .roles-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .role-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .role-icon {
          font-size: 1.1rem;
        }

        .role-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .role-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          line-height: 1;
        }

        .role-model {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: 'SF Mono', monospace;
        }

        .chick-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
        }

        .chick-command {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.88rem;
          background: var(--bg-dark);
          color: #4ade80;
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          display: block;
        }

        .chicks-more {
          text-align: center;
        }

        .more-card {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: var(--bg-light);
          border: 2px dashed var(--border-light);
          border-radius: var(--radius);
          padding: 40px 60px;
          gap: 8px;
        }

        .more-icon {
          font-size: 2.5rem;
          margin-bottom: 8px;
        }

        .more-card h3 {
          font-size: 1.2rem;
          color: var(--text-dark);
        }

        .more-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .chicks-grid {
            grid-template-columns: 1fr;
            max-width: 540px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 600px) {
          .chicks-section {
            padding: 60px 0;
          }

          .roles-grid {
            grid-template-columns: 1fr;
          }

          .more-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  )
}


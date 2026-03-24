const features = [
  {
    icon: '🧩',
    iconSrc: '/icon-compose.svg',
    title: 'Composable team configurations',
    description: 'Mix and match agent roles with a single YAML file. Each chick defines its own team, tools, and workflow rules.',
  },
  {
    icon: '🔀',
    iconSrc: '/icon-workflow.svg',
    title: 'Structured multi-agent workflows',
    description: 'Agents follow defined sequences — strategist plans, builders build, testers verify. No chaos, just flow.',
  },
  {
    icon: '⚡',
    iconSrc: '/icon-speed.svg',
    title: 'Drop-in setup',
    description: 'One command to hatch a chick into any project. Claude Code picks it up automatically on startup.',
  },
  {
    icon: '⚙️',
    iconSrc: '/icon-parallel.svg',
    title: 'Parallel agent execution',
    description: 'Artist and builder work simultaneously. Architect and engineers collaborate in parallel. Faster, smarter.',
  },
  {
    icon: '🛡️',
    iconSrc: '/icon-quality.svg',
    title: 'Built-in review loops',
    description: 'Quality gates at every stage — UX testers, code reviewers, and sign-off agents before work is complete.',
  },
  {
    icon: '🔌',
    iconSrc: '/icon-extend.svg',
    title: 'Extensible with MCP tools',
    description: 'Plug in Playwright for browser testing, Nano Banana for image generation, and any MCP server you need.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <p className="section-label">Why Harnest?</p>
          <h2 className="section-title">Everything your agents need to thrive</h2>
          <p className="section-subtitle">
            Harnest brings structure, parallelism, and quality gates to Claude Code multi-agent workflows
            — without getting in your way.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="feature-icon-wrap">
                <img src={feature.iconSrc} alt="" width="40" height="40" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 100px 0;
          background: var(--bg-light);
        }

        .features-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .features-header .section-subtitle {
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          background: white;
          border-radius: var(--radius);
          padding: 32px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
          transition: transform var(--transition), box-shadow var(--transition);
          animation: fadeInUp 0.5s ease both;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 119, 182, 0.18);
        }

        .feature-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #F0F7FF, #e0f2fe);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid var(--border-light);
        }

        .feature-emoji {
          font-size: 1.6rem;
        }

        .feature-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .feature-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .features-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  )
}

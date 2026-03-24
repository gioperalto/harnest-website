export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-inner">
          <div className="about-text">
            <p className="section-label">What is Harnest?</p>
            <h2 className="section-title">A nest for your Claude Code agents</h2>

            <p className="about-para">
              Harnest is a drop-in agent team configuration layer for Claude Code. It gives your
              AI agents structure — a <strong>nest</strong> to work from, defined roles to fill,
              and clear workflows to follow.
            </p>

            <p className="about-para">
              The metaphor runs deep: a <strong>chick</strong> is a specific team configuration
              (like a fullstack dev team or a web design crew). You <strong>hatch</strong> a chick
              into your project with a single command, and Claude Code spins up the whole team
              automatically at startup.
            </p>

            <p className="about-para">
              Each agent knows its role — strategist, architect, engineer, tester — and they
              collaborate in parallel with built-in review loops. No more solo coding with a single
              AI instance; Harnest brings the whole flock.
            </p>

            <div className="about-pillars">
              <div className="pillar">
                <span className="pillar-icon">🪺</span>
                <div>
                  <strong>Nest</strong>
                  <p>The team configuration — roles, models, and workflow rules in one YAML</p>
                </div>
              </div>
              <div className="pillar">
                <span className="pillar-icon">🐣</span>
                <div>
                  <strong>Chick</strong>
                  <p>A specific team preset for a workflow (fullstack, webpage, and more)</p>
                </div>
              </div>
              <div className="pillar">
                <span className="pillar-icon">🥚</span>
                <div>
                  <strong>Hatch</strong>
                  <p>One command to scaffold the config into your project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            {/* TODO: replace with <img src="/about-nest-illustration.png" alt="Nest illustration" /> when artist is done */}
            <div className="about-illustration-placeholder">
              <img src="/about-illustration.svg" alt="Stylized geometric nest with eggs and glowing agent nodes on branches" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background: white;
        }

        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-para {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.75;
        }

        .about-para strong {
          color: var(--primary);
          font-weight: 600;
        }

        .about-pillars {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .pillar {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }

        .pillar-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .pillar strong {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .pillar p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .about-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-illustration-placeholder {
          width: 100%;
          max-width: 440px;
          aspect-ratio: 4/3;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #F0F7FF 0%, #e0f2fe 100%);
          border: 2px solid var(--border-light);
          box-shadow: var(--shadow-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-visual {
            order: -1;
          }

          .about-illustration-placeholder {
            max-width: 380px;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  )
}


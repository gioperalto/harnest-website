import { useState } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const installCmd = 'brew tap gioperalto/harnest && brew install harnest'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="footer-section">
      {/* CTA banner */}
      <div className="footer-cta-banner">
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h2 className="footer-cta-title">Ready to hatch your team?</h2>
              <p className="footer-cta-sub">One command. A whole flock of agents ready to work.</p>
            </div>
            <div className="footer-cta-actions">
              <button className="btn btn-primary" onClick={handleCopy}>
                {copied ? '✓ Copied!' : '⚡ Install Harnest'}
              </button>
              <a
                href="https://github.com/gioperalto/harnest"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
          <div className="footer-install-row">
            <code className="footer-install-code">
              <span className="fi-prompt">$</span>
              <span>{installCmd}</span>
              <button className="fi-copy" onClick={handleCopy}>
                {copied ? '✓' : '⎘'}
              </button>
            </code>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-brand">
              <span className="footer-logo-icon">🪺</span>
              <span className="footer-logo-text">harnest</span>
            </div>

            <p className="footer-tagline">
              Every flock needs a nest. Every nest needs its chicks.
            </p>

            <div className="footer-links">
              <a
                href="https://github.com/gioperalto/harnest"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="footer-divider">·</span>
              <span className="footer-license">MIT License</span>
              <span className="footer-divider">·</span>
              <span className="footer-built">Built with Claude Code</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #011d42;
        }

        /* CTA Banner */
        .footer-cta-banner {
          padding: 72px 0 48px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .footer-cta-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: white;
          margin-bottom: 8px;
        }

        .footer-cta-sub {
          color: rgba(255,255,255,0.65);
          font-size: 1rem;
        }

        .footer-cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        .footer-install-row {
          display: flex;
          justify-content: center;
        }

        .footer-install-code {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-sm);
          padding: 12px 20px;
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.8);
          max-width: 100%;
          overflow-x: auto;
        }

        .fi-prompt {
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
        }

        .fi-copy {
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.82rem;
          flex-shrink: 0;
          transition: all var(--transition);
        }

        .fi-copy:hover {
          background: rgba(255,255,255,0.12);
          color: white;
        }

        /* Footer bottom */
        .footer-bottom {
          padding: 28px 0;
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-logo-icon {
          font-size: 1.3rem;
        }

        .footer-logo-text {
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          font-style: italic;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
        }

        .footer-links a {
          color: rgba(255,255,255,0.6);
          transition: color var(--transition);
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-divider {
          color: rgba(255,255,255,0.2);
        }

        .footer-license,
        .footer-built {
          color: rgba(255,255,255,0.4);
        }

        @media (max-width: 700px) {
          .footer-cta-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .footer-tagline {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

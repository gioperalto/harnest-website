import { useState } from 'react'

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const installCmd = 'brew tap gioperalto/harnest && brew install harnest'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="hero-section">
      {/* Hero background image */}
      <div className="hero-bg" style={{ backgroundImage: "url('/hero-background.svg')", opacity: 0.35 }} />

      {/* Floating geometric shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-6" />
      </div>

      <nav className="hero-nav">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo">
              <span className="logo-icon">🪺</span>
              <span className="logo-text">harnest</span>
            </div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#chicks">Chicks</a>
              <a href="#how-it-works">How it works</a>
              <a
                href="https://github.com/gioperalto/harnest"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open Source · MIT License
        </div>

        <h1 className="hero-title">
          Every flock needs a nest.<br />
          <span className="hero-title-highlight">Every nest needs its chicks.</span>
        </h1>

        <p className="hero-subtitle">
          Harnest is a composable agent team harness for Claude Code.
          Drop in a chick, hatch your team, and watch your agents collaborate.
        </p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={handleCopy}>
            <span>{copied ? '✓ Copied!' : '⚡ Install Harnest'}</span>
          </button>
          <a
            href="https://github.com/gioperalto/harnest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>

        <div className="hero-install-preview">
          <span className="install-prompt">$</span>
          <span className="install-cmd">brew tap gioperalto/harnest &amp;&amp; brew install harnest</span>
          <button className="install-copy" onClick={handleCopy} title="Copy to clipboard">
            {copied ? '✓' : '⎘'}
          </button>
        </div>

      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-dot" />
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: linear-gradient(160deg, #023E8A 0%, #0077B6 45%, #00B4D8 100%);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/hero-background.svg');
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hero-bg.loaded {
          opacity: 0.35;
        }

        /* Floating shapes */
        .hero-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
        }

        .shape-1 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, #F4A261, transparent);
          top: -80px; right: 10%;
          animation: floatSlow 8s ease-in-out infinite;
        }
        .shape-2 {
          width: 180px; height: 180px;
          background: radial-gradient(circle, #00B4D8, transparent);
          top: 20%; left: 5%;
          animation: floatSlow 10s ease-in-out infinite reverse;
          border-radius: 40% 60% 60% 40%;
          opacity: 0.18;
        }
        .shape-3 {
          width: 120px; height: 120px;
          background: #F4A261;
          bottom: 30%; right: 8%;
          animation: float 6s ease-in-out infinite;
          border-radius: 30% 70% 50% 50%;
          opacity: 0.15;
        }
        .shape-4 {
          width: 60px; height: 60px;
          background: #FFFFFF;
          top: 35%; right: 25%;
          animation: float 7s ease-in-out infinite 2s;
          opacity: 0.1;
        }
        .shape-5 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #0077B6, transparent);
          bottom: -40px; left: 20%;
          animation: floatSlow 12s ease-in-out infinite;
          opacity: 0.2;
        }
        .shape-6 {
          width: 80px; height: 80px;
          background: #F4A261;
          top: 60%; left: 15%;
          animation: float 9s ease-in-out infinite 1s;
          border-radius: 60% 40% 30% 70%;
          opacity: 0.1;
        }

        /* Nav */
        .hero-nav {
          position: relative;
          z-index: 10;
          padding: 20px 0;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color var(--transition);
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-github {
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-github:hover {
          background: rgba(255, 255, 255, 0.25) !important;
        }

        /* Hero content */
        .hero-content {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 60px;
          padding-bottom: 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.9);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 28px;
          animation: fadeInUp 0.6s ease both;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 800;
          color: white;
          line-height: 1.15;
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease 0.1s both;
          letter-spacing: -0.02em;
          width: 100%;
          overflow-wrap: break-word;
        }

        .hero-title-highlight {
          background: linear-gradient(90deg, #F4A261, #ffd59e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.82);
          width: 100%;
          max-width: 580px;
          margin-bottom: 40px;
          animation: fadeInUp 0.6s ease 0.2s both;
          line-height: 1.7;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 28px;
          animation: fadeInUp 0.6s ease 0.3s both;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-install-preview {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-sm);
          padding: 12px 18px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 48px;
          animation: fadeInUp 0.6s ease 0.4s both;
          width: 100%;
          max-width: 580px;
          overflow: hidden;
          backdrop-filter: blur(8px);
        }

        .install-prompt {
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
        }

        .install-cmd {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
          flex: 1;
        }

        .install-copy {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.7);
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          flex-shrink: 0;
          transition: all var(--transition);
        }

        .install-copy:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          animation: fadeInUp 0.6s ease 0.5s both;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: white;
        }

        .stat-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* Scroll indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .scroll-dot {
          width: 6px;
          height: 24px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.5);
          animation: pulse 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-content {
            padding-top: 40px;
            padding-bottom: 60px;
          }
        }

        @media (max-width: 600px) {
          .nav-links {
            display: none;
          }

          .hero-stats {
            gap: 20px;
          }

          .hero-install-preview {
            font-size: 0.75rem;
            padding: 10px 14px;
          }

          .install-cmd {
            min-width: 0;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding-top: 28px;
            padding-bottom: 48px;
          }

          .stat-divider {
            display: none;
          }

          .hero-stats {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }

          .hero-install-preview {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

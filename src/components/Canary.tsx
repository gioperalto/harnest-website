export default function Canary() {
  const checkpoints = [
    { num: 1, name: 'File Presence', desc: 'harnest.yaml, CLAUDE.md, agent files', pass: true },
    { num: 2, name: 'YAML Schema', desc: 'team, agents, workflow sections', pass: true },
    { num: 3, name: 'Agent Frontmatter', desc: 'required fields, valid values', pass: true },
    { num: 4, name: 'CLAUDE.md Sections', desc: 'title, config, team, workflow', pass: true },
    { num: 5, name: 'Naming Conventions', desc: 'snake_case keys, kebab-case files', pass: true },
    { num: 6, name: 'Cross-References', desc: 'agent files exist, MCP configs match', pass: true },
  ]

  return (
    <section id="canary" className="canary-section">
      <div className="container">
        <div className="canary-layout">
          <div className="canary-text">
            <p className="section-label" style={{ color: '#2A9D8F' }}>
              Quality Assurance
            </p>
            <h2 className="section-title" style={{ color: 'white' }}>
              Trust your chicks<br />before they hatch
            </h2>
            <p className="canary-desc">
              Canary is a composable QA validator for harnest chicks. It runs a 6-checkpoint
              validation suite — checking structure, schema, naming, and cross-references — then
              generates a pass/fail report. Built as a harnest chick, extracted into a standalone
              CLI and reusable GitHub Action.
            </p>

            <div className="canary-features">
              <div className="canary-feature">
                <span className="canary-feature-icon">
                  <TerminalIcon />
                </span>
                <div>
                  <strong>CLI</strong>
                  <span>Run <code>canary</code> locally or in CI</span>
                </div>
              </div>
              <div className="canary-feature">
                <span className="canary-feature-icon">
                  <ActionIcon />
                </span>
                <div>
                  <strong>GitHub Action</strong>
                  <span>One-step PR validation</span>
                </div>
              </div>
              <div className="canary-feature">
                <span className="canary-feature-icon">
                  <TelemetryIcon />
                </span>
                <div>
                  <strong>OTel Observer</strong>
                  <span>Optional telemetry health checks</span>
                </div>
              </div>
            </div>

            <div className="canary-ctas">
              <a
                href="https://github.com/gioperalto/canary"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-canary-primary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="canary-visual">
            <div className="canary-terminal">
              <div className="canary-terminal-topbar">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="terminal-title">canary --targets webpage</span>
              </div>
              <div className="canary-terminal-body">
                <div className="terminal-line terminal-cmd">
                  <span className="terminal-prompt">$</span> canary --targets webpage
                </div>
                <div className="terminal-line terminal-info">
                  Running 6 checkpoints against webpage...
                </div>
                <div className="terminal-spacer" />
                {checkpoints.map((cp) => (
                  <div key={cp.num} className="checkpoint-row">
                    <span className="checkpoint-status">{cp.pass ? '✓' : '✗'}</span>
                    <span className="checkpoint-num">#{cp.num}</span>
                    <span className="checkpoint-name">{cp.name}</span>
                    <span className="checkpoint-desc">{cp.desc}</span>
                  </div>
                ))}
                <div className="terminal-spacer" />
                <div className="terminal-line terminal-result">
                  ✅ webpage passed all 6 checkpoints
                </div>
                <div className="terminal-line terminal-output">
                  Report → .harnest/canary-report.md
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .canary-section {
          padding: 100px 0;
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
        }

        .canary-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: center;
        }

        .canary-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
          margin-bottom: 32px;
          max-width: 480px;
        }

        .canary-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .canary-feature {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.92rem;
        }

        .canary-feature div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .canary-feature strong {
          font-weight: 700;
          color: white;
          font-size: 0.95rem;
        }

        .canary-feature span {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.82rem;
        }

        .canary-feature code {
          font-family: 'SF Mono', 'Fira Code', monospace;
          background: rgba(42, 157, 143, 0.2);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.8rem;
          color: #6ee7b7;
        }

        .canary-feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(42, 157, 143, 0.15);
          border: 1px solid rgba(42, 157, 143, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #2A9D8F;
        }

        .canary-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-canary-primary {
          background: #2A9D8F;
          color: white;
          box-shadow: 0 4px 20px rgba(42, 157, 143, 0.35);
        }

        .btn-canary-primary:hover {
          background: #238b7e;
          box-shadow: 0 6px 28px rgba(42, 157, 143, 0.45);
        }

        /* Terminal */
        .canary-terminal {
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .canary-terminal-topbar {
          background: #1a1e2e;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f57; }
        .dot-yellow { background: #febc2e; }
        .dot-green { background: #28c840; }

        .terminal-title {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .canary-terminal-body {
          background: #0d1117;
          padding: 20px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .terminal-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .terminal-cmd {
          color: rgba(255, 255, 255, 0.85);
        }

        .terminal-prompt {
          color: #2A9D8F;
          font-weight: 700;
          margin-right: 8px;
        }

        .terminal-info {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
        }

        .terminal-spacer {
          height: 10px;
        }

        .checkpoint-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 3px 0;
        }

        .checkpoint-status {
          color: #4ade80;
          font-weight: 700;
          flex-shrink: 0;
          width: 16px;
        }

        .checkpoint-num {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.72rem;
          flex-shrink: 0;
          width: 20px;
        }

        .checkpoint-name {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          flex-shrink: 0;
        }

        .checkpoint-desc {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.72rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .terminal-result {
          color: #4ade80;
          font-weight: 600;
        }

        .terminal-output {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.72rem;
        }

        @media (max-width: 900px) {
          .canary-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .canary-text {
            text-align: center;
          }

          .canary-text .section-title br {
            display: none;
          }

          .canary-desc {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .canary-features {
            align-items: center;
          }

          .canary-ctas {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .canary-section {
            padding: 60px 0;
          }

          .canary-terminal-body {
            padding: 14px;
            font-size: 0.7rem;
          }

          .checkpoint-desc {
            display: none;
          }

          .canary-layout {
            gap: 32px;
          }
        }
      `}</style>
    </section>
  )
}

function TerminalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ActionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function TelemetryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

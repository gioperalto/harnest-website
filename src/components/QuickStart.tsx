import { useState } from 'react'

const steps = [
  {
    command: 'brew tap gioperalto/harnest',
    annotation: 'Add the Harnest Homebrew tap',
    number: '01',
  },
  {
    command: 'brew install harnest',
    annotation: 'Install the harnest CLI',
    number: '02',
  },
  {
    command: 'cd your-project',
    annotation: 'Navigate to your project directory',
    number: '03',
  },
  {
    command: 'harnest hatch',
    annotation: 'Scaffold a chick into your project — then open Claude Code',
    number: '04',
  },
]

export default function QuickStart() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  const fullCommand = steps.map((s) => s.command).join('\n')

  return (
    <section id="quick-start" className="quickstart-section">
      <div className="container">
        <div className="quickstart-inner">
          <div className="quickstart-header">
            <p className="section-label">Get started in 60 seconds</p>
            <h2 className="section-title">Install Harnest</h2>
            <p className="section-subtitle">
              Harnest is available via Homebrew. Four commands and you're running a
              multi-agent team.
            </p>

            <div className="quickstart-ctas">
              <button
                className="btn btn-primary"
                onClick={() => handleCopy(fullCommand)}
              >
                {copied === fullCommand ? '✓ Copied all!' : '⎘ Copy all commands'}
              </button>
              <a
                href="https://github.com/gioperalto/harnest"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Read the docs →
              </a>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span className="tdot tdot-red" />
                <span className="tdot tdot-yellow" />
                <span className="tdot tdot-green" />
              </div>
              <span className="terminal-title">Terminal</span>
              <button
                className="terminal-copy-all"
                onClick={() => handleCopy(fullCommand)}
                title="Copy all"
              >
                {copied === fullCommand ? '✓ Copied!' : '⎘ Copy all'}
              </button>
            </div>

            <div className="terminal-body">
              {steps.map((step, i) => (
                <div key={i} className="terminal-line-group">
                  <div className="terminal-step-header">
                    <span className="terminal-step-num"># {step.number}</span>
                    <span className="terminal-annotation">{step.annotation}</span>
                  </div>
                  <div className="terminal-cmd-row">
                    <span className="t-prompt">$</span>
                    <span className="t-cmd">{step.command}</span>
                    <button
                      className="t-copy"
                      onClick={() => handleCopy(step.command)}
                      title="Copy"
                    >
                      {copied === step.command ? '✓' : '⎘'}
                    </button>
                  </div>
                </div>
              ))}

              <div className="terminal-output">
                <span className="t-output-line">🪺 Hatching webpage chick into your project...</span>
                <span className="t-output-line">✓ Created harnest.yaml</span>
                <span className="t-output-line">✓ Created .claude/agents/</span>
                <span className="t-output-line success">🐣 Done! Open Claude Code to hatch your team.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quickstart-section {
          padding: 100px 0;
          background: var(--bg-light);
        }

        .quickstart-inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 72px;
          align-items: center;
        }

        .quickstart-ctas {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        /* Terminal */
        .terminal {
          background: #0d1117;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .terminal-topbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #161b22;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          gap: 12px;
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .tdot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .tdot-red { background: #ff5f57; }
        .tdot-yellow { background: #ffbd2e; }
        .tdot-green { background: #28c840; }

        .terminal-title {
          flex: 1;
          text-align: center;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
          margin-left: -80px;
        }

        .terminal-copy-all {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all var(--transition);
        }

        .terminal-copy-all:hover {
          background: rgba(255,255,255,0.14);
          color: white;
        }

        .terminal-body {
          padding: 24px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 0.88rem;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .terminal-line-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .terminal-step-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .terminal-step-num {
          color: rgba(255,255,255,0.25);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .terminal-annotation {
          color: rgba(255,255,255,0.35);
          font-size: 0.78rem;
          font-style: italic;
        }

        .terminal-cmd-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.04);
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .t-prompt {
          color: #F4A261;
          font-weight: 700;
          flex-shrink: 0;
        }

        .t-cmd {
          flex: 1;
          color: #e6edf3;
        }

        .t-copy {
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.5);
          padding: 3px 7px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          flex-shrink: 0;
          transition: all var(--transition);
        }

        .t-copy:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .terminal-output {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .t-output-line {
          font-size: 0.83rem;
          color: rgba(255,255,255,0.45);
          display: block;
        }

        .t-output-line.success {
          color: #4ade80;
        }

        @media (max-width: 900px) {
          .quickstart-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 600px) {
          .quickstart-section {
            padding: 60px 0;
          }

          .terminal-body {
            font-size: 0.78rem;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  )
}

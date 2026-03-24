import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    id: 1,
    command: 'harnest hatch --chick fullstack',
    label: 'Hatch',
    description: 'Run one command to scaffold the team config into your project. Harnest writes harnest.yaml and sets up agent definitions.',
    icon: '🥚',
    color: '#F4A261',
  },
  {
    id: 2,
    command: 'claude',
    label: 'Claude Reads',
    description: 'Claude Code reads harnest.yaml on startup, discovers the team structure, and prepares to bootstrap agents.',
    icon: '📖',
    color: '#0077B6',
  },
  {
    id: 3,
    command: 'team spawns',
    label: 'Team Bootstraps',
    description: 'Agents spawn in order — strategist first, then artist and builder in parallel, each with their own role and tools.',
    icon: '🐣',
    color: '#00B4D8',
  },
  {
    id: 4,
    command: 'plan → build → review',
    label: 'Agents Collaborate',
    description: 'Agents work together: planning, implementing, reviewing, and testing. Built-in gates ensure quality at each stage.',
    icon: '⚙️',
    color: '#0077B6',
  },
  {
    id: 5,
    command: 'team cleans up',
    label: 'Done!',
    description: 'Work completes, the team lead signals shutdown, agents confirm and exit. Clean, structured, repeatable.',
    icon: '✅',
    color: '#4ade80',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2400)
    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section id="how-it-works" ref={sectionRef} className="how-section">
      {/* Subtle background texture */}
      <div className="how-bg" style={{ backgroundImage: "url('/how-it-works-bg.svg')" }} />

      <div className="container">
        <div className="how-header">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Lifecycle</p>
          <h2 className="section-title" style={{ color: 'white' }}>How it works</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
            From a single command to a full agent team in seconds.
          </p>
        </div>

        <div className="how-content">
          {/* Flow diagram */}
          <div className="how-diagram">
            <div className="flow-steps">
              {steps.map((step, i) => (
                <div key={step.id}>
                  <div
                    className={`flow-step ${i === activeStep ? 'active' : ''} ${i < activeStep ? 'done' : ''}`}
                    onClick={() => setActiveStep(i)}
                    style={{
                      animationDelay: isVisible ? `${i * 0.15}s` : '0s',
                      animationPlayState: isVisible ? 'running' : 'paused',
                    }}
                  >
                    <div
                      className="step-node"
                      style={{ background: i === activeStep ? step.color : undefined }}
                    >
                      <span className="step-emoji">{step.icon}</span>
                    </div>
                    <div className="step-info">
                      <span className="step-number">Step {step.id}</span>
                      <span className="step-label">{step.label}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flow-connector ${i < activeStep ? 'active' : ''}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step detail */}
          <div className="how-detail">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`step-detail ${i === activeStep ? 'visible' : ''}`}
              >
                <div className="detail-icon" style={{ background: `${step.color}22` }}>
                  <span style={{ fontSize: '2.5rem' }}>{step.icon}</span>
                </div>
                <div
                  className="detail-step-badge"
                  style={{ background: step.color }}
                >
                  Step {step.id} of {steps.length}
                </div>
                <h3 className="detail-title">{step.label}</h3>
                <p className="detail-desc">{step.description}</p>
              </div>
            ))}

            {/* Step dots */}
            <div className="step-dots">
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`step-dot ${i === activeStep ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .how-section {
          position: relative;
          padding: 100px 0;
          background: var(--bg-dark);
          overflow: hidden;
        }

        .how-bg {
          position: absolute;
          inset: 0;
          background-image: url('/how-it-works-bg.svg');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
        }

        .how-header {
          text-align: center;
          margin-bottom: 72px;
          position: relative;
          z-index: 1;
        }

        .how-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* Flow diagram */
        .flow-steps {
          display: flex;
          flex-direction: column;
        }

        .flow-step {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          padding: 12px;
          border-radius: var(--radius-sm);
          transition: background var(--transition);
          animation: fadeInUp 0.4s ease both;
        }

        .flow-step:hover {
          background: rgba(255,255,255,0.06);
        }

        .flow-step.active .step-info {
          opacity: 1;
        }

        .flow-step.done .step-node {
          background: rgba(74, 222, 128, 0.25) !important;
        }

        .step-node {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background var(--transition), transform var(--transition);
          border: 2px solid rgba(255,255,255,0.15);
        }

        .flow-step.active .step-node {
          transform: scale(1.1);
          border-color: rgba(255,255,255,0.4);
        }

        .step-emoji {
          font-size: 1.4rem;
        }

        .step-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          opacity: 0.65;
          transition: opacity var(--transition);
        }

        .flow-step.active .step-info,
        .flow-step.done .step-info {
          opacity: 1;
        }

        .step-number {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .step-label {
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }

        .step-command {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.8rem;
          color: #4ade80;
        }

        .flow-connector {
          width: 2px;
          height: 24px;
          background: rgba(255,255,255,0.15);
          margin-left: 37px;
          border-radius: 1px;
          transition: background 0.4s ease;
        }

        .flow-connector.active {
          background: #4ade80;
        }

        /* Step detail panel */
        .how-detail {
          position: relative;
          background: rgba(255,255,255,0.07);
          border-radius: var(--radius);
          padding: 40px;
          min-height: 320px;
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
        }

        .step-detail {
          position: absolute;
          inset: 40px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .step-detail.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .detail-icon {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .detail-step-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: white;
          padding: 4px 10px;
          border-radius: 100px;
          margin-bottom: 12px;
        }

        .detail-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
        }

        .detail-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .detail-command {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 0.88rem;
          color: #4ade80;
        }

        .cmd-prompt {
          color: var(--accent);
          font-weight: 700;
        }

        .step-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          transition: background var(--transition), transform var(--transition);
          padding: 0;
        }

        .step-dot.active {
          background: var(--accent);
          transform: scale(1.3);
        }

        @media (max-width: 900px) {
          .how-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .how-detail {
            min-height: 260px;
          }
        }

        @media (max-width: 600px) {
          .how-section {
            padding: 60px 0;
          }

          .how-detail {
            padding: 28px;
          }

          .step-detail {
            inset: 28px;
          }
        }
      `}</style>
    </section>
  )
}

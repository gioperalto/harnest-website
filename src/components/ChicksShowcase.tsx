import { chicksData } from '../data/chicks.generated'
import type { ChickData } from '../data/chicks.generated'

// ── Visual config (colors, emojis) for known chicks with sensible defaults ──

const visualConfig: Record<string, { emoji: string; color: string; lightColor: string }> = {
  fullstack: { emoji: '🏗️', color: '#0077B6', lightColor: '#F0F7FF' },
  webpage: { emoji: '🎨', color: '#00B4D8', lightColor: '#F0FBFF' },
  chick: { emoji: '🥚', color: '#F4A261', lightColor: '#FFF8F0' },
}

const defaultColors = [
  { color: '#6C63FF', lightColor: '#F5F4FF' },
  { color: '#E63946', lightColor: '#FFF0F1' },
  { color: '#2A9D8F', lightColor: '#F0FAF8' },
  { color: '#E9C46A', lightColor: '#FFFCF0' },
]

function getVisual(id: string, index: number) {
  if (visualConfig[id]) return visualConfig[id]
  const fallback = defaultColors[index % defaultColors.length]
  return { emoji: '🐣', ...fallback }
}

// ── Display name formatting ─────────────────────────────────────────────────

const roleDisplayNames: Record<string, string> = {
  sr_engineer: 'Sr. Engineer',
  jr_engineer: 'Jr. Engineer',
  test_engineer: 'Test Engineer',
  ux_tester: 'UX Tester',
}

function formatRoleName(id: string): string {
  if (roleDisplayNames[id]) return roleDisplayNames[id]
  return id
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

const roleIcons: Record<string, string> = {
  architect: '🧠',
  sr_engineer: '💻',
  jr_engineer: '⌨️',
  test_engineer: '🧪',
  strategist: '🎯',
  artist: '🖼️',
  builder: '🔨',
  ux_tester: '🔬',
  researcher: '🔍',
  synthesizer: '🧬',
  reviewer: '📋',
}

function getRoleIcon(id: string): string {
  return roleIcons[id] || '🤖'
}

function formatChickName(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1)
}

// ── Component ───────────────────────────────────────────────────────────────

function ChickCard({ chick, index }: { chick: ChickData; index: number }) {
  const visual = getVisual(chick.id, index)
  const displayName = formatChickName(chick.id)

  return (
    <div className="chick-card">
      <div
        className="chick-card-hero"
        style={{ background: `linear-gradient(135deg, ${visual.color}22, ${visual.color}44)` }}
      >
        <img
          src={`/chick-${chick.id}.svg`}
          alt={`${displayName} chick illustration`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="chick-emoji-badge">{visual.emoji}</div>
      </div>

      <div className="chick-card-body">
        <div className="chick-card-header">
          <h3 className="chick-name">{displayName}</h3>
          <span className="chick-tag" style={{ background: `${visual.color}18`, color: visual.color }}>
            chick
          </span>
        </div>
        <p className="chick-desc">{chick.description}</p>

        <div className="chick-roles">
          <p className="roles-label">Team composition</p>
          <div className="roles-grid">
            {chick.agents.map((agent) => (
              <div key={agent.id} className="role-chip">
                <span className="role-icon">{getRoleIcon(agent.id)}</span>
                <div className="role-info">
                  <span className="role-name">
                    {formatRoleName(agent.id)}
                    {agent.count > 1 && <span className="role-count"> x{agent.count}</span>}
                  </span>
                  <span className="role-model">{agent.model}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chick-footer">
          <code className="chick-command">harnest hatch --chick {chick.id}</code>
        </div>
      </div>
    </div>
  )
}

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
          {chicksData.map((chick, i) => (
            <ChickCard key={chick.id} chick={chick} index={i} />
          ))}
        </div>

        <div className="chicks-more">
          <div className="more-card">
            <span className="more-icon">🐥</span>
            <h3>More chicks coming soon</h3>
            <p>The flock is growing.</p>
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
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .chicks-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .chicks-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1920px) {
          .chicks-grid {
            grid-template-columns: repeat(4, 1fr);
          }
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

        .role-count {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
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

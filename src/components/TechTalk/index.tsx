import ExternalLink from '../ExternalLink'
import styles from './styles.module.scss'

// ── AI & LLM skills ─────────────────────────────────────────────────────────

const aiExpert = [
  'Claude API (Anthropic)',
  'Prompt Engineering',
  'AI-assisted development (Claude Code, Cursor, Copilot)',
]

const aiProficient = [
  'OpenAI API',
  'Retrieval-Augmented Generation (RAG)',
  'LLM tool use / function calling',
  'Streaming responses',
  'AI SDK (Vercel)',
]

const aiFamiliar = [
  'LangChain',
  'Embeddings & vector stores',
  'Fine-tuning concepts',
  'MCP (Model Context Protocol)',
]

// ── Web & Frontend skills ────────────────────────────────────────────────────

const webExpert = [
  'HTML5', 'CSS3', 'SASS/SCSS', 'JavaScript ES6',
  'TypeScript', 'React', 'Next.js', 'Tailwind',
]

const webProficient = ['Node.js', 'Webpack', 'Jest', 'Python']

const webFamiliar = ['PHP', 'SQL', 'Laravel', 'Django']

// ── Links ───────────────────────────────────────────────────────────────────

const getBEMLink = 'http://getbem.com/introduction/'
const functionalStylingLink = 'https://rangle.io/blog/styling-with-functional-css/'

// ── Sub-components ───────────────────────────────────────────────────────────

interface BadgeGroupProps {
  label: string
  tier: 'expert' | 'proficient' | 'familiar'
  items: string[]
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({ label, tier, items }) => (
  <div className={styles['badge-group']}>
    <span className={`${styles['badge-group__label']} ${styles[`badge-group__label--${tier}`]}`}>
      {label}
    </span>
    <ul className={styles['badge-group__list']}>
      {items.map(item => (
        <li key={item} className={`${styles.badge} ${styles[`badge--${tier}`]}`}>
          {item}
        </li>
      ))}
    </ul>
  </div>
)

// ── Component ────────────────────────────────────────────────────────────────

const TechTalk: React.FC = () => {
  return (
    <section id="skills" className={styles['tech-talk']} data-animate>
      <div className="container">

        <h2 className={styles['tech-talk__heading']}>Tech Talk</h2>

        {/* AI & LLM subsection */}
        <div className={`${styles['tech-talk__subsection']} ${styles['tech-talk__subsection--ai']}`}>
          <div className={styles['tech-talk__subsection-header']}>
            <span className={styles['tech-talk__ai-label']}>AI &amp; LLM Tools</span>
            <p className={styles['tech-talk__ai-tagline']}>
              Current differentiator — AI-powered development &amp; integration
            </p>
          </div>

          <BadgeGroup label="Expert" tier="expert" items={aiExpert} />
          <BadgeGroup label="Proficient" tier="proficient" items={aiProficient} />
          <BadgeGroup label="Familiar" tier="familiar" items={aiFamiliar} />

          <p className={styles['tech-talk__context']}>
            I integrate AI features into production web apps — from streaming chat interfaces and
            tool-calling agents to RAG pipelines and AI-assisted developer workflows.
          </p>
        </div>

        {/* Web & Frontend subsection */}
        <div className={styles['tech-talk__subsection']}>
          <div className={styles['tech-talk__subsection-header']}>
            <span className={styles['tech-talk__web-label']}>Web &amp; Frontend</span>
          </div>

          <BadgeGroup label="Expert" tier="expert" items={webExpert} />
          <BadgeGroup label="Proficient" tier="proficient" items={webProficient} />
          <BadgeGroup label="Familiar" tier="familiar" items={webFamiliar} />

          <p className={styles['tech-talk__context']}>
            I prioritize styling architecture, semantic markup, and mobile-first responsive design
            using{' '}<ExternalLink href={getBEMLink}>BEM</ExternalLink> and{' '}
            <ExternalLink href={functionalStylingLink}>functional CSS</ExternalLink> methodologies.
          </p>
        </div>

      </div>
    </section>
  )
}

export default TechTalk

import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
}

export default function Hero({ lang }: Props) {
  const t = translations[lang].hero

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="terminal-prefix">{'>'}</span> {t.greeting}
        </p>
        <h1 className="hero-name">{t.name}</h1>
        <p className="hero-role">
          {t.role} <span className="hero-separator">·</span>{' '}
          <span className="hero-university">{t.university}</span>
        </p>
        <p className="hero-description">{t.description}</p>
        <button onClick={scrollToProjects} className="cta-button">
          {t.cta} <span className="cta-arrow">↓</span>
        </button>
      </div>
      <div className="hero-decoration" aria-hidden="true">
        <div className="code-block">
          <span className="code-line">
            <span className="code-keyword">const</span>{' '}
            <span className="code-var">juli</span>{' '}
            <span className="code-op">=</span> {'{'}
          </span>
          <span className="code-line code-indent">
            <span className="code-key">role</span>:{' '}
            <span className="code-string">"student"</span>,
          </span>
          <span className="code-line code-indent">
            <span className="code-key">loves</span>:{' '}
            <span className="code-string">"building things"</span>,
          </span>
          <span className="code-line code-indent">
            <span className="code-key">status</span>:{' '}
            <span className="code-string">"learning"</span>,
          </span>
          <span className="code-line">{'}'}</span>
        </div>
      </div>
    </section>
  )
}

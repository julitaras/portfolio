import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
}

const langColors: Record<string, string> = {
  TypeScript: '#7ecbb5',
  'TypeScript · React': '#7ecbb5',
  JavaScript: '#f0c060',
  Rust: '#e07050',
  'Dart · Flutter': '#60b0e0',
  C: '#9090d0',
  Go: '#60c8b0',
  Smalltalk: '#c080e0',
}

export default function Projects({ lang }: Props) {
  const t = translations[lang].projects

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="projects-grid">
        {t.items
          .filter((project) => !('private' in project && project.private))
          .map((project) => {
            const color = langColors[project.lang] ?? '#b78df7'
            return (
              <div key={project.id} className="project-card">
                <div className="project-card-top">
                  <div className="project-lang-dot" style={{ background: color }} />
                  <span className="project-lang" style={{ color }}>
                    {project.lang}
                  </span>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {'url' in project && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.viewCode} →
                  </a>
                )}
              </div>
            )
          })}
      </div>
    </section>
  )
}

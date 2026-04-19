import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
  onToggleLang: () => void
}

export default function Navbar({ lang, onToggleLang }: Props) {
  const t = translations[lang].nav

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <span className="navbar-logo">jt</span>
      <div className="navbar-links">
        <button onClick={() => scrollTo('projects')} className="nav-link">
          {t.projects}
        </button>
        <button onClick={() => scrollTo('stack')} className="nav-link">
          {t.stack}
        </button>
        <button onClick={() => scrollTo('contact')} className="nav-link">
          {t.contact}
        </button>
        <button onClick={onToggleLang} className="lang-toggle" aria-label="Toggle language">
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  )
}

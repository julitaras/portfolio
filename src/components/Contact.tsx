import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
}

export default function Contact({ lang }: Props) {
  const t = translations[lang].contact

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="contact-content">
        <p className="contact-description">{t.description}</p>
        <div className="contact-links">
          <a href="mailto:dbtyamor@gmail.com" className="contact-button contact-button-primary">
            {t.email}
          </a>
          <a
            href="https://github.com/julitaras"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button contact-button-secondary"
          >
            {t.github}
          </a>
        </div>
      </div>
    </section>
  )
}

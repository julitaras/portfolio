import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
}

const stackItems = [
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'React', emoji: '⚛' },
  { name: 'JavaScript', emoji: '🟡' },
  { name: 'C', emoji: '⚙️' },
  { name: 'Rust', emoji: '🦀' },
  { name: 'Go', emoji: '🐹' },
  { name: 'Flutter', emoji: '💙' },
  { name: 'Smalltalk', emoji: '🔮' },
  { name: 'Git', emoji: '🌿' },
  { name: 'Linux', emoji: '🐧' },
]

export default function Stack({ lang }: Props) {
  const t = translations[lang].stack

  return (
    <section id="stack" className="section section-alt">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="stack-grid">
        {stackItems.map((item) => (
          <div key={item.name} className="stack-item">
            <span className="stack-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <span className="stack-name">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

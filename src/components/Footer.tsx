import { type Lang, translations } from '../i18n/translations'

interface Props {
  lang: Lang
}

export default function Footer({ lang }: Props) {
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <p>
        {t.made} <span className="footer-heart">♥</span> {t.by}
      </p>
    </footer>
  )
}

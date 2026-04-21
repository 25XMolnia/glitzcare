import { useReveal, Ic, CtaBanner } from '../components/shared'
import { useLang } from '../i18n'

const CURLY_KEYS = [
  { tk: 'curly_bio_t', pk: 'curly_bio_p', dk: 'curly_bio_d', dur: '3–4' },
  { tk: 'curly_method_t', pk: 'curly_method_p', dk: 'curly_method_d', dur: '1–1.5' },
  { tk: 'curly_cut_t', pk: 'curly_cut_p', dk: 'curly_cut_d', dur: '1–1.5' },
  { tk: 'curly_recon_t', pk: 'curly_recon_p', dk: 'curly_recon_d', dur: '1.5–2' },
  { tk: 'curly_botox_t', pk: 'curly_botox_p', dk: 'curly_botox_d', dur: '2–3' },
]
const NOTE_KEYS = ['curly_note_1','curly_note_2','curly_note_3','curly_note_4']

function CurlyCards() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="section rv curly-block-1 page-top-section">
      <div className="container">
        <div className="section-header">
          <span className="label-badge">{t('nav_curly')}</span>
          <h3 className="services-brand-title">GLITZ<span className="amp">&amp;</span>CARE BAR</h3>
        </div>
        <div className="curly-cards-top">
          {CURLY_KEYS.slice(0,3).map((sv,i) => (
            <div key={i} className="curly-card">
              <h3 className="curly-card-title">{t(sv.tk)}</h3>
              <p className="curly-card-price">{t(sv.pk)}</p>
              <p className="curly-card-desc">{t(sv.dk)}</p>
              <p className="curly-card-dur"><Ic.Clock width={14} height={14} /> {t('curly_dur')} {sv.dur} h</p>
            </div>
          ))}
        </div>
        <div className="curly-cards-bottom">
          {CURLY_KEYS.slice(3).map((sv,i) => (
            <div key={i} className="curly-card">
              <h3 className="curly-card-title">{t(sv.tk)}</h3>
              <p className="curly-card-price">{t(sv.pk)}</p>
              <p className="curly-card-desc">{t(sv.dk)}</p>
              <p className="curly-card-dur"><Ic.Clock width={14} height={14} /> {t('curly_dur')} {sv.dur} h</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurlyInfo() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="section rv curly-block-2">
      <div className="container">
        <div className="curly-info-grid">
          <div className="curly-specialty">
            <h2 className="curly-specialty-title">{t('curly_specialty')}</h2>
            <p className="body-text">{t('curly_specialty_text')}</p>
          </div>
          <div className="curly-notes">
            {NOTE_KEYS.map((k,i) => (<div key={i} className="curly-note">{t(k)}</div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CurlyResults() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section rv curly-block-3">
      <div className="container">
        <div className="curly-results-grid">
          <img src="/images/curly-result-2.png" alt="" className="curly-result-img" />
          <img src="/images/curly-result-1.png" alt="" className="curly-result-img" />
        </div>
      </div>
    </section>
  )
}

export default function CurlyPage() {
  return (<><CurlyCards /><CurlyInfo /><CurlyResults /><CtaBanner /></>)
}

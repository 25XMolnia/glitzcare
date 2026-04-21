import { STEPS_KEYS, useReveal, Ic, CtaBanner } from '../components/shared'
import { useLang } from '../i18n'

function BookingSection() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="book-split rv">
      <div className="book-split-left">
        <img src="/images/book-left.png" alt="" className="book-split-bg" />
        <div className="book-split-text">
          <span className="label-badge">{t('book_badge')}</span>
          <div className="steps-list">
            {STEPS_KEYS.map((st) => (
              <div key={st.n} className="step-item">
                <span className="step-num">{st.n}</span>
                <div><strong className="step-title">{t(st.tk)}</strong><span className="step-desc">{t(st.dk)}</span></div>
              </div>
            ))}
          </div>
          <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold">
            <Ic.Cal width={18} height={18} /> {t('cta_book')}
          </a>
        </div>
      </div>
      <div className="book-split-right"><img src="/images/book-right.png" alt="" className="book-split-bg" /></div>
    </section>
  )
}

function MapSection() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section rv map-section">
      <div className="container">
        <div className="map-address"><Ic.Pin width={18} height={18} /> 650 Columbia St, New Westminster, BC V3M 1A9</div>
        <div className="map-frame">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.8!2d-122.9108!3d49.2017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486770c1e1f1c8d%3A0x7e6e1f1e1e1e1e1e!2s650%20Columbia%20St%2C%20New%20Westminster%2C%20BC!5e0!3m2!1sen!2sca!4v1" allowFullScreen="" loading="lazy" title="Map" />
        </div>
      </div>
    </section>
  )
}

export default function BookPage() {
  return (<><BookingSection /><MapSection /><CtaBanner /></>)
}

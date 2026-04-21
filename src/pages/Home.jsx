import { IMG, REELS, REVIEWS, useReveal, Ic, Marquee, CtaBanner } from '../components/shared'
import { useLang } from '../i18n'

const SV_KEYS = [
  ['sv_nano_t','sv_nano_d'],['sv_cold_t','sv_cold_d'],['sv_botox_t','sv_botox_d'],
  ['sv_keratin_t','sv_keratin_d'],['sv_custom_t','sv_custom_d'],
]

function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
      <div className="hero-grad" />
      <Marquee />
      <div className="hero-glass-box fade-up">
        <h1 className="hero-title">GLITZ<span className="amp">&</span>CARE BAR</h1>
        <p className="hero-sub">{t('hero_sub')}</p>
        <div className="hero-divider" />
        <h2 className="hero-treatments">{t('hero_treatments_1')}<br className="mobile-br" /> {t('hero_treatments_2')}</h2>
        <p className="hero-desc">{t('hero_desc_text')}</p>
        <div className="hero-cta-row">
        <a href="https://wa.me/12369943607" target="_blank" rel="noreferrer" className="btn-gold hero-cta hero-cta-wa">
          <Ic.Wa width={18} height={18} /> WhatsApp
          <span className="wa-discount-badge">−5%</span>
        </a>
        <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold hero-cta hero-cta-book">
          <Ic.Cal width={18} height={18} /> {t('hero_cta')}
        </a>
        </div>
      </div>
      <div className="scroll-hint"><Ic.Down width={20} height={20} className="bounce" /></div>
    </section>
  )
}

function About() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="section rv about-section">
      <div className="about-grid container">
        <div className="about-img-wrap">
          <img src={IMG.about} alt="Studio owner" className="about-img" />
          <div className="about-img-accent" />
        </div>
        <div className="about-text">
          <span className="label-badge">{t('about_badge')}</span>
          <h2 className="heading">{t('about_heading')}</h2>
          <p className="body-text">{t('about_text')}</p>
          <div className="about-meta">
            <span className="meta-item"><Ic.Pin width={16} height={16} /> {t('about_loc')}</span>
            <span className="meta-item"><Ic.Cal width={16} height={16} /> {t('about_appt')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCards() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="section rv section-alt services-section">
      <div className="container">
        <div className="section-header">
          <span className="label-badge">{t('services_badge')}</span>
          <h3 className="services-brand-title">GLITZ<span className="amp">&amp;</span>CARE BAR</h3>
        </div>
        <div className="srv-photos-row">
          <img src={IMG.service1} alt="" className="srv-photo-top" />
          <img src={IMG.service2} alt="" className="srv-photo-top" />
          <img src={IMG.service3} alt="" className="srv-photo-top" />
        </div>
        <div className="srv-cards-row">
          {SV_KEYS.slice(0,3).map(([tk,dk], i) => (
            <div key={i} className="service-card-v2">
              <h3 className="service-card-title">{t(tk)}</h3>
              <p className="service-card-desc">{t(dk)}</p>
            </div>
          ))}
        </div>
        <div className="srv-cards-row-offset">
          {SV_KEYS.slice(3).map(([tk,dk], i) => (
            <div key={i} className="service-card-v2">
              <h3 className="service-card-title">{t(tk)}</h3>
              <p className="service-card-desc">{t(dk)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  const ref = useReveal()
  const { lang, t } = useLang()
  return (
    <section ref={ref} className="section rv reviews-section-bg">
      <div className="container">
        <div className="section-header">
          <span className="label-badge">{t('reviews_badge')}</span>
          <h2 className="heading center">{t('reviews_heading')}</h2>
        </div>
        <div className="reviews-row-top">
          {REVIEWS.slice(0,3).map((r,i) => (
            <a key={i} href={r.link} target="_blank" rel="noreferrer" className="review-card review-link">
              <div className="stars">{[...Array(5)].map((_,j) => <Ic.Star key={j} width={14} height={14} />)}</div>
              <p className="review-text">"{lang === 'uk' ? r.text_uk : r.text}"</p>
              <div className="review-footer">
                <div className="review-avatar" style={{ background: r.color }}>{r.name[0]}</div>
                <div><div className="review-name">{r.name}</div><div className="review-time">{lang === 'uk' ? r.time_uk : r.time}</div></div>
              </div>
            </a>
          ))}
        </div>
        <div className="reviews-row-bottom">
          {REVIEWS.slice(3).map((r,i) => (
            <a key={i} href={r.link} target="_blank" rel="noreferrer" className="review-card review-link">
              <div className="stars">{[...Array(5)].map((_,j) => <Ic.Star key={j} width={14} height={14} />)}</div>
              <p className="review-text">"{lang === 'uk' ? r.text_uk : r.text}"</p>
              <div className="review-footer">
                <div className="review-avatar" style={{ background: r.color }}>{r.name[0]}</div>
                <div><div className="review-name">{r.name}</div><div className="review-time">{lang === 'uk' ? r.time_uk : r.time}</div></div>
              </div>
            </a>
          ))}
        </div>
        <div className="google-reviews-badge">
          <p className="google-reviews-text">{t('reviews_google')}</p>
          <div className="google-stars">{[...Array(5)].map((_,j) => <Ic.Star key={j} width={24} height={24} />)}</div>
        </div>
      </div>
    </section>
  )
}

function InstagramFeed() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="ig-section rv">
      <img src="/images/ig-bg.png" alt="" className="ig-bg-photo" />
      <div className="ig-bg-overlay" />
      <div className="ig-content container">
        <div className="ig-header">
          <div className="ig-avatar-circle"><span>GLITZ&CARE<br/>BAR</span></div>
          <div className="ig-header-info">
            <p className="ig-handle">@glitz.care.bar</p>
            <a href="https://instagram.com/glitz.care.bar" target="_blank" rel="noreferrer" className="btn-gold ig-follow-btn">
              <Ic.Ig width={16} height={16} /> {t('ig_follow')}
            </a>
          </div>
        </div>
        <div className="ig-reels-grid">
          {REELS.map((code) => (
            <div key={code} className="ig-reel-card">
              <iframe src={`https://www.instagram.com/reel/${code}/embed/`} allowTransparency="true" allowFullScreen scrolling="no" title={`Reel ${code}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (<><Hero /><About /><ServiceCards /><ReviewsSection /><InstagramFeed /><CtaBanner /></>)
}

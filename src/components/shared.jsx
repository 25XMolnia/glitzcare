import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n'

export const IMG = {
  hero: '/images/hero-bg.jpg', about: '/images/about-portrait.jpg',
  service1: '/images/service-1.jpg', service2: '/images/service-2.jpg',
  service3: '/images/service-3.jpg',
}

export const REELS = ['DV7p0CTEwz4', 'DTjl5dLkfLT', 'DS1I5AfkaDc', 'DMV1XWUS9to']

export function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el) } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export const Ic = {
  Cal: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Pin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Star: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Ig: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  Clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Down: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="6 9 12 15 18 9"/></svg>,
  Menu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Wa: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
}

export const NANO_P = [['30 cm / 12 in','$290'],['40 cm / 15.7 in','$330'],['50 cm / 19.7 in','$370'],['60 cm / 23.6 in','$420'],['70 cm / 27.6 in','$470'],['80 cm / 31.5 in','$520'],['90 cm / 35.4 in','$520+']]
export const KERATIN_P = [['30 cm / 12 in','$240'],['40 cm / 15.7 in','$280'],['50 cm / 19.7 in','$320'],['60 cm / 23.6 in','$360'],['70 cm / 27.6 in','$410'],['80 cm / 31.5 in','$440'],['90 cm / 35.4 in','$480+']]
export const COLD_P = [['30 cm / 12 in','$150'],['40 cm / 15.7 in','$180'],['50 cm / 19.7 in','$210'],['60 cm / 23.6 in','$240'],['70 cm / 27.6 in','$270'],['80 cm / 31.5 in','$300']]

export const REVIEWS = [
  { name: 'Tetyana N.', text: 'I had the opportunity to get keratin done by Natasha last year, and of course I returned to her again this year and will only do it with her in the future. She is a great person and a master of her craft.', text_uk: 'Я мала можливість зробити кератин у Наташі минулого року, і звичайно повернулася до неї знову цього року і буду робити тільки у неї в майбутньому. Вона чудова людина і майстер своєї справи.', time: '3 mo ago', time_uk: '3 міс. тому', color: '#0a6', link: 'https://share.google/6i4cQ4aYHhcbXoUJr' },
  { name: 'Mariia P.', text: 'Wonderful studio! I had keratin straightening done, and my hair became incredibly silky. The master explained everything, worked carefully and attentively. After the procedure, I was completely delighted! I will definitely come back again.', text_uk: 'Чудова студія! Зробила кератинове випрямлення, і моє волосся стало неймовірно шовковистим. Майстер все пояснила, працювала ретельно й уважно. Після процедури я була в повному захваті! Обов\'язково повернуся знову.', time: '3 mo ago', time_uk: '3 міс. тому', color: '#90c', link: 'https://share.google/AwRgJccGieoQMiCfo' },
  { name: 'Ivan S.', text: 'I did keratin for my hair, very satisfied! Professional masters, pleasant atmosphere, great attention to the client\'s wishes and details. The owner of the salon has a very personalized approach.', text_uk: 'Зробив кератин для волосся, дуже задоволений! Професійні майстри, приємна атмосфера, велика увага до побажань клієнта та деталей. Власниця салону має дуже індивідуальний підхід.', time: '6 mo ago', time_uk: '6 міс. тому', color: '#c06', link: 'https://share.google/0tUv6vqiToSZV8J8F' },
  { name: 'Mariia B.', text: 'It wasn\'t just a visit to the hairdresser, it was real relaxation and self-care! My friend Natalia - a master with golden hands - did me a luxurious hairstyle and restoration, after which my hair looks like in the advertisement!', text_uk: 'Це був не просто візит до перукаря, це було справжнє розслаблення та турбота про себе! Моя подруга Наталія - майстер із золотими руками - зробила мені розкішну зачіску та відновлення, після чого моє волосся виглядає як у рекламі!', time: '7 mo ago', time_uk: '7 міс. тому', color: '#09c', link: 'https://share.google/Tpvekz7VnxfQTN5P6' },
  { name: 'Iryna M.', text: 'Natalia is the best professional master I have ever visited. She performed hair nanoplasty just impeccable! Quality and professionalism at a high level. Pleasant and cozy atmosphere in the salon. A wonderful master, attentive to detail.', text_uk: 'Наталія - найкращий професійний майстер, у якого я коли-небудь була. Нанопластику волосся вона виконала просто бездоганно! Якість та професіоналізм на високому рівні. Приємна та затишна атмосфера в салоні. Чудовий майстер, уважна до деталей.', time: '10 mo ago', time_uk: '10 міс. тому', color: '#e6a', link: 'https://share.google/ONmIJQ6PqJQomSmB9' },
]

export function Marquee() {
  const { t } = useLang()
  const text = t('marquee')
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        <span className="marquee-text">{text}{text}{text}{text}</span>
      </div>
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  const links = [
    ['/', t('nav_home')],
    ['/about', t('nav_about')],
    ['/services', t('nav_services')],
    ['/curly', t('nav_curly')],
  ]
  const isActive = (path) => location.pathname === path
  const switchLang = (l) => { setLang(l); setLangOpen(false) }

  return (
    <nav className={`gc-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner nav-centered">
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <Ic.X width={22} height={22} /> : <Ic.Menu width={22} height={22} />}
        </button>
        <div className="nav-links">
          {links.map(([path, label]) => (
            <Link key={path} to={path} className={`nav-link${isActive(path) ? ' active' : ''}`}>{label}</Link>
          ))}
        </div>
        <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold nav-book-btn">
          {t('nav_book')}
        </a>
        <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold nav-book-mobile">
          {t('cta_book')}
        </a>
        <div className="lang-wrap">
          <button className="lang-toggle" onClick={() => setLangOpen(!langOpen)}>
            {lang === 'en' ? 'English' : 'Українська'} <Ic.Down width={12} height={12} />
          </button>
          {langOpen && (
            <div className="lang-dropdown">
              <button className={`lang-opt${lang==='en'?' active':''}`} onClick={() => switchLang('en')}>English</button>
              <button className={`lang-opt${lang==='uk'?' active':''}`} onClick={() => switchLang('uk')}>Українська</button>
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([path, label]) => (
            <Link key={path} to={path} className={`mobile-link${isActive(path) ? ' active' : ''}`}>{label}</Link>
          ))}
          <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold mobile-cta">
            <Ic.Cal width={16} height={16} /> {t('nav_book')}
          </a>
        </div>
      )}
    </nav>
  )
}

export function CtaBanner() {
  const { t } = useLang()
  return (
    <section className="cta-banner">
      <div className="cta-inner container">
        <div className="cta-grid-b">
          <div className="cta-col-left">
            <h2 className="cta-heading">{t('cta_heading')}</h2>
            <p className="cta-desc">{t('cta_desc')}</p>
            <a href="https://wa.me/12369943607" target="_blank" rel="noreferrer" className="btn-gold cta-book-main wa-badge-wrap">
              <Ic.Wa width={18} height={18} /> WhatsApp
              <span className="wa-discount-badge">−5%</span>
            </a>
          </div>
          <div className="cta-mobile-row">
            <a href="https://wa.me/12369943607" target="_blank" rel="noreferrer" className="btn-gold cta-mob-btn wa-badge-wrap">
              <Ic.Wa width={18} height={18} /> WhatsApp
              <span className="wa-discount-badge">−5%</span>
            </a>
            <a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold cta-mob-btn">
              <Ic.Cal width={22} height={22} /> {t('cta_book')}
            </a>
          </div>
          <div className="cta-col-right">
            <div className="cta-ig cta-ig-desktop">
              <a href="https://instagram.com/glitz.care.bar" target="_blank" rel="noreferrer">
                <img src="/favicon.png" alt="" className="cta-favicon-logo" />
              </a>
              <div>
                <a href="https://instagram.com/glitz.care.bar" target="_blank" rel="noreferrer" className="cta-ig-handle">@glitz.care.bar</a>
                <a href="https://instagram.com/glitz.care.bar" target="_blank" rel="noreferrer" className="btn-gold sm cta-follow">
                  <Ic.Ig width={14} height={14} /> {t('ig_follow')}
                </a>
              </div>
            </div>
            <div className="cta-brand-block">
              <h3 className="cta-bottom-brand">GLITZ<span className="amp">&amp;</span>CARE BAR</h3>
              <a href="https://maps.google.com/?q=650+Columbia+St+New+Westminster+BC" target="_blank" rel="noreferrer" className="cta-bottom-address"><Ic.Pin width={16} height={16} /> 650 Columbia St, New Westminster, BC V3M 1A9</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="gc-footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <Link to="/" className="nav-brand">GLITZ<span className="amp">&amp;</span>CARE BAR</Link>
          <p className="footer-sub">Hair Reconstruction & Smoothing Studio</p>
        </div>
        <div className="footer-col"><h4>VISIT</h4><p>650 Columbia St<br />New Westminster, BC<br />V3M 1A9</p></div>
        <div className="footer-col"><h4>CONNECT</h4><a href="https://instagram.com/glitz.care.bar" target="_blank" rel="noreferrer" className="footer-link"><Ic.Ig width={16} height={16} /> @glitz.care.bar</a></div>
        <div className="footer-col"><h4>BOOK</h4><a href="https://www.fresha.com/a/glitz-care-bar-new-westminster-nyu-uestminster-britanska-kolumbiya-650-columbia-street-wbgtydjg/all-offer?menu=true" target="_blank" rel="noreferrer" className="btn-gold sm">Book Now</a></div>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} GLITZ&amp;CARE BAR &middot; All rights reserved</div>
    </footer>
  )
}

export const OTHER_KEYS = [
  { tk: 'oth_trim_t', items: [['oth_trim_1', 'from $25'], ['oth_trim_2', 'from $45']] },
  { tk: 'oth_haircut_t', items: [['oth_haircut_1', 'from $70'], ['oth_haircut_2', 'from $90']] },
  { tk: 'oth_toning_t', items: [['oth_toning_1', 'from $80'], ['oth_toning_2', 'from $130']], noteKey: 'oth_toning_note' },
  { tk: 'oth_spa_t', items: [['oth_spa_1', 'from $100']] },
  { tk: 'oth_scalp_t', items: [['oth_scalp_1', 'from $50'], ['oth_scalp_2', 'from $85']] },
  { tk: 'oth_consult_t', items: [['oth_consult_1', ''], ['oth_consult_2', '$30']] },
]

export const STEPS_KEYS = [
  { n: '01', tk: 'step_1_t', dk: 'step_1_d' },
  { n: '02', tk: 'step_2_t', dk: 'step_2_d' },
  { n: '03', tk: 'step_3_t', dk: 'step_3_d' },
  { n: '04', tk: 'step_4_t', dk: 'step_4_d' },
]

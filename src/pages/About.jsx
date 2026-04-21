import { IMG, useReveal, Ic, CtaBanner } from '../components/shared'
import { useLang } from '../i18n'

function WhyChoose() {
  const ref = useReveal()
  const { t } = useLang()
  const items = ['why_1','why_2','why_3','why_4','why_5','why_6']
  return (
    <section ref={ref} className="section rv why-section page-top-section">
      <div className="container">
        <div className="why-grid">
          <div className="why-text-box">
            <span className="label-badge">{t('why_badge')}</span>
            <h2 className="heading">GLITZ<span className="amp">&</span>CARE BAR</h2>
            <p className="body-text">{t('why_intro')}</p>
            <ul className="check-list">
              {items.map((k, i) => (
                <li key={i} className="check-item">
                  <span className="check-icon"><Ic.Check width={14} height={14} /></span>{t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HairCheck() {
  const ref = useReveal()
  const { t } = useLang()
  const items = ['check_1','check_2','check_3','check_4','check_5','check_6']
  return (
    <section ref={ref} className="section rv check-section">
      <div className="container">
        <div className="check-grid">
          <div className="check-images-trio">
            <img src="/images/hair-before-1.png" alt="" className="trio-img trio-1" />
            <img src="/images/hair-before-2.png" alt="" className="trio-img trio-2" />
            <img src="/images/hair-before-3.png" alt="" className="trio-img trio-3" />
          </div>
          <div>
            <span className="label-badge">{t('check_badge')}</span>
            <h3 className="heading sm">{t('check_heading')}</h3>
            <ul className="check-list">
              {items.map((k, i) => (
                <li key={i} className="check-item">
                  <span className="check-icon"><Ic.Check width={14} height={14} /></span>{t(k)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatToExpect() {
  const ref = useReveal()
  const { t } = useLang()
  const items = ['expect_1','expect_2','expect_3','expect_4','expect_5','expect_6']
  return (
    <section ref={ref} className="expect-split rv">
      <div className="expect-split-left">
        <img src="/images/expect-left.png" alt="" className="expect-split-img" />
      </div>
      <div className="expect-split-right">
        <img src="/images/expect-right.png" alt="" className="expect-split-img" />
        <div className="expect-split-text">
          <span className="label-badge">{t('expect_badge')}</span>
          <ul className="check-list">
            {items.map((k, i) => (
              <li key={i} className="check-item">
                <span className="check-icon"><Ic.Check width={14} height={14} /></span>{t(k)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ResultsBanner() {
  const ref = useReveal()
  const { t } = useLang()
  const raw = t('results_text').replace(/[.。]\s*$/, '')
  const parts = raw.split(' ')
  const head = parts.slice(0, -2).join(' ')
  const tail = parts.slice(-2).join(' ')
  return (
    <section ref={ref} className="results-split rv">
      <div className="results-text-block">
        <p className="body-text">{head} <span className="results-nobreak">{tail}</span><span className="results-period">.</span></p>
      </div>
      <div className="results-photos">
        <div className="results-split-left">
          <img src="/images/results-left.png" alt="" className="results-split-bg" />
        </div>
        <div className="results-split-right">
          <img src="/images/results-right.png" alt="" className="results-split-bg" />
        </div>
      </div>
      <div className="results-mobile-photos">
        <img src="/images/results-left.png" alt="" className="results-mob-img" />
        <img src="/images/results-center.png" alt="" className="results-mob-img" />
      </div>
      <div className="results-center-wrap">
        <img src="/images/results-center.png" alt="" className="results-center-photo" />
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (<><WhyChoose /><HairCheck /><WhatToExpect /><ResultsBanner /><CtaBanner /></>)
}

import { useState } from "react"
import { IMG, NANO_P, KERATIN_P, COLD_P, OTHER_KEYS, useReveal, Ic, CtaBanner } from '../components/shared'
import { useLang } from '../i18n'

const PRICE_BGS = ['/images/price-bg-nano.png','/images/price-bg-keratin.png','/images/price-bg-cold.png']
const SV_KEYS = [['sv_nano_t','sv_nano_d'],['sv_cold_t','sv_cold_d'],['sv_botox_t','sv_botox_d'],['sv_keratin_t','sv_keratin_d'],['sv_custom_t','sv_custom_d']]

function ServiceCards() {
  const ref = useReveal()
  const { t } = useLang()
  return (
    <section ref={ref} className="section rv section-alt services-section page-top-section">
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
          {SV_KEYS.slice(0,3).map(([tk,dk],i) => (
            <div key={i} className="service-card-v2"><h3 className="service-card-title">{t(tk)}</h3><p className="service-card-desc">{t(dk)}</p></div>
          ))}
        </div>
        <div className="srv-cards-row-offset">
          {SV_KEYS.slice(3).map(([tk,dk],i) => (
            <div key={i} className="service-card-v2"><h3 className="service-card-title">{t(tk)}</h3><p className="service-card-desc">{t(dk)}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [tab, setTab] = useState(0)
  const ref = useReveal()
  const { t } = useLang()
  const tabs = [
    { label: t('price_nano_label'), prices: NANO_P, dur: '8–12 months', desc: t('price_nano_desc') },
    { label: t('price_keratin_label'), prices: KERATIN_P, dur: '3–6 months', desc: t('price_keratin_desc'), popular: true },
    { label: t('price_cold_label'), prices: COLD_P, dur: 'Pre-care', desc: t('price_cold_desc') },
  ]
  const cur = tabs[tab]
  return (
    <section ref={ref} className="section rv section-pricing pricing-dynamic">
      {PRICE_BGS.map((src,i) => (<img key={i} src={src} alt="" className={`pricing-bg-img${tab===i?' active':''}`} />))}
      <div className="container">
        <div className="section-header">
          <span className="label-badge">{t('price_badge')}</span>
          <h2 className="heading center">{t('price_heading')}</h2>
        </div>
        <div className="price-tabs">
          {tabs.map((tb,i) => (
            <button key={i} onClick={() => setTab(i)} className={`price-tab${tab===i?' active':''}`}>
              {tb.label}{tb.popular && <span className="popular-dot" />}
            </button>
          ))}
        </div>
        <div className="price-content">
          <div className="price-left">
            {cur.popular && <span className="popular-badge">{t('price_popular')}</span>}
            <div className="price-dur"><Ic.Clock width={16} height={16} /> {t('price_dur')} <strong>{cur.dur}</strong></div>
            <p className="body-text">{cur.desc}</p>
            <p className="gold-note">{t('price_photo_note')}</p>
            <div className="thick-info">
              <div className="thick-row"><span>{t('price_thick')}</span><span className="thick-val">7cm / 2.76in · +$40</span></div>
              <div className="thick-row"><span>{t('price_vthick')}</span><span className="thick-val">10cm / 3.94in · +$70</span></div>
              <div className="thick-row"><span>{t('price_sthick')}</span><span className="thick-val">15cm / 5.91in · +$90</span></div>
            </div>
            <p className="extras-note">{t('price_extras').split('·').map((part, i) => <span key={i} className="extras-line">{part.trim()}</span>)}</p>
          </div>
          <div className="price-right">
            {cur.prices.map(([len,price]) => (
              <div className="price-row" key={len}><span className="price-len">{len}</span><span className="price-dots" /><span className="price-val">{price}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherServices() {
  const ref = useReveal()
  const { t } = useLang()
  const tp = (p) => p ? p.replace('from', t('price_from')) : ''
  return (
    <section ref={ref} className="section rv other-services-section">
      <div className="container">
        <div className="section-header"><span className="label-badge">{t('other_badge')}</span></div>
        <div className="other-grid">
          {OTHER_KEYS.map((g,i) => (
            <div key={i} className="other-card">
              <h4 className="other-title">{t(g.tk)}</h4>
              {g.items.map(([lk,price],j) => (
                <div key={j} className="other-row"><span>{t(lk)}</span>{price && <span className="other-price">{tp(price)}</span>}</div>
              ))}
              {g.noteKey && <p className="other-note">{t(g.noteKey)}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (<><ServiceCards /><PricingSection /><OtherServices /><CtaBanner /></>)
}

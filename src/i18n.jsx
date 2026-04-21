import { createContext, useContext, useState } from 'react'

const LangCtx = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => (T[key] || {})[lang] || (T[key] || {}).en || key
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
}

export function useLang() { return useContext(LangCtx) }

/* ═══════ ALL TRANSLATIONS ═══════ */
const T = {
  /* ── Nav ── */
  nav_home: { en: 'Home', uk: 'Головна' },
  nav_about: { en: 'About', uk: 'Про нас' },
  nav_services: { en: 'Services / Price list', uk: 'Послуги / Прайс' },
  nav_curly: { en: 'Curly Hair', uk: 'Кудряве волосся' },
  nav_book: { en: 'Book Appointment', uk: 'Записатись' },

  /* ── Hero ── */
  hero_title: { en: 'HAIR RECONSTRUCTION & SMOOTHING STUDIO', uk: 'СТУДІЯ РЕКОНСТРУКЦІЇ ТА ВИРІВНЮВАННЯ ВОЛОССЯ' },
  hero_sub: { en: 'Personalized hair treatments in New Westminster', uk: 'Персоналізовані процедури для волосся у Нью‑Вестмінстері' },
  hero_cta: { en: 'BOOK NOW', uk: 'ЗАПИСАТИСЬ' },
  marquee: {
    en: 'Personalized formulas \u00A0\u2022\u00A0 Visible result from the first visit \u00A0\u2022\u00A0 Located in New Westminster \u00A0\u2022\u00A0 Over 200+ 5-star reviews \u00A0\u2022\u00A0 ',
    uk: 'Індивідуальні формули \u00A0\u2022\u00A0 Видимий результат з першого візиту \u00A0\u2022\u00A0 Нью-Вестмінстер \u00A0\u2022\u00A0 Понад 200+ відгуків з 5 зірками \u00A0\u2022\u00A0 '
  },

  /* ── About section (Home) ── */
  about_badge: { en: 'ABOUT THE STUDIO', uk: 'ПРО СТУДІЮ' },
  about_heading: { en: 'A PERSONAL APPROACH TO EVERY STRAND.', uk: 'ІНДИВІДУАЛЬНИЙ ПІДХІД ДО КОЖНОГО ВОЛОССЯ.' },
  about_text: {
    en: 'At GLITZ&CARE BAR, I focus on personalized hair reconstruction and smoothing treatments tailored to each client\'s hair type and goals. My work is based on careful product selection, visible results and long-term hair beauty.',
    uk: 'У GLITZ&CARE BAR я зосереджуюсь на персоналізованих процедурах реконструкції та вирівнювання волосся, адаптованих до типу волосся та цілей кожного клієнта. Моя робота базується на ретельному підборі продуктів, видимих результатах та довготривалій красі волосся.'
  },
  about_loc: { en: 'New Westminster, BC', uk: 'Нью-Вестмінстер, Британська Колумбія' },
  about_appt: { en: 'By appointment only', uk: 'За записом' },

  /* ── Services section ── */
  services_badge: { en: 'SERVICES', uk: 'ПОСЛУГИ' },

  sv_nano_t: { en: 'Nanoplasty', uk: 'Нанопластика' },
  sv_nano_d: { en: 'For stronger straightening effect and long-lasting smoothness.', uk: 'Для сильного ефекту випрямлення та тривалої гладкості.' },
  sv_cold_t: { en: 'Cold Hair Restoration', uk: 'Холодне відновлення волосся' },
  sv_cold_d: { en: 'For damaged, dry or weakened hair that needs deep repair and care.', uk: 'Для пошкодженого, сухого або ослабленого волосся, яке потребує глибокого відновлення.' },
  sv_botox_t: { en: 'Botox for Hair', uk: 'Ботокс для волосся' },
  sv_botox_d: { en: 'For softness, shine, visual density and a more polished look.', uk: 'Для м\'якості, блиску, візуальної густоти та більш доглянутого вигляду.' },
  sv_keratin_t: { en: 'Keratin Treatment', uk: 'Кератинове лікування' },
  sv_keratin_d: { en: 'For smoother, straighter and shinier hair with reduced frizz.', uk: 'Для більш гладкого, прямого та блискучого волосся зі зменшеною пухнастістю.' },
  sv_custom_t: { en: 'Custom Mix Treatment', uk: 'Індивідуальний мікс' },
  sv_custom_d: { en: 'Personalized combination selected specifically for your hair needs.', uk: 'Персоналізована комбінація, підібрана спеціально для потреб вашого волосся.' },

  /* ── Reviews ── */
  reviews_badge: { en: 'CLIENT LOVE', uk: 'ВІДГУКИ КЛІЄНТІВ' },
  reviews_heading: { en: 'What clients are saying', uk: 'Що кажуть клієнти' },
  reviews_google: { en: 'Over 200+ Google Reviews', uk: 'Понад 200+ 5-зіркових відгуків' },

  /* ── Instagram ── */
  ig_follow: { en: 'Follow', uk: 'Підписатись' },

  /* ── CTA Banner ── */
  cta_heading: { en: 'Ready for smooth, beautiful hair?', uk: 'Готові до красивого, гладкого волосся?' },
  cta_desc: {
    en: 'Book your appointment today or send a photo of your hair to get a personalized recommendation.',
    uk: 'Запишіться сьогодні або надішліть фото свого волосся для персональної рекомендації.'
  },
  cta_book: { en: 'BOOK NOW', uk: 'ЗАПИСАТИСЬ' },

  /* ── About Page ── */
  why_badge: { en: 'WHY CLIENTS CHOOSE', uk: 'ЧОМУ ОБИРАЮТЬ' },
  why_intro: {
    en: 'Each treatment is selected individually depending on your hair history, density, length and desired result.',
    uk: 'Кожна процедура підбирається індивідуально залежно від історії вашого волосся, густоти, довжини та бажаного результату.'
  },
  why_1: { en: 'personalized treatment selection', uk: 'індивідуальний підбір процедури' },
  why_2: { en: 'focus on hair condition, not only appearance', uk: 'увага до стану волосся, а не лише зовнішнього вигляду' },
  why_3: { en: 'careful work with damaged and porous hair', uk: 'бережна робота з пошкодженим та пористим волоссям' },
  why_4: { en: 'professional approach and detailed consultation', uk: 'професійний підхід та детальна консультація' },
  why_5: { en: 'real before/after results', uk: 'реальні результати до/після' },
  why_6: { en: 'cozy private studio in New Westminster', uk: 'затишна приватна студія у Нью‑Вестмінстері' },

  check_badge: { en: 'IS THIS RIGHT FOR YOUR HAIR?', uk: 'ЦЕ ПІДХОДИТЬ ДЛЯ ВАШОГО ВОЛОССЯ?' },
  check_heading: { en: 'THIS IS PERFECT IF YOUR HAIR IS:', uk: 'ЦЕ ІДЕАЛЬНО, ЯКЩО ВАШЕ ВОЛОССЯ:' },
  check_1: { en: 'frizzy and hard to manage', uk: 'пухнасте та важко піддається укладанню' },
  check_2: { en: 'dry, porous or damaged', uk: 'сухе, пористе або пошкоджене' },
  check_3: { en: 'puffy after washing', uk: 'розпушується після миття' },
  check_4: { en: 'lacking shine and softness', uk: 'не вистачає блиску та м\'якості' },
  check_5: { en: 'breaking at the ends', uk: 'ламається на кінчиках' },
  check_6: { en: 'difficult to style every day', uk: 'складно укладати щодня' },

  expect_badge: { en: 'WHAT YOU CAN EXPECT', uk: 'ЧОГО ОЧІКУВАТИ' },
  expect_1: { en: 'smoother and more manageable hair', uk: 'більш гладке та слухняне волосся' },
  expect_2: { en: 'less frizz and puffiness', uk: 'менше пухнастості та розпушеності' },
  expect_3: { en: 'glossy shine', uk: 'глянцевий блиск' },
  expect_4: { en: 'softer, denser-looking ends', uk: 'м\'якші, візуально густіші кінчики' },
  expect_5: { en: 'easier daily styling', uk: 'легше щоденне укладання' },
  expect_6: { en: 'personalized formula for your hair goals', uk: 'індивідуальна формула для ваших цілей' },

  results_text: { en: 'See how the hair looks before and after personalized reconstruction and smoothing treatments.', uk: 'Волосся до та після персоналізованих процедур реконструкції та вирівнювання.' },

  /* ── Services Page ── */
  pricing_nano: { en: 'Nanoplasty', uk: 'Нанопластика' },
  pricing_keratin: { en: 'Keratin', uk: 'Кератин' },
  pricing_cold: { en: 'Cold', uk: 'Холодне' },
  pricing_length: { en: 'Hair Length', uk: 'Довжина волосся' },
  pricing_price: { en: 'Price', uk: 'Ціна' },
  other_title: { en: 'Other Services', uk: 'Інші послуги' },

  oth_trim_t: { en: 'Trim (Ends Only)', uk: 'Підстригання кінчиків' },
  oth_trim_1: { en: 'Add-on to treatment', uk: 'Додатково до процедури' },
  oth_trim_2: { en: 'As a separate service', uk: 'Як окрема послуга' },
  oth_haircut_t: { en: "Women's Haircut", uk: 'Жіноча стрижка' },
  oth_haircut_1: { en: 'Medium / long length', uk: 'Середня / довга' },
  oth_haircut_2: { en: 'Thick / complex shape', uk: 'Густе / складна форма' },
  oth_toning_t: { en: 'Hair Toning', uk: 'Тонування волосся' },
  oth_toning_1: { en: 'Short / medium', uk: 'Коротке / середнє' },
  oth_toning_2: { en: 'Long / thick', uk: 'Довге / густе' },
  oth_toning_note: { en: 'Price depends on length, density, product usage', uk: 'Ціна залежить від довжини, густоти, витрати продукту' },
  oth_spa_t: { en: 'Hair SPA', uk: 'SPA для волосся' },
  oth_spa_1: { en: 'Deep / premium care', uk: 'Глибокий / преміум догляд' },
  oth_scalp_t: { en: 'Scalp Peeling / Detox', uk: 'Пілінг / детокс шкіри голови' },
  oth_scalp_1: { en: 'Add-on to any service', uk: 'Додатково до будь-якої послуги' },
  oth_scalp_2: { en: 'As a separate service', uk: 'Як окрема послуга' },
  oth_consult_t: { en: 'Consultation', uk: 'Консультація' },
  oth_consult_1: { en: 'Free with any booked service', uk: 'Безкоштовно з будь-якою послугою' },
  oth_consult_2: { en: 'Separate consultation', uk: 'Окрема консультація' },

  /* ── Book Page ── */
  book_badge: { en: 'HOW BOOKING WORKS', uk: 'ЯК ЗАПИСАТИСЬ' },
  step_1_t: { en: 'Send a request or book online', uk: 'Надішліть запит або запишіться онлайн' },
  step_1_d: { en: 'Choose a convenient date or message me directly.', uk: 'Оберіть зручну дату або напишіть мені напряму.' },
  step_2_t: { en: 'Send a photo of your hair', uk: 'Надішліть фото свого волосся' },
  step_2_d: { en: 'This helps me estimate the price more accurately.', uk: 'Це допомагає мені точніше оцінити вартість.' },
  step_3_t: { en: 'Get personalized recommendation', uk: 'Отримайте індивідуальну рекомендацію' },
  step_3_d: { en: 'I will suggest the most suitable option for your hair.', uk: 'Я підберу найкращий варіант для вашого волосся.' },
  step_4_t: { en: 'Confirm your appointment', uk: 'Підтвердіть запис' },
  step_4_d: { en: 'After confirmation, your spot is reserved.', uk: 'Після підтвердження ваше місце заброньоване.' },
  map_address: { en: '650 Columbia St, New Westminster, BC V3M 1A9', uk: '650 Columbia St, New Westminster, BC V3M 1A9' },

  /* ── Curly Page ── */
  curly_bio_t: { en: 'Bio Curl Transformation (Perm)', uk: 'Біо-завивка (створення кучерів)' },
  curly_bio_p: { en: 'from $240 up to $450+', uk: 'від $240 до $450+' },
  curly_bio_d: { en: 'Long-lasting curl creation for straight or slightly wavy hair using gentle modern formulas', uk: 'Створення довготривалих кучерів для прямого або злегка хвилястого волосся за допомогою м\'яких сучасних формул' },
  curly_method_t: { en: 'Curly Method Experience', uk: 'Кучерявий метод' },
  curly_method_p: { en: 'from $80 up to $120', uk: 'від $80 до $120' },
  curly_method_d: { en: 'Professional wash, styling using the curly method + personalized care guidance', uk: 'Професійне миття, укладання за кудрявим методом + персоналізовані поради з догляду' },
  curly_cut_t: { en: 'Curly Signature Haircut', uk: 'Фірмова стрижка для кучерів' },
  curly_cut_p: { en: 'from $120 up to $180+', uk: 'від $120 до $180+' },
  curly_cut_d: { en: 'Custom dry haircut designed specifically for your natural curl pattern', uk: 'Індивідуальна суха стрижка, розроблена спеціально для вашого природного візерунка кучерів' },
  curly_recon_t: { en: 'Curl Reconstruction Therapy', uk: 'Терапія відновлення кучерів' },
  curly_recon_p: { en: 'from $150 up to $250+', uk: 'від $150 до $250+' },
  curly_recon_d: { en: 'Deep repair treatment that restores hair structure and enhances natural curl formation', uk: 'Глибоке відновлення, що повертає структуру волосся та покращує природне формування кучерів' },
  curly_botox_t: { en: 'Curl Botox Treatment', uk: 'Ботокс для кучерів' },
  curly_botox_p: { en: 'from $180 up to $300+', uk: 'від $180 до $300+' },
  curly_botox_d: { en: 'Anti-frizz, smoothing and hydration treatment that defines curls while maintaining volume. Lasts 2-3 months', uk: 'Процедура проти пухнастості, зволоження та розгладження, яка формує кучері, зберігаючи об\'єм. Тримається 2-3 місяці' },
  curly_dur: { en: 'Duration:', uk: 'Тривалість:' },

  curly_specialty: { en: 'Our Specialty', uk: 'Наша спеціалізація' },
  curly_specialty_text: {
    en: 'We specialize in restoring natural curl patterns, reducing frizz, and creating healthy, defined, and manageable curls tailored individually for each client.',
    uk: 'Ми спеціалізуємося на відновленні природних кучерів, зменшенні пухнастості та створенні здорових, визначених та слухняних кучерів, підібраних індивідуально для кожного клієнта.'
  },
  curly_note_1: { en: 'Final price depends on hair length, thickness, and overall condition', uk: 'Ціна залежить від довжини, густоти та загального стану волосся' },
  curly_note_2: { en: 'Additional charge may apply for extra thick or very long hair', uk: 'Може застосовуватись додаткова плата за дуже густе або дуже довге волосся' },
  curly_note_3: { en: 'Only suitable for naturally wavy or curly hair (except Bio Curl Transformation)', uk: 'Підходить лише для природно хвилястого або кудрявого волосся (окрім біо-завивки)' },
  curly_note_4: { en: 'Results may vary depending on natural hair texture and previous treatments', uk: 'Результати можуть відрізнятися залежно від природної текстури волосся та попередніх процедур' },
}

// Additional translations added
const T2 = {
  price_badge: { en: 'PRICE LIST', uk: 'ПРАЙС' },
  price_heading: { en: 'Transparent pricing', uk: 'Прозорі ціни' },
  price_nano_label: { en: 'Nanoplasty', uk: 'Нанопластика' },
  price_keratin_label: { en: 'Keratin / Botox / Collagen', uk: 'Кератин / Ботокс / Колаген' },
  price_cold_label: { en: 'Cold Hair Treatment', uk: 'Холодне лікування волосся' },
  price_dur: { en: 'Duration of wear:', uk: 'Тривалість носіння:' },
  price_popular: { en: 'MOST POPULAR', uk: 'НАЙПОПУЛЯРНІШЕ' },
  price_photo_note: { en: 'Send your hair photo - final quote depends on thickness and condition.', uk: 'Надішліть фото волосся - остаточна ціна залежить від густоти та стану.' },
  price_thick: { en: 'Thick Hair', uk: 'Густе волосся' },
  price_vthick: { en: 'Very Thick', uk: 'Дуже густе' },
  price_sthick: { en: 'Super Thick', uk: 'Супер густе' },
  price_extras: { en: 'Surcharge for hair extensions +$40 · Hair bang trim +$30', uk: 'Доплата за нарощене волосся +$40 · Підстригання чубчика +$30' },
  price_nano_desc: { en: 'Ideal for clients who want long-lasting straight hair with minimal styling. Smoothing very curly hair that cannot be managed with keratin. Intended only for thick hair without prior damage.', uk: 'Ідеально для клієнтів, які хочуть довготривале пряме волосся з мінімальним укладанням. Вирівнювання дуже кудрявого волосся, яке не піддається кератину. Призначено лише для густого волосся без попередніх пошкоджень.' },
  price_keratin_desc: { en: 'Most popular. Botox + Keratin mix for perfect smoothness & restoration. Straightening curls, eliminating frizz, shine, smoothness, softness.', uk: 'Найпопулярніше. Суміш ботоксу + кератину для ідеальної гладкості та відновлення. Випрямлення кучерів, усунення пухнастості, блиск, гладкість, м\'якість.' },
  price_cold_desc: { en: 'Recommended as pre-care before Keratin / Botox / Nanoplasty for best results. Hair restoration from the inside with amino acids, proteins, lipids. Reduces breakage, tangles, fills gaps, moisturizes.', uk: 'Рекомендовано як підготовчий догляд перед кератином / ботоксом / нанопластикою. Відновлення волосся зсередини амінокислотами, протеїнами, ліпідами. Зменшує ламкість, сплутування, заповнює порожнечі, зволожує.' },
  other_badge: { en: 'OTHER SERVICES', uk: 'ІНШІ ПОСЛУГИ' },
  results_badge_text: { en: 'REAL RESULTS AFTER ONE VISIT', uk: 'РЕАЛЬНІ РЕЗУЛЬТАТИ ПІСЛЯ ОДНОГО ВІЗИТУ' },
  hero_treatments_text: { en: 'Keratin, Botox, Nanoplasty, Deep Hair Repair & Curly Hair', uk: 'Кератин, ботокс, нанопластика, відновлення та кудряве волосся' },
  hero_treatments_1: { en: 'Keratin, Botox, Nanoplasty,', uk: 'Кератин, ботокс, нанопластика,' },
  hero_treatments_2: { en: 'Deep Hair Repair & Curly Hair', uk: 'Відновлення та кудряве волосся' },
  hero_desc_text: { en: 'Get smooth, shiny, healthy-looking hair with a personalized treatment selected for your hair type.', uk: 'Отримайте гладке, блискуче, здорове волосся з персоналізованою процедурою, підібраною для вашого типу волосся.' },
  price_from: { en: 'from', uk: 'від' },
}
Object.assign(T, T2)

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const basePath = import.meta.env.BASE_URL

const KR = {
  primary650: '#1fc91c',
  primary600: '#44d620',
  primary700: '#14c110',
  primary800: '#039d00',
  primary400: '#7fe441',
  primary50: '#e9ffdb',
  neutral50: '#f9fafa',
  neutral100: '#f4f4f6',
  neutral200: '#e6e7ea',
  neutral300: '#d2d5da',
  neutral400: '#9da3af',
  neutral500: '#6a7181',
  neutral700: '#3e434c',
  neutral900: '#191b1f',
  white: '#ffffff',
}

function Home() {
  const { t } = useTranslation()

  return (
    <div style={styles.container}>
      <style>{`
        .rpa-store-badge { transition: transform 120ms cubic-bezier(0.2,0,0,1), filter 120ms cubic-bezier(0.2,0,0,1); }
        .rpa-store-badge:hover { transform: translateY(-2px); filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18)); }
        .rpa-usecase { transition: all 200ms cubic-bezier(0.2,0,0,1); }
        .rpa-usecase:hover { border-color: ${KR.primary650} !important; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(25,27,31,0.06), 0 2px 4px rgba(25,27,31,0.04); }
        .rpa-nav-cta:hover { background: ${KR.primary600} !important; box-shadow: 0 0 0 4px rgba(31,201,28,0.18); }
        .rpa-feature-row { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 120px; }
        .rpa-feature-row.reverse { direction: rtl; }
        .rpa-feature-row.reverse > * { direction: ltr; }
        .rpa-hero-screens { display: flex; justify-content: center; align-items: flex-end; gap: 28px; margin-top: 80px; perspective: 1400px; }
        .rpa-hero-screens .rpa-phone:nth-child(1) { transform: rotate(-4deg) translateY(28px); }
        .rpa-hero-screens .rpa-phone:nth-child(2) { transform: translateY(-12px); z-index: 2; }
        .rpa-hero-screens .rpa-phone:nth-child(3) { transform: rotate(4deg) translateY(28px); }
        @media (max-width: 880px) {
          .rpa-feature-row { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 80px !important; }
          .rpa-feature-row.reverse { direction: ltr; }
          .rpa-highlights-grid { grid-template-columns: 1fr !important; }
          .rpa-usecases-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rpa-hero-screens { flex-wrap: wrap; }
          .rpa-hero-screens .rpa-phone { transform: none !important; }
          .rpa-nav-links-secondary { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.navBrand}>
          <span style={styles.navLogo}></span>
          <span>{t('home.title')}</span>
        </div>
        <div style={styles.navLinks} className="rpa-nav-links-secondary">
          <a href="#features" style={styles.navLink}>{t('home.features.title')}</a>
          <a href="#usecases" style={styles.navLink}>{t('home.useCases.title')}</a>
          <a href="#highlights" style={styles.navLink}>{t('home.highlights.title')}</a>
        </div>
        <a href="https://apps.apple.com/app/id6757327457" target="_blank" rel="noopener noreferrer" style={styles.navCta} className="rpa-nav-cta">
          {t('home.appStore')} →
        </a>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.eyebrow.available')}</span>
          <h1 style={styles.heroTitle}>
            {t('home.heroLine1')}<br />
            <span style={styles.heroAccent}>{t('home.heroLine2Accent')}</span>{t('home.heroLine2Suffix')}
          </h1>
          <p style={styles.heroTagline}>{t('home.tagline2')}</p>
          <div style={styles.storeButtons}>
            <a className="rpa-store-badge" href="https://apps.apple.com/app/id6757327457" target="_blank" rel="noopener noreferrer" style={styles.storeBadge} aria-label="App Store에서 다운로드">
              <img src={`${basePath}badges/app-store-ko.svg`} alt="App Store에서 다운로드" style={styles.storeBadgeImg}/>
            </a>
            <a className="rpa-store-badge" href="https://play.google.com/store/apps/details?id=com.limgadeuk.randompickapp" target="_blank" rel="noopener noreferrer" style={styles.storeBadge} aria-label="Google Play에서 다운로드">
              <img src={`${basePath}badges/google-play-ko.svg`} alt="Google Play에서 다운로드" style={styles.storeBadgeImg}/>
            </a>
          </div>
          <div style={styles.heroMeta}>
            <span>iOS 14.0+</span><span style={styles.heroMetaDot}></span>
            <span>Android 8.0+</span><span style={styles.heroMetaDot}></span>
            <span>{t('home.eyebrow.free')}</span>
          </div>
        </div>

        <div className="rpa-hero-screens">
          <PhoneFrame src={`${basePath}4.png`} alt="" width={240} />
          <PhoneFrame src={`${basePath}1.png`} alt={t('home.mainScreenAlt')} width={260} />
          <PhoneFrame src={`${basePath}2.png`} alt="" width={240} />
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <div style={styles.sectionHead}>
          <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>About</span>
          <h2 style={styles.sectionTitle}>{t('home.about.title')}</h2>
          <p style={styles.sectionSub}>{t('home.about.text1').replace(/\n/g, ' ')} {t('home.about.text2').replace(/\n/g, ' ')}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{...styles.section, paddingTop: 0}}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.features.title')}</span>
            <h2 style={styles.sectionTitle}>{t('home.features.heading')}</h2>
          </div>

          <FeatureRow
            num="01"
            title={t('home.features.home.title')}
            desc={t('home.features.home.desc')}
            tags={[t('home.features.home.tag1'), t('home.features.home.tag2'), t('home.features.home.tag3'), t('home.features.home.tag4')]}
            img={`${basePath}1.png`}
            alt={t('home.features.home.alt')}
          />
          <FeatureRow
            num="02"
            title={t('home.features.horseRace.title')}
            desc={t('home.features.horseRace.desc').replace(/\n/g, ' ')}
            img={`${basePath}2.png`}
            alt={t('home.features.horseRace.alt')}
            reverse
          />
          <FeatureRow
            num="03"
            title={t('home.features.racing.title')}
            desc={t('home.features.racing.desc')}
            img={`${basePath}3.png`}
            alt={t('home.features.racing.alt')}
          />
          <FeatureRow
            num="04"
            title={t('home.features.soccer.title')}
            desc={t('home.features.soccer.desc').replace(/\n/g, ' ')}
            img={`${basePath}4.png`}
            alt={t('home.features.soccer.alt')}
            reverse
          />

          <div style={{textAlign:'center', marginTop: 24}}>
            <span style={{...styles.eyebrow, background: KR.neutral100, color: KR.neutral500}}>{t('home.features.comingSoon')}</span>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" style={{...styles.section, background: KR.neutral100}}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>Use cases</span>
            <h2 style={styles.sectionTitle}>{t('home.useCases.heading')}</h2>
          </div>
          <div style={styles.useCasesGrid} className="rpa-usecases-grid">
            <UseCaseCard label={t('home.useCases.label1')} text={t('home.useCases.case1')} />
            <UseCaseCard label={t('home.useCases.label2')} text={t('home.useCases.case2')} />
            <UseCaseCard label={t('home.useCases.label3')} text={t('home.useCases.case3')} />
            <UseCaseCard label={t('home.useCases.label4')} text={t('home.useCases.case4')} />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" style={{...styles.section, background: KR.neutral100}}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.highlights.title')}</span>
            <h2 style={styles.sectionTitle}>{t('home.highlights.heading')}</h2>
          </div>
          <div style={styles.highlightsGrid} className="rpa-highlights-grid">
            {['item1','item2','item3','item4','item5'].map((k) => (
              <div key={k} style={styles.highlightItem}>
                <span style={styles.highlightCheck}>
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M5 12.5L10 17.5L19 7.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={styles.highlightText}>{t(`home.highlights.${k}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={styles.ctaBand}>
        <h2 style={styles.ctaTitle}>{t('home.cta.line1')} <span style={{color: KR.primary400}}>{t('home.cta.line1Accent')}</span>{t('home.cta.line1Suffix')}</h2>
        <p style={styles.ctaSub}>{t('home.cta.sub')}</p>
        <div style={{...styles.storeButtons, justifyContent: 'center'}}>
          <a className="rpa-store-badge" href="https://apps.apple.com/app/id6757327457" target="_blank" rel="noopener noreferrer" style={styles.storeBadge}>
            <img src={`${basePath}badges/app-store-ko.svg`} alt="App Store에서 다운로드" style={styles.storeBadgeImg}/>
          </a>
          <a className="rpa-store-badge" href="https://play.google.com/store/apps/details?id=com.limgadeuk.randompickapp" target="_blank" rel="noopener noreferrer" style={styles.storeBadge}>
            <img src={`${basePath}badges/google-play-ko.svg`} alt="Google Play에서 다운로드" style={styles.storeBadgeImg}/>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={styles.footerBrand}>
              <span style={styles.footerLogo}></span>
              <span>{t('home.title')}</span>
            </div>
            <p style={styles.footerTag}>{t('home.footer.tag')}</p>
            <div style={styles.footerLinks}>
              <Link to="/terms-of-use" style={styles.footerLink}>{t('home.footer.termsOfUse')}</Link>
              <Link to="/privacy-policy" style={styles.footerLink}>{t('home.footer.privacyPolicy')}</Link>
              <a href="mailto:kkujuns@gmail.com" style={styles.footerLink}>{t('home.footer.contact')} — kkujuns@gmail.com</a>
            </div>
          </div>
          <div style={styles.footerMeta}>{t('home.footer.copyright')}</div>
        </div>
      </footer>
    </div>
  )
}

function PhoneFrame({ src, alt, width = 280 }) {
  const h = Math.round(width * 2.165)
  return (
    <div className="rpa-phone" style={{...styles.phoneFrame, width, height: h}}>
      <div style={styles.phoneFrameInner}>
        <img src={src} alt={alt} style={styles.phoneFrameImg}/>
      </div>
    </div>
  )
}

function FeatureRow({ num, title, desc, tags, img, alt, reverse }) {
  return (
    <div className={`rpa-feature-row${reverse ? ' reverse' : ''}`}>
      <div>
        <div style={styles.featureNum}>{num}</div>
        <h3 style={styles.featureTitle}>{title}</h3>
        <p style={styles.featureDesc}>{desc}</p>
        {tags && (
          <div style={styles.featureTags}>
            {tags.map((tg, i) => <span key={i} style={styles.featureTag}>{tg}</span>)}
          </div>
        )}
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <PhoneFrame src={img} alt={alt}/>
      </div>
    </div>
  )
}

function UseCaseCard({ label, text }) {
  return (
    <div className="rpa-usecase" style={styles.useCase}>
      <div style={styles.useCaseLabel}>{label}</div>
      <div style={styles.useCaseText}>{text}</div>
    </div>
  )
}

const styles = {
  container: {
    width: '100%', minHeight: '100vh', overflow: 'hidden',
    background: KR.neutral50, color: KR.neutral900,
    fontFamily: "'Pretendard','Inter',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
    letterSpacing: '0.01em',
    WebkitFontSmoothing: 'antialiased',
  },

  /* NAV */
  nav: {
    display:'flex', alignItems:'center', justifyContent:'space-between',
    padding: '20px 48px',
    borderBottom: `1px solid ${KR.neutral100}`,
    background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)',
    position:'sticky', top:0, zIndex: 50,
  },
  navBrand: { display:'flex', alignItems:'center', gap: 10, fontWeight: 700, fontSize: 17, color: KR.neutral900 },
  navLogo: {
    width: 32, height: 32, borderRadius: 9,
    background: `radial-gradient(120% 100% at 30% 20%, #ccf9b0 0%, ${KR.primary650} 60%, ${KR.primary800} 100%)`,
    boxShadow: `0 4px 10px rgba(31,201,28,0.25), inset 0 -2px 6px rgba(0,0,0,0.18)`,
  },
  navLinks: { display:'flex', alignItems:'center', gap: 32, fontSize: 14, fontWeight: 500, color: KR.neutral500 },
  navLink: { color: KR.neutral500, textDecoration:'none' },
  navCta: {
    display:'inline-flex', alignItems:'center', gap: 6,
    height: 38, padding:'0 16px',
    borderRadius: 999, background: KR.primary650, color: '#fff',
    fontWeight: 600, fontSize: 13, textDecoration:'none',
  },

  /* HERO */
  hero: {
    padding: '80px 48px 96px',
    background: `radial-gradient(60% 50% at 50% 0%, rgba(31,201,28,0.10) 0%, transparent 70%), ${KR.neutral50}`,
    textAlign:'center',
  },
  heroInner: { maxWidth: 880, margin:'0 auto' },
  eyebrow: {
    display:'inline-flex', alignItems:'center', gap: 8,
    fontSize: 12, fontWeight: 600, textTransform:'uppercase', letterSpacing:'0.08em',
    color: KR.primary800, background: KR.primary50,
    padding:'6px 12px', borderRadius: 999,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius:'50%', background: KR.primary650, boxShadow:'0 0 0 3px rgba(31,201,28,0.18)' },
  heroTitle: {
    fontSize: 'clamp(48px, 6.5vw, 76px)',
    fontWeight: 800, letterSpacing:'-0.025em', lineHeight: 1.05,
    color: KR.neutral900, marginTop: 24,
  },
  heroAccent: { color: KR.primary650 },
  heroTagline: { marginTop: 24, fontSize: 22, color: KR.neutral500, lineHeight: 1.5, fontWeight: 400 },
  storeButtons: { display:'flex', gap: 12, flexWrap:'wrap', justifyContent:'center', marginTop: 44 },
  storeBadge: { display:'inline-block', height: 72, textDecoration:'none' },
  storeBadgeImg: { height: 72, width:'auto', display:'block' },
  heroMeta: { marginTop: 22, display:'inline-flex', alignItems:'center', gap: 18, fontSize: 13, color: KR.neutral400 },
  heroMetaDot: { width: 3, height: 3, borderRadius:'50%', background: KR.neutral300, display:'inline-block' },

  phoneFrame: {
    background: '#0e0f12', borderRadius: 44, padding: 10,
    boxShadow: '0 30px 60px -15px rgba(25,27,31,0.22), 0 12px 24px -8px rgba(25,27,31,0.12), inset 0 0 0 1px rgba(255,255,255,0.06)',
    flexShrink: 0,
  },
  phoneFrameInner: { width: '100%', height:'100%', borderRadius: 34, overflow:'hidden', background:'#fff' },
  phoneFrameImg: { width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' },

  /* SECTION */
  section: { padding: '96px 48px' },
  sectionInner: { maxWidth: 1200, margin:'0 auto' },
  sectionHead: { textAlign:'center', marginBottom: 56, maxWidth: 1200, margin:'0 auto 56px' },
  sectionTitle: { fontSize: 40, fontWeight: 800, letterSpacing:'-0.01em', lineHeight: 1.2, color: KR.neutral900, marginTop: 16 },
  sectionSub: { marginTop: 14, fontSize: 17, color: KR.neutral500, lineHeight: 1.55, maxWidth: 560, marginLeft:'auto', marginRight:'auto' },

  /* FEATURE ROW */
  featureNum: {
    display:'inline-flex', width: 36, height: 36, alignItems:'center', justifyContent:'center',
    background: KR.primary650, color:'#fff', borderRadius: 10,
    fontWeight: 800, fontSize: 15, marginBottom: 18,
    fontVariantNumeric:'tabular-nums',
  },
  featureTitle: { fontSize: 36, fontWeight: 800, letterSpacing:'-0.015em', marginBottom: 14, lineHeight: 1.2, color: KR.neutral900 },
  featureDesc: { fontSize: 18, color: KR.neutral500, lineHeight: 1.6 },
  featureTags: { marginTop: 20, display:'flex', gap: 8, flexWrap:'wrap' },
  featureTag: { fontSize: 12, fontWeight: 600, padding:'6px 12px', borderRadius: 999, background: KR.neutral100, color: KR.neutral500 },

  /* USE CASES */
  useCasesGrid: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16 },
  useCase: {
    background:'#fff', border:`1px solid ${KR.neutral200}`,
    borderRadius: 16, padding:'28px 22px',
  },
  useCaseLabel: { fontSize: 11, fontWeight: 700, color: KR.primary700, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom: 12 },
  useCaseText: { fontSize: 16, lineHeight: 1.5, color: KR.neutral900, fontWeight: 500 },

  /* HIGHLIGHTS */
  highlightsGrid: { display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: '16px 32px', maxWidth: 880, margin:'0 auto' },
  highlightItem: {
    display:'flex', alignItems:'flex-start', gap: 14,
    padding:'20px 24px', background:'#fff',
    border:`1px solid ${KR.neutral200}`, borderRadius: 16,
  },
  highlightCheck: {
    flexShrink: 0, width: 24, height: 24, background: KR.primary650, borderRadius:'50%',
    display:'flex', alignItems:'center', justifyContent:'center',
  },
  highlightText: { fontSize: 15, color: KR.neutral900, fontWeight: 500, lineHeight: 1.5, paddingTop: 2 },

  /* CTA BAND */
  ctaBand: {
    padding:'96px 48px',
    background: `radial-gradient(80% 100% at 50% 0%, rgba(31,201,28,0.18) 0%, transparent 60%), ${KR.neutral900}`,
    color:'#fff', textAlign:'center',
  },
  ctaTitle: { fontSize: 48, fontWeight: 800, letterSpacing:'-0.02em', lineHeight: 1.15, marginBottom: 16 },
  ctaSub: { color: KR.neutral400, fontSize: 18, marginBottom: 36 },

  /* FOOTER */
  footer: { padding:'56px 48px 40px', background: KR.neutral900, color: KR.neutral400, fontSize: 13 },
  footerInner: { maxWidth: 1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr auto', gap: 32, alignItems:'start' },
  footerBrand: { display:'flex', alignItems:'center', gap: 10, color:'#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 },
  footerLogo: {
    width: 28, height: 28, borderRadius: 8,
    background: 'linear-gradient(90deg, #00f5a0 0%, #1bed48 100%)',
  },
  footerTag: { color: '#8d94a0', marginBottom: 24, maxWidth: 380, lineHeight: 1.6 },
  footerLinks: { display:'flex', gap: 24, flexWrap:'wrap' },
  footerLink: { color: KR.neutral300, textDecoration:'none' },
  footerMeta: { textAlign:'right', color: KR.neutral500, fontSize: 12, lineHeight: 1.7 },
}

export default Home

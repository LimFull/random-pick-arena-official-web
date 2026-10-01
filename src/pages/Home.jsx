import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const basePath = import.meta.env.BASE_URL

const APP_STORE_URL = 'https://apps.apple.com/app/id6757327457'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.limgadeuk.randompickapp'

/* 앱(web/src/App.css @theme)과 같은 디자인 토큰 */
const C = {
  canvas: '#f2f3f7',
  ink: '#16171d',
  ink2: '#474b57',
  ink3: '#6a6f7d',
  line: '#e2e4eb',
  brand: '#5457e0',
  brandTint: '#ececfd',
  brandInk: '#3b3ec4',
  gold: '#ffc53d',
  teamRed: '#d63b3b',
  teamBlue: '#2f6fe0',
  white: '#ffffff',
}

const FONT_DISPLAY = "'Bagel Fat One','Pretendard',-apple-system,BlinkMacSystemFont,system-ui,sans-serif"
const FONT_PIXEL = "'Silkscreen',ui-monospace,monospace"

/* 앱의 홈 화면 순서와 같다 */
const GAMES = {
  solo: ['horserace', 'carrace', 'lastchicken', 'roulette'],
  team: ['soccer', 'basketball', 'tennis'],
}

function Home() {
  const { t } = useTranslation()

  return (
    <div style={styles.container}>
      <style>{`
        .rpa-store-badge { transition: transform 120ms cubic-bezier(0.2,0,0,1), filter 120ms cubic-bezier(0.2,0,0,1); }
        .rpa-store-badge:hover { transform: translateY(-2px); filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18)); }
        .rpa-card { transition: all 200ms cubic-bezier(0.2,0,0,1); }
        .rpa-card:hover { border-color: ${C.brand} !important; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(22,23,29,0.06), 0 2px 4px rgba(22,23,29,0.04); }
        .rpa-nav-cta:hover { background: ${C.brandInk} !important; box-shadow: 0 0 0 4px rgba(84,87,224,0.18); }
        .rpa-feature-row { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 120px; }
        .rpa-feature-row.reverse { direction: rtl; }
        .rpa-feature-row.reverse > * { direction: ltr; }
        .rpa-hero-screens { display: flex; justify-content: center; align-items: flex-end; gap: 28px; margin-top: 80px; }
        .rpa-hero-screens .rpa-phone:nth-child(1) { transform: rotate(-4deg) translateY(28px); }
        .rpa-hero-screens .rpa-phone:nth-child(2) { transform: translateY(-12px); z-index: 2; }
        .rpa-hero-screens .rpa-phone:nth-child(3) { transform: rotate(4deg) translateY(28px); }
        .rpa-games-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        @media (max-width: 880px) {
          .rpa-section { padding: 72px 20px !important; }
          .rpa-nav { padding: 14px 20px !important; }
          .rpa-feature-row { grid-template-columns: 1fr !important; gap: 32px !important; margin-bottom: 80px !important; }
          .rpa-feature-row.reverse { direction: ltr; }
          .rpa-highlights-grid { grid-template-columns: 1fr !important; }
          .rpa-usecases-grid, .rpa-games-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rpa-hero-screens .rpa-phone { transform: none !important; }
          .rpa-hero-screens .rpa-phone:not(:nth-child(2)) { display: none; }
          .rpa-nav-links-secondary { display: none !important; }
        }
        @media (max-width: 520px) {
          .rpa-games-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav} className="rpa-nav">
        <div style={styles.navBrand}>
          <span style={styles.navLogo}>
            <img src={`${basePath}apple-touch-icon.png`} alt="" style={styles.logoImg} />
          </span>
          <span>{t('home.title')}</span>
        </div>
        <div style={styles.navLinks} className="rpa-nav-links-secondary">
          <a href="#features" style={styles.navLink}>{t('home.features.title')}</a>
          <a href="#games" style={styles.navLink}>{t('home.games.title')}</a>
          <a href="#usecases" style={styles.navLink}>{t('home.useCases.title')}</a>
          <a href="#highlights" style={styles.navLink}>{t('home.highlights.title')}</a>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={styles.navCta} className="rpa-nav-cta">
          {t('home.appStore')} →
        </a>
      </nav>

      {/* HERO */}
      <section style={styles.hero} className="rpa-section">
        <div style={styles.heroInner}>
          <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.eyebrow.available')}</span>
          <h1 style={styles.heroTitle}>
            {t('home.heroLine1')}<br />
            <span style={styles.heroAccent}>{t('home.heroLine2Accent')}</span>{t('home.heroLine2Suffix')}
          </h1>
          <p style={styles.heroTagline}>{t('home.tagline2')}</p>
          <StoreBadges />
          <div style={styles.heroMeta}>
            <span>iOS 14.0+</span><span style={styles.heroMetaDot}></span>
            <span>Android 8.0+</span><span style={styles.heroMetaDot}></span>
            <span>{t('home.eyebrow.free')}</span>
          </div>
        </div>

        <div className="rpa-hero-screens">
          <PhoneFrame src={`${basePath}screens/ready.png`} alt={t('home.features.ready.alt')} width={240} />
          <PhoneFrame src={`${basePath}screens/home.png`} alt={t('home.features.pick.alt')} width={260} />
          <PhoneFrame src={`${basePath}screens/result.png`} alt={t('home.features.result.alt')} width={240} />
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section} className="rpa-section">
        <div style={styles.sectionHead}>
          <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>About</span>
          <h2 style={styles.sectionTitle}>{t('home.about.title')}</h2>
          <p style={styles.sectionSub}>{t('home.about.text1').replace(/\n/g, ' ')} {t('home.about.text2').replace(/\n/g, ' ')}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{...styles.section, paddingTop: 0}} className="rpa-section">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.features.title')}</span>
            <h2 style={styles.sectionTitle}>{t('home.features.heading')}</h2>
          </div>

          {['pick', 'ready', 'result', 'multi'].map((k, i) => (
            <FeatureRow
              key={k}
              num={i + 1}
              title={t(`home.features.${k}.title`)}
              desc={t(`home.features.${k}.desc`)}
              tags={[1, 2, 3].map((n) => t(`home.features.${k}.tag${n}`))}
              img={`${basePath}screens/${k === 'pick' ? 'home' : k}.png`}
              alt={t(`home.features.${k}.alt`)}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* GAMES */}
      <section id="games" style={{...styles.section, background: C.white}} className="rpa-section">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.games.title')}</span>
            <h2 style={styles.sectionTitle}>{t('home.games.heading')}</h2>
          </div>

          {Object.entries(GAMES).map(([mode, ids]) => (
            <div key={mode} style={styles.modeGroup}>
              <div style={styles.modeHead}>
                <span style={{...styles.modeLabel, background: mode === 'solo' ? C.brand : C.ink}}>
                  {mode === 'team' && <TeamMark />}
                  {t(`home.games.${mode}.label`)}
                  <span style={styles.modeCount}>{ids.length}</span>
                </span>
                <span style={styles.modeCaption}>{t(`home.games.${mode}.caption`)}</span>
              </div>
              <div className="rpa-games-grid">
                {ids.map((id) => (
                  <GameCard
                    key={id}
                    img={`${basePath}keyart/${id}.png`}
                    name={t(`home.games.items.${id}.name`)}
                    tagline={t(`home.games.items.${id}.tagline`)}
                  />
                ))}
              </div>
            </div>
          ))}

          <div style={{textAlign:'center', marginTop: 8}}>
            <span style={{...styles.eyebrow, background: C.canvas, color: C.ink3}}>{t('home.games.comingSoon')}</span>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" style={styles.section} className="rpa-section">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>Use cases</span>
            <h2 style={styles.sectionTitle}>{t('home.useCases.heading')}</h2>
          </div>
          <div style={styles.useCasesGrid} className="rpa-usecases-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="rpa-card" style={styles.useCase}>
                <div style={styles.useCaseLabel}>{t(`home.useCases.label${n}`)}</div>
                <div style={styles.useCaseText}>{t(`home.useCases.case${n}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" style={{...styles.section, paddingTop: 0}} className="rpa-section">
        <div style={styles.sectionInner}>
          <div style={styles.sectionHead}>
            <span style={styles.eyebrow}><span style={styles.eyebrowDot}></span>{t('home.highlights.title')}</span>
            <h2 style={styles.sectionTitle}>{t('home.highlights.heading')}</h2>
          </div>
          <div style={styles.highlightsGrid} className="rpa-highlights-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} style={styles.highlightItem}>
                <span style={styles.highlightCheck}>
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M5 12.5L10 17.5L19 7.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span style={styles.highlightText}>{t(`home.highlights.item${n}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={styles.ctaBand} className="rpa-section">
        <h2 style={styles.ctaTitle}>{t('home.cta.line1')} <span style={{color: C.gold}}>{t('home.cta.line1Accent')}</span>{t('home.cta.line1Suffix')}</h2>
        <p style={styles.ctaSub}>{t('home.cta.sub')}</p>
        <StoreBadges />
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={styles.footerBrand}>
              <span style={styles.footerLogo}>
                <img src={`${basePath}apple-touch-icon.png`} alt="" style={styles.logoImg} />
              </span>
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

function StoreBadges() {
  return (
    <div style={styles.storeButtons}>
      <a className="rpa-store-badge" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={styles.storeBadge}>
        <img src={`${basePath}badges/app-store-ko.svg`} alt="App Store에서 다운로드" style={styles.storeBadgeImg}/>
      </a>
      <a className="rpa-store-badge" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={styles.storeBadge}>
        <img src={`${basePath}badges/google-play-ko.svg`} alt="Google Play에서 다운로드" style={styles.storeBadgeImg}/>
      </a>
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
        <div style={styles.featureNum}>{String(num).padStart(2, '0')}</div>
        <h3 style={styles.featureTitle}>{title}</h3>
        <p style={styles.featureDesc}>{desc}</p>
        <div style={styles.featureTags}>
          {tags.map((tg) => <span key={tg} style={styles.featureTag}>{tg}</span>)}
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <PhoneFrame src={img} alt={alt}/>
      </div>
    </div>
  )
}

function GameCard({ img, name, tagline }) {
  return (
    <div className="rpa-card" style={styles.gameCard}>
      <img src={img} alt="" style={styles.gameArt} />
      <div style={styles.gameBody}>
        <div style={styles.gameName}>{name}</div>
        <div style={styles.gameTagline}>{tagline}</div>
      </div>
    </div>
  )
}

/* 앱 팀전 아이콘의 빨강·파랑 블록 */
function TeamMark() {
  return (
    <span style={{display:'inline-flex', gap: 2}}>
      <span style={{width: 7, height: 10, borderRadius: 2, background: C.teamRed}} />
      <span style={{width: 7, height: 10, borderRadius: 2, background: C.teamBlue}} />
    </span>
  )
}

const styles = {
  container: {
    width: '100%', minHeight: '100vh', overflow: 'hidden',
    background: C.canvas, color: C.ink,
    fontFamily: "'Pretendard','Inter',-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
    letterSpacing: '0.01em', wordBreak: 'keep-all',
    WebkitFontSmoothing: 'antialiased',
  },

  /* NAV */
  nav: {
    display:'flex', alignItems:'center', justifyContent:'space-between', gap: 16,
    padding: '20px 48px',
    borderBottom: `1px solid ${C.line}`,
    background: 'rgba(242,243,247,0.85)', backdropFilter: 'blur(8px)',
    position:'sticky', top:0, zIndex: 50,
  },
  navBrand: { display:'flex', alignItems:'center', gap: 10, fontWeight: 800, fontSize: 17, color: C.ink },
  navLogo: {
    width: 32, height: 32, borderRadius: 9, overflow: 'hidden',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: C.white,
    boxShadow: `0 4px 10px rgba(84,87,224,0.22), inset 0 0 0 1px rgba(0,0,0,0.06)`,
    flexShrink: 0,
  },
  logoImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  navLinks: { display:'flex', alignItems:'center', gap: 32, fontSize: 14, fontWeight: 600 },
  navLink: { color: C.ink3, textDecoration:'none' },
  navCta: {
    display:'inline-flex', alignItems:'center', gap: 6, flexShrink: 0,
    height: 40, padding:'0 18px',
    borderRadius: 999, background: C.brand, color: '#fff',
    fontWeight: 800, fontSize: 13, textDecoration:'none',
  },

  /* HERO */
  hero: {
    padding: '80px 48px 96px',
    background: `radial-gradient(60% 50% at 50% 0%, rgba(84,87,224,0.14) 0%, transparent 70%), ${C.canvas}`,
    textAlign:'center',
  },
  heroInner: { maxWidth: 880, margin:'0 auto' },
  eyebrow: {
    display:'inline-flex', alignItems:'center', gap: 8,
    fontSize: 12, fontWeight: 700, textTransform:'uppercase', letterSpacing:'0.08em',
    color: C.brandInk, background: C.brandTint,
    padding:'6px 12px', borderRadius: 999,
  },
  eyebrowDot: { width: 6, height: 6, borderRadius:'50%', background: C.brand, boxShadow:'0 0 0 3px rgba(84,87,224,0.18)' },
  heroTitle: {
    fontFamily: FONT_DISPLAY,
    fontSize: 'clamp(44px, 6.5vw, 76px)',
    fontWeight: 800, letterSpacing:'-0.01em', lineHeight: 1.12,
    color: C.ink, marginTop: 24,
  },
  heroAccent: { color: C.brand },
  heroTagline: { marginTop: 24, fontSize: 'clamp(18px, 2.2vw, 22px)', color: C.ink2, lineHeight: 1.5, fontWeight: 500 },
  storeButtons: { display:'flex', gap: 12, flexWrap:'wrap', justifyContent:'center', marginTop: 44 },
  storeBadge: { display:'inline-block', height: 72, textDecoration:'none' },
  storeBadgeImg: { height: 72, width:'auto', display:'block' },
  heroMeta: { marginTop: 22, display:'inline-flex', alignItems:'center', gap: 18, fontSize: 13, color: C.ink3 },
  heroMetaDot: { width: 3, height: 3, borderRadius:'50%', background: C.ink3, display:'inline-block' },

  phoneFrame: {
    background: '#0e0f12', borderRadius: 44, padding: 10,
    boxShadow: '0 30px 60px -15px rgba(22,23,29,0.24), 0 12px 24px -8px rgba(22,23,29,0.12), inset 0 0 0 1px rgba(255,255,255,0.06)',
    flexShrink: 0,
  },
  phoneFrameInner: { width: '100%', height:'100%', borderRadius: 34, overflow:'hidden', background: C.canvas },
  phoneFrameImg: { width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' },

  /* SECTION */
  section: { padding: '96px 48px' },
  sectionInner: { maxWidth: 1200, margin:'0 auto' },
  sectionHead: { textAlign:'center', maxWidth: 1200, margin:'0 auto 56px' },
  sectionTitle: { fontFamily: FONT_DISPLAY, fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 800, lineHeight: 1.25, color: C.ink, marginTop: 16 },
  sectionSub: { marginTop: 14, fontSize: 17, color: C.ink2, lineHeight: 1.6, maxWidth: 560, marginLeft:'auto', marginRight:'auto' },

  /* FEATURE ROW */
  featureNum: {
    display:'inline-flex', minWidth: 44, height: 36, padding: '0 8px', alignItems:'center', justifyContent:'center',
    background: C.brand, color:'#fff', borderRadius: 10,
    fontFamily: FONT_PIXEL, fontWeight: 700, fontSize: 16, marginBottom: 18,
  },
  featureTitle: { fontFamily: FONT_DISPLAY, fontSize: 'clamp(28px, 3.4vw, 36px)', fontWeight: 800, marginBottom: 14, lineHeight: 1.25, color: C.ink },
  featureDesc: { fontSize: 18, color: C.ink2, lineHeight: 1.65 },
  featureTags: { marginTop: 20, display:'flex', gap: 8, flexWrap:'wrap' },
  featureTag: { fontSize: 13, fontWeight: 700, padding:'7px 13px', borderRadius: 10, background: C.white, border: `1px solid ${C.line}`, color: C.ink2 },

  /* GAMES */
  modeGroup: { marginBottom: 48 },
  modeHead: { display:'flex', alignItems:'center', gap: 14, flexWrap:'wrap', marginBottom: 18 },
  modeLabel: {
    display:'inline-flex', alignItems:'center', gap: 8,
    padding:'8px 14px', borderRadius: 999, color:'#fff',
    fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 800,
  },
  modeCount: { fontFamily: FONT_PIXEL, fontSize: 13, fontWeight: 700, opacity: 0.75 },
  modeCaption: { fontSize: 15, fontWeight: 600, color: C.ink2 },
  gameCard: {
    background: C.white, border: `1px solid ${C.line}`, borderRadius: 22, overflow: 'hidden',
  },
  gameArt: { width: '100%', aspectRatio: '2 / 1', objectFit: 'cover', imageRendering: 'pixelated', display: 'block' },
  gameBody: { padding: '16px 18px 20px' },
  gameName: { fontFamily: FONT_DISPLAY, fontSize: 22, fontWeight: 800, color: C.ink, lineHeight: 1.3 },
  gameTagline: { marginTop: 6, fontSize: 14, color: C.ink3, lineHeight: 1.5 },

  /* USE CASES */
  useCasesGrid: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16 },
  useCase: {
    background: C.white, border:`1px solid ${C.line}`,
    borderRadius: 22, padding:'28px 22px',
  },
  useCaseLabel: { fontSize: 11, fontWeight: 800, color: C.brandInk, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom: 12 },
  useCaseText: { fontSize: 16, lineHeight: 1.5, color: C.ink, fontWeight: 600 },

  /* HIGHLIGHTS */
  highlightsGrid: { display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: '16px 32px', maxWidth: 880, margin:'0 auto' },
  highlightItem: {
    display:'flex', alignItems:'flex-start', gap: 14,
    padding:'20px 24px', background: C.white,
    border:`1px solid ${C.line}`, borderRadius: 18,
  },
  highlightCheck: {
    flexShrink: 0, width: 24, height: 24, background: C.brand, borderRadius:'50%',
    display:'flex', alignItems:'center', justifyContent:'center',
  },
  highlightText: { fontSize: 15, color: C.ink, fontWeight: 600, lineHeight: 1.5, paddingTop: 2 },

  /* CTA BAND */
  ctaBand: {
    padding:'96px 48px',
    background: `radial-gradient(80% 100% at 50% 0%, rgba(84,87,224,0.35) 0%, transparent 60%), ${C.ink}`,
    color:'#fff', textAlign:'center',
  },
  ctaTitle: { fontFamily: FONT_DISPLAY, fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16 },
  ctaSub: { color: '#a9adb9', fontSize: 18 },

  /* FOOTER */
  footer: { padding:'56px 48px 40px', background: C.ink, color: '#a9adb9', fontSize: 13, borderTop: '1px solid rgba(255,255,255,0.06)' },
  footerInner: { maxWidth: 1200, margin:'0 auto', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 32, alignItems:'flex-start' },
  footerBrand: { display:'flex', alignItems:'center', gap: 10, color:'#fff', fontWeight: 800, fontSize: 16, marginBottom: 12 },
  footerLogo: {
    width: 28, height: 28, borderRadius: 8, overflow: 'hidden',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: C.white,
    flexShrink: 0,
  },
  footerTag: { color: '#8d92a0', marginBottom: 24, maxWidth: 380, lineHeight: 1.6 },
  footerLinks: { display:'flex', gap: 24, flexWrap:'wrap' },
  footerLink: { color: '#d4d6de', textDecoration:'none' },
  footerMeta: { color: C.ink3, fontSize: 12, lineHeight: 1.7 },
}

export default Home

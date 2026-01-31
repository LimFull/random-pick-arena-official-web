import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const basePath = import.meta.env.BASE_URL

function Home() {
  const { t } = useTranslation()

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.highlight}>{t('home.title')}</span>
          </h1>
          <p style={styles.heroTagline}>{t('home.tagline')}</p>
          <p style={styles.heroDescription}>
            {t('home.description').split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
          <div style={styles.storeButtons}>
            <a
              href="https://apps.apple.com/app/id6744257807"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.storeButton}
            >
              {t('home.appStore')}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kkujun.random_pick_arena"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.storeButton}
            >
              {t('home.googlePlay')}
            </a>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img
            src={`${basePath}1.png`}
            alt={t('home.mainScreenAlt')}
            style={styles.mainScreenshot}
          />
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('home.about.title')}</h2>
        <div style={styles.aboutContent}>
          <p style={styles.aboutText}>
            {t('home.about.text1').split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
          <p style={styles.aboutText}>
            {t('home.about.text2').split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('home.features.title')}</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}2.png`}
              alt={t('home.features.roulette.alt')}
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>{t('home.features.roulette.title')}</h3>
            <p style={styles.featureDesc}>{t('home.features.roulette.desc')}</p>
          </div>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}3.png`}
              alt={t('home.features.horseRace.alt')}
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>{t('home.features.horseRace.title')}</h3>
            <p style={styles.featureDesc}>
              {t('home.features.horseRace.desc').split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}4.png`}
              alt={t('home.features.soccer.alt')}
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>{t('home.features.soccer.title')}</h3>
            <p style={styles.featureDesc}>
              {t('home.features.soccer.desc').split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          </div>
        </div>
        <p style={styles.comingSoon}>{t('home.features.comingSoon')}</p>
      </section>

      {/* Use Cases Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('home.useCases.title')}</h2>
        <div style={styles.useCaseGrid}>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>👥</span>
            <p style={styles.useCaseText}>{t('home.useCases.case1')}</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>⚖️</span>
            <p style={styles.useCaseText}>{t('home.useCases.case2')}</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>🎲</span>
            <p style={styles.useCaseText}>{t('home.useCases.case3')}</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>👀</span>
            <p style={styles.useCaseText}>{t('home.useCases.case4')}</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('home.highlights.title')}</h2>
        <div style={styles.highlightsList}>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{t('home.highlights.item1')}</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{t('home.highlights.item2')}</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{t('home.highlights.item3')}</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{t('home.highlights.item4')}</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>{t('home.highlights.item5')}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <Link to="/terms-of-use" style={styles.footerLink}>{t('home.footer.termsOfUse')}</Link>
          <span style={styles.footerDivider}>|</span>
          <Link to="/privacy-policy" style={styles.footerLink}>{t('home.footer.privacyPolicy')}</Link>
        </div>
        <div style={styles.footerContact}>
          <p>{t('home.footer.contact')}: <a href="mailto:kkujuns@gmail.com" style={styles.emailLink}>kkujuns@gmail.com</a></p>
        </div>
        <p style={styles.copyright}>{t('home.footer.copyright')}</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '40px',
    flexWrap: 'wrap',
  },
  heroContent: {
    flex: '1 1 400px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  highlight: {
    background: 'linear-gradient(135deg, #ffd700 0%, #ffb347 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroTagline: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#fff176',
  },
  heroDescription: {
    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
    lineHeight: '1.8',
    marginBottom: '30px',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  storeButtons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  storeButton: {
    display: 'inline-block',
    padding: '15px 30px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: '30px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
  },
  heroImage: {
    flex: '1 1 350px',
    display: 'flex',
    justifyContent: 'center',
  },
  mainScreenshot: {
    maxWidth: '350px',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  section: {
    padding: '60px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#fff',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
  },
  aboutContent: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    lineHeight: '2',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.95)',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '25px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  featureImage: {
    width: '100%',
    maxWidth: '280px',
    borderRadius: '15px',
    marginBottom: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#ffd700',
  },
  featureDesc: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
  },
  comingSoon: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '1.1rem',
    color: '#fff176',
    fontWeight: '500',
  },
  useCaseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  useCaseCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '25px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  useCaseEmoji: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    display: 'block',
  },
  useCaseText: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: '1.5',
  },
  highlightsList: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: 'rgba(255, 255, 255, 0.95)',
  },
  checkIcon: {
    color: '#4ade80',
    fontSize: '1.3rem',
    fontWeight: '700',
  },
  footer: {
    marginTop: '40px',
    padding: '40px 20px',
    background: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  footerLinks: {
    marginBottom: '20px',
  },
  footerLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  footerDivider: {
    margin: '0 15px',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  footerContact: {
    marginBottom: '15px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  emailLink: {
    color: '#ffd700',
  },
  copyright: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.5)',
  },
}

export default Home

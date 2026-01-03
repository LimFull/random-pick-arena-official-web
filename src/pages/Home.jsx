import { Link } from 'react-router-dom'

const basePath = import.meta.env.BASE_URL

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.highlight}>랜덤픽 아레나</span>
          </h1>
          <p style={styles.heroTagline}>"누가 당첨될까요?"</p>
          <p style={styles.heroDescription}>
            결정해야 할 순간,<br />
            고민 대신 랜덤픽 아레나에게 맡겨보세요.
          </p>
          <div style={styles.storeButtons}>
            <a
              href="https://apps.apple.com/app/id6744257807"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.storeButton}
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kkujun.random_pick_arena"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.storeButton}
            >
              Google Play
            </a>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img
            src={`${basePath}1.png`}
            alt="랜덤픽 아레나 메인 화면"
            style={styles.mainScreenshot}
          />
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>랜덤픽 아레나는 이런 앱이에요</h2>
        <div style={styles.aboutContent}>
          <p style={styles.aboutText}>
            참가자 정보만 입력하면<br />
            결과가 자동으로 정해지고,<br />
            그 과정을 눈으로 보며 함께 즐길 수 있는 콘텐츠 앱이에요.
          </p>
          <p style={styles.aboutText}>
            사용자는 결과에 개입하지 않고<br />
            진행 과정을 관전하며<br />
            마지막 결과만 확인하면 돼요.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>다양한 콘텐츠</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}2.png`}
              alt="룰렛 화면"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>룰렛</h3>
            <p style={styles.featureDesc}>룰렛이 대신 골라줘요</p>
          </div>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}3.png`}
              alt="경마 화면"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>경마</h3>
            <p style={styles.featureDesc}>누가 먼저 도착할까?<br />자동으로 진행되는 랜덤 레이스</p>
          </div>
          <div style={styles.featureCard}>
            <img
              src={`${basePath}4.png`}
              alt="축구 화면"
              style={styles.featureImage}
            />
            <h3 style={styles.featureTitle}>축구</h3>
            <p style={styles.featureDesc}>팀은 랜덤, 결과는 자동<br />경기는 알아서 진행됩니다</p>
          </div>
        </div>
        <p style={styles.comingSoon}>더 많은 콘텐츠가 추가될 예정이에요!</p>
      </section>

      {/* Use Cases Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>이런 상황에 사용해 보세요</h2>
        <div style={styles.useCaseGrid}>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>👥</span>
            <p style={styles.useCaseText}>모임에서 순서나 역할을 정할 때</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>⚖️</span>
            <p style={styles.useCaseText}>팀을 공정하게 랜덤으로 나누고 싶을 때</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>🎲</span>
            <p style={styles.useCaseText}>가볍지만 재미있는 결정이 필요할 때</p>
          </div>
          <div style={styles.useCaseCard}>
            <span style={styles.useCaseEmoji}>👀</span>
            <p style={styles.useCaseText}>결과를 함께 지켜보는 콘텐츠가 필요할 때</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>랜덤픽 아레나의 특징</h2>
        <div style={styles.highlightsList}>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>사용자가 직접 조작하지 않는 자동 진행 방식</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>결과를 한눈에 볼 수 있는 시각적인 연출</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>이름만 입력하면 바로 시작하는 간편한 사용</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>일부 콘텐츠는 광고 시청 후 이용 가능</span>
          </div>
          <div style={styles.highlightItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>구매 시 광고 없이 이용 가능</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <Link to="/terms-of-use" style={styles.footerLink}>서비스 이용약관</Link>
          <span style={styles.footerDivider}>|</span>
          <Link to="/privacy-policy" style={styles.footerLink}>개인정보처리방침</Link>
        </div>
        <div style={styles.footerContact}>
          <p>문의: <a href="mailto:kkujuns@gmail.com" style={styles.emailLink}>kkujuns@gmail.com</a></p>
        </div>
        <p style={styles.copyright}>© 2025 랜덤픽 아레나. All rights reserved.</p>
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

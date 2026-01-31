import { useTranslation } from 'react-i18next'

function PrivacyPolicy() {
  const { t } = useTranslation()

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>{t('privacyPolicy.title')}</h1>

      <p style={{ marginBottom: '2rem' }}>{t('privacyPolicy.intro')}</p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article1.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article1.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article1.item1Title')}</strong><br />
            {t('privacyPolicy.article1.item1Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article1.item2Title')}</strong><br />
            {t('privacyPolicy.article1.item2Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article1.item3Title')}</strong><br />
            {t('privacyPolicy.article1.item3Content')}
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article2.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article2.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article2.item1Title')}</strong><br />
            {t('privacyPolicy.article2.item1Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article2.item2Title')}</strong><br />
            {t('privacyPolicy.article2.item2Content')}
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article3.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article3.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}><strong>{t('privacyPolicy.article3.item1')}</strong></li>
          <li style={{ marginBottom: '1rem' }}><strong>{t('privacyPolicy.article3.item2')}</strong></li>
          <li style={{ marginBottom: '1rem' }}><strong>{t('privacyPolicy.article3.item3')}</strong></li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article4.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article4.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article4.item1Title')}</strong><br />
            {t('privacyPolicy.article4.item1Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article4.item2Title')}</strong><br />
            {t('privacyPolicy.article4.item2Content')}
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article5.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article5.content1')}</p>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article5.content2')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article6.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article6.content1')}</p>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article6.content2')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article7.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article7.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article7.item1Title')}</strong><br />
            {t('privacyPolicy.article7.item1Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article7.item2Title')}</strong><br />
            {t('privacyPolicy.article7.item2Content')}
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>{t('privacyPolicy.article7.item3Title')}</strong><br />
            {t('privacyPolicy.article7.item3Content')}
          </li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article8.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article8.content')}</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>{t('privacyPolicy.article8.item1')}</li>
          <li>{t('privacyPolicy.article8.item2')}</li>
          <li>{t('privacyPolicy.article8.item3')}</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article8.optOut')}</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>{t('privacyPolicy.article8.android')}</li>
          <li>{t('privacyPolicy.article8.ios')}</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article9.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article9.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article9.item1')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article9.item2')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article9.item3')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article9.item4')}</li>
        </ol>
        <p style={{ marginBottom: '1rem', marginTop: '1rem' }}>{t('privacyPolicy.article9.method')}</p>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article9.correction')}</p>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article9.minor')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article10.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article10.content')}</p>
        <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', color: '#333' }}>
          <p style={{ margin: '0.25rem 0' }}><strong>{t('privacyPolicy.article10.officer')}</strong></p>
          <p style={{ margin: '0.25rem 0' }}>{t('privacyPolicy.article10.email')}</p>
        </div>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article10.contact')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article11.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article11.content')}</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article11.agency1')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article11.agency2')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article11.agency3')}</li>
          <li style={{ marginBottom: '0.5rem' }}>{t('privacyPolicy.article11.agency4')}</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>{t('privacyPolicy.article11.appeal')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('privacyPolicy.article12.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article12.content1')}</p>
        <p style={{ marginBottom: '1rem' }}>{t('privacyPolicy.article12.content2')}</p>
      </section>

      <section style={{ marginBottom: '2rem', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px', color: '#333' }}>
        <p style={{ margin: '0.25rem 0' }}><strong>{t('privacyPolicy.effectiveDate.announcement')}</strong></p>
        <p style={{ margin: '0.25rem 0' }}><strong>{t('privacyPolicy.effectiveDate.effective')}</strong></p>
      </section>
    </div>
  )
}

export default PrivacyPolicy

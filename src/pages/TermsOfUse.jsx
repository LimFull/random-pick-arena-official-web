import { useTranslation } from 'react-i18next'

function TermsOfUse() {
  const { t } = useTranslation()

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>{t('termsOfUse.title')}</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article1.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('termsOfUse.article1.content')}</p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{t('termsOfUse.article1.note')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article2.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article2.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article2.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article2.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article2.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article3.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item4')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item5')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article3.item6')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article4.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article4.item1')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article4.item1Sub1')}</li>
              <li>{t('termsOfUse.article4.item1Sub2')}</li>
              <li>{t('termsOfUse.article4.item1Sub3')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article4.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article4.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article4.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article5.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article5.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article5.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article5.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article6.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article6.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article6.item2')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article6.item2Sub1')}</li>
              <li>{t('termsOfUse.article6.item2Sub2')}</li>
              <li>{t('termsOfUse.article6.item2Sub3')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article6.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article6.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article7.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article7.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article7.item2')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article7.item2Sub1')}</li>
              <li>{t('termsOfUse.article7.item2Sub2')}</li>
              <li>{t('termsOfUse.article7.item2Sub3')}</li>
              <li>{t('termsOfUse.article7.item2Sub4')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article7.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article7.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article8.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article8.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article8.item2')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article9.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article9.item1')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article9.item1Sub1')}</li>
              <li>{t('termsOfUse.article9.item1Sub2')}</li>
              <li>{t('termsOfUse.article9.item1Sub3')}</li>
              <li>{t('termsOfUse.article9.item1Sub4')}</li>
              <li>{t('termsOfUse.article9.item1Sub5')}</li>
              <li>{t('termsOfUse.article9.item1Sub6')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article9.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article9.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article10.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article10.item1')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article10.item1Sub1')}</li>
              <li>{t('termsOfUse.article10.item1Sub2')}</li>
              <li>{t('termsOfUse.article10.item1Sub3')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article10.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article10.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article11.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('termsOfUse.article11.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>{t('termsOfUse.article11.item1')}</li>
          <li>{t('termsOfUse.article11.item2')}</li>
          <li>{t('termsOfUse.article11.item3')}</li>
          <li>{t('termsOfUse.article11.item4')}</li>
          <li>{t('termsOfUse.article11.item5')}</li>
          <li>{t('termsOfUse.article11.item6')}</li>
          <li>{t('termsOfUse.article11.item7')}</li>
          <li>{t('termsOfUse.article11.item8')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article12.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article12.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article12.item2')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article13.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article13.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article13.item2')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article14.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('termsOfUse.article14.content')}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article15.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article15.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>
            {t('termsOfUse.article15.item2')}
            <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>{t('termsOfUse.article15.item2Sub1')}</li>
              <li>{t('termsOfUse.article15.item2Sub2')}</li>
              <li>{t('termsOfUse.article15.item2Sub3')}</li>
              <li>{t('termsOfUse.article15.item2Sub4')}</li>
            </ol>
          </li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article15.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article15.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article16.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article16.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article16.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article16.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article16.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article17.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item4')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item5')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item6')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item7')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item8')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article17.item9')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article18.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article18.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article18.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article18.item3')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article18.item4')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article19.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article19.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article19.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article19.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article20.title')}</h2>
        <p style={{ marginBottom: '1rem' }}>{t('termsOfUse.article20.content')}</p>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>{t('termsOfUse.article20.item1')}</li>
          <li>{t('termsOfUse.article20.item2')}</li>
          <li>{t('termsOfUse.article20.item3')}</li>
          <li>{t('termsOfUse.article20.item4')}</li>
          <li>{t('termsOfUse.article20.item5')}</li>
          <li>{t('termsOfUse.article20.item6')}</li>
          <li>{t('termsOfUse.article20.item7')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article21.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article21.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article21.item2')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article22.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article22.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article22.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article22.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article23.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article23.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article23.item2')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article23.item3')}</li>
        </ol>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '2rem' }}>{t('termsOfUse.article24.title')}</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article24.item1')}</li>
          <li style={{ marginBottom: '1rem' }}>{t('termsOfUse.article24.item2')}</li>
        </ol>
      </section>
    </div>
  )
}

export default TermsOfUse

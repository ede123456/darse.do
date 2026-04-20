export default defineNuxtConfig({
  compatibilityDate: '2026-04-01',
  devtools: { enabled: true },
  runtimeConfig: {
    smtpHost: '',
    smtpPort: '587',
    smtpUser: '',
    smtpPass: '',
    smtpSecure: 'false',
    contactToEmail: 'info@darse.do',
    contactFromEmail: ''
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})

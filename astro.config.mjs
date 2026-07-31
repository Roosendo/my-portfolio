import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import solidJs from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://rosendo-garcia.vercel.app/',

  integrations: [
    solidJs(),
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } } })
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  output: 'static',
  adapter: vercel(),

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_EMAIL: envField.string({ context: 'server', access: 'public', optional: true }),
      RESEND_FROM_EMAIL: envField.string({ context: 'server', access: 'public', optional: true })
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})

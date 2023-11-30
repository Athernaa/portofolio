import type { DefaultSeoProps } from 'next-seo'
import { i18n } from '../../next-i18next.config'

export const NAME = 'Zakki Maulana'

export const config: Config = {
  isProd: process.env.NODE_ENV === 'production',
  defaultLocale: i18n.defaultLocale,
  revalidateDelay: 30,
  copyright: `© ${new Date().getFullYear()} ${NAME}`,
  seo: {
    title: `${NAME} // Fivem Server  Developer`,
    description:
      'Saya adalah seorang pengembang server FiveM yang berdedikasi, membangun dan memelihara server sejak 2019. Dengan pengalaman yang luas dalam ekosistem FiveM, saya berfokus pada penciptaan pengalaman bermain game yang kaya dan menarik. Selamat datang di portofolio pengembang perangkat lunak saya.',
    canonical: 'https://atherna.id',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://atherna.id',
      title: `${NAME} // Fivem Server  Developer`,
      description:
        'Saya adalah seorang pengembang server FiveM yang berdedikasi, membangun dan memelihara server sejak 2019. Dengan pengalaman yang luas dalam ekosistem FiveM, saya berfokus pada penciptaan pengalaman bermain game yang kaya dan menarik. Selamat datang di portofolio pengembang perangkat lunak saya.',
      site_name: `${NAME} // Fivem Server  Developer`,
      images: [
        {
          url: 'https://atherna.id/img/banner.png',
          width: 1200,
          height: 630,
          alt: 'chr-ge banner',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
    },
    languageAlternates: [
      { hrefLang: 'en', href: 'https://atherna.id' },
      { hrefLang: 'fr', href: 'https://atherna.id/fr' },
    ],
    additionalMetaTags: [
      { httpEquiv: 'x-ua-compatible', content: 'IE=edge; chrome=1' },
      { property: 'msapplication-TileColor', content: '#ffc40d' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#ffffff' },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#ffc40d',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'zakkimaulan4@atherna.id',
  email_link: 'mailto:zakkimaulan4@atherna.id',
  github: 'https://github.com/Athernaa',
  // discord: 'https://discord.gg/JZv2eAkTGk',
  linkedin: 'https://www.linkedin.com/in/chr-ge/',
  splitbee: {
    events: {
      heroButton: 'Hero Button',
      externalLink: 'External Link',
      projectLink: 'Project Link',
      backToTop: 'Back To Top',
      toggledDarkMode: 'Toggled Dark Mode',
      osc: 'Open Source Contribution',
      toggledMenu: 'Toggled Menu',
    },
  },
}

interface Config {
  isProd: boolean
  defaultLocale: string
  revalidateDelay: number
  copyright: string
  seo: DefaultSeoProps
  email: string
  email_link: string
  github: string
  linkedin: string
  splitbee: {
    events: {
      heroButton: string
      externalLink: string
      projectLink: string
      backToTop: string
      toggledDarkMode: string
      osc: string
      toggledMenu: string
    }
  }
}

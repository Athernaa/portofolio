import { SiNextdotjs, SiReact } from 'react-icons/si'
import HypzzImage from '@public/img/projects/pathem.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pathem Battlegrounds',
    description: {
      en: 'This is a fivem server project with a battlegrounds theme like PUBG that I developed with my team.',
      fr: 'Ini adalah project fivem server bertema battlegrounds seperti PUBG yang saya kembangkan bersama team saya.',
    },
    image: { src: HypzzImage },
    homepage: 'https://discord.gg/JZv2eAkTGk',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
    tags: [{ label: 'website', colorScheme: 'cyan' }],
    isShowcased: true,
  },
]

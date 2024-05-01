export const links = [  
  {
      name: 'About',
      hash: '#about'
  },
  {
    name: 'Exp.',
    hash: '#experience'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  // {
  //     name: 'Skills',
  //     hash: '#skills'
  // },
  {
      name: 'Contact',
      hash: '#contact'
  }
]

export const variantsText = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, 
      delay: 0.5
    }
  }
}

export const variantsFigure = {
  hidden: {
    width: 'full'
  },
  visible: {
    width: '0px',
    transition: {
      duration: 0.5
    }
  }
}

export const technologies = [
  {
    name: 'HTML5',
  },
  {
    name: 'CSS3',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'ReactJS',
  },
  {
    name: 'NextJS',
  },
  {
    name: 'NodeJS',
  },
  {
    name: 'ExpressJS',
  },
  {
    name: 'TailwindCSS',
  },
  {
    name: 'Zustand',
  },
  {
    name: 'Redux',
  },
  {
    name: 'Python',
  },
  {
    name: 'FastAPI',
  },
  {
    name: 'GO',
  },
  {
    name: 'MongoDB',
  },
  {
    name: 'Jira',
  },
  {
    name: 'GitHub',
  },
]

export const projects = [
  {
    title: 'We Book You landing page',
    description: 'This is the landing page for We Book You, an all-in-one corporate travel platform that allows the planning and self-management of all types of trips with destinations worldwide. With We Book You you can book flights, hotels and rent cars from a single platform, wherever you are.',
    image: '/images/WBY_landing_page.png',
    tech: 'NextJS - ReactJS - Framer Motion - React i18next',
    url: 'https://webookyou.com/'
  },
  {
    title: 'CarHub',
    description: 'A fully responsive car rental showcase using NextJS, with an advanced search and filtering functionality.',
    image: '/images/CarHub.png',
    tech: 'NextJS - ReactJS - Typescript',
    url: 'https://car-showcase-lake-eight.vercel.app/'
  },
  {
    title: 'Imaginify',
    description: 'A fully responsive Service as a Software application with AI features, credits and payment system. You can restore images, fill, remove objects, recolor and even remove the background.',
    image: '/images/Imaginify.png',
    tech: 'NextJS - ReactJS - Typescript - Clerk - TailwindCSS - Shadcn - MongoDB - Stripe',
    url: 'https://imaginify-mu-olive.vercel.app/'
  }
]
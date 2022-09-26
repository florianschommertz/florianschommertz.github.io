import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { PortfolioCard } from '@/components/PortfolioCard'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoBretagneurlaub from '@/images/logos/bretagneurlaub.svg'
import logo3kubik from '@/images/logos/3kubik.svg'
import logoIKV from '@/images/logos/ikv.svg'
import logoGillrath from '@/images/logos/gillrath-icons.svg'
import logoShapes from '@/images/logos/shapes.png'

import placeHolder from '@/images/logos/digital-noises.svg'

const projects2022 = [
  {
    name: 'Gillrath',
    description: `a.o.: WebComponents created with Vue / Vite for the cards
    integrated in WordPress with DIVI · CSS
    the project consist of five separate DevOps environments managed via
    GitHub (WebComponent Lib, Modules Plugin for DIVI, plugin for Custom-Post-Types and Taxonomies as well as Advanced-Custom-Fields
    Configuration, FilterPlugin, DIVI-Childtheme)
    `,
    link: {
      href: 'https://admin.gillrath.de/objekte/',
      label: 'admin.gillrath.de · wip',
    },
    logo: logoGillrath,
    client: 'Gillrath',
  },
  {
    name: 'shapes music',
    description: `A basic website with an HTML5 video and loop listener, three.js was
    used for the footer animation of the »logo s«`,
    link: { href: 'https://shapes-music.de/', label: 'shapes-music.de' },
    logo: logoShapes,
    client: 'schlicht und ergreifend',
  },
]
const projects2021 = [
  {
    name: 'Alumni IKV',
    description: `Multiuser Contacts App for the Institute of Plastics Processing<br />
    demonstration possible
    `,
    link: {
      href: 'https://alumni.ikv-aachen.de',
      label: 'alumni.ikv-aachen.de · private',
    },
    logo: logoIKV,
    client: 'IKV Aachen',
  },

  {
    name: 'Diaedge Platform, MMC Hardmetal',
    description: `freelance Vue.js developer work for Walbert-Schmitz / all 3D design
    and code is work of Walbert-Schmitz`,
    link: {
      href: 'https://diaedge-platform.mmc-hardmetal.com/',
      label: 'diaedge-platform.mmc-hardmetal.com/',
    },
    client: 'Walbert-Schmitz',
    logo: placeHolder,
  },
  {
    name: '3kubik',
    description: `a CMS that makes use of advanced features of WordPress' mulitpurpose
    theme Divi, it features a »KPI-Tool« which is developed as a VUE.js
    REST driven calculator plugin`,
    link: {
      href: 'https://3kubik.com/',
      label: '3kubik.com',
    },
    client: '3kubik',
    logo: logo3kubik,
  },
  {
    name: 'Ferienhäuser Karin Minor',
    description: `a Holidayhome-Rental-Website, Nuxt.js, extensive use of taxonomy and
    custom post types. Design by Schroeder-And-Friends, SEO concept by
    bretagneurlaub.de`,
    link: {
      href: 'https://bretagneurlaub.de/',
      label: 'bretagneurlaub.de',
    },
    client: 'Bretagneurlaub',
    logo: logoBretagneurlaub,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

// constructor(props) {
//   super(props);
//   this.toggleJobs = this.toggleJobs.bind(this);
//   this.state = { jobs: false };
// }

// toggleJobs() {

//   this.setState({ jobs: !jobs });

// }

// if (jobs) {
//   button = <button onClick={this.toggleJobs}> SHow</button>
// } else {
//   button = <button onClick={this.toggleJobs}> Hide </button>
// }
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Florian Schommertz</title>
        <meta name="description" content="Some interesting jobs are:" />
      </Head>
      <SimpleLayout
        title="Some interesting jobs"
        intro="I've developed a lot of projects in since 1998 …"
      >
        <h2 className="mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          2022
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects2022.map((project) => (
            <PortfolioCard
              key={project.name}
              name={project.name}
              logo={project.logo}
              linkHref={project.link.href}
              description={project.description}
              client={project.client}
              linkLabel={project?.link?.label}
            ></PortfolioCard>
          ))}
        </ul>
        <h2 className="mt-20 mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          2021
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects2021.map((project) => (
            <PortfolioCard
              key={project.name}
              name={project.name}
              logo={project.logo}
              linkHref={project.link.href}
              description={project.description}
              client={project.client}
              linkLabel={project?.link?.label}
            ></PortfolioCard>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

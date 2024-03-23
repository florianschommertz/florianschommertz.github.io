import Image from 'next/image'
import Head from 'next/head'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { PortfolioCard } from '@/components/PortfolioCard'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoBretagneurlaub from '@/images/logos/bretagneurlaub.svg'
import logo3kubik from '@/images/logos/3kubik.svg'
import logoIKV from '@/images/logos/ikv.svg'
import logoGillrath from '@/images/logos/gillrath-icons.svg'
import logoShapes from '@/images/logos/shapes.png'
import logoJohnDiva from '@/images/logos/john-diva-logo-2x.png'
import logoSigmasoft from '@/images/logos/sigma_logo_Header.svg'
import logoKangaroo from '@/images/logos/kangaroo.svg'
import logoFDISecrets from '@/images/logos/fdi-secrets.svg'
import logoNiels from '@/images/logos/niels.svg'

import placeHolder from '@/images/logos/digital-noises.svg'

import imgBenny from '@/images/photos/benny.jpeg'
import imgEspresso from '@/images/photos/espresso-img_6882.jpeg'
import imgSunglasses from '@/images/photos/sunglas-down-img_7392.jpeg'
import imgSmokie from '@/images/photos/smokie-img_6599.jpeg'
import imgPortrait from '@/images/photos/portrait-img_2750.jpeg'

const imageArray = [
  {
    imageData: imgBenny,
    alt: 'Black Cat Benny on Lap and Laptop',
  },
  {
    imageData: imgEspresso,
    alt: 'Espresso addicition, Florian stuck his nose in coffee beans.',
  },
  {
    imageData: imgSunglasses,
    alt: 'Sunglasses pushed down and looking over the glasses, hat.',
  },
  {
    imageData: imgSmokie,
    alt: 'Smokie, a british shorthair cat, looking at the camera and Florian holding it.',
  },
  {
    imageData: imgPortrait,
    alt: 'Portrait of Florian looking straight into the camera., 3 day beard, big nose, non retouched eyes.',
  },
]

const Photos = () => {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {imageArray.map((e, imageIndex) => (
          <div
            key={e.imageData.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={e.imageData}
              alt={e.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
const projects2024 = [
  {
    name: 'Event iOS App',
    description: `Quick overview:\n
    • Database driven event app with a custom API
    • Performance optimization for a smooth user experience, with help of localforage`,
    link: {
      href: 'https://event.ikv-aachen.de/',
      label: 'event.ikv-aachen.de · work in progress',
    },
    logo: logoIKV,
    client: 'Evangelische Kirchengemeinde Ehrenfeld',
  },
]
const projects2023 = [
  {
    name: 'Evangelische Kirchengemeinde Ehrenfeld',
    description: `Some notable elements of the project include:\n
    • HTMX driven filter and search (with WordPress custom taxonomies)
    • Extensive and elegant use of Advanced Custom Fields in Gutenberg Blocks`,
    link: {
      href: 'https://www.evangelisch-ehrenfeld.de/',
      label: 'evangelisch-ehrenfeld.de',
    },
    logo: placeHolder,
    client: 'Evangelische Kirchengemeinde Ehrenfeld',
  },
  {
    name: 'Gillrath - Texturgenerator',
    description: `VUE.js 3 driven seamless tilegenerator:\n
    • from brickwall to tile generator with bumbmaps`,
    link: {
      href: 'https://texturgenerator.gillrath.de',
      label: 'texturgenerator.gillrath.de',
    },
    logo: logoGillrath,
    client: 'Gillrath',
  },
]
const projects2022 = [
  {
    name: 'Gillrath',
    description: `Some notable elements of the project include:\n
    • WebComponents created with Vue/Vite for the cards integrated in WordPress with DIVI and CSS
• The project consists of five separate DevOps environments managed via GitHub, including a WebComponent Lib, Modules Plugin for DIVI, plugin for Custom-Post-Types and Taxonomies, Advanced-Custom-Fields Configuration, FilterPlugin, and DIVI-Childtheme.`,
    link: {
      href: 'https://gillrath.de/objekte/',
      label: 'gillrath.de · work in progress',
    },
    logo: logoGillrath,
    client: 'Gillrath',
  },
  {
    name: 'shapes music',
    description: `For this simple website, I included an HTML5 video with a loop listener and used three.js for a cool footer animation featuring the »logo s«.`,
    link: { href: 'https://shapes-music.de/', label: 'shapes-music.de' },
    logo: logoShapes,
    client: 'schlicht und ergreifend',
  },

  {
    name: 'Measx',
    description: `WIP. - A Nuxt JS Project. Content is added at the time being.`,
    link: {
      href: 'https://nuxt-dev.measx.com/de/loesungen/prufstandstechnik/',
      label: 'nuxt-dev.measx.com · wip',
    },
    logo: placeHolder,
    client: 'Measx',
  },
]
const projects2021 = [
  {
    name: 'Alumni IKV',
    description: `Multiuser Contacts App for the Institute of Plastics Processing /
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
    custom-post-types. Design by Schroeder-And-Friends, SEO concept by
    bretagneurlaub.de`,
    link: {
      href: 'https://www.bretagneurlaub.de/de/',
      label: 'bretagneurlaub.de',
    },
    client: 'Bretagneurlaub',
    logo: logoBretagneurlaub,
  },
  {
    name: 'Schön!',
    description: `a WordPress-Website for an international magazine, coolfeatures are shortcode and extensive use of DIVI-builder-features – work in progress`,
    link: {
      href: 'https://schon.ch/',
      label: 'schon.ch',
    },
    client: 'Schön! - Switzerland',
    logo: placeHolder,
  },
]

const projects2020 = [
  {
    name: 'Gillrath Jobs',
    description: `A Nuxt JS Jobboard · Optimized for speed`,
    link: {
      href: 'https://jobs.gillrath.de/',
      label: 'jobs.gillrath.de',
    },
    logo: logoGillrath,
    client: 'Gillrath',
  },
]
const projectsBefore = [
  {
    name: 'Sequent Medical',
    description: `An iOS App for neuroradiologist to treat aneurysms. - 2012 build with jQuery-mobile and Cordova`,
    link: {
      href: 'https://download.cnet.com/Sequent-Medical/3000-2129_4-76978913.html',
      label:
        'link to download.cnet.com, because the app is not available in the app store anymore',
    },
    logo: placeHolder,
    client: 'ZPLUSM · Sequent Medical',
  },
  {
    name: 'John Diva',
    description: `We built a band website using nuxt/vue.js (Version 2) as a headless WordPress, with a simple PHP-Fan Login. The links leading to "Downloads" are Nuxt, while the others are outbound or WordPress.`,
    link: {
      href: 'https://johndiva.com/',
      label: 'John Diva (2018)',
    },
    logo: logoJohnDiva,
    client: 'schlicht und ergreifend',
  },
  {
    name: 'Blog for Sigmasoft',
    description: `We designed and built a custom WordPress blog theme from scratch, featuring a frontpage with various layout blocks for the blog articles. The use of CSS grid was bleeding edge at the time of development. The theme was integrated into the client's default CMS, and all navigation links lead to the current live site.`,
    link: {
      href: 'https://portfolio.digital-noises.de/blog.sigmasoft.de/',
      label: 'link to my portfolio/archive, the blog is not available anymore',
    },
    logo: logoSigmasoft,
    client: 'Sigmasoft',
  },
  {
    name: 'FDI Secrets',
    description: `PR-Website for a german fashion school.`,
    link: {
      href: 'https://portfolio.digital-noises.de/www.fdi-secrets.de/',
      label: 'link to my portfolio/archive, project has been taken down',
    },
    logo: logoFDISecrets,
    client: 'Fashion Design Institute',
  },

  {
    name: 'Kangaroo',
    description: `A recruiter website based on VueJS and Foundation (CSS) · (The Current Livesite is maintained and altered by client IT.)`,
    link: {
      href: 'https://portfolio.digital-noises.de/kangaroo.de/',
      label: 'Kangaroo',
    },
    logo: logoKangaroo,
    client: 'Schlicht und ergreifend',
  },
  {
    name: 'Niels Gaury',
    description: `Portfolio-Website for semi professional photographer Niels and my evaluation project for VueJS. I decided long on the »react/vue« question (after a brief experience with Angular 1).  I have not regretted this decision, as React lost the battle for me due to Facebook's licensing at the time.`,
    link: {
      href: 'https://www.nielsgaury.de/',
      label: 'Niels Gaury (2018)',
    },
    logo: logoNiels,
    client: 'Niels Gaury',
  },
  {
    name: 'All others (most outdated/ renewed) - Mostly WordPress Projects',
    description: `chang3r.com · ironmaiden.de (Live After Death DVD Release) · kylie.de (Kylie Minogue) · johnnylogan.com (Johnny Logan) · diagnostik-hilft.de · zplusm.de ·  sigmasoft.de · bvsa.de · musikkeller.com · auge-wegberg.de · hifi-schluderbacher.de · oliebe.com · darius-mattheisen.de · hoehler-neumann.de · curlsfight.com (Unilevers Beauty Brand Tigi) · parfuemerie-meller.de · costrade.at · buerofueraufmerksamkeit.de · tueschenbroicher-muehle.de · ecoseaker.nz · bronk-objekte.de · notare-svk.de · pettersson-und-findus.de · dassams.de · dieolichis.de · funke-buch.de · malunamondschein.de · norbert-greuel.de · dietributevonpanem.de · oberste-beulmann.de · hospizstiftung-aachen.de · jks-aachen.de · fashion-design-institut.de · praxis-am-rathausplatz.de · fahrschulmanufaktur.de · geheim-garten.de · european-inspire.com (Kyocera Event Website) · oldcountryhousenz.com (Christchurch Hostel) ·
    simpatec.de · georg-maas.eu · tp-rechtsanwaelte.de · sjs-kanzlei.de · tp-rechtsanwaelte.de · abtei-gerleve.de · syst-beratung.com · schmitz-vornmoor.de · idgmbh.de · habets-aachen.de · landhausbrender.de · startarevolution.de · vitalliin.de · minigolf-wegberg.de · anna-maria-maile.de · homecare-aachen.de · schlemmermarkt-wassenberg.de · savanald.de · your-agency.com · auto-service-twardowski.de · ena-beratung.de · atelieretage-wegberg.de · stormheart.de · marahwoolf.de · animox-buch.de · cjdaugherty.de · oetinger-ohrwuermchen.de · ghetto-bitch.de (Youth Book) · secrets-trilogie.de · buecherstern.de · monday-club.de · zytologie-buettner.de · michels-blumen.de · frohn-gesundheit.de · kgsoiron.de ·  jansen-textil.de · auletta.de · vitalpraxis-roetgen.de · talkcitizen.org · loening.eu · physio-csw.de · ebens.de · ophover-muehle.de · sina-lindberg.de · d.iorama.de · spg-steiner.com · i-love-tigi.de/colourtrip · comnia.de · optik-alberty.de · darius-mattheisen.de · praxis-theodor-heuss.de · schon.ch
    `,
    link: {
      href: 'https://www.digital-noises.com/',
      label: 'Digital Noises',
    },
    logo: placeHolder,
    client:
      'EMI Music Germany, Squarefashion, schlicht und ergreifend, ZPLUSM  and many more ',
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
        intro="I've developed and maintained a lot of projects  …"
      >
        <h2 className="mb-3 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          2024
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects2024.map((project) => (
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
        <h2 className="mb-3 mt-20 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          2023
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects2023.map((project) => (
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
        <h2 className="mb-3 mt-20 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
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
        <h2 className="mb-3 mt-20 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
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
        <h2 className="mb-3 mt-20 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          2020
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects2020.map((project) => (
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
        <h2 className="mb-3 mt-20 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Old Projects
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsBefore.map((project) => (
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
      <Photos />
    </>
  )
}

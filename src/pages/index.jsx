import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  SkypeInIcon,
  ICloudIcon,
  PhoneIcon,
  AddressIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function AddressLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        {/* <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" /> */}
        <span>{children}</span>
      </Link>
    </li>
  )
}
function skill({ ranking }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        {/* <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" /> */}
        <span>{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Florian Schommertz</title>
        <meta
          name="description"
          content="I’m Florian Schommertz. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Florian Schommertz. I live in Germany and New Zealand.
              <br />
              web · social media · av
              <br />
              design / ux / code / seo
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                While being self-employed for over twenty years now. My clients
                appreciate the way I approach their ideas. I have called my
                portfolio' problem solving' for eight years now (the last time I
                worked on my company website digital-noises.com).
              </p>
              <p>
                Since then, my wife and I have been overwhelmed by our work. We
                created a book, launched about three bigger and ~7 smaller
                websites per year, and saved about 50 clients from penalties for
                GDPR privacy regulations. These jobs include WooCommerce Shops
                with DIVI and a multisite WordPress theme/setup for a large
                German publisher called Oetinger-Verlag.
              </p>

              <p>
                I've built an ever-growing connection to New Zealand and its
                people since the first time I visited in 2001. Since then, I
                have travelled and stayed in every significant city and region
                for extended periods each year while remotely running my german
                online business.
              </p>

              <h2>Skills</h2>

              <ul>
                <li style={{ '--ranking': '75' }}>JavaScript</li>
                <li style={{ '--ranking': '80' }}>Vue.js</li>
                <li style={{ '--ranking': '90' }}>WordPress</li>
                <li style={{ '--ranking': '80' }}>PHP</li>
                <li style={{ '--ranking': '60' }}>MySQL / MariaSQL</li>
                <li style={{ '--ranking': '98' }}>CSS / animation</li>
                <li style={{ '--ranking': '90' }}>SASS / SCSS</li>
                <li style={{ '--ranking': '90' }}>HTML</li>
                <li style={{ '--ranking': '60' }}>SVG</li>
                <li style={{ '--ranking': '80' }}>SEO</li>
                <li style={{ '--ranking': '80' }}>Performance</li>
                <li style={{ '--ranking': '30' }}>Threejs</li>
                <li style={{ '--ranking': '75' }}>PWA</li>
                <li style={{ '--ranking': '75' }}>SPA</li>
                <li style={{ '--ranking': '50' }}>Docker</li>
                <li style={{ '--ranking': '65' }}>git</li>
                <li style={{ '--ranking': '70' }}>RESTful APIs</li>
                <li style={{ '--ranking': '70' }}>JSON</li>
                <li style={{ '--ranking': '35' }}>GraphQl</li>
                <li style={{ '--ranking': '85' }}>jQuery</li>
                <li>Basic knowledge:</li>
                <li>Node.js, i18n, SSR, Vite, Vitepress, Elementor, Drupal</li>
              </ul>
              <h3 className="mt-5">Design &amp; Concept</h3>
              <ul>
                <li v-ranking="95">Illustrator</li>
                <li v-ranking="90">Lightroom</li>
                <li v-ranking="85">Photoshop</li>
                <li v-ranking="80">Indesign</li>
                <li v-ranking="60">Adobe XD</li>
                <li v-ranking="70">Ui/UX</li>
              </ul>
              <h3 className="mt-5">Audio / Video</h3>
              <ul>
                <li v-ranking="100">Logic Audio</li>
                <li v-ranking="50">Native Instruments</li>
                <li v-ranking="60">Final Cut</li>
                <li v-ranking="60">Motion</li>
              </ul>
              <h3 className="mt-5">UI/UX/CI/CJ/CX</h3>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/digitalnoisesco/"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/digital_noises/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/florianschommertz/"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/florianschommertz/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:florian@schommertz.com"
                icon={MailIcon}
                className="mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                florian@schommertz.com
              </SocialLink>
              <SocialLink
                href="skype:florianschommertz"
                icon={SkypeInIcon}
                className="mt-4"
              >
                florianschommertz
              </SocialLink>
              <SocialLink
                href="message:schommertz@icloud.com"
                icon={ICloudIcon}
                className="mt-4"
              >
                schommertz@icloud.com
              </SocialLink>
              <SocialLink
                href="tel:+4924343083890"
                icon={PhoneIcon}
                className="mt-4"
              >
                +49.2434.30 83 890
              </SocialLink>
              <SocialLink
                href="#"
                icon={AddressIcon}
                className="mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                St-Rochusweiler 13a · 41844 Wegberg · Germany
              </SocialLink>

              {/* 2434.30 83 890 nz: +64 22 089 5068 street: St-Rochusweiler 13a
                PO/City: 41844 Wegberg USt-IdNr.: DE195532753
                https://schommertz.com */}
              {/* <SocialLink
                href="mailto:florian@schommertz.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                florian@schommertz.com
              </SocialLink> */}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

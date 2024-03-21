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
  RedditIcon,
  SkypeInIcon,
  ICloudIcon,
  PhoneIcon,
  AddressIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

import imgGuitar from '@/images/photos/guitar-img_9609.jpeg'
import imgKiwiRail from '@/images/photos/force-title-case-kiwi-rail-img_0583.jpeg'
import imgHilarious from '@/images/photos/st-hilarious.jpeg'
import imgKaimanawa1 from '@/images/photos/kaimanawa-1-img_3631.jpeg'
import imgKaimanawa2 from '@/images/photos/kaimanawa-2-fun-img_3629.jpeg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          imgGuitar,
          imgKiwiRail,
          imgHilarious,
          imgKaimanawa1,
          imgKaimanawa2,
        ].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

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
          content="I’m Florian Schommertz. Audio and Video made it to the web  woho!"
        />
      </Head>
      <Photos />

      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                priority="false"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi! I’m Florian Schommertz. I'm a technology nerd, who actually
              speaks human.
              <br />
              web · social media · av
              <br />
              design / ux / code / seo
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h2>Nice to meet you!</h2>

              <p>
                Don't hesitate to reach out to me via phone, text, or email.
              </p>
              <p>
                If you need some problem solving, that's my specialty. With a
                mouse, keyboard, and brain at my disposal, I am skilled at
                listening to your and your customers' unique needs and finding
                solutions.
              </p>
              <p>
                If you want to learn more about my problem-solving skills,
                checkout my old business website of 2014 at{' '}
                <a href="https://digital-noises.com" className="underline">
                  digital-noises.com
                </a>
              </p>

              <p>
                I recently designed a stunning{' '}
                <a
                  href="https://archive2022.gillrath.de/wp-content/uploads/edition-iv/"
                  className="underline"
                >
                  graphic architecture design book
                </a>{' '}
                for{' '}
                <a href="https://gillrath.de" title="" className="underline">
                  Gillrath
                </a>{' '}
                a clay brick manufacturer in Germany. In addition, we launch
                around ten websites per year.
              </p>
              <p>
                Some of the jobs I have worked on involve setting up WooCommerce
                shops with DIVI, which provides a solid foundation for these
                projects. Other jobs involve creating custom setups, such as a
                multisite WordPress theme/setup for a large German publisher
                called Oetinger-Verlag.
              </p>

              <p>
                Living in two incredible countries, Germany and New Zealand, has
                been a truly fortunate experience for me. Since my first visit
                to NZ in 2001, I have developed a deep connection with the
                people and the country. My wife and I have been lucky enough to
                travel to and stay in every major city and region in NZ for
                extended periods each year, all while running my German online
                business remotely.
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
                <li>
                  Node.js, i18n, 11ty, SSR, Vite, Vitepress, Elementor, Drupal
                </li>
              </ul>
              <h3 className="mt-5">Design &amp; Concept</h3>
              <ul>
                <li v-ranking="95">Illustrator</li>
                <li v-ranking="90">Lightroom</li>
                <li v-ranking="80">Photoshop</li>
                <li v-ranking="90">Indesign</li>
                <li v-ranking="60">Adobe XD</li>
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
                <strike>Follow on Twitter</strike>
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/digital_noises/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.reddit.com/user/digitalnoises/"
                icon={RedditIcon}
                className="mt-4"
              >
                Follow on Reddit
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
                href="imessage:schommertz@icloud.com"
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
                href="tel:+64220895068"
                icon={PhoneIcon}
                className="mt-4"
              >
                +64.22 089 5068
              </SocialLink>
              <SocialLink
                href="#"
                icon={AddressIcon}
                className="mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Holunderweg 2 · 41372 Niederkrüchten · Germany
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
// <!--
//                 Last but and saved about 50
//                 clients from penalties for GDPR privacy regulations.
//                 -->

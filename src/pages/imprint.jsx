import Image from 'next/image'

import Head from 'next/head'
import clsx from 'clsx'
import { Container } from '@/components/Container'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import imgBenny from '@/images/photos/benny.jpeg'
import imgEspresso from '@/images/photos/espresso-img_6882.jpeg'
import imgSunglasses from '@/images/photos/sunglas-down-img_7392.jpeg'
import imgSmokie from '@/images/photos/smokie-img_6599.jpeg'
import imgPortrait from '@/images/photos/portrait-img_2750.jpeg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[imgPortrait, imgSmokie, imgEspresso, imgSunglasses, imgBenny].map(
          (image, imageIndex) => (
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
          )
        )}
      </div>
    </div>
  )
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Legal - Florian Schommertz</title>
        <meta name="description" content="Florian Schommertz: Imprint." />
      </Head>
      <Photos />
      <SimpleLayout
        title="Imprint."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <section className="mt-6 flex max-w-prose flex-col gap-y-[1.2em]  text-base text-zinc-600 dark:text-zinc-400 sm:mt-32">
          <h1>Site Notice</h1>
          <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
          <p>
            Florian Schommertz
            <br />
            Digital Noises
            <br />
            Holunderweg 2<br />
            41372 Niederkr&uuml;chten
          </p>
          <h2>Contact</h2>
          <p>
            Phone: +49 24 34.30 83 890
            <br />
            E-mail: florian@schommertz.com
          </p>
          <h2>VAT ID</h2>
          <p>
            Sales tax identification number according to Sect. 27 a of the Sales
            Tax Law:
            <br />
            DE195532753 (Germany)
          </p>
          <h2>EU dispute resolution</h2>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Our e-mail address can be found above in the site notice.
          </p>
          <h2>
            Dispute resolution proceedings in front of a consumer arbitration
            board
          </h2>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings in front of a consumer arbitration board.
          </p>
        </section>
      </SimpleLayout>
    </>
  )
}

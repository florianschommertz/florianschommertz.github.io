import Image from 'next/image'

import Head from 'next/head'
import clsx from 'clsx'

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
        <title>Uses - Florian Schommertz</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <Photos />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          {/* <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="LG HDR 4K">32" and hardware calibrated</Tool>



            </ToolsSection> */}
          <ToolsSection title="Development tools">
            <Tool title="Alfred">
              A Mac without Alfred is workstation in chains. — I use the
              functions keys just to launch about every programm, and the
              snippet manager is fantastic.
            </Tool>
            <Tool title="MAMP">
              Mamp on Mac is the easiest Tool to get up n running quick.
            </Tool>
            <Tool title="Codekit">
              Grunt or Gulp - do it with style on a Mac!
            </Tool>
            <Tool title="Visual Studio Code">
              Slow? Not on M1. It has all the features you need.
            </Tool>
            <Tool title="Nova">
              Last but not least — Panic's Nova editor is the most beautiful
              thing - as expected. Whenever I can avoid Visual Studio Code
            </Tool>
            <Tool title="VueDevTools">
              Brave with Vue Devtools is the best browser for Vue development.
            </Tool>
            <Tool title="Docker">you knew that!</Tool>
            <Tool title="Git">you knew that as well!</Tool>
            <Tool title="Vite">because it rhymes!</Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Illustrator">
              Even though Figma and Invision are great products. The integration
              of Illustrator with the Adobe Suite is still unbeatable. — Why?
              Because Masks! (This is a full sentence)
              <br />
              The tools in Illustrator, particulary masks are awesome.
            </Tool>
            <Tool title="Lightroom">
              As a semi professional photographer I use Lightroom to edit my
              photos — synced on all devices. The best for reviewing and editing
              photos on the go. — A great feature is the ability to send a
              collection to your clients from within the app.
            </Tool>
            <Tool title="Adobe XD">
              Okay - but WITH Illustrator - not on it&apos;s own.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <strike>
              <Tool title="Clear">A beautiful todo list and reminder!</Tool>
            </strike>
            <Tool title="Setapp">
              Everything I need at my fingertipps.&thinsp;·&thinsp;
              <a
                href="https://go.setapp.com/invite/b0wafpq2"
                className="underline"
              >
                Affiliate Link
              </a>
            </Tool>
            <Tool title="Forklift">
              The best FTP Client there is. (Psst via Setapp)
            </Tool>
            <Tool title="Message">
              The best thing for communication with clients. — And for
              ScreenSharing as well. Don&apos;t believe me? Try it out.
            </Tool>
            <Tool title="Prompt">Terminal on the go.</Tool>
            <Tool title="iStatMenus">What&apos;s the machine up to?</Tool>
            <Tool title="Billings Pro">
              Measure your time and write invoices
            </Tool>
            <Tool title="SiteSucker">
              Make a backup for my portfolio, before the layout is altered.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Maintenance">
            <Tool title="Scrutiny">Quick analysis of any website</Tool>
            <Tool title="Simon">
              I think Daleks are cute. — Simon thinks so too.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Hobbies">
            <Tool title="Giant Fully">
              A life without a bicylce is a life not worth living. — Okay
              that&apos;s dramatic, but I do love my bike.
            </Tool>
            <Tool title="Cowboy · The bike">
              The Cowboy in the yard is truly a great bike. — Everthings clean
              compared to my Giant Fully. — The belt drive is a dream and the
              app is a great tool to keep track of your rides.
              <small>
                Which reminds me of this one time I was riding my bike and I saw
                a cow. — I thought to myself, that&apos;s a nice cow. — And then
                I thought, that cow is a cowboy. — And then I thought, that cow
                is a cowboy on a bike. — And then I thought, that cow is a
                cowboy on a bike with a cowboy hat. — And then I thought, that
                cow is a cowboy on a bike with a cowboy hat and a cowboy belt. —
                And then I thought, that cow is a cowboy on a bike with a cowboy
                hat and a cowboy belt and a cowboy gun. — And then I thought,
                that cow is a cowboy on a bike with a cowboy hat and a cowboy
                belt and a cowboy gun and a cowboy lasso. — And then I thought,
                that cow is a cowboy on a bike with a cowboy hat and a cowboy
                belt and a cowboy gun and a cowboy lasso and a cowboy horse. —
                And then I thought, that cow is a cowboy on a bike with a cowboy
                hat and a cowboy belt and a cowboy gun and a cowboy lasso and a
                cowboy horse and a cowboy saddle. — And then I thought, that cow
                is a cowboy on a bike with a cowboy hat and a cowboy belt and a
                cowboy gun and a cowboy lasso and a cowboy horse and a cowboy
                saddle and a cowboy boot. — And then I thought, that cow is a
                cowboy on a bike with a cowboy hat and a cowboy belt and a
                cowboy gun and a cowboy lasso and a cowboy horse and a cowboy
                saddle and a cowboy boot and a cowboy spur. — And then I
                thought, that cow is a cowboy on a bike with a cowboy hat and a
                cowboy belt and a cowboy gun and a cowboy lasso and a cowboy
                horse and a cowboy saddle and a cowboy boot and a cowboy spur
                and a cowboy chaps. — And then I thought, that cow is a cowboy
                on a bike with a cowboy hat and a cowboy belt and a cowboy gun
                and a cowboy lasso and a cowboy horse and a cowboy saddle and a
                cowboy boot and a cowboy spur and a cowboy chaps and a cowboy
                vest. — And — This text was generated by &thinsp;
                <strike>Markov Chain</strike> GPT.
              </small>
            </Tool>
            <Tool title="Drums">
              ATVs Sound Module elevates my old Roland Kit
            </Tool>
            <Tool title="Starcraft 2">
              Keeps the brain the fingers in shape.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}

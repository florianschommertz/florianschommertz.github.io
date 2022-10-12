import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
            <Tool title="Clear">A beautiful todo list and reminder!</Tool>
            <Tool title="Forklift">The best FTP Client there is.</Tool>
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
            <Tool title="Drums">
              ATV have a new Sound Module that elevates my old Roland Kit
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

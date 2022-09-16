import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Skill } from '@/components/Skill'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}
const headline = `Dipl. Sound Engineer (SAE) · Dipl. Media-Designer (FH)`
export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Florian Schommertz</title>
        <meta name="description" content="advisor / consultant / developer" />
      </Head>
      <SimpleLayout
        title={headline}
        intro="advisor / consultant / developer ///
web · audio · video ·
website-performance ·
wordpress ·
ux"
      >
        <h3 className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          Skills
        </h3>

        <div>
          mail: f@schommertz.com skype: florianschommertz message:
          schommertz@icloud.com tel: +49 2434.30 83 890 nz: +64 22 089 5068
          street: St-Rochusweiler 13a PO/City: 41844 Wegberg USt-IdNr.:
          DE195532753 https://schommertz.com
        </div>

        {/* <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <div className="mt-16 sm:mt-32">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Title
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Text
                </p>
              </header>
            </div>
          </div>
        </div> */}
        {/* <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div> */}
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}

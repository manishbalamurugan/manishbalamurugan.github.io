import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function CustomSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16 mt-10[rem]">
        {children}
      </ul>
    </Section>
  )
}

function Book({ title, href, children }) {
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
        <title>About & Misc - Manish Balamurugan</title>
        <meta
          name="description"
          content="About Section - Manish Balamurugan"
        />
      </Head>
      <SimpleLayout
        title="Here are some of the things I enjoy in my life outside of work & school."
        intro="I'm avid reader, movie fanatic, internet nerd, and explorer! Here are some of the simple things I enjoy in my free time."
      >
        <div className="space-y-20">
          <CustomSection title="Currently Reading">
            <Book title="A Random Walk Down Wall Street by Burton G. Malkiel">
              Very engaging read so far on how securities markets are set up - as a huge history buff I personally love the various bubbles, booms, busts, depressions, recessions, and rallies covered so far.
            </Book>
            <Book title="Insignia by S.J Kincaid">
              Super facscinating dystopia - think Ender's Game x Androids. Definitely a page-turner albeit a somewhat easy read. 
            </Book>
          </CustomSection>
          <CustomSection title="Currently Watching">
            <Book title="Atlanta">
              Huge Childish Gambino fan - so its a must watch. Honestly reminds me of a live-action Boondocks at some points. 
            </Book>
            <Book title="Succession">
              I know, I'm super late - but I finally got around to watching it. So far, very good!
            </Book>
          </CustomSection>
          <hr className='border-zinc-200 dark:border-zinc-600'/>
          <CustomSection title="Music">
          </CustomSection>
          <div className='w-3/4 md:ml-[10rem]'>
            <iframe src="https://open.spotify.com/embed/playlist/1Nhepsv6y5SjGY8tZSM2S5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

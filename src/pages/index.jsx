import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Router, useRouter } from 'next/router'

import avatarImage from '@/images/avatar.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  let url = article.external ? article.href : `/articles/${article.slug}`
  
  return (
    <Card as="article" className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200 p-4 border-b border-zinc-200 dark:border-zinc-700">
      <Card.Title href={url} className="text-xl font-bold hover:text-blue-600 transition-colors">
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} className="text-sm text-gray-500">
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description className="mt-2 text-zinc-600 dark:text-zinc-400">
        {article.description}
      </Card.Description>
      <Card.Cta className="mt-4 text-blue-600 hover:text-blue-800">
        {article.external 
          ? article.href.includes('linkedin') 
            ? 'Read Post on LinkedIn →' 
            : 'Read External Paper →'
          : 'Read Paper →'
        }
      </Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1 hover:scale-110 transition-transform duration-200" {...props}>
      <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-blue-600 dark:fill-zinc-400 dark:group-hover:fill-blue-400" />
    </Link>
  )
}

function ProfileHeader() {
  return (
    <div className="relative -mt-[64px]"> {/* Added negative margin to remove gap */}
      <div className="h-48 rounded-t-2xl bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 animate-gradient bg-[length:200%_200%]"></div>
      <div className="absolute -bottom-16 left-8">
        <Image
          src={avatarImage}
          alt="Manish Balamurugan"
          className="h-32 w-32 rounded-full border-4 border-white dark:border-zinc-900"
          priority
        />
      </div>
    </div>
  )
}

function Resume() {
  const router = useRouter()
  let resume = [
    {
      company: 'C3.AI',
      title: 'Solutions Engineer',
      start: 'June 2024',
      end: 'Present',
    },
    {
      company: 'Amazon',
      title: 'Software Development Engineer Intern',
      start: 'Sept 2022',
      end: 'Dec 2022',
    },
    {
      company: 'Johns Hopkins University School of Medicine',
      title: 'AI/ML Research Intern',
      start: 'Oct 2018',
      end: 'Mar 2021',
    },
    {
      company: 'Keva Health',
      title: 'Software Engineer Intern',
      start: 'Dec 2020',
      end: 'Mar 2021',
    },
    {
      company: 'Simmer (YC W19)',
      title: 'Data Science Intern',
      start: 'Jun 2018',
      end: 'Sept 2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 p-3 rounded-lg">
            <dl className="flex flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {role.start} — {role.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button 
        variant="secondary" 
        className="group mt-6 w-full"
        onClick={() => {}}
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 ml-2 stroke-current" />
      </Button>
    </div>
  )
}

function TechStack() {
  const router = useRouter()
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {[
          "cplusplus", "java", "python", "javascript", "typescript", "amazonwebservices",
          "react", "nodejs", "nextjs", "mongodb", "django", "flutter",
          "firebase", "figma", "xd", "flask", "github", "gitlab",
          "vscode", "arduino", "bootstrap", "tailwindcss", "tensorflow", "swift"
        ].map((tech) => (
          <img 
            key={tech}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-${tech === 'cplusplus' ? 'line' : 'original'}${['java', 'mongodb', 'nodejs', 'firebase', 'django'].includes(tech) ? '-wordmark' : ''}.svg`}
            className="hover:scale-110 transition-transform duration-200 w-8 h-8"
            alt={tech}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Manish Balamurugan (@sbmanish7) / X</title>
        <meta
          name="description"
          content="Software Engineer & Builder. Solutions Engineer @C3AI. Previously @Amazon, @JohnsHopkins. Building @Entropi."
        />
      </Head>

      <Container className="px-0 sm:px-8">
        <ProfileHeader />
        
        <div className="pt-20 px-4 sm:px-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Manish Balamurugan</h1>
              <p className="text-zinc-500 dark:text-zinc-400">@sbmanish7</p>
            </div>
            <Button 
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-700"
              href="mailto:manishbalamurugan@gmail.com"
            >
              Contact Me
            </Button>
          </div>

          <div className="text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
            <p>
              Solutions Engineer @C3AI | Previously @Amazon, @JohnsHopkins
            </p>
            <p>
              Building @Entropi - AI-powered autonomous interviews
            </p>
            <p className="flex items-center gap-2">
              <span>📍 Washington DC Metro Area</span>
              <span>🔗 <a href="https://entropi.app" className="text-blue-600">entropi.app</a></span>
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <SocialLink
              href="https://twitter.com/sbmanish7"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/manishbalamurugan"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/manishbalamurugan"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/manishbalamurugan"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Latest Articles</h2>
              <div className="space-y-1">
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Resume />
              <TechStack />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

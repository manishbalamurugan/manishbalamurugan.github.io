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
  let url = ''
  if (article.external) {
    url = article.href;
  } else {
    url = `/articles/${article.slug}`;
  }
  return (
    <Card as="article">
      <Card.Title href={url}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>
        {
          article.external ? (
            article.href.indexOf('linkedin') !== -1 ? (
              'Read Post on LinkedIn'
            ) : 'Read External Paper'
          ) : 'Read Paper'
        }
      </Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Resume() {
  const router = useRouter()
  let resume = [
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
      end: 'May 2021',
    },
    {
      company: 'University of Virginia Walsh Lab',
      title: 'AI/ML Research Intern',
      start: 'Jan 2021',
      end: 'May 2021',
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
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div onClick={() => { router.push('/resume.pdf') }}>
        <Button variant="secondary" className="group mt-6 w-full">
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

function TechStack() {
  const router = useRouter()
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm mb-5 font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="grid grid-cols-6 gap-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-plain.svg" />
      </div>
      <div onClick={() => { router.push('/') }}>
        <Button href="https://github.com/manishbalamurugan" variant="secondary" className="group mt-6 w-full">
          View GitHub
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

// function Photos() {

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex px-4 sm:px-24 justify-start gap-5 overflow-x-scroll scrollbar-hide py-4 sm:gap-8">
//         {[image2, image3, image4, image1, image5, image6, image7, image8].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Manish Balamurugan
        </title>
        <meta
          name="description"
          content="Personal Portfolio for Manish Balamurugan - Software Engineer, Builder, and Avid Adventurer."
        />
      </Head>
      <Container className="-mt-5">
        <div className="grid grid-cols-1 max-w-7xl place-items-center text-center mx-auto">
          <div className="grid grid-cols-1 p-5 place-items-center mx-auto">
            <Image
                src={avatarImage}
                alt=""
                className={clsx(
                  'rounded-full bg-zinc-100 object-cover border-3 border-white-200 dark:bg-zinc-800',
                  'h-32 w-32'
                )}
                priority
            />
          </div>
          <div className='text-justify p-4'>
            <h1 className="text-justify text-4xl mb-10 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi 👋🏽! My name is Manish,
            </h1>
            <p className="text-base text-zinc-600 text-lg dark:text-zinc-300">
              I'm an builder who loves scaling new concepts, trying out new tech, and going on new adventures! 
            </p>
            <p className="mt-5 text-base text-zinc-600 text-lg dark:text-zinc-300">
              I've worked in various verticals, and worked at companies including <a className="text-blue-800 font-bold" href='https://www.linkedin.com/in/manishbalamurugan/'>@Amazon</a>. 
            </p>
            <p className="mt-5 text-base text-zinc-600 text-lg dark:text-zinc-300">
              Currently building in the AI/ML space <a className="text-blue-800 font-bold" href='https://mypeerai.com'>@PeerAI</a> with a team of rockstar engineers.
            </p>
            <p className="mt-5 text-base text-zinc-600 text-lg dark:text-zinc-300">
              If you're interested in chatting you can reach me at <a className="text-blue-800 font-bold" href='mailto:mb2mcc@virginia.edu'>manish@virginia.edu</a>
            </p>
          </div>
          <div className="mt-8 flex gap-6">
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
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
           {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
            <Resume />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <TechStack />
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

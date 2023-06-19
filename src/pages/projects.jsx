import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import peerai from '@/images/photos/peerai.jpg'
import tutorme from '@/images/photos/tutorme.jpeg'
import hyphora from '@/images/photos/hyphora.png'
import paysa from '@/images/photos/paysa.png'
import usdl from '@/images/photos/usdl.png'

const projects = [
  {
    name: 'PeerAI',
    description:
      'Developed an end-to-end platform enabling users to graphically connect Large Language Models (LLMs), Vector Databases, Plugins, and Data loaders to create complex AI applications - 0 lines of code required utilizing React.js, Node.js, MongoDB, and Langchain.',
    link: { href: 'http://mypeerai.com', label: 'Learn More' },
    preview: peerai,
  },
  {
    name: 'Hyphora',
    description:
      'A platform which empowered student networking opportunities and resource sharing. Social network for students. 3,000+ users at peak, with a focus on democratizing student access to educational resources. Built with React and Firebase.',
    link: { href: 'https://hyphora.org', label: 'Learn More' },
    preview: hyphora,
  },
  {
    name: 'Paysa',
    description:
      'A highly localized on-demand delivery service and community where users are able to shop and sellitems within their communities within minutes. Built with MERN stack.',
    link: { href: 'https://usepaysa.com', label: 'Learn More' },
    preview: paysa
  },
  {
    name: 'TutorMe',
    description:
      'Built a small-scale application at UVA where students can find, schedule, and pay-for peer tutors. Built with Django and Postgres.',
    link: { href: 'https://github.com/uva-cs3240-s23/project-a-14', label: 'Learn More' },
    preview: tutorme
  },
  {
    name: 'USDL',
    description:
      'A series of projects in generative AI and computer vision used to enhance the performance and capabilities of ultrasound technology. Utilized Python, Keras, TensorFlow.',
    link: { href: 'https://scholar.google.com/citations?view_op=search_authors&mauthors=Manish+Balamurugan&hl=en&oi=ao', label: 'Learn More' },
    preview: usdl,
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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Manish Balamurugan</title>
        <meta
          name="Projects - Manish Balamurugan"
          content="Projects"
        />
      </Head>
      <SimpleLayout
        title="My Projects"
        intro="I've worked on a variety of projects over the years in various spaces. Here's a couple of them that I'm proud of: "
      >
        
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.preview ?
              (
              <div className="rounded-md relative h-56 flex-1">
                <Image
                  src={project.preview}
                  alt=""
                  objectFit="fit"
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              ) : null}
              {/* <div className="relative z-10 mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <p className="dark:text-zinc-200 text-zinc-800 mt-[10rem]">Want to see more projects? Check out my <a href="https://github.com/manishbalamurugan" className='dark:text-blue-400 text-blue-600'>GitHub</a></p>
      </SimpleLayout>
    </>
  )
}

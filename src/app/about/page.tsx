import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-4.jpg'

const header = `I'm Silas Path: a frontier evolutionary visionary; a spiritual creative.`

export const metadata: Metadata = {
  title: 'About',
  description: header,
}

const description = [
  'And a teacher, independent researcher, musician, web entrepeneur, UI / UX designer, and lover of people.',
  "I've played in bands ranging from punk rock to R&B and toured 6 states in a van. I've ran lights production for major EDM artists.",
  'I hold multiple certifications in cloud networks and full stack apps, and I’m currently writing a newsletter on sharing tools for the future of work. I develop and consult on digital real estate.',
  'I also organize the Next.js ATX Meetup in Austin, TX.',
  'I am dedicated to the emergence of a new humanity, and to the development and deployment of shared spirituality, which will positivley inform the future of our reality.',
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="ImageWrapper lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="TextContent lg:order-first lg:row-span-2">
          <h1 className="Header text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {header}
          </h1>
          <div className="Description mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>{description[0]}</p>
            <p>{description[1]}</p>
            <p>{description[2]}</p>
            <p>{description[3]}</p>
            <p>{description[4]}</p>
            <p>{description[5]}</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/silaspath" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/silaspath"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/silaspath"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:silas@silaspath.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              silas@silaspath.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
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

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

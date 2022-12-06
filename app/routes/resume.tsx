import { BriefcaseIcon } from '@heroicons/react/24/outline';

import rpLogo from '../../public/rossmatthewsdev/images/rp-logo.jpeg';
import ssgLogo from '../../public/rossmatthewsdev/images/ssg-logo.jpeg';

const activity = [
  {
    id: 1,
    type: 'comment',
    info: {
      name: 'Rated People',
      href: 'https://www.ratedpeople.com',
      jobTitle: 'Senior Front End Developer',
      timePeriod: 'Oct 2021 - Present'
    },
    imageUrl: rpLogo,
    points: [
      'Lead front end developer on a Remix application / website. Optimising performance, accessibility and SEO.',
      'Maintenance, feature tickets and tech migration on the tradespersons logged in area, an SPA using Create React App.',
      'Writing web automation integration tests with Ruby and Capybara and owning the QA test and build / deployment release cycle for tickets.'
    ]
  },
  {
    id: 2,
    type: 'comment',
    info: {
      name: 'Rated People',
      href: 'https://www.ratedpeople.com',
      jobTitle: 'Front End Developer',
      timePeriod: 'Sept 2015 - Oct 2021'
    },
    imageUrl: rpLogo,
    points: [
      'Having an integral role in tech migration from PHP and legacy client side applications to Node and React.',
      'Utilising Elastic Search for fast data queries to build a directory of tradesmen.',
      'Creating and maintaining a “rest-api” to communicate between Frontend and Backend written in Node JS.',
      'Using tools and frameworks within the React ecosystem such as Gatsby, React Hooks, Redux, Webpack, CSS Modules.'
    ]
  },
  {
    id: 3,
    type: 'comment',
    info: {
      name: 'Solid State Group',
      href: 'https://solidstategroup.com',
      jobTitle: 'Front End Developer',
      timePeriod: 'Aug 2010 - Jul 2015'
    },
    imageUrl: ssgLogo,
    points: [
      'Working on a diverse range of projects with high profile clients such as Disney and heavily backed tech start ups.',
      'Developing with content management systems including Wordpress.',
      'Working with the first Javascript SPA frameworks such as Backbone.js, Angular and Meteor.'
    ]
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Resume() {
  return (
    <>
      <div className="container prose mx-auto pt-8">
        <div className="mb-8 flex h-[75px] w-[75px] items-center justify-center rounded-full border-4 border-solid border-[#374151] bg-white">
          <BriefcaseIcon className="h-[45px] w-[45px]" />
        </div>
        <h1>Resume</h1>
        <p>
          I am a senior frontend developer with over 12 years experience in the industry, proficient in many different
          aspects of frontend development. I am passionate about producing code that is optimised in readability,
          efficiency and performance. I am an effective problem solver and excellent communicator. I am highly organised
          and have years of experience organising and designating work based on product requirements, often outside of
          my own department, helping to drive projects forward, whilst also contributing to the efficiency of the agile
          processes of the team.
        </p>
        <p>
          See my work history and experience below or view my latest cv{' '}
          <a
            href="https://docs.google.com/document/d/1s09a4bybnmRo3cTt0H6pWbvL5QesqU8elfb1grjsbds/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 no-underline hover:underline"
          >
            here
          </a>
          .
        </p>
        <h3>Skills</h3>
        <p>
          JavaScript, Typescript, Node, React, Remix, Gatsby, Redux, Cloudflare workers, Elastic Search, Git, Docker,
          Tailwind CSS, SASS, CSS Modules.
        </p>
        <h3>Work experience</h3>
        <div className="not-prose flow-root max-w-prose pt-2">
          <ul role="list" className="mb-4">
            {activity.map((activityItem, index) => (
              <li key={activityItem.id}>
                <div className={`relative ${index + 1 !== activity.length ? 'pb-8' : ''}`}>
                  <span className="absolute top-0 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div className="relative flex items-start space-x-3">
                    <>
                      <div className="relative">
                        <img
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                          src={activityItem.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-3">
                          <div className="text-sm">
                            <a
                              href={activityItem.info.href}
                              className="font-medium text-gray-900 hover:text-teal-500 hover:underline"
                            >
                              {activityItem.info.name}
                            </a>
                          </div>
                          <div className="flex flex-col justify-between sm:flex-row">
                            <p className="mt-0.5 text-sm text-gray-500">{activityItem.info.jobTitle}</p>
                            <p className="mt-0.5 text-sm text-gray-400">{activityItem.info.timePeriod}</p>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <ul className="my-0 list-disc pl-[0.8rem] marker:text-gray-400">
                            {activityItem?.points?.map((point) => (
                              <li className="my-2 pl-[0.375rem]">{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h3>Recent Personal Projects</h3>
        <div className="text-sm">
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <div>
              <a href="https://www.rossmatthewsdev.com" target="_blank" rel="noopener noreferrer">
                https://www.rossmatthewsdev.com
              </a>{' '}
              - <span className="text-gray-500">Personal website</span>
            </div>
            <span className="text-gray-400">2022</span>
          </div>
          <div>
            <p className="mt-0 text-gray-700">Technologies: Remix, Typescript, Tailwind CSS, Cloudflare Pages</p>
          </div>
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <div>
              <a href="http://www.seanlondonguide.com" target="_blank" rel="noopener noreferrer">
                http://www.seanlondonguide.com
              </a>{' '}
              - <span className="text-gray-500">Professional tourguide</span>
            </div>
            <span className="text-gray-400">2021</span>
          </div>
          <div>
            <p className="mt-0 text-gray-700">
              Technologies: PHP, SASS, Wordpress, using Advanced Custom Fields to build a custom CMS
            </p>
          </div>
        </div>
        <h3>Education</h3>
        <div className="text-sm">
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <p className="mt-0 mb-0 text-gray-900">Birkbeck, University of London</p>
            <span className="mt-0 text-gray-400">2009 - 2011</span>
          </div>
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <p className="mt-0 text-gray-700">Web Technology, Diploma</p>
          </div>
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <p className="mt-0 mb-0 text-gray-900">Canterbury Christchurch University College</p>
            <span className="mt-0 text-gray-400">2002 - 2005</span>
          </div>
          <div className="align-center flex flex-col justify-between sm:flex-row">
            <p className="mt-0 text-gray-700">Degree BA (Hons), Radio, Film and Television Studies, Grade 2:1</p>
          </div>
        </div>
      </div>
    </>
  );
}

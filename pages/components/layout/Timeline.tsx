import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineCard from '@/pages/components/reusables/cards/TimelineCard';
import TimelineProjectCard from '@/pages/components/reusables/cards/TimelineProjectCard';

export default function CustomizedTimeline() {
  return (
    <div>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineProjectCard
                  time="February 2025"
                  header="BonnyAI"
                  desc="An AI Agent that can access MongoDB queries to fetch performance data of over 20 E-Commerce marketplace. Enables ease of financial report and pinpoints bad performance accurately."
                  tags={[
                    'LLM',
                    'MongoDB',
                    'Database Optimization',
                    'Data processing',
                    'Flask Python',
                    'Vue'
                  ]}
                  additional=""
                  href="/images/bonny.png"
                  link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-10">
              <TimelineCard
                  time="October 2024 - Now"
                  header="Infineon Technologies"
                  icon="/images/infineon.png"
                  subheader="Working Student Full-stack Software Engineer"
                  desc="I develop an interal website to increase effiency and ease-of-use for simulation workflows."
                  tags={['Vue', 'Node JS', 'Tailwind CSS', 'Typescript', 'REST API','Three JS']}
                  additional=""
                  link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineProjectCard
                time="October 2024"
                header="Temu Bisnis Indonesia"
                desc="A web application platform for selling and buying businesses."
                tags={[
                  'Vue.js',
                  'Tailwind',
                  'Typescript',
                  'Flask Python',
                  'MongoDB',
                ]}
                additional="See Project →"
                href="/images/temu-bisnis.png"
                link="https://temubisnis.com"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-10">
              <TimelineCard
                time="October 2023 - October 2024"
                header="Agile Robots SE"
                icon="/images/AGSE.jpeg"
                subheader="Working Student Front-end Software Engineer"
                desc="I develop front end solutions and works with the back-end team in the project of robot user interface."
                tags={['Vue', 'GraphQL', 'SCSS', 'Typescript']}
                additional=""
                link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                Project-based learning is my favorite way to learn new tools and
                frameworks. When i was starting to learn Vue.js, I decided to
                rewrite a past project of mine, Podomore app, in Vue.js.
              </p>
              <TimelineProjectCard
                time="2023 - now"
                header="PodoMore"
                desc="A web application to support the Podomoro studying technique, written in Vue.js."
                tags={['Vue.js', 'CSS', 'Typescript']}
                additional="See Project →"
                href="/images/project.webp"
                link="https://podomore-one.vercel.app/"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineProjectCard
                time="2023"
                header="PodoMore"
                desc="A web application to support the Podomoro studying technique."
                tags={['Next.js', 'React.js', 'Tailwind', 'JS']}
                additional="See Project →"
                href="/images/productivity.webp"
                link="https://productivity-app-1v2h.vercel.app/"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineProjectCard
                time="2023"
                header="Artist Concert Tracker"
                desc="A web application to track artists' upcoming concerts and ticket offers."
                tags={[
                  'Next.js',
                  'Tailwind',
                  'MongoDB',
                  'API',
                  'Web Scrapping',
                ]}
                additional="See Project →"
                href="/images/artist-tracker.webp"
                link="https://github.com/brebribre/artist-concert-tracker"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>

          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineCard
                time="2023"
                icon="/images/udemy.png"
                header="Udemy Web Development Course"
                subheader="by Angela Yu"
                desc="Gives in depth course on Full-Stack Web Development."
                tags={['Node', 'React', 'MongoDB', 'SQL']}
                additional="See Certificate →"
                link="https://www.udemy.com/certificate/UC-1878d032-091d-47ca-b0d5-f72d6c71b488/"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                My time at TUM motivated me to meet new people with the same
                field of interests as me, which led me to join one of the
                biggest student initiative in Germany concerning AI.
              </p>

              <TimelineCard
                time="2023 - now"
                icon="/images/tumai.jpg"
                header="TUM.ai Student Initiative"
                subheader="Community Department"
                desc="Project leader of the Club Newsletter. Responsible for planning and executing the recruitment process."
                tags={['Mailchimp', 'Recruitment', 'Canva']}
                additional=""
                link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <div className="mb-12">
              <TimelineCard
                time="2021"
                icon="/images/edx.png"
                header="Object Oriented Programming Course"
                subheader="by edX"
                desc="Course on Object Oriented Programming, taught using Java."
                tags={['Java', 'OOP']}
                additional="See Certificate →"
                link="https://courses.edx.org/certificates/13a1e14438e24b1cbef45688db0567b5"
              />
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <TimelineCard
                time="2021 - now"
                header="Technische Universität München"
                subheader="BSc Computer Science"
                desc="With application subject in business administration."
                tags={['SQL', 'Java', 'C', 'OOP']}
                additional=""
                link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>

          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                With the rise of remote jobs, i applied and started working as a
                web developer intern in Jakarta.
              </p>
              <TimelineCard
                time="2020 - 2021"
                header="Cahaya Optima Karya GmbH"
                subheader="Front-end Web Developer Intern"
                desc="Successfully designed, developed, and launched 2 websites for the company."
                tags={['HTML', 'CSS', 'Javascript', 'Bootstrap']}
                additional=""
                link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <p className="text-xs md:text-sm font-normal text-gray-500  mb-4">
              My web development starts here. Starting with simple HTML and CSS
              projects and learning purely from the internet, i created my first
              project: A Covid-19 tracker.
            </p>
            <div className="mb-8">
              <TimelineProjectCard
                time="2021"
                href="/images/covid.webp"
                header="Indonesia Covid tracker"
                desc="Tracks growth of Covid-19 in Indonesia and other countries."
                tags={['HTML', 'CSS', 'JS', 'API']}
                link="https://github.com/brebribre/Covid-Tracker"
                additional="Visit Repository →"
              />
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-16">
              <TimelineCard
                time=""
                header="SMAK 1 Penabur"
                subheader="High School in Jakarta, Indonesia"
                desc="Equipment and logistics coordinator for one of the most prestigious high school event in Jakarta."
                tags={['Leadership', 'Project Management']}
                additional=""
                link=""
              />
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="lg:hidden block text-center">
        <p className="text-1xl text-blue-300 opacity-50 font-light">
          This page are created using Next.js, styled with Tailwind.css and
          deployed with Vercel.
        </p>
        <p className="text-1xl mt-4 mb-12 lg:mb-0 text-blue-300 opacity-50 font-bold ">
          Copyright © 2025 Bryan Alvin
        </p>
      </div>
    </div>
  );
}

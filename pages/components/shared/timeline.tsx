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
import TimelineCard from '../cards/timelineCard';
import TimelineProjectCard from '../cards/timelineProjectCard';

export default function CustomizedTimeline() {
  return (
    <div className = "ml-4">
        <Timeline
        sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
            },
        }}
        >
        <TimelineItem>
            <TimelineOppositeContent>
            <p className = "text-slate-200 text-sm flex">2017</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className = "mb-16">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                Since high school, i have been involved in multiple school activities, working as a coordinator for equipment and logistics for school events scaling up to 15K Euro.
            </p>
            
            <TimelineCard
            time = ""
            header = "SMAK 1 Penabur"
            subheader = "High School in Jakarta, Indonesia"
            desc = "Equipment and logistics coordinator for one of the most prestigious high school event in Jakarta."
            tags = {["Leadership", "Project Management"]}
            additional = ""
            link = ""
            />

        
            </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent>
            <p className = "text-slate-200 text-sm flex ">2020</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <p className="text-xs md:text-sm font-normal text-gray-500  mb-4">
                My web development starts here. Starting with simple HTML and CSS projects and learning purely from the internet, i created my first project: A Covid-19 tracker.
            </p>
            <div className = "mb-8">
      
                <TimelineProjectCard
                time="2021"
                href="/images/covid.webp"
                header="Indonesia Covid tracker"
                desc="Tracks growth of Covid-19 in Indonesia and other countries."
                tags = {["HTML", "CSS", "JS", "API"]}
                link = "https://github.com/brebribre/Covid-Tracker"
                additional = "Visit Repository →"
                />
            </div>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent>
            <p className = "text-slate-200 text-sm flex ">2021</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className = "mb-8">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                With the rise of remote jobs, i applied and started working as a web developer intern in Jakarta.
            </p>
            <TimelineCard
            time = "2020 - 2021"
            header = "Cahaya Optima Karya GmbH"
            subheader = "Front-end Web Developer Intern"
            desc = "Successfully designed, developed, and launched 2 websites for the company."
            tags = {["HTML", "CSS", "Javascript", "Bootstrap"]}
            additional = ""
            link = ""
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
            <div className = "mb-8">
            <TimelineCard
            time = "2021 - now"
            header = "Technische Universität München"
            subheader = "5th semester Computer Science"
            desc = "With application subject in business administration."
            tags = {["SQL", "Java", "C", "OOP"]}
            additional = ""
            link = ""
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
            
            <div className = "mb-12">
                <TimelineCard
                time = "2021"
                header = "Object Oriented Programming Course"
                subheader = "by edX"
                desc = "Course on Object Oriented Programming, taught using Java."
                tags = {["Java", "OOP"]}
                additional = "See Certificate →"
                link = "https://courses.edx.org/certificates/13a1e14438e24b1cbef45688db0567b5"
                />
            </div>
            </TimelineContent>
            
            
          
           
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent>
            <p className = "text-slate-200 text-sm flex">2023</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className = "mb-8">
            <TimelineCard
            time = "2023"
            header = "Udemy Web Development Course"
            subheader = "by Angela Yu"
            desc = "Gives in depth course on Full-Stack Web Development."
            tags = {["Node", "React", "MongoDB", "SQL"]}
            additional = "See Certificate →"
            link = "https://www.udemy.com/certificate/UC-1878d032-091d-47ca-b0d5-f72d6c71b488/"
  
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
            <div className = "mb-8">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                My time at TUM motivated me to meet new people with the same field of interests as me, which led me to join one of the biggest student initiative in Germany concerning AI.
            </p>

            <TimelineCard
            time = "2023 - now"
            header = "TUM.ai Student Initiative"
            subheader = "Community Department"
            desc = "Project leader of the Club Newsletter. Responsible for planning and executing the recruitment process."
            tags = {["Mailchimp", "Recruitment", "Canva"]}
            additional = ""
            link = ""
  
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
            
            <div className = "mb-8">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                In this time, i learned a lot of new frameworks such as React and Tailwind, which led me to create multiple personal projects.
            </p>
                <TimelineProjectCard
                time = "2023"
                header = "PodoMore"
                desc = "A web application to support the Podomoro studying technique."
                tags = {["Next.js", "React.js", "Tailwind", "JS"]}
                additional = "See Project →"
                href = "/images/productivity.webp"
                link = "https://productivity-app-1v2h.vercel.app/"
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
            
            <div className = "mb-8">
      
                <TimelineProjectCard
                time = "2023 - now"
                header = "Artist Concert Tracker"
              
                desc = "A web application to track artists' upcoming concerts and ticket offers."
                tags = {["Next.js", "Tailwind", "MongoDB", "API", "Web Scrapping", "On progress"]}
                additional = "See Project →"
                href = "/images/artist-tracker.webp"
                link = "https://kpop-artist-tracker-nsu8.vercel.app/"
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
            
            <div className = "mb-8">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                Project-based learning is my favorite way to learn new tools and frameworks. When i was starting to learn Vue.js, I decided to rewrite the Podomore app in Vue.js. 
            </p>
                <TimelineProjectCard
                time = "2023 - now"
                header = "PodoMore"
                desc = "A web application to support the Podomoro studying technique, written in Vue.js."
                tags = {["Vue.js", "CSS", "Typescript"]}
                additional = "See Project →"
                href = "/images/project.webp"
                link = "https://podomore-one.vercel.app/"
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
            
            <div className = "mb-10">
            <p className="text-xs md:text-sm font-normal text-gray-500 mb-4">
                Now excited to start working as an intern in Germany, utilizing all things i learned in my time here!
            </p>
                <TimelineCard
                time = "2023 - now"
                header = "Agile Robots AG"
                subheader = "Front-end Web Development Intern"
                desc = ""
                tags = {["Vue", "Three.js", "SCSS"]}
                additional = ""
                link = ""
                />
            </div>
            </TimelineContent>
        </TimelineItem>

       

        </Timeline>
    </div>
    
  );
}

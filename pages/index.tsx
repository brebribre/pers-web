import Image from 'next/image'
import Head from 'next/head'
import Background from './components/shared/Background'
import LeftContent from './components/shared/leftContent'
import ContentCard from './components/cards/contentCard'
import Title from './components/ui/title'
import Footer from './components/shared/footer'
import ProjectCard from './components/cards/projectCard'
import {projects} from '@/constants/projects'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-gradient-to-t from-slate-900 via-purple-900 to-slate-950">
      <Head>
        <title>Bryan Alvin | Web Developer</title>
        <link rel="shortcut icon" href="vercel.svg" />
      </Head>
      
      <div className="px-4 lg:mx-8">
        <LeftContent />
      </div>
      
      <div className="px-4">
        <Title text="Education"/>
        <ContentCard
          time = "2021 - now"
          header = "Technische Universität München"
          subheader = "4th semester Computer Science"
          desc = "With application subject in business administration."
          tags = {["SQL", "Java", "C", "OOP"]}
          additional = ""
          link = ""
        />
        <ContentCard
          time = "2017 - 2020"
          header = "SMAK 1 Penabur Jakarta"
          subheader = "Natural Science"
          desc = ""
          tags = {["Jakarta","Indonesia"]}
          additional = ""
          link = ""
        />

        <Title text="Experience"/>
        <ContentCard
          time = "March 2021 - December 2021"
          header = "Cahaya Optima Karya GmbH"
          subheader = "Front-end Web Developer"
          desc = "Responsible for designing, developing, and launching websites for the company."
          tags = {["HTML", "CSS", "Javascript"]}
          additional = ""
          link = ""
        />

        <Title text="Organization"/>
        <ContentCard
          time = "2023 - now"
          header = "TUM.ai Student Initiative"
          subheader = "Community Department"
          desc = "Responsible for planning and executing the whole recruitment process for one of the leading student initiative around AI in Germany."
          tags = {["Munich", "Germany"]}
          additional = ""
          link = ""
        />
        <ContentCard
          time = "2017 - 2019"
          header = "SMAK One Cup"
          subheader = "Head of Logistics and Equipment"
          desc = "Equipment and logistics coordinator for one of the most prestigious school event in Jakarta"
          tags = {["Jakarta", "Indonesia", "Leadership", "Teamwork"]}
          additional = ""
          link = ""
        />
        <Title text="Certification"/>
        
        <ContentCard
          time = "2023"
          header = "Udemy Web Development Bootcamp"
          subheader = "by Angela Yu"
          desc = "Gives in depth course on Full-Stack Web Development."
          tags = {["Node", "React.js", "MongoDB", "HTML", "CSS", "JS"]}
          additional = "See Certificate →"
          link = "https://www.udemy.com/certificate/UC-1878d032-091d-47ca-b0d5-f72d6c71b488/"
        />
        <ContentCard
          time = "2021"
          header = "Object Oriented Programming"
          subheader = "by edX"
          desc = "Course on Object Oriented Programming, taught using Java."
          tags = {["Java", "OOP"]}
          additional = "See Certificate →"
          link = "https://courses.edx.org/certificates/13a1e14438e24b1cbef45688db0567b5"
        />


        <Title text="Projects"/>
        {projects?.map((item:any,index:number)=>{
            return <ProjectCard
            key={index}
            time={item.time}
            href={item.href}
            header={item.header}
            desc={item.desc}
            tags = {item.tags}
            link = {item.link}
            additional = {item.additional}
          />
          })
        }
        
        <Footer/>
      </div>
    </div>
 
  )
}

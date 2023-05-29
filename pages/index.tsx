import Image from 'next/image'
import Hero from './hero'
import { Inter } from 'next/font/google'
import Background from './Background'
const inter = Inter({ subsets: ['latin'] })
import ContentCard from './contentCard'
import Title from './title'
import Footer from './footer'
import ProjectCard from './projectCard'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-gradient-to-t from-slate-900 via-purple-900 to-slate-950">
      <div className="px-4 lg:mx-8"><Hero /></div>
      <div className="px-4">
        <Background/>

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
          time = "2020-2021"
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
          desc = "TUM.ai is Germany’s leading student initiative around AI about which we educate, connect and run projects and events."
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
          header = "Full-Stack Web Development"
          subheader = "by Udemy"
          desc = "Gives in depth course for topics on Full-Stack Web Development."
          tags = {["Node", "React", "MongoDB", "SQL"]}
          additional = "See Certificate →"
          link = "https://www.udemy.com/certificate/UC-1878d032-091d-47ca-b0d5-f72d6c71b488/"
        />
        <ContentCard
          time = "2021"
          header = "Object Oriented Programming"
          subheader = "by edX"
          desc = "Gives in depth course for topics on Full-Stack Web Development."
          tags = {["Java", "OOP"]}
          additional = "See Certificate →"
          link = "https://courses.edx.org/certificates/13a1e14438e24b1cbef45688db0567b5"
        />
        <Title text="Projects"/>
        <ProjectCard
          time="2023"
          header="IZY Automotive"
          href="/images/izy.webp"
          desc="Portfolio website for IZY, a company specializing in automotive accessories."
          tags = {["HTML", "CSS", "Javascript"]}
          link ="https://www.izy-automotive.id/"
          additional = "Visit Website →"
        />
        <ProjectCard
          time="2022"
          href="/images/enos.webp"
          header="Enos Digital"
          desc="Portfolio website for Enos Digital, a company specializing in digital printing."
          tags = {["HTML", "CSS", "Javascript"]}
          link ="https://enosdigital.id/"
          additional = "Visit Website →"
        />
        <ProjectCard
          time="2022"
          href="/images/covid.webp"
          header="Indonesia Covid tracker"
          desc="Tracks growth of covid-19 in Indonesia and other countries"
          tags = {["HTML", "CSS", "JS", "API"]}
          link = "https://brebribre.github.io/Covid-Tracker/"
          additional = "Visit Website →"
        />
        <Footer/>
      </div>
    </div>
 
  )
}

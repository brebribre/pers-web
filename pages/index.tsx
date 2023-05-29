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
        />
        <ContentCard
          time = "2017 - 2020"
          header = "SMAK 1 Penabur Jakarta"
          subheader = "Natural Science"
          desc = ""
          tags = {["Jakarta","Indonesia"]}
          additional = ""
        />

        <Title text="Experience"/>
        <ContentCard
          time = "2020-2021"
          header = "Cahaya Optima Karya GmbH"
          subheader = "Front-end Web Developer"
          desc = "Responsible for designing, developing, and launching websites for the company."
          tags = {["HTML", "CSS", "Javascript"]}
          additional = ""
        />

        <Title text="Organization"/>
        <ContentCard
          time = "2023 - now"
          header = "TUM.ai Student Initiative"
          subheader = "Community Department"
          desc = "TUM.ai is Germany’s leading student initiative around AI about which we educate, connect and run projects and events."
          tags = {["Munich", "Germany"]}
          additional = ""
        />
        <ContentCard
          time = "2017 - 2019"
          header = "SMAK One Cup"
          subheader = "Head of Logistics and Equipment"
          desc = "Equipment and logistics coordinator for one of the most prestigious school event in Jakarta"
          tags = {["Jakarta", "Indonesia", "Leadership", "Teamwork"]}
          additional = ""
        />
        <Title text="Certification"/>
        <ContentCard
          time = "2023"
          header = "Full-Stack Web Development"
          subheader = "by Udemy"
          desc = "Gives in depth course for topics on Full-Stack Web Development."
          tags = {["Node", "React", "MongoDB", "SQL"]}
          additional = "See Certificate →"
        />
        <ContentCard
          time = "2021"
          header = "Object Oriented Programming"
          subheader = "by edX"
          desc = "Gives in depth course for topics on Full-Stack Web Development."
          tags = {["Java", "OOP"]}
          additional = "See Certificate →"
        />
        <Title text="Projects"/>
        <ProjectCard
          time="2023"
          header="IZY Automotive"
          href="/images/izy.webp"
          desc="Portfolio website for IZY, a company specializing in automotive accessories."
          tags = {["HTML", "CSS", "Javascript"]}
        />
        <ProjectCard
          time="2022"
          href="/images/enos.webp"
          header="Enos Digital"
          desc="Portfolio website for Enos Digital, a company specializing in digital printing."
          tags = {["HTML", "CSS", "Javascript"]}
        />
        <ProjectCard
          time="2022"
          href="/images/covid.webp"
          header="Indonesia Covid tracker"
          desc="Tracks growth of covid-19 in Indonesia and other countries"
          tags = {["HTML", "CSS", "JS", "API"]}
        />
        <Footer/>
      </div>
    </div>
 
  )
}

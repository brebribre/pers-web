import { projects } from '@/constants/projects';
import ContentCard from '../cards/contentCard';
import ProjectCard from '../cards/projectCard';
import Title from '../ui/title';
import Footer from './footer';
import { educations } from '@/constants/education'
import { experiences } from '@/constants/experiences';
import { organizations } from '@/constants/organizations';
import { certificates } from '@/constants/certificates';

function RightContent(props: any) {
    return (<div>
        <Title text="Education"/>
        {educations?.map((item:any,index:number)=>{
            return <ContentCard
            key = {index}
            time = {item.time}
            header = {item.header}
            subheader = {item.subheader}
            desc = {item.desc}
            tags = {item.tags}
            additional = {item.additional}
            link = {item.link}
          />
          })
        }

        <Title text="Experience"/>
        {experiences?.map((item:any,index:number)=>{
            return <ContentCard
            key = {index}
            time = {item.time}
            header = {item.header}
            subheader = {item.subheader}
            desc = {item.desc}
            tags = {item.tags}
            additional = {item.additional}
            link = {item.link}
          />
          })
        }

        <Title text="Organization"/>
        {organizations?.map((item:any,index:number)=>{
            return <ContentCard
            key = {index}
            time = {item.time}
            header = {item.header}
            subheader = {item.subheader}
            desc = {item.desc}
            tags = {item.tags}
            additional = {item.additional}
            link = {item.link}
          />
          })
        }

        <Title text="Certification"/>
        {certificates?.map((item:any,index:number)=>{
            return <ContentCard
            key = {index}
            time = {item.time}
            header = {item.header}
            subheader = {item.subheader}
            desc = {item.desc}
            tags = {item.tags}
            additional = {item.additional}
            link = {item.link}
          />
          })
        }


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

    </div>)
}

export default RightContent;
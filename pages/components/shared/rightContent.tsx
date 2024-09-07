import { projects } from '@/constants/projects';
import ContentCard from '../cards/contentCard';
import ProjectCard from '../cards/projectCard';
import Title from '../ui/title';
import Footer from './footer';
import { educations } from '@/constants/education'
import { experiences } from '@/constants/experiences';
import { organizations } from '@/constants/organizations';
import { certificates } from '@/constants/certificates';
import CustomizedTimeline from './timeline';

function RightContent(props: any) {
    return (
      <div className = "md:pt-16 lg:mr-24">
          <CustomizedTimeline/>    
          <Footer/>
      </div>
    )
}

export default RightContent;
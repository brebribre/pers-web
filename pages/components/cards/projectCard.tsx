import Tag from "../ui/tag";
import Image from "next/image";
interface CardValue {
    time: string;
    header: string;
    desc: string;
    tags: string[];
    href: string;
    link: string;
    additional: string;
  }
function ProjectCard(props:CardValue){

    return (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-8 rounded-lg transform transition duration-300 hover:opacity-50 md:hover:scale-110 lg:hover:scale-110">
            <div className="col-span-2 ">
            <p className="mt-3 font-semibold text-1xl text-gray-400">{props.time}</p>
            </div>
            <div className="col-span-6 mt-3 mr-4">
            
                <div className="border border-blue-400 rounded-lg shadow sm:max-w-lg">
                    <a href={props.link}>
                        <Image src={props.href} alt={props.header} width={560} height={300}/>
                    </a>
                    <div className="p-5">
                        <p className="font-bold text-sm tracking-wide text-gray-100">{props.header}</p>
                        <p className="font-normal mt-2 text-xs mb-2 tracking-wide text-gray-400">{props.desc}</p>
                        <div className = "flex flex-wrap">
                            {props.tags?.map((item, index) => (
                            <Tag key={index} desc={item} />
                            ))}
                        </div>
                        
                    <p className="mt-3">
                        <a href={props.link} className="text-xs font-semibold leading-6 text-lime-200">
                            {props.additional}
                        </a>
                    </p>
                    </div>

                    
                    
                </div>
            
            </div>
        </div>
     
        
        
  )
}

export default ProjectCard;
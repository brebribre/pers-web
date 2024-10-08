interface CardValue {
    time: string;
    header: string;
    subheader: string;
    desc: string;
    tags: string[];
    additional: string;
    link: string;
  }

  import Tag from "../ui/tag";

function ContentCard(props:CardValue){

    return (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-8 rounded-lg transform transition duration-300 md:hover:scale-110 hover:opacity-50 lg:hover:scale-110">
            <div className="col-span-2 ">
            <p className="mt-3 font-semibold text-md text-gray-400 mr-3">{props.time}</p>
            </div>
            <div className="col-span-6 mt-3">
            <p className="font-bold text-sm tracking-wide text-gray-100">{props.header}</p>
            <p className="font-semibold text-xs mb-2 mt-1 tracking-wide text-gray-400">{props.subheader}</p>
            <p className="text-xs font-normal text-gray-400 tracking-wide mb-2">{props.desc}</p>
            <div className="flex flex-wrap"> 
                {props.tags?.map((item, index) => (
                    <Tag key={index} desc={item} />
                ))}
            </div>
            <p className="mt-3">
                    <a href={props.link} className="text-sm font-semibold leading-6 text-lime-200">
                        {props.additional}
                    </a>
            </p>
            
            </div>
      </div>
      
  )
}

export default ContentCard;
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

function TimelineCard(props:CardValue){

    return (
        <div className="">
            <div className="">
                <p className="font-bold text-sm tracking-wide text-gray-100">{props.header}</p>
                <p className="font-semibold text-xs mb-2 tracking-wide text-gray-400">{props.subheader}</p>
                <p className="text-xs font-normal text-gray-400 tracking-wide mb-2">{props.desc}</p>
                <div className="flex flex-wrap"> 
                    {props.tags?.map((item, index) => (
                        <Tag key={index} desc={item} />
                    ))}
                </div>
                <p className="mt-1">
                        <a href={props.link} className="text-xs font-semibold text-purple-200">
                            {props.additional}
                        </a>
                </p>
            </div>
      </div>
      
  )
}

export default TimelineCard;
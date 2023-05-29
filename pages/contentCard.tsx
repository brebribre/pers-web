interface CardValue {
    time: string;
    header: string;
    subheader: string;
    desc: string;
    tags: string[];
    additional: string;
  }

  import Tag from "./tag";

function ContentCard(props:CardValue){

    return (
        <div className="mb-6 xl:w-2/3 grid grid-cols-1 md:grid-cols-8 rounded-lg transform transition duration-300 md:hover:scale-110 hover:opacity-50 lg:hover:scale-110">
            <div className="col-span-2 ">
            <p className="mt-3 font-semibold text-1xl text-gray-400 mr-3">{props.time}</p>
            </div>
            <div className="col-span-6 mt-3">
            <p className="font-bold text-1xl tracking-wide">{props.header}</p>
            <p className="font-semibold text-1xl mb-2 tracking-wide text-gray-400">{props.subheader}</p>
            <p className="text-1xl font-normal text-gray-400 tracking-wide mb-2">{props.desc}</p>
            <div className=""> 
                {props.tags?.map((item, index) => (
                    <Tag key={index} desc={item} />
                ))}
            </div>
            <p className="mt-3">
                    <a href="#" className="text-sm font-semibold leading-6 text-lime-200">
                        {props.additional}
                    </a>
            </p>
            
            </div>
      </div>
      
  )
}

export default ContentCard;
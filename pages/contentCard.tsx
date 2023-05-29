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
        <div className="mb-12 md:w-96 xl:w-1/2 grid grid-cols-1 md:grid-cols-3 rounded-lg transform transition duration-300 hover:scale-110">
            <div className="col-span-1 ">
            <p className="mt-3 font-semibold text-1xl text-gray-400">{props.time}</p>
            </div>
            <div className="col-span-2 mt-3">
            <p className="font-bold text-1xl tracking-wide">{props.header}</p>
            <p className="font-semibold text-1xl mb-2 tracking-wide text-gray-400">{props.subheader}</p>
            <p className="text-1xl font-normal text-gray-400 tracking-wide mb-2">{props.desc}</p>
            <div className="flex justify-left"> 
                {props.tags.map((item, index) => (
                    <Tag desc={item} />
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
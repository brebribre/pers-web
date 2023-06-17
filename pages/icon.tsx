import Image from 'next/image'

function Icon(props:any){
    return (<a href={props.url} className="z-50 text-sm font-semibold leading-6 text-lime-200 transform transition duration-300 hover:opacity-50 md:hover:scale-110 lg:hover:scale-110">
        <Image src={props.src} alt={props.alt} width={30} height={30}/>     
    </a>)
}

export default Icon;
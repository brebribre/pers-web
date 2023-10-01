import Image from 'next/image'

function Icon(props:any){
    return (

    <div className = "rounded-md bg-blue-900 p-2 hover:opacity-50 ">
        <a href={props.url}>
        <Image src={props.src} alt={props.alt} width={15} height={15}/>     
        </a> 
    </div>
    )
}

export default Icon;
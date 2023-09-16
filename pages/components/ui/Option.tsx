import React from 'react'

export default function Option(props: any){
    return (
    <div 
    className =    {`border-2 text-sm text-center py-1 px-4 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black  ${props.valid ? "pointer-events-none border-red-500 text-red-500" : "pointer-events-auto"}`} 
    onClick = {props.onClick}>
        {props.text}
    </div>
    )
 
}

import React from "react";
import { useState } from 'react'
import HeroContent from './heroContent'

const links = [
  { name: 'Instagram', href: 'https://www.instagram.com/bryan.alvinn/' },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/bryan-alvin-b652581b7/' },
  { name: 'Github', href: 'https://github.com/brebribre' }
]

export default function Example() {
  return (
    <div>
      
        <HeroContent/>
        
     
    </div>
  )
}

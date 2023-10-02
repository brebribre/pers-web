import Head from 'next/head'
import LeftContent from './components/shared/leftContent'
import RightContent from './components/shared/rightContent'

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-gradient-to-t from-slate-900 via-purple-900 to-slate-950">
      <Head>
        <title>Bryan Alvin | Web Developer</title>
        <link rel="shortcut icon" href="vercel.svg" />
      </Head>
      
      <div className="">
        <LeftContent />
      </div>
      
      <div className="">
        <RightContent/>
      </div>

    </div>
 
  )
}

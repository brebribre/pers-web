import Head from 'next/head';
import LeftContent from '@/pages/components/layout/LeftContent';
import RightContent from '@/pages/components/layout/RightContent';

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-gradient-to-t from-slate-900 via-purple-900 to-slate-950">
      <Head>
        <title>Bryan Alvin | Web Developer</title>
      </Head>
      <LeftContent />
      <RightContent />
    </div>
  );
}

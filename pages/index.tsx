import Head from 'next/head';
import LeftContent from '@/pages/components/layout/LeftContent';
import RightContent from '@/pages/components/layout/RightContent';

export default function Home() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 bg-gradient-to-t from-amber-700 via-red-700 to-purple-900">
        <Head>
            <title>Bryan Alvin | Web Developer</title>
        </Head>
      <LeftContent />
      <RightContent />
    </div>
  );
}

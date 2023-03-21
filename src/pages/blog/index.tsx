import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';

type Props = {

}

const Index: React.FC<Props> = () => {
  const text = 'Tersadar didalam sepiku, Setelah jauh melangkah, Cahaya kasihmu menuntunku.'
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>
      <div className='p-4'>
        <h1>{'Blog'}</h1>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;

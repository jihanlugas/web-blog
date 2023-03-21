import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';

type Props = {

}

const PrivacyPolice: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>
      <div className='p-4'>
        <h1>{'PrivacyPolice'}</h1>
      </div>
    </>
  );
};

(PrivacyPolice as PageWithLayoutType).layout = Main;

export default PrivacyPolice;

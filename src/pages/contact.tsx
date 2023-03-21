import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';

type Props = {

}

const Contact: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
      </Head>
      <div className='p-4'>
        <h1>{'Contact'}</h1>
      </div>
    </>
  );
};

(Contact as PageWithLayoutType).layout = Main;

export default Contact;

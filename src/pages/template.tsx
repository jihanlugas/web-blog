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
        <h1>{text}</h1>
        <h2>{text}</h2>
        <h3>{text}</h3>
        <h4>{text}</h4>
        <h5>{text}</h5>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Index;

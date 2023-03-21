import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';

type Props = {

}

const title = process.env.APP_NAME + ' - Situs Informasi';
const description = process.env.APP_NAME + ' menyediakan informasi seputar informasi, tutorial, berita terbaru'

const RightContent = () => {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt in, aliquam placeat iste at dicta fugiat rerum cumque! Neque aperiam officiis tempore impedit eos labore eius culpa quibusdam eum.
      </div>
    </>
  )
}

const content = [
  {
    title: 'Cara install windows 11',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara update windows 11',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara setup nginx di ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install apache ubuntu',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install mysql',
    createDt: '2 March 2023'
  },
  {
    title: 'Cara install postgress',
    createDt: '2 March 2023'
  },
]

const Index: React.FC<Props> = () => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className='mt-8 p-4 text-center'>
        <h1 className='text-5xl font-bold text-primary-900'>{process.env.APP_NAME}</h1>
        <div>{process.env.APP_NAME + ' menyediakan informasi seputar informasi, tutorial, berita terbaru'}</div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4'>
        <div className='p-4 col-span-1 lg:col-span-4 bg-white shadow'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4'>
            {content.map((data, key) => {
              return (
                <div key={key} className={''}>
                  <div>{data.title}</div>
                  <div>{data.createDt}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='p-4 bg-white shadow'>
          <RightContent />
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;

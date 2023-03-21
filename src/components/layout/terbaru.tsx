import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from 'next/router'

const Terbaru: NextPage = () => {
  const router = useRouter()
  const content = [
    {
      name: 'Cara install nginx pada ubuntu 22.04',
      url: process.env.BASE_URL + '/blog/cara-install-nginx-pada-ubuntu',
    },
    {
      name: 'Cara install nginx pada ubuntu 22.04',
      url: process.env.BASE_URL + '/blog/cara-install-nginx-pada-ubuntu',
    },
    {
      name: 'Cara install nginx pada ubuntu 22.04',
      url: process.env.BASE_URL + '/blog/cara-install-nginx-pada-ubuntu',
    },
    {
      name: 'Cara install nginx pada ubuntu 22.04',
      url: process.env.BASE_URL + '/blog/cara-install-nginx-pada-ubuntu',
    },
    {
      name: 'Cara install nginx pada ubuntu 22.04',
      url: process.env.BASE_URL + '/blog/cara-install-nginx-pada-ubuntu',
    },
  ]

  // console.log('router ', router)


  return (
    <>
      <div>
        <div className='mt-2 mb-4 font-bold'>Terbaru</div>
        {content.map((data, key) => {
          return (
            <div key={key} className={'mb-4'}>
              <Link href={data.url} className={'no-underline text-gray-400 hover:text-gray-600'}>{data.name}</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Terbaru;
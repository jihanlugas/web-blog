/* eslint-disable @next/next/no-img-element */
import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from '@/components/image';
import Link from 'next/link';
import { useRef } from 'react';
import Terbaru from '@/components/layout/terbaru';
import { blogData } from '@/types/blog';
import { displayDate } from '@/utils/Formater';
import { useRouter } from 'next/router';

type Props = {

}

const pageData: blogData = {
  title: 'Cara install PostgreSQL pada ubuntu 20.04',
  description: 'Panduan ini menunjukkan cara cepat untuk segera membuat Postgres aktif dan berjalan pada server Ubuntu 20.04, mulai dari menginstal PostgreSQL hingga menyiapkan pengguna dan basis data baru. Jika Anda lebih menyukai tutorial yang lebih mendalam tentang menginstal dan mengelola basis data PostgreSQL.',
  keywords: 'ubuntu, PostgreSQL, cara install PostgreSQL, cara install PostgreSQL ubuntu, cara install PostgreSQL ubuntu 20.04, install PostgreSQL ubuntu',
  author: 'Jihan Lugas',
  postDt: new Date('2023-03-27 10:00:00'),
  readMin: 10,
}


const Index: React.FC<Props> = () => {
  const router = useRouter()

  const LeftContent = () => {
    return (
      <>
        <div>
          <div className='my-2 font-bold'>Content</div>
          <div className='my-2'>
            <Link href={'#langkah-1'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 1 - Menginstal PostgreSQL
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-2'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 2 - Menggunakan Peran dan Basis Data PostgreSQL
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-3'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 3 - Menciptakan Peran Baru
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-4'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 4 - Menciptakan Basis Data Baru
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-5'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 5 - Membuka Prompt Postgres dengan Peran Baru
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#kesimpulan'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Kesimpulan
            </Link>
          </div>
        </div>
      </>
    )
  }

  const RightContent = () => {
    return <Terbaru />
  }


  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="title" content={pageData.title} />
        <meta name="description" content={pageData.description} />
        <meta name="keywords" content={pageData.keywords} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1826599407360904" crossOrigin="anonymous"></script>
      </Head>
      <div className='p-4 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-primary-900 text-center'>{pageData.title}</h1>
        <div>
          {pageData.author}
        </div>
        <div className=''>
          {'Tanggal Posting ' + displayDate(pageData.postDt) + ' | ' + pageData.readMin + ' min'}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4'>
        <div className='p-4 hidden lg:block'>
          <LeftContent />
        </div>
        <div className='p-4 col-span-1 lg:col-span-3'>
          <h3 className='mt-0'>Pengantar</h3>
          <p><Link href={'https://www.postgresql.org/'}>PostgreSQL</Link> atau Postgres, adalah sistem manajemen basis data relasional yang memberikan penerapan dari bahasa pengkuerian <Link href={'https://en.wikipedia.org/wiki/SQL'}>SQL</Link>. Sistem ini sesuai dengan standar dan memiliki banyak fitur lanjutan seperti transaksi yang andal dan konkurensi tanpa kunci baca.</p>
          <p>Panduan ini menunjukkan cara cepat untuk segera membuat Postgres aktif dan berjalan pada server Ubuntu 20.04, mulai dari menginstal PostgreSQL hingga menyiapkan pengguna dan basis data baru. Jika Anda lebih menyukai tutorial yang lebih mendalam tentang menginstal dan mengelola basis data PostgreSQL</p>
          <h2 id={'langkah-1'} className={'scroll-mt-20'}>Langkah 1 - Menginstal PostgreSQL</h2>
          <p>Untuk menginstal PostgreSQL, segarkan indeks paket lokal server Anda terlebih dahulu:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt</span> update</div>
            </code>
          </pre>
          <p>Lalu, instal paket Postgres bersama dengan paket <code>-contrib</code> yang menambah beberapa utilitas dan fungsionalitas tambahan:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install</span> postgresql postgresql-contrib</div>
            </code>
          </pre>
          <h2 id={'langkah-2'} className={'scroll-mt-20'}>Langkah 2 - Menggunakan Peran dan Basis Data PostgreSQL</h2>
          <p>Secara asali, Postgres menggunakan konsep yang disebut “peran” untuk menangani autentikasi dan otorisasi. Dalam beberapa hal, hal ini mirip seperti grup dan pengguna bergaya Unix reguler.</p>
          <p>Setelah instalasi, Postgres sudah siap untuk menggunakan autentikasi ident, yang berarti ini mengasosiasikan peran-peran Postgres dengan akun sistem Unix/Linux yang cocok. Jika peran ada di dalam Postgres, nama pengguna Unix/Linux dengan nama yang sama dapat masuk sebagai peran itu.</p>
          <p>Prosedur instalasi menciptakan akun pengguna bernama <strong>postgres</strong> yang terasosiasi dengan peran Postgres asali. Ada beberapa cara untuk memanfaatkan akun ini untuk mengakses Postgres. Salah satu caranya adalah dengan beralih ke akun <strong>postgres</strong> di server Anda dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-i -u</span> postgres</div>
            </code>
          </pre>
          <p>Lalu, Anda dapat mengakses prompt Postgres dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>psql</div>
            </code>
          </pre>
          <p>Ini akan membawa Anda log masuk ke prompt PostgreSQL, dan dari sini Anda akan segera bebas untuk berinteraksi dengan sistem manajemen basis data.</p>
          <p>Untuk keluar dari prompt PostgreSQL, jalankan yang berikut:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>postgres=#</span>\q</div>
            </code>
          </pre>
          <p>Ini akan membawa Anda kembali ke prompt perintah Linux <strong>postgres</strong>. Untuk kembali ke pengguna sistem reguler Anda, jalankan perintah <code>exit</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>postgres@server:~$</span><span className='text-rose-500'>exit</span></div>
            </code>
          </pre>
          <p>Cara lain untuk terhubung ke prompt Postgres adalah dengan menjalankan perintah <code>psql</code> sebagai akun <strong>postgres</strong> secara langsung dengan <code>sudo</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-u</span> postgres psql</div>
            </code>
          </pre>
          <p>Ini akan membawa Anda log masuk secara langsung ke Postgres tanpa shell <code>bash</code> perantara di antaranya.</p>
          <p>Sekali lagi, Anda dapat keluar dari sesi Postgres interaktif dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>postgres=#</span>\q</div>
            </code>
          </pre>
          <h2 id={'langkah-3'} className={'scroll-mt-20'}>Langkah 3 - Menciptakan Peran Baru</h2>
          <p>Jika Anda log masuk sebagai akun <strong>postgres</strong>, Anda dapat menciptakan peran baru dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>postgres@server:~$</span>createuser <span className='text-green-500'>--interactive</span></div>
            </code>
          </pre>
          <p>Jika, alih-alih Anda lebih memilih untuk menggunakan sudo untuk setiap perintah tanpa berpindah dari akun normal Anda, ketik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-u</span> postgres createuser <span className='text-green-500'>--interactive</span></div>
            </code>
          </pre>
          <p>Apa pun pilihan Anda, skrip akan memberi Anda beberapa pilihan dan menjalankan perintah Postgres yang benar berdasarkan respons Anda untuk menciptakan pengguna sesuai dengan spesifikasi Anda.</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Enter name of role to add: `}<code>sammy</code></div>
                <div className=''>{`Shall the new role be a superuser? (y/n) `}<code>y</code></div>
              </div>
            </code>
          </pre>
          <h2 id={'langkah-4'} className={'scroll-mt-20'}>Langkah 4 - Menciptakan Basis Data Baru</h2>
          <p>Asumsi lain yang dibuat oleh sistem autentikasi Postgres secara asali adalah bahwa untuk setiap peran yang digunakan untuk log masuk, peran itu akan memiliki basis data dengan nama yang sama yang dapat diaksesnya.</p>
          <p>Ini berarti bahwa jika pengguna yang Anda ciptakan di bagian terakhir bernama <strong>sammy</strong>, maka peran itu akan mencoba terhubung ke basis data yang juga bernama “sammy” secara asali. Anda dapat menciptakan basis data yang sesuai dengan perintah <code>createdb</code>.</p>
          <p>Jika Anda log masuk sebagai akun <strong>postgres</strong>, Anda dapat mengetik sesuatu seperti:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>postgres@server:~$</span>createdb <code>sammy</code></div>
            </code>
          </pre>
          <p>Jika, alih-alih Anda lebih memilih untuk menggunakan <code>sudo</code> untuk setiap perintah tanpa berpindah dari akun normal Anda, Anda dapat mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-u</span> postgres createdb <code>sammy</code></div>
            </code>
          </pre>
          <h2 id={'langkah-5'} className={'scroll-mt-20'}>Langkah 5 - Membuka Prompt Postgres dengan Peran Baru</h2>
          <p>Untuk log masuk dengan autentikasi berbasis <code>ident</code>, Anda akan membutuhkan pengguna Linux dengan nama yang sama dengan peran dan basis data Postgres Anda.</p>
          <p>Jika Anda tidak memiliki pengguna Linux tersedia yang cocok, Anda dapat menciptakannya dengan perintah <code>adduser</code>. Anda akan harus melakukan ini dari akun non-root Anda dengan privilese <code>sudo</code> (yang berarti, tidak sedang log masuk sebagai pengguna <strong>postgres</strong>):</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> adduser <code>sammy</code></div>
            </code>
          </pre>
          <p>Setelah akun baru ini tersedia, Anda dapat berpindah dan terhubung ke basis data dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-i -u</span> <code>sammy</code></div>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>psql</div>
            </code>
          </pre>
          <p>Atau, Anda dapat melakukannya dalam satu baris ini:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> <span className='text-green-500'>-u</span> <code>sammy</code> spql</div>
            </code>
          </pre>
          <p>Perintah ini akan membawa Anda log masuk secara otomatis, dengan asumsi bahwa semua komponen telah dikonfigurasi dengan benar.</p>
          <p>Jika Anda ingin pengguna Anda terhubung ke basis data yang berbeda, Anda dapat melakukannya dengan menetapkan basis datanya seperti ini:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>psql <span className='text-green-500'>-d</span> <code>postgres</code></div>
            </code>
          </pre>
          <p>Setelah log masuk, Anda dapat memeriksa informasi koneksi Anda saat ini dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>sammy=#</span>conninfo</div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`You are connected to database "`}<code>sammy</code>{`" as user "`}<code>sammy</code>{`" via socket in "/var/run/postgresql" at port "5432".`}</div>
              </div>
            </code>
          </pre>
          <h2 id={'kesimpulan'}>Kesimpulan</h2>
          <p>Anda sekarang sudah siap dengan PostgreSQL di server Ubuntu 20.04. Jika Anda ingin mempelajari lebih lanjut tentang Postgres dan cara menggunakannya</p>
        </div>
        <div className='p-4'>
          <RightContent />
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;

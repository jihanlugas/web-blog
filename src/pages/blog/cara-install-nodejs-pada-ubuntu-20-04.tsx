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
  title: 'Cara install Node.js pada Ubuntu',
  description: 'Dalam panduan ini, kami akan menunjukkan kepada Anda tiga cara menginstal Node.js pada server Ubuntu 20.04.',
  keywords: 'ubuntu, Node.js, Nodejs, cara install Node.js, cara install Nodejs, cara install Node.js ubuntu, cara install Nodejs ubuntu, cara install Node.js ubuntu 20.04, cara install Nodejs ubuntu 20.04, install Node.js ubuntu, install Nodejs ubuntu',
  author: 'Jihan Lugas',
  postDt: new Date('2023-03-27 10:00:00'),
  readMin: 10,
}


const Index: React.FC<Props> = () => {

  const LeftContent = () => {
    return (
      <>
        <div>
          <div className='my-2 font-bold'>Content</div>
          <div className='my-2'>
            <Link href={'#prasyarat'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Prasyarat
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#opsi-1'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Opsi 1 — Menginstal Node.js dengan Apt dari Repositori Asali
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#opsi-2'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Opsi 2 — Menginstal Node.js dengan Apt Menggunakan NodeSource PPA
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#opsi-3'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Opsi 3 — Menginstal Node Menggunakan Node Version Manager
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
          <p><Link href={'https://www.nodejs.org/'}>Node.js</Link> adalah suatu runtime JavaScript untuk pemrograman sisi server. Ini memungkinkan pengembang untuk menciptakan fungsionalitas backend yang dapat diskalakan dengan menggunakan JavaScript, suatu bahasa yang banyak orang sudah akrab dengannya dari pengembangan web berbasis peramban.</p>
          <p>Dalam panduan ini, kami akan menunjukkan kepada Anda tiga cara menginstal Node.js pada server Ubuntu 20.04:</p>
          <ul className='my-4 ml-8 list-disc'>
            <li>menggunakan <code>apt</code> untuk menginstal paket <code>nodejs</code> dari repositori perangkat lunak asali Ubuntu</li>
            <li>menggunakan <code>apt</code> dengan repositori perangkat lunak PPA alternatif untuk menginstal versi spesifik paket <code>nodejs</code></li>
            <li>menginstal <code>nvm</code>, Node Version Manager, dan menggunakannya untuk menginstal dan mengelola beberapa versi Node.js</li>
          </ul>
          <p>Bagi banyak pengguna, menggunakan <code>apt</code> dengan repo asali sudah mencukupi. Jika Anda memerlukan versi spesifik yang lebih baru (atau warisan) dari Node, Anda harus menggunakan repositori PPA. Jika Anda secara aktif mengembangkan aplikasi Node dan perlu sering beralih di antara beberapa versi <code>node</code>, pilihlah metode <code>nvm</code>.</p>
          <h2 id={'prasyarat'} className={'scroll-mt-20'}>Prasyarat</h2>
          <p>Panduan ini mengasumsikan bahwa Anda menggunakan Ubuntu 20.04. Sebelum Anda memulai, Anda harus memiliki akun pengguna non-root dengan privilese sudo yang disiapkan pada sistem Anda.</p>
          <h2 id={'opsi-1'} className={'scroll-mt-20'}>Opsi 1 - Menginstal Node.js dengan Apt dari Repositori Asali</h2>
          <p>Ubuntu 20.04 berisi versi Node.js di dalam repositori asalinya, yang dapat digunakan untuk memberi pengalaman yang konsisten pada banyak sistem. Pada saat dokumen ini ditulis, versi di dalam repositori adalah 10.19. Ini bukanlah versi terbaru, namun versi ini seharusnya stabil dan mencukupi untuk eksperimen cepat dengan bahasa ini.</p>
          <p>Untuk mendapatkan versi ini, Anda dapat menggunakan manajer paket <code>apt</code>. Segarkan indeks paket lokal Anda terlebih dahulu dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt</span> update</div>
            </code>
          </pre>
          <p>Lalu instal paket <code>nodejs</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install</span> nodejs</div>
            </code>
          </pre>
          <p>Periksa bahwa instalasi telah berhasil dengan bertanya kepada node terkait nomor versinya:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>nodejs <span className='text-green-500'>-v</span></div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`v10.19.0`}</div>
              </div>
            </code>
          </pre>
          <p>Jika paket di dalam repositori sesuai dengan kebutuhan Anda, itu adalah semua yang Anda perlukan untuk menyiapkan Node.js. Pada sebagian besar kasus, Anda juga perlu menginstal <code>npm</code>, manajer paket Node.js. Anda dapat melakukan ini dengan menginstal paket <code>npm</code> dengan <code>apt</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install npm</span></div>
            </code>
          </pre>
          <p>Ini akan memungkinkan Anda untuk menginstal modul dan paket untuk digunakan dengan Node.js.</p>
          <p>Pada titik ini, Anda telah berhasil menginstal Node.js dan <code>npm</code> dengan menggunakan <code>apt</code> dan repositori perangkat lunak Ubuntu asali. Bagian berikutnya akan menunjukkan cara menggunakan suatu repositori alternatif untuk menginstal versi Node.js yang berbeda.</p>
          <h2 id={'opsi-2'} className={'scroll-mt-20'}>Opsi 2 - Menginstal Node.js dengan Apt Menggunakan NodeSource PPA</h2>
          <p>Untuk menginstal versi Node.js yang berbeda, Anda dapat menggunakan suatu PPA (personal package archive/arsip paket pribadi) yang dikelola oleh NodeSource. PPA ini menyediakan lebih banyak versi Node.js daripada repositori Ubuntu resmi. Node.js v10, v12, v13, dan v14 tersedia saat dokumen ini ditulis.</p>
          <p>Pertama, kita akan menginstal PPA untuk mendapatkan akses ke paket-paketnya. Dari direktori rumah Anda, gunakan <code>curl</code> untuk mengambil skrip instalasi untuk versi yang lebih Anda sukai, pastikan untuk mengganti <code>14.x</code> dengan string versi yang lebih Anda sukai (jika berbeda).</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>cd</span> ~</div>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>curl</span> <span className='text-green-500'>-sL</span> https://deb.nodesource.com/setup_<code>14.x</code> <span className='text-green-500'>-o</span> nodesource_setup.sh</div>
            </code>
          </pre>
          <p>Silakan mengacu ke dokumentasi <Link href={'https://github.com/nodesource/distributions/blob/master/README.md'}>NodeSource</Link> untuk informasi lebih lanjut tentang versi yang tersedia.</p>
          <p>Periksa isi skrip yang sudah diunduh dengan <code>nano</code> (atau editor teks yang lebih Anda sukai):</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>nano</span> nodesource_setup.sh</div>
            </code>
          </pre>
          <p>Jika Anda yakin bahwa skrip aman untuk dijalankan, keluarlah dari editor Anda, lalu jalankan skrip dengan <code>sudo</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo bash</span> nodesource_setup.sh</div>
            </code>
          </pre>
          <p>PPA akan ditambahkan ke konfigurasi Anda dan cache paket lokal Anda akan diperbarui secara otomatis. Anda sekarang dapat menginstal paket Node.js dengan cara yang sama seperti yang Anda lakukan di bagian sebelumnya:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install </span>nodejs</div>
            </code>
          </pre>
          <p>Lakukan verifikasi bahwa Anda telah menginstal versi baru dengan menjalankan <code>node</code> dengan bendera versi <code>-v</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>node</span> <span className='text-green-500'>-v</span></div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`v`}<code>14.2.0</code> </div>
              </div>
            </code>
          </pre>
          <p>Paket <code>nodejs</code> NodeSource berisi baik biner <code>node</code> dan <code>npm</code>, sehingga Anda tidak perlu menginstal <code>npm</code> secara terpisah.</p>
          <p>Pada titik ini, Anda telah berhasil menginstal Node.js dan <code>npm</code> dengan menggunakan <code>apt</code> dan NodeSource PPA. Bagian berikutnya akan menunjukkan cara menggunakan Node Version Manager untuk menginstal dan mengelola beberapa versi Node.js.</p>
          <h2 id={'opsi-3'} className={'scroll-mt-20'}>Opsi 3 - Menginstal Node Menggunakan Node Version Manager</h2>
          <p>Cara lain untuk menginstal Node.js yang sangat fleksibel adalah dengan menggunakan nvm, Node Version Manager. Perangkat lunak ini memungkinkan Anda untuk menginstal dan mengelola banyak versi independen Node.js yang berbeda, dan paket Node yang terkait, pada saat bersamaan.</p>
          <p>Untuk menginstal NVM pada mesin Ubuntu 20.04 Anda, kunjungi laman <Link href={'https://github.com/nvm-sh/nvm'}>GitHub</Link> proyek ini. Salin perintah <code>curl</code> dari berkas README yang ditampilkan pada halaman utama. Ini akan memberi tahu Anda versi terbaru dari skrip instalasi.</p>
          <p>Sebelum menyalurkan perintah melalui <code>bash</code>, Anda selalu disarankan untuk mengaudit skrip untuk memastikan bahwa skrip tersebut tidak melakukan apa pun yang tidak Anda setujui. Anda dapat melakukan itu dengan menghapus segmen | <code>bash</code> di akhir perintah <code>curl</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh</div>
            </code>
          </pre>
          <p>Perhatikan dan pastikan Anda nyaman dengan perubahan yang dibuat. Ketika Anda puas, jalankan perintah lagi dengan menambahkan | <code>bash</code> di bagian akhir. URL yang Anda gunakan akan berubah tergantung versi terbaru nvm, tetapi untuk saat ini, skrip dapat diunduh dan dieksekusi dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | <span className='text-rose-500'>bash</span></div>
            </code>
          </pre>
          <p>Ini akan menginstal skrip <code>nvm</code> ke akun pengguna Anda. Untuk menggunakannya, pertama-tama Anda harus mencari berkas <code>.bashrc</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>source</span> ~/.bashrc</div>
            </code>
          </pre>
          <p>Sekarang, Anda dapat bertanya pada NVM tentang versi Node yang tersedia:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>nvm list-remote</div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`. . .`}</div>
                <div className=''>{`       v12.13.0   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.13.1   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.14.0   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.14.1   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.15.0   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.16.0   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.16.1   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.16.2   (LTS: Erbium)`}</div>
                <div className=''>{`       v12.16.3   (Latest LTS: Erbium)`}</div>
                <div className=''>{`        v13.0.0`}</div>
                <div className=''>{`        v13.0.1`}</div>
                <div className=''>{`        v13.1.0`}</div>
                <div className=''>{`        v13.2.0`}</div>
                <div className=''>{`        v13.3.0`}</div>
                <div className=''>{`        v13.4.0`}</div>
                <div className=''>{`        v13.5.0`}</div>
                <div className=''>{`        v13.6.0`}</div>
                <div className=''>{`        v13.7.0`}</div>
                <div className=''>{`        v13.8.0`}</div>
                <div className=''>{`       v13.10.0`}</div>
                <div className=''>{`       v13.10.1`}</div>
                <div className=''>{`       v13.11.0`}</div>
                <div className=''>{`       v13.12.0`}</div>
                <div className=''>{`       v13.13.0`}</div>
                <div className=''>{`       v13.14.0`}</div>
                <div className=''>{`        v14.0.0`}</div>
                <div className=''>{`        v14.1.0`}</div>
                <div className=''>{`        v14.2.0`}</div>
              </div>
            </code>
          </pre>
          <p>Daftarnya sangat panjang! Anda dapat menginstal versi Node dengan mengetik salah satu versi rilis yang Anda lihat. Misalnya, untuk mendapatkan versi v13.6.0, Anda dapat mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>nvm <span className='text-rose-500'>install</span> v13.6.0</div>
            </code>
          </pre>
          <p>Anda dapat melihat versi lain yang telah Anda instal dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'>nvm list</div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`->      v13.6.0`}</div>
                <div className=''>{`default -> v13.6.0`}</div>
                <div className=''>{`node -> stable (-> v13.6.0) (default)`}</div>
                <div className=''>{`stable -> 13.6 (-> v13.6.0) (default)`}</div>
                <div className=''>{`. . .`}</div>
              </div>
            </code>
          </pre>
          <p>Ini menampilkan versi yang aktif saat ini pada baris pertama (<code>{'-> v13.6.0'}</code>), yang diikuti oleh beberapa nama alias dan versi yang ditunjukkan oleh nama alias itu.</p>
          <div className='p-4 my-4 bg-green-200 rounded'>
            <p className='my-0'><strong>Catatan:</strong> jika Anda juga memiliki versi Node.js yang diinstal melalui <code>apt</code>, Anda mungkin akan melihat entri <code>system</code> di sini. Anda selalu dapat mengaktifkan versi Node yang diinstal sistem dengan menggunakan <code>nvm use system</code>.</p>
          </div>
          <p>Sebagai tambahan, Anda akan melihat nama alias untuk berbagai <Link href={'https://nodejs.org/en/about/releases/'}>rilis dukungan jangka panjang (atau LTS) dari Node</Link>:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`. . .`}</div>
                <div className=''>{`lts/* -> lts/erbium (-> N/A)`}</div>
                <div className=''>{`lts/argon -> v4.9.1 (-> N/A)`}</div>
                <div className=''>{`lts/boron -> v6.17.1 (-> N/A)`}</div>
                <div className=''>{`lts/carbon -> v8.17.0 (-> N/A)`}</div>
                <div className=''>{`lts/dubnium -> v10.20.1 (-> N/A)`}</div>
                <div className=''>{`lts/erbium -> v12.16.3 (-> N/A)`}</div>
              </div>
            </code>
          </pre>
          <p>Kita dapat menginstal rilis berdasarkan nama alias ini juga. Misalnya, untuk menginstal versi dukungan jangka panjang terbaru, <code>erbium</code>, jalankan yang berikut ini:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>nvm <span className='text-rose-500'>install</span> lts/erbium</div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Downloading and installing node v12.16.3...`}</div>
                <div className=''>{`. . .`}</div>
                <div className=''>{`Now using node v12.16.3 (npm v6.14.4)`}</div>
              </div>
            </code>
          </pre>
          <p>Anda dapat beralih di antara versi yang terinstal dengan <code></code>:</p>
          <pre>
            <code>
              <div className='select-all'>nvm use v13.6.0</div>
            </code>
          </pre>
          <pre>
            <code>
              <div className='select-all'>Now using node v13.6.0 (npm v6.13.4)</div>
            </code>
          </pre>
          <p>Anda dapat memverifikasi bahwa instalasi berhasil dengan menggunakan teknik yang sama dari bagian lain, dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>node</span> <span className='text-green-500'>-v</span></div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`v13.6.0`}</div>
              </div>
            </code>
          </pre>
          <p>Versi Node yang benar terinstal pada mesin kita seperti yang kita harapkan. Versi <code>npm</code> yang kompatibel juga tersedia.</p>
          <h2 id={'kesimpulan'} className={'scroll-mt-20'}>Kesimpulan</h2>
          <p>Ada beberapa cara untuk mengaktifkan dan menjalankan Node.js pada server Ubuntu 20.04 Anda. Keadaan Anda akan menentukan metode mana yang terbaik untuk kebutuhan Anda. Walaupun menggunakan versi yang dikemas di dalam repositori Ubuntu adalah metode termudah, namun menggunakan <code>nvm</code> atau NodeSource PPA menawarkan fleksibilitas tambahan.</p>
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

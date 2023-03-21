/* eslint-disable @next/next/no-img-element */
import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from '@/components/image';
import Link from 'next/link';
import { useRef } from 'react';
import Terbaru from '@/components/layout/terbaru';

type Props = {

}

const title = 'Cara install MySql pada ubuntu 20.04'
const description = 'Tutorial ini akan membahas cara menginstal MySQL versi 8.0 pada server Ubuntu 20.04. Dengan menyelesaikan tutorial ini, Anda akan memiliki basis data relasional yang berfungsi, yang dapat Anda gunakan untuk membangun situs web atau aplikasi Anda berikutnya.'

const Index: React.FC<Props> = () => {
  const myRef = useRef<HTMLDivElement>(null)
  const refPersyaratan = useRef<HTMLDivElement>(null)
  const refLangkah1 = useRef<HTMLDivElement>(null)
  const refLangkah2 = useRef<HTMLDivElement>(null)
  const refLangkah3 = useRef<HTMLDivElement>(null)
  const refLangkah4 = useRef<HTMLDivElement>(null)
  const refLangkah5 = useRef<HTMLDivElement>(null)
  const refLangkah6 = useRef<HTMLDivElement>(null)
  const refKesimpulan = useRef<HTMLDivElement>(null)

  const scrollPersyaratan = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refPersyaratan.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollLangkah1 = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refLangkah1.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollLangkah2 = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refLangkah2.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollLangkah3 = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refLangkah3.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollLangkah4 = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refLangkah4.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollKesimpulan = () => {
    let bodyPosition = document.body.getBoundingClientRect().y
    let headerOffset = 80 // 5rem = 80px
    let elementPosition = refKesimpulan.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset - bodyPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }



  const LeftContent = () => {
    return (
      <>
        <div>
          <div className='my-2 font-bold'>Content</div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollPersyaratan}>
            Prasyarat
          </div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollLangkah1}>
            Langkah 1 — Menginstal MySQL
          </div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollLangkah2}>
            Langkah 2 — Mengonfigurasi MySQL
          </div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollLangkah3}>
            Langkah 3 — Menciptakan Pengguna MySQL Khusus dan Memberi Privilese
          </div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollLangkah4}>
            Langkah 4 — Menguji MySQL
          </div>
          <div className='my-2 text-gray-400 hover:text-gray-600' onClick={scrollKesimpulan}>
            Kesimpulan
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
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className='p-4 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-primary-900 text-center'>{'Cara install nginx pada ubuntu 20.04'}</h1>
        <div>
          {'Jihan Lugas'}
        </div>
        <div className=''>
          {'Published on March 9, 2023 | 7 min read'}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4'>
        <div className='p-4 hidden lg:block'>
          <LeftContent />
        </div>
        <div className='p-4 col-span-1 lg:col-span-3'>
          <h3 className='mt-0'>Pengantar</h3>
          <p><Link href={'https://www.mysql.com/'}>MySQL</Link> adalah suatu sistem manajemen basis data sumber terbuka, yang umumnya diinstal sebagai bagian dari tumpukan LAMP (Linux, Apache, MySQL, PHP/Python/Perl) yang populer. Ini menerapkan model relasional dan menggunakan Structured Query Language (lebih dikenal sebagai SQL) untuk mengelola datanya.</p>
          <p>Tutorial ini akan membahas cara menginstal MySQL versi <code>8.0</code> pada server Ubuntu 20.04. Dengan menyelesaikan tutorial ini, Anda akan memiliki basis data relasional yang berfungsi, yang dapat Anda gunakan untuk membangun situs web atau aplikasi Anda berikutnya.</p>
          <h2 ref={refLangkah1}>Langkah 1 — Menginstal MySQL</h2>
          <p>Pada Ubuntu 20.04, Anda dapat menginstal MySQL menggunakan repositori paket APT. Pada saat penulisan tutorial ini, versi MySQL yang tersedia di repositori Ubuntu asali adalah versi <code>8.0.27</code>.</p>
          <p>Untuk menginstalnya, perbarui indeks paket pada server Anda jika Anda belum melakukan akhir-akhir ini:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt</span> update</div>
            </code>
          </pre>
          <p>Lalu instal paket <code>mysql-server</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install</span> mysql-server</div>
            </code>
          </pre>
          <p>Ini akan menginstal MySQL, tetapi tidak akan meminta Anda untuk menetapkan kata sandi atau membuat perubahan konfigurasi lain. Karena ini membuat instalasi MySQL Anda menjadi tidak aman, maka kita akan membahas ini selanjutnya.</p>
          <h2 ref={refLangkah2}>Langkah 2 — Mengonfigurasi MySQL</h2>
          <p>Untuk instalasi baru MySQL, Anda akan menjalankan skrip keamanan DBMS yang disertakan. Skrip ini mengubah beberapa opsi asali yang kurang aman untuk hal-hal seperti log masuk root jarak jauh dan pengguna sampel.</p>
          <p>Jalankan skrip keamanan dengan <code>sudo</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> mysql_secure_installation</div>
            </code>
          </pre>
          <p>Ini akan memandu Anda melalui serangkaian prompt di mana Anda dapat membuat beberapa perubahan pada opsi keamanan instalasi MySQL. Prompt pertama akan bertanya apakah Anda ingin menyiapkan Validate Password Plugin, yang dapat digunakan untuk menguji kekuatan kata sandi dari pengguna MySQL baru sebelum menganggapnya valid.</p>
          <p>Jika Anda memilih untuk mengatur Validate Password Plugin, setiap pengguna MySQL yang Anda ciptakan yang terautentikasi dengan suatu kata sandi akan diharuskan memiliki kata sandi yang memenuhi kebijakan yang Anda pilih. Tingkat kebijakan terkuat — yang Anda dapat pilih dengan memasukkan <code>2</code> — akan membutuhkan kata sandi dengan panjang setidaknya delapan karakter dan menyertakan campuran huruf besar, huruf kecil, numerik, dan karakter khusus:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Securing the MySQL server deployment.`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Connecting to MySQL using a blank password.`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`VALIDATE PASSWORD COMPONENT can be used to test passwords`}</div>
                <div className=''>{`and improve security. It checks the strength of password`}</div>
                <div className=''>{`and allows the users to set only those passwords which are`}</div>
                <div className=''>{`secure enough. Would you like to setup VALIDATE PASSWORD component?`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Press y|Y for Yes, any other key for No:`} <code>Y</code></div>
                <div className=''>{` `}</div>
                <div className=''>{`There are three levels of password validation policy:`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`LOW    Length >= 8`}</div>
                <div className=''>{`MEDIUM Length >= 8, numeric, mixed case, and special characters`}</div>
                <div className=''>{`STRONG Length >= 8, numeric, mixed case, special characters and dictionary`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:`}</div>
                <div className=''><code>2</code></div>
              </div>
            </code>
          </pre>
          <p>Terlepas dari apakah Anda memilih mengatur Validate Password Plugin, prompt berikutnya akan mengatur kata sandi untuk pengguna <strong>root</strong> MySQL. Masukkan lalu konfirmasikan kata sandi aman yang Anda pilih:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Please set the password for root here.`}</div>
                <div className=''>{` `}</div>
                <div className=''>{` `}</div>
                <div className=''>{`New password:`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Re-enter new password:`}</div>
              </div>
            </code>
          </pre>
          <p>Perhatikan bahwa walaupun Anda telah mengatur kata sandi untuk pengguna MySQL <strong>root</strong>, pengguna ini belum dikonfigurasi untuk mengautentikasi dengan kata sandi ketika terhubung ke shell MySQL.</p>
          <p>Jika Anda menggunakan Validate Password Plugin, Anda akan menerima umpan balik tentang kekuatan kata sandi baru Anda. Lalu, skrip akan bertanya apakah Anda ingin melanjutkan dengan kata sandi yang baru Anda masukkan atau apakah Anda ingin memasukkan kata sandi yang baru. Dengan asumsi Anda puas dengan kekuatan kata sandi yang baru saja Anda masukkan, masukkan <code>Y</code> untuk melanjutkan skrip:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Estimated strength of the password: 100`}</div>
                <div className=''>{`Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : `}<code>Y</code>{`  `}</div>
              </div>
            </code>
          </pre>
          <p>Dari sana, Anda dapat menekan <code>Y</code> lalu <code>ENTER</code> untuk menerima jawaban asali untuk semua pertanyaan berikutnya. Ini akan menghapus sebagian pengguna anonim dan basis data percobaan, menonaktifkan log masuk root dari jarak jauh, dan memuat aturan-aturan baru ini sehingga MySQL segera menerapkan perubahan yang Anda telah buat.</p>
          <p>Setelah skrip selesai, instalasi MySQL Anda akan diamankan. Anda sekarang dapat melanjutkan ke penciptaan pengguna basis data khusus dengan klien MySQL.</p>
          <h2 ref={refLangkah3}>Langkah 3 — Menciptakan Pengguna MySQL Khusus dan Memberi Privilese</h2>
          <p>Setelah instalasi, MySQL menciptakan akun pengguna <strong>root</strong> yang dapat Anda gunakan untuk mengelola basis data Anda. Pengguna ini memiliki privilese penuh atas server MySQL, artinya pengguna ini memiliki kendali penuh atas setiap basis data, tabel, pengguna, dan seterusnya. Maka dari itu, saran terbaik adalah hindari menggunakan akun ini di luar fungsi administratif. Langkah ini menjabarkan cara menggunakan pengguna <strong>root</strong> MySQL untuk menciptakan akun pengguna baru dan memberikannya privilese.</p>
          <p>Dalam sistem Ubuntu yang menjalankan MySQL <code>5.7</code> (dan versi lebih baru), pengguna MySQL <strong>root</strong> ditetapkan untuk mengautentikasi dengan menggunakan plugin <code>auth_socket</code> secara asali alih-alih dengan kata sandi. Plugin ini mengharuskan nama pengguna sistem operasi yang memanggil klien MySQL sesuai dengan nama pengguna <code>MySQL</code> yang disebutkan pada perintah, sehingga Anda harus menggunakan mysql dengan privilese <code>sudo</code> untuk mendapatkan akses ke pengguna MySQL <strong>root</strong>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> mysql</div>
            </code>
          </pre>
          <div className='p-4 my-4 bg-green-200 rounded'>
            <p className='my-0'>Catatan: Jika Anda menginstal MySQL dengan tutorial lain dan mengaktifkan autentikasi kata sandi untuk root, Anda perlu menggunakan perintah yang berbeda untuk mengakses shell MySQL. Yang berikut ini akan menjalankan klien MySQL Anda dengan privilese pengguna reguler, dan Anda hanya akan mendapat privilese administrator di dalam basis data dengan mengautentikasi:</p>
            <pre className='mb-0'>
              <code>
                <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>mysql <span className='text-green-500'>-u</span> root <span className='text-green-500'>-p</span></div>
              </code>
            </pre>
          </div>
          <p>Setelah Anda memiliki akses ke prompt MySQL, Anda dapat menciptakan pengguna baru dengan pernyataan <code>CREATE USER</code>. Dengan mengikuti sintaks umum ini:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`CREATE `}<span className='text-blue-500'>{"USER "}</span><span className='text-green-500'>{"'username'"}</span>@<span className='text-green-500'>{"'host'"}</span>{` IDENTIFIED WITH `}<code>{'authentication_plugin'}</code>{` BY `}<span className='text-green-500'>{"'password'"}</span><span className='mr-4'>{` ;`}</span></div>
            </code>
          </pre>
          <p>Setelah <code>CREATE USER</code>, Anda menetapkan nama pengguna. Ini segera diikuti dengan tanda <code>@</code> dan nama hos dari mana tempat pengguna ini akan terhubung. Jika Anda hanya berencana mengakses pengguna ini secara lokal dari server Ubuntu Anda, Anda dapat menentukan <code>localhost</code>. Menyatukan nama pengguna dan hos pada kutipan tunggal tidak selalu diperlukan, tetapi melakukan hal itu dapat membantu mencegah kesalahan.</p>
          <p>Anda memiliki beberapa opsi saat memilih plugin autentikasi pengguna Anda. Plugin <code>auth_socket</code> yang disebutkan sebelumnya dapat memudahkan karena menyediakan keamanan yang kuat tanpa mengharuskan pengguna yang valid memasukkan kata sandi untuk mengakses basis data. Tetapi ini juga menghalangi koneksi jarak jauh yang dapat mempersulit keadaan saat program eksternal perlu berinteraksi dengan MySQL.</p>
          <p>Sebagai alternatif, Anda dapat sepenuhnya mengabaikan bagian <code>WITH authentication plugin</code> dari sintaks untuk membuat pengguna mengautentikasi dengan plugin asali MySQL, <code>caching_sha2_password</code>. <Link href={'https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password'}>Dokumentasi MySQL menganjurkan plugin</Link> ini untuk pengguna yang ingin log masuk dengan kata sandi karena fitur keamanannya yang kuat.</p>
          <p>Jalankan perintah berikut untuk menciptakan pengguna yang mengautentikasi dengan <code>caching_sha2_password</code>. Pastikan mengubah <code>sammy</code> menjadi nama pengguna yang Anda inginkan dan <code>password</code> menjadi kata sandi yang kuat pilihan Anda:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`CREATE `}<span className='text-blue-500'>{"USER "}</span><span className='text-green-500'>{"'sammy'"}</span>@<span className='text-green-500'>{"'localhost'"}</span>{` IDENTIFIED BY `}<span className='text-green-500'>{"'password'"}</span><span className='mr-4'>{` ;`}</span></div>
            </code>
          </pre>
          <div className='p-4 my-4 bg-green-200 rounded'>
            <p className='my-0'><strong>Catatan:</strong> Ada masalah yang diketahui dengan beberapa versi PHP yang menimbulkan masalah dengan <code>caching_sha2_password</code>. Jika Anda berencana menggunakan basis data ini dengan suatu aplikasi PHP — phpMyAdmin, misalnya — Anda mungkin perlu menciptakan pengguna yang akan mengautentikasi dengan plugin <code>mysql_native_password</code> yang lebih tua tetapi masih aman sebagai gantinya:</p>
            <pre className='overflow-x-scroll mb-0'>
              <code className=''>
                <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`CREATE `}<span className='text-blue-500'>{"USER "}</span><span className='text-green-500'>{"'sammy'"}</span>@<span className='text-green-500'>{"'localhost'"}</span>{` IDENTIFIED WITH mysql_native_password BY `}<span className='text-green-500'>{"'password'"}</span><span className='mr-4'>{` ;`}</span></div>
              </code>
            </pre>
            <p>Jika Anda tidak yakin, Anda selalu dapat menciptakan pengguna yang mengautentikasi dengan <code>caching_sha2_plugin</code> dan melakukan <code>ALTER</code> di kesempatan berikutnya dengan perintah ini:</p>
            <pre className='overflow-x-scroll mb-0'>
              <code className=''>
                <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`ALTER `}<span className='text-blue-500'>{"USER "}</span><span className='text-green-500'>{"'sammy'"}</span>@<span className='text-green-500'>{"'localhost'"}</span>{` IDENTIFIED WITH mysql_native_password BY `}<span className='text-green-500'>{"'password'"}</span><span className='mr-4'>{` ;`}</span></div>
              </code>
            </pre>
          </div>
          <p>Setelah menciptakan pengguna baru Anda, Anda dapat memberinya privilese yang sesuai. Sintaks umum untuk memberi privilese adalah sebagai berikut:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`GRANT `}<code>{"PRIVILEGE"}</code>{` ON `}<code>{"database"}</code>.<code>{"table"}</code>{` TO `}<span className='text-green-500'>{"'username'"}</span>@<span className='text-green-500'>{"'host'"}</span><span className='mr-4'>{` ;`}</span></div>
            </code>
          </pre>
          <p>Nilai <code>PRIVILEGE</code> dalam sintaks contoh ini menentukan tindakan yang diizinkan untuk dilakukan oleh pengguna pada <code>database</code> dan <code>table</code> yang ditentukan. Anda dapat memberi lebih dari satu privilese kepada pengguna yang sama dalam satu perintah dengan memisahkan setiap privilese dengan koma. Anda juga dapat memberi seorang pengguna beberapa privilese secara global dengan memasukkan tanda bintang (<code>*</code>) sebagai pengganti nama basis data dan tabel. Dalam SQL, tanda bintang adalah karakter khusus yang digunakan untuk merepresentasikan “semua” basis data atau tabel.</p>
          <p>Sebagai ilustrasi, perintah-perintah berikut ini memberi seorang pengguna privilese global untuk <code>CREATE</code>, <code>ALTER</code>, dan <code>DROP</code> basis data, tabel, dan pengguna, serta wewenang untuk <code>INSERT</code>, <code>UPDATE</code>, dan <code>DELETE</code> data dari tabel apa pun di server. Perintah ini juga memberi pengguna kemampuan untuk melakukan kueri dengan <code>SELECT</code>, menciptakan kunci asing dengan kata kunci <code>REFERENCES</code>, dan melakukan operasi <code>FLUSH</code> dengan privilese <code>RELOAD</code>. Namun, Anda harus memberikan pengguna hanya izin yang dibutuhkan, jadi silakan atur sendiri privelese pengguna Anda sesuai kebutuhan.</p>
          <p>Anda dapat menemukan daftar lengkap dari privilese yang tersedia pada dokumentasi <Link href={'https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#privileges-provided-summary'}>MySQL resmi</Link>.</p>
          <p>Jalankan pernyataan <code>GRANT</code> ini, yang mengganti <code>sammy</code> dengan nama pengguna MySQL Anda sendiri, untuk memberi privilese ini kepada pengguna Anda:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO `}<span className='text-green-500'>{"'sammy'"}</span>@<span className='text-green-500'>{"'localhost'"}</span><span className='mr-4'>{` WITH GRANT OPTION ;`}</span></div>
            </code>
          </pre>
          <p>Perhatikan bahwa pernyataan ini juga menyertakan <code>WITH GRANT OPTION</code>. Ini akan memungkinkan pengguna MySQL Anda untuk memberi apa pun yang dimilikinya kepada pengguna lain di sistem.</p>
          <div className='p-4 my-4 bg-red-200 rounded'>
            <p className='my-0'><strong>Peringatan:</strong> Beberapa pengguna mungkin ingin memberi pengguna MySQL mereka privilese <code>ALL PRIVILEGES</code>, yang akan memberi mereka privilese superpengguna yang luas, yang mirip dengan privilese pengguna <strong>root</strong>, seperti:</p>
            <pre className='overflow-x-scroll'>
              <code className=''>
                <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`GRANT ALL PRIVILEGES ON *.* TO `}<span className='text-green-500'>{"'sammy'"}</span>@<span className='text-green-500'>{"'localhost'"}</span><span className='mr-4'>{` WITH GRANT OPTION ;`}</span></div>
              </code>
            </pre>
            <p>Privilese luas semacam itu <strong>tidak boleh diberikan dengan mudah</strong>, karena siapa pun yang memiliki akses ke pengguna MySQL ini akan memiliki kontrol penuh atas setiap basis data di server.</p>
          </div>
          <p>Setelah ini, merupakan praktik yang baik untuk menjalankan perintah <code>FLUSH PRIVILEGES</code>. Ini akan mengosongkan memori apa pun yang disinggahkan pada cache oleh server sebagai hasil dari pernyataan <code>CREATE USER</code> dan <code>GRANT</code> yang digunakan sebelumnya:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span>{`FLUSH PRIVILEGES;`}</div>
            </code>
          </pre>
          <p>Lalu, Anda dapat keluar dari klien MySQL:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`mysql>`}</span><span className='text-rose-500'>{`exit`}</span></div>
            </code>
          </pre>
          <p>Selanjutnya, untuk melakukan log masuk sebagai pengguna MySQL baru Anda, Anda dapat menggunakan perintah seperti berikut ini:</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`$`}</span>{`mysql `}<span className='text-green-500'>{`-u`}</span>{` `}<code>{`sammy`}</code>{` `}<span className='text-green-500'>{`-p`}</span></div>
            </code>
          </pre>
          <p>Flag <code>-p</code> akan membuat clien MySQL meminta kata sandi pengguna MySQL Anda untuk diautentikasi.</p>
          <p>Yang terakhir, mari kita uji instalasi MySQL.</p>
          <h2 ref={refLangkah4}>Langkah 4 — Menguji MySQL</h2>
          <p>Terlepas dari bagaimana Anda menginstalnya, MySQL seharusnya mulai berfungsi secara otomatis. Untuk menguji ini, periksa statusnya.</p>
          <pre className='overflow-x-scroll'>
            <code className=''>
              <div className='select-all'><span className='select-none ml-1 mr-2'>{`$`}</span>{`systemctl status mysql.service`}</div>
            </code>
          </pre>
          <p>Anda akan melihat keluaran serupa dengan yang berikut:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`● mysql.service - MySQL Community Server`}</div>
                <div className=''>{`     Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)`}</div>
                <div className=''>{`     Active: active (running) since Tue 2020-04-21 12:56:48 UTC; 6min ago`}</div>
                <div className=''>{`   Main PID: 10382 (mysqld)`}</div>
                <div className=''>{`     Status: "Server is operational"`}</div>
                <div className=''>{`      Tasks: 39 (limit: 1137)`}</div>
                <div className=''>{`     Memory: 370.0M`}</div>
                <div className=''>{`     CGroup: /system.slice/mysql.service`}</div>
                <div className=''>{`             └─10382 /usr/sbin/mysqld`}</div>
              </div>
            </code>
          </pre>
          <p>Jika MySQL tidak berjalan, Anda dapat memulainya dengan <code>sudo systemctl start mysql</code>.</p>
          <p>Sebagai pemeriksaan tambahan, Anda dapat mencoba terhubung ke basis data dengan menggunakan alat <code>mysqladmin</code>, yang merupakan suatu klien yang memungkinkan Anda menjalankan perintah administratif. Misalnya, perintah ini mengatakan untuk terhubung sebagai seorang pengguna MySQL bernama <strong>sammy</strong> (<code>-u sammy</code>), meminta kata sandi (<code>-p</code>), dan menginformasikan versi. Pastikan mengubah <strong>sammy</strong> menjadi nama pengguna MySQL khusus Anda, dan masukkan kata sandi pengguna itu saat diminta:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> mysqladmin <span className='text-green-500'>-p</span> <span className='text-green-500'>-u</span> <code>sammy</code> version</div>
            </code>
          </pre>
          <p>Anda akan melihat keluaran serupa dengan ini:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`mysqladmin  Ver 8.0.19-0ubuntu5 for Linux on x86_64 ((Ubuntu))`}</div>
                <div className=''>{`Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Oracle is a registered trademark of Oracle Corporation and/or its`}</div>
                <div className=''>{`affiliates. Other names may be trademarks of their respective`}</div>
                <div className=''>{`owners.`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Server version		8.0.19-0ubuntu5`}</div>
                <div className=''>{`Protocol version	10`}</div>
                <div className=''>{`Connection		Localhost via UNIX socket`}</div>
                <div className=''>{`UNIX socket		/var/run/mysqld/mysqld.sock`}</div>
                <div className=''>{`Uptime:			10 min 44 sec`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`Threads: 2  Questions: 25  Slow queries: 0  Opens: 149  Flush tables: 3  Open tables: 69  Queries per second avg: 0.028`}</div>
              </div>
            </code>
          </pre>
          <p>Ini berarti MySQL sudah aktif dan berfungsi.</p>
          <h2 ref={refKesimpulan}>Kesimpulan</h2>
          <p>Anda sekarang memiliki penataan MySQL dasar di server Anda. Berikut ini adalah beberapa contoh dari langkah selanjutnya yang Anda dapat lakukan:</p>
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

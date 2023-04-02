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

type Props = {

}

const pageData: blogData = {
  title: 'Cara install nginx pada ubuntu 20.04',
  description: 'Dalam panduan ini, kita akan membahas cara menginstal Nginx pada server Ubuntu 20.04 Anda, menyesuaikan firewall, mengelola proses Nginx, dan menyiapkan blok server untuk menjadi hos dari lebih dari satu domain dari suatu server tunggal.',
  keywords: 'ubuntu, nginx, cara install nginx, cara install nginx ubuntu, cara install nginx ubuntu 20.04, install nginx ubuntu, install nginx',
  author: 'Jihan Lugas',
  postDt: new Date('2023-03-15 16:00:00'),
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
            <Link href={'#langkah-1'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 1 - Menginstal Nginx
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-2'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 2 - Menyesuaikan Firewall
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-3'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 3 - Memeriksa Server Web Anda
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-4'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 4 - Mengelola Proses Nginx
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-5'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 5 - Menyiapkan Blok Server (Disarankan)
            </Link>
          </div>
          <div className='my-2'>
            <Link href={'#langkah-6'} scroll={false} className='text-gray-400 hover:text-gray-600 no-underline' >
              Langkah 6 - Membiasakan Diri dengan Berkas dan Direktori Penting Nginx
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
          <p><Link href={'https://nginx.com'}>Nginx</Link> adalah salah satu server web terpopuler di dunia dan berperan sebagai hos dari sebagian situs terbesar dan situs yang memiliki lalu lintas tertinggi di jagad internet. Ini adalah pilihan ringan yang dapat digunakan baik sebagai server web atau proksi balik.</p>
          <p>Dalam panduan ini, kita akan membahas cara menginstal Nginx pada server Ubuntu 20.04 Anda, menyesuaikan firewall, mengelola proses Nginx, dan menyiapkan blok server untuk menjadi hos dari lebih dari satu domain dari suatu server tunggal.</p>
          <h2 id={'prasyarat'} className={'scroll-mt-20'}>Prasyarat</h2>
          <p>Sebelum Anda memulai panduan ini, Anda harus memiliki pengguna non-root reguler dengan privilese sudo yang terkonfigurasi di server Anda</p>
          <p>Ketika Anda sudah memiliki akun, login sebagai pengguna non-root untuk memulai.</p>
          <h2 id={'langkah-1'} className={'scroll-mt-20'}>Langkah 1 - Menginstal Nginx</h2>
          <p>Karena Nginx tersedia di repositori asli Ubuntu, maka kita dimungkinkan untuk menginstalnya dari repositori ini menggunakan sistem pengemasan <code>apt</code>.</p>
          <p>Karena ini adalah interaksi pertama kita dengan sistem pengemasan <code>apt</code> pada sesi ini, kita akan memperbarui indeks pengemasan lokal agar kita memiliki akses ke daftar paket terbaru. Setelah itu, kita dapat menginstal <code>nginx</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt</span> update</div>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo apt install</span> nginx</div>
            </code>
          </pre>
          <p>Setelah menerima prosedur, <code>apt</code> akan menginstal Nginx dan segala dependensi yang diperlukan ke server Anda.</p>
          <h2 id={'langkah-2'} className={'scroll-mt-20'}>Langkah 2 - Menyesuaikan Firewall</h2>
          <p>Sebelum menguji Nginx, perangkat lunak firewall perlu disesuaikan untuk mengizinkan akses ke layanan. Nginx mendaftarkan dirinya sendiri sebagai sebagai layanan dengan <code>ufw</code> pada saat instalasi, yang mempermudah untuk mengizinkan akses Nginx.</p>
          <p>Buat daftar konfigurasi aplikasi yang mana <code>ufw</code> mengetahui cara bekerja sama dengannya dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> ufw app list</div>
            </code>
          </pre>
          <p>Anda akan mendapat daftar profil aplikasi:</p>
          <pre>
            <code>
              <div className='text-blue-500'>Output</div>
              <div className=''>Available applications:</div>
              <div className='ml-4'>Nginx Full</div>
              <div className='ml-4'>Nginx HTTP</div>
              <div className='ml-4'>Nginx HTTPS</div>
              <div className='ml-4'>OpenSSH</div>
            </code>
          </pre>
          <p>Seperti yang ditunjukkan oleh keluaran, ada tiga profil yang tersedia untuk Nginx:</p>
          <ul className='my-4 ml-8 list-disc'>
            <li><strong>Nginx Full</strong>: Profil ini membuka baik porta 80 (lalu lintas web normal dan tidak terenkripsi) dan porta 443 (lalu lintas terenkripsi TLS/SSL)</li>
            <li><strong>Nginx HTTP</strong>: Profil ini hanya membuka porta 80 (lalu lintas web normal dan tidak terenkripsi)</li>
            <li><strong>Nginx HTTPS</strong>: Profil ini hanya membuka porta 443 (lalu lintas terenkripsi TLS/SSL)</li>
          </ul>
          <p>Anda disarankan untuk mengaktifkan profil yang paling ketat yang masih akan mengizinkan lalu lintas yang telah Anda konfigurasikan. Saat ini, kita hanya perlu mengizinkan lalu lintas pada porta 80.</p>
          <p>Anda dapat mengaktifkan ini dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> ufw allow <span className='text-green-500'>{`'Nginx HTTP'`}</span></div>
            </code>
          </pre>
          <p>Anda dapat memverifikasi perubahan dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> ufw status</div>
            </code>
          </pre>
          <p>Keluaran akan mengindikasikan lalu lintas HTTP mana yang diizinkan:</p>
          <pre className='overflow-x-scroll'>
            <code>
              <div className=''>
                <div className='text-blue-500'>Output</div>
                <div className=''>{`Status: active`}</div>
                <div className=''>{` `}</div>
                <div className=''>{`To                    Action        From`}</div>
                <div className=''>{`--                    ------        ----`}</div>
                <div className=''>{`OpenSSH               ALLOW         Anywhere`}</div>
                <div className=''>{`Nginx HTTP            ALLOW         Anywhere`}</div>
                <div className=''>{`OpenSSH (v6)          ALLOW         Anywhere (v6)  `}</div>
                <div className=''>{`Nginx HTTP (v6)       ALLOW         Anywhere (v6)  `}</div>
              </div>
            </code>
          </pre>
          <h2 id={'langkah-3'} className={'scroll-mt-20'}>Langkah 3 - Memeriksa Server Web Anda</h2>
          <p>Pada akhir proses instalasi, Ubuntu 20.04 memulai Nginx. Server web seharusnya sudah aktif dan berjalan.</p>
          <p>Kita dapat memeriksa dengan sistem init <code>systemd</code> untuk memastikan layanan sedang berjalan dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span>systemctl status nginx</div>
            </code>
          </pre>
          <pre className='overflow-x-scroll'>
            <code>
              <div className='text-blue-500'>Output</div>
              <div className=''>{`● nginx.service - A high performance web server and a reverse proxy server`}</div>
              <div className=''>{`   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)`}</div>
              <div className=''>{`   Active: `}<code>active (running)</code>{` since Fri 2020-04-20 14:08:19 UTC; 3 days ago`}</div>
              <div className=''>{`     Docs: man:nginx(8)`}</div>
              <div className=''>{` Main PID: 2369 (nginx)`}</div>
              <div className=''>{`    Tasks: 2 (limit: 1153)`}</div>
              <div className=''>{`   Memory: 3.5M`}</div>
              <div className=''>{`   CGroup: /system.slice/nginx.service`}</div>
              <div className=''>{`           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;  `}</div>
              <div className=''>{`           └─2380 nginx: worker process`}</div>
            </code>
          </pre>
          <p>Sebagaimana dikonfirmasi oleh keluaran ini, layanan telah berhasil dimulai. Namun, cara terbaik untuk menguji ini adalah dengan benar-benar meminta suatu laman dari Nginx.</p>
          <p>Anda dapat mengakses laman landas Nginx asali untuk mengonfirmasi bahwa perangkat lunak berjalan dengan baik dengan bernavigasi ke alamat IP server Anda. Jika Anda tidak mengetahui alamat IP server Anda, Anda dapat menemukannya dengan menggunakan alat <Link href={'http://icanhazip.com/'}>icanhazip.com</Link>, yang akan memberi Anda alamat IP publik Anda sebagaimana diterima dari lokasi lain di internet:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>curl</span><span className='text-green-500'> -4</span> icanhazip.com</div>
            </code>
          </pre>
          <p>Saat Anda memiliki alamat IP server Anda, masukkan alamat itu ke dalam bilah alamat peramban Anda:</p>
          <pre>
            <code>
              <div className='select-all'>http://<code>your_server_ip</code></div>
            </code>
          </pre>
          <p>Anda akan menerima laman landas Nginx asali:</p>
          <Image
            alt={'Welcome to nginx'}
            src={'/blog/cara-install-nginx/welcome-nginx.png'}
            loading={'lazy'}
            className='border-2 rounded'
          />
          <p>Jika Anda berada di laman ini, server Anda berjalan dengan benar dan siap untuk dikelola.</p>
          <h2 id={'langkah-4'} className={'scroll-mt-20'}>Langkah 4 - Mengelola Proses Nginx</h2>
          <p>Karena kini server web Anda sudah aktif dan berjalan, mari kita tinjau beberapa perintah manajemen dasar.</p>
          <p>Untuk menghentikan server web Anda, ketik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl stop nginx</div>
            </code>
          </pre>
          <p>Untuk memulai server web saat berhenti, ketik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl start nginx</div>
            </code>
          </pre>
          <p>Untuk menghentikan lalu memulai layanan lagi, ketik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl restart nginx</div>
            </code>
          </pre>
          <p>Jika Anda hanya membuat perubahan konfigurasi, Nginx seringkali dapat memuat ulang tanpa memutus koneksi. Untuk melakukan ini, ketik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl reload nginx</div>
            </code>
          </pre>
          <p>Secara asali, Nginx dikonfigurasikan untuk memulai secara otomatis saat server melakukan boot. Jika ini bukan apa yang Anda inginkan, Anda dapat menonaktifkan perilaku ini dengan mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl disable nginx</div>
            </code>
          </pre>
          <p>Untuk mengaktifkan kembali layanan agar memulai saat boot, Anda dapat mengetik:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl enable nginx</div>
            </code>
          </pre>
          <p>Anda kini telah mempelajari perintah manajemen dasar dan siap untuk mengonfigurasi situs untuk menjadi hos dari lebih dari satu domain.</p>
          <h2 id={'langkah-5'} className={'scroll-mt-20'}>Langkah 5 - Menyiapkan Blok Server (Disarankan)</h2>
          <p>Ketika menggunakan server web Nginx, blok server (serupa dengan hos virtual di Apache) dapat digunakan untuk mengenkapsulasi detail konfigurasi dan menjadi hos untuk lebih dari satu domain dari suatu server tunggal. Kita akan menyiapkan domain bernama <strong>your_domain</strong>, tetapi Anda harus <strong>menggantinya dengan nama domain Anda sendiri</strong>.</p>
          <p>Nginx pada Ubuntu 20.04 memiliki satu blok server yang diaktifkan secara asali, yang dikonfigurasi untuk menampilkan dokumen dari suatu direktori di <code>/var/www/html</code>. Meskipun ini berfungsi baik untuk situs tunggal, ini bisa menjadi sulit dijalankan jika Anda menjadi hos dari beberapa situs. Alih-alih memodifikasi <code>/var/www/html</code>, mari kita buat suatu struktur direktori di dalam <code>/var/www</code> untuk situs <strong>your_domain</strong> kita, dengan membiarkan <code>/var/www/html</code> sebagai direktori asali yang akan ditampilkan jika permintaan klien tidak cocok dengan situs lain apa pun.</p>
          <p>Buat direktori untuk <strong>your_domain</strong> sebagai berikut, dengan menggunakan bendera <code>-p</code> untuk menciptakan direktori induk apa pun yang diperlukan:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo mkdir</span> <span className='text-green-500'>-p</span> /var/www/<code>your_domain</code>/html</div>
            </code>
          </pre>
          <p>Selanjutnya, tentukan kepemilikan direktori dengan variabel lingkungan <code>$USER</code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo chown</span> <span className='text-green-500'>-R</span> <span className='text-blue-500'>$USER:$USER</span> /var/www/<code>your_domain</code>/html</div>
            </code>
          </pre>
          <p>Izin root web Anda seharusnya benar jika Anda belum mengubah nilai <code>umask</code> Anda, yang menetapkan izin berkas asali. Untuk memastikan izin Anda benar dan memperbolehkan pemilik untuk membaca, menulis, dan mengeksekusi berkas, sementara hanya memperbolehkan membaca dan mengeksekusi ke grup dan lainnya, Anda dapat memasukkan perintah berikut:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo chmod</span> <span className='text-green-500'>-R</span> <span className='text-blue-500'>755</span> /var/www/<code>your_domain</code>/html</div>
            </code>
          </pre>
          <p>Selanjutnya, buat laman <code>index.html</code> dengan menggunakan <code>nano</code> atau editor favorit Anda:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>nano</span> /var/www/<code>your_domain</code>/html/index.html</div>
            </code>
          </pre>
          <p>Di dalam, tambahkan HTML sampel berikut ini:</p>
          <div className='mt-4 bg-slate-300 p-2 text-center rounded-t text-sm'>/var/www/your_domain/html/index.html</div>
          <pre className='mt-0 border-t-0 rounded-t-none'>
            <code className=''>
              <div>{`<html>`}</div>
              <div>{`    <head>`}</div>
              <div>{`        <title>Welcome to `}<code>your_domain</code>{`!</title>`}</div>
              <div>{`    </head>`}</div>
              <div>{`    <body>`}</div>
              <div>{`        <h1>Success! The `}<code>your_domain</code>{` server block is working!</h1>`}</div>
              <div>{`    </body>`}</div>
              <div>{`</html>`}</div>
            </code>
          </pre>
          <p>Simpan dan tutup berkas dengan menekan <code>CTRL</code> dan <code>X</code> lalu <code>Y</code> dan <code>ENTER</code> saat Anda selesai.</p>
          <p>Agar Nginx menyajikan konten ini, maka diperlukan untuk menciptakan blok server dengan arahan yang benar. Alih-alih memodifikasi berkas konfigurasi asali secara langsung, mari kita buat yang baru di <code>/etc/nginx/sites-available/<code className='bg-yellow-100'>your_domain</code></code>:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo nano</span> /etc/nginx/sites-available/<code>your_domain</code></div>
            </code>
          </pre>
          <p>Tempel di blok konfigurasi berikut, yang serupa dengan yang asali, tetapi diperbarui untuk nama domain dan direktori baru kita:</p>
          <div className='mt-4 bg-slate-300 p-2 text-center rounded-t text-sm'>/etc/nginx/sites-available/your_domain</div>
          <pre className='mt-0 border-t-0 rounded-t-none'>
            <code className=''>
              <div>{`server {`}</div>
              <div>{`        listen 80;`}</div>
              <div>{`        listen [::]:80;`}</div>
              <div>{` `}</div>
              <div>{`        root /var/www/`}<code>your_domain</code>{`/html;`}</div>
              <div>{`        index index.html index.htm index.nginx-debian.html;`}</div>
              <div>{` `}</div>
              <div>{`        server_name `}<code>your_domain</code>{` www.`}<code>your_domain</code>{`;`}</div>
              <div>{` `}</div>
              <div>{`        location / {`}</div>
              <div>{`                try_files $uri $uri/ =404;`}</div>
              <div>{`        }`}</div>
              <div>{`}`}</div>
            </code>
          </pre>
          <p>Perhatikan bahwa kita telah memperbarui konfigurasi <code>root</code> ke direktori baru kita, dan <code>server_name</code> ke nama domain kita.</p>
          <p>Selanjutnya, mari kita mengaktifkan berkas dengan menciptakan tautan darinya ke direktori <code>sites-enabled</code>, yang dibaca Nginx selama memulai:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo ln</span> <span className='text-green-500'>-s</span> /etc/nginx/sites-available/<code>your_domain</code> /etc/nginx/sites-enabled/</div>
            </code>
          </pre>
          <p>Dua blok server sekarang telah diaktifkan dan dikonfigurasi untuk merespons permintaan berdasarkan arahan <code>listen</code> dan <code>server_name</code> (Anda dapat membaca lebih lanjut tentang cara Nginx memproses arahan ini di sini):</p>
          <ul className='my-4 ml-8 list-disc'>
            <li><code>your_domain</code>: Akan merespons permintaan untuk <code>your_domain</code> dan www.<code>your_domain</code>.</li>
            <li><code>asali</code>: Akan merespons permintaan apa pun pada porta 80 yang tidak cocok dengan dua blok lainnya.</li>
          </ul>
          <p>Untuk menghindari masalah memori hash bucket yang dapat muncul dari penambahan nama server tambahan, maka diperlukan untuk menyesuaikan satu nilai dalam berkas <code>/etc/nginx/nginx.conf</code>. Buka berkas:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo nano</span> /etc/nginx/nginx.conf</div>
            </code>
          </pre>
          <p>Cari arahan <code>server_names_hash_bucket_size</code> dan hapus simbol <code>#</code> untuk menghapus komentar pada baris itu. Jika Anda menggunakan nano, Anda dapat dengan cepat mencari kata-kata di dalam berkas dengan menekan <code>CTRL</code> dan <code>w</code>.</p>
          <div className='mt-4 bg-slate-300 p-2 text-center rounded-t text-sm'>/etc/nginx/nginx.conf</div>
          <pre className='mt-0 border-t-0 rounded-t-none'>
            <code className=''>
              <div>{`...`}</div>
              <div>{`http {`}</div>
              <div>{`    ...`}</div>
              <div>{`    server_names_hash_bucket_size 64;`}</div>
              <div>{`    ...`}</div>
              <div>{`}`}</div>
              <div>{`...`}</div>
            </code>
          </pre>
          <p>Simpan dan tutup berkas saat Anda sudah selesai.</p>
          <p>Selanjutnya, uji untuk memastikan bahwa tidak ada kesalahan sintaks pada berkas Nginx Anda:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> nginx <span className='text-green-500'>-t</span></div>
            </code>
          </pre>
          <p>Jika tidak ada masalah apa pun, mulai kembali Nginx untuk mengaktifkan perubahan Anda:</p>
          <pre>
            <code>
              <div className='select-all'><span className='select-none ml-1 mr-2'>$</span><span className='text-rose-500'>sudo</span> systemctl restart nginx</div>
            </code>
          </pre>
          <p>Nginx sekarang seharusnya menyajikan nama domain Anda. Anda dapat menguji ini dengan bernavigasi ke http://<code>your_domain</code>, di mana Anda akan melihat sesuatu seperti ini:</p>
          <Image
            alt={'Nginx config success'}
            src={'/blog/cara-install-nginx/nginx-config-success.png'}
            loading={'lazy'}
            className='border-2 rounded'
          />
          <h2 id={'langkah-6'} className={'scroll-mt-20'}>Langkah 6 - Membiasakan Diri dengan Berkas dan Direktori Penting Nginx</h2>
          <p>Setelah Anda mengetahui cara mengelola layanan Nginx, Anda perlu waktu beberapa menit untuk membiasakan diri dengan beberapa direktori dan berkas penting.</p>
          <h3>Isi</h3>
          <ul className='my-4 ml-8 list-disc'>
            <li><code>/var/www/html</code>: Konten web yang sebenarnya, yang secara asali hanya terdiri dari halaman Nginx asali yang Anda lihat sebelumnya, disajikan dari direktori <code>/var/www/html</code>. Ini dapat diubah dengan mengubah berkas konfigurasi Nginx.</li>
          </ul>
          <h3>Konfigurasi Server</h3>
          <ul className='my-4 ml-8 list-disc'>
            <li><code>/etc/nginx</code>: Direktori konfigurasi Nginx. Semua berkas konfigurasi Nginx berada di sini.</li>
            <li><code>/etc/nginx/nginx.conf</code>: Berkas konfigurasi Nginx utama. Ini dapat diubah untuk membuat perubahan pada konfigurasi global Nginx.</li>
            <li><code>/etc/nginx/sites-available/</code>: Direktori tempat blok server per situs dapat disimpan. Nginx tidak akan menggunakan berkas konfigurasi yang ditemukan dalam direktori ini kecuali berkas tersebut terhubung ke direktori <code>sites-enabled</code>. Biasanya, semua konfigurasi blok server dilakukan dalam direktori ini, lalu diaktifkan dengan menghubungkannya ke direktori lain.</li>
            <li><code>/etc/nginx/sites-enabled/</code>: Direktori tempat blok server yang diaktifkan per situs disimpan. Biasanya, ini dibuat dengan menghubungkan ke berkas konfigurasi yang ditemukan dalam direktori <code>sites-available</code>.</li>
            <li><code>/etc/nginx/snippets</code>: Direktori ini berisi fragmen konfigurasi yang dapat disertakan di tempat lain dalam konfigurasi Nginx. Segmen konfigurasi yang berpotensi dapat diulang adalah kandidat yang baik untuk pemfaktoran ulang menjadi snippet.</li>
          </ul>
          <h3>Log Server</h3>
          <ul className='my-4 ml-8 list-disc'>
            <li><code>/var/log/nginx/access.log</code>: Setiap permintaan ke server web Anda direkam dalam berkas log ini kecuali Nginx dikonfigurasi untuk tidak melakukannya.</li>
            <li><code>/var/log/nginx/error.log</code>: Setiap kesalahan Nginx akan direkam dalam log ini.</li>
          </ul>
          <h2 id={'kesimpulan'} className={'scroll-mt-20'}>Kesimpulan</h2>
          <p>Kini server web Anda telah terinstal, Anda memiliki banyak pilihan untuk tipe konten yang dilayani dan teknologi yang Anda ingin gunakan untuk menciptakan pengalaman yang lebih kaya.</p>
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

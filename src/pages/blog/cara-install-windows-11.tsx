/* eslint-disable @next/next/no-img-element */
import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from '@/components/image';
import Link from 'next/link';

type Props = {

}

const title = 'Cara Install Windows 11';
const description = 'pada artikel ini saya akan share bagaimana cara menginstal windows 11 baru dari flashdisk. Ini bisa bermanfaat untuk anda yang ingin menginstall pada laptop baru yang tanpa OS atau install ulang bersih pada laptop lama anda'

const Index: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className='p-4 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-primary-900 text-center'>{'Cara Install Windows 11'}</h1>
        <div>
          {'Jihan Lugas'}
        </div>
        <div>
          {'Posted: March 9, 2023 | 10 min read'}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4'>
        <div className='p-4 hidden lg:block'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt in, aliquam placeat iste at dicta fugiat rerum cumque! Neque aperiam officiis tempore impedit eos labore eius culpa quibusdam eum.
        </div>
        <div className='p-4 col-span-1 lg:col-span-3'>
          <p>Windows 11 merupakan OS terbaru yang dirilis oleh Microsoft pada akhir tahun 2021. Windows versi terbaru ini memiliki tampilan yang cukup berbeda dari versi pendahulunya yaitu Windows 10. Mulai dari Start Menu, tampilan yang dihadirkan jauh berbeda dan lebih sederhana dibandingkan dengan versi pendahulunya. Hal yang menjadi ciri khas Windows 11 ini juga terlihat pada taskbar-nya. Secara default icon dan widget pada taskbar berada di tengah.</p>
          <p>Sebagai pengguna Windows tentunya kita ingin menggunakan Windows 11 dengan berbagai kelebihan baik dari sisi tampilan maupun fiturnya. Nah, jika anda sedang menggunakan Windows 10, ada pilihan yang sangat mudah untuk menginstal Windows 11 yaitu dengan mengupgrade langsung dari Windows 10 tersebut. Saya sudah membuat artikelnya di postingan lainnya tentang <Link href={'/blog/cara-update-windows-11'}>Cara update windows 11</Link>.</p>
          <p>Nah, pada artikel ini saya akan share bagaimana cara menginstal windows 11 baru (fresh install) dari flashdisk. Ini bisa bermanfaat untuk anda yang ingin menginstall pada laptop baru yang tanpa OS atau install ulang bersih pada laptop lama anda. Namun sebelumnya mari kita lihat terlebih dahulu apakah laptop / PC anda sudah memenuhi syarat minimal dari Windows 11?</p>
          <h2>1. Buat Media Instalasi Windows 11 dari Flashdisk</h2>
          <p>Langkah awal dalam menginstal Windows 11 adalah membuat media instalasi. Media instalasi ini berupa flashdisk yang didalamnya berisi installer Windows 11 dari file ISO Win 11. Sebenarnya kita juga bisa menggunakan DVD sebagai media, namun zaman sekarang yang paling mudah adalah dengan flashdisk. Untuk membuat media instalasi tersebut silahkan baca postingan tentang Cara Membuat Bootable Flashdisk pada bagian Windows 11.</p>
          <h2>2. Atur Booting Pertama Laptop / PC yang akan di Install ke Flashdisk</h2>
          <p>Langkah ke-dua ini kita harus mengubah pengaturan boot priority pada BIOS agar laptop menjalankan flashdisk yang telah kita buat tadi. Untuk melakukan pengaturan:</p>
          <ul className='ml-4 list-disc'>
            <li>
              Tancapkan flashdisk yang sudah berisi Windows 11 ke laptop atau PC yang ingin di install.
            </li>
            <li>
              Nyalakan laptop atau PC tersebut. Lalu cepat-cepat tekan tombol <strong>Esc</strong> atau <strong>DEL</strong> atau <strong>F1</strong> atau <strong>F2</strong> berulang-ulang untuk masuk ke BIOS. Tombol tersebut tergantung dengan merek laptop anda karena setiap laptop memiliki tombol yang berbeda untuk memasuki BIOS.
            </li>
            <li>
              Setelah berhasil masuk ke BIOS/UEFI maka pilih menu Boot atau menu yang mengandung kata boot. Setiap laptop juga memiliki menu yang berbeda.
            </li>
            <li>
              Ubah Boot pertama menjadi flashdisk anda.
            </li>
            <li>
              Tekan <strong>F10</strong> untuk menyimpan pengaturan BIOS. Maka laptop atau PC akan restart kembali.
            </li>
          </ul>
          <Image
            alt={'Menu boot di bios'}
            src={'/blog/cara-install-windows-11/menu-boot-di-bios.webp'}
            loading={'lazy'}
          />
          <p>Setelah restart maka laptop/PC anda akan menjalankan media instalasi yang ada di flashdisk tersebut.</p>
          <h2>3. Lakukan Boot dari Flashdisk Windows 11</h2>
          <p>Langkah berikutnya adalah dengan boot dari Flashdisk. Untuk melakukannya maka:</p>
          <ul className='ml-4 list-disc'>
            <li>
              Tekan tombol apapun misalnya spasi saat ada tampilan tulisan <strong>Press any key to boot from USB…</strong>.
            </li>
            <li>
              Setelah itu kita akan dibawa ke tampilan pemilihan bahasa dan keyboard. Ubah <strong>Time and currency</strong> format menjadi <strong>Indonesian (Indonesia)</strong>. Sedangkan biarkan pengaturan lainnya.
            </li>
            <li>
              Lalu tekan <strong>Next</strong>.
            </li>
            <li>
              Kemudian tekan <strong>Install Now</strong>.
            </li>
          </ul>
          <Image
            alt={'Pengaturan bahasa dan waktu'}
            src={'/blog/cara-install-windows-11/pengaturan-bahasa-dan-waktu.webp'}
            loading={'lazy'}
          />
          <h2>4. Masukkan Product Key</h2>
          <p>Selanjutnya masukkan product key pada pada kolom yang tersedia jika anda memiliki Product Key lalu klik <strong>Next</strong>. Namun jika tidak punya product key klik saja tombol <strong>I don’t have a product key</strong> karena kita bisa memasukkannya nanti atau dengan menggunakan tutorial saya lain yang berjudul Cara Aktivasi Windows 11 nanti setelah proses instalasi selesai.</p>
          <p className='bg-green-200 rounded p-2'><strong>Catatan: </strong> Jika anda saat ini menggunakan laptop yang sudah diaktivasi Windows 11 dan sedang melakukan install ulang maka otomatis nanti akan aktif tanpa memasukkan product key. Anda hanya perlu klik <strong>I don’t have a product key</strong>.</p>
          <Image
            alt={'Product key'}
            src={'/blog/cara-install-windows-11/product-key.webp'}
            loading={'lazy'}
          />
          <h2>5. Pilih Versi Windows 11 yang akan di install</h2>
          <p>Karena media instalasi yang kita gunakan saat ini adalah multi edition maka akan ada pilihan versi Windows 11 yang dapat dipilih. Pilih sesuai dengan product key yang anda punya atau versi yang sesuai dengan laptop anda. Misalnya <strong>Windows 11 Pro</strong>. Lalu klik <strong>Next</strong>.</p>
          <p>Kemudian klik <strong>I accept the Microsoft Software License Terms</strong>. Setelah itu klik <strong>Custom: Install Windows only (advanced)</strong>.</p>
          <h2>6. Bagi Partisi Hardisk Laptop atau PC</h2>
          <p>Selanjutnya kita akan melakukan pengaturan partisi pada hardisk atau SSD yang kita gunakan. Di sini kita akan membagi hardisk menjadi beberapa drive misalnya local drive c, local drive d dan lainnya.</p>
          <p className='bg-green-200 rounded p-2'><strong>Catatan: </strong>Sebaiknya bagi hardisk sesuai dengan kebutuhan kita. Misalnya nantinya kita perlu menginstall game-game besar maka drive C yang juga tempat Windows 11 haruslah besar. Misal 1 game 10 GB dan kita ingin install 10 game maka paling tidak drive C harus lebih dari 120 GB. Lalu sisanya kita gunakan untuk drive D. Atau misalnya jika kita tidak ingin install game besar tapi ingin laptopnya digunakan untuk menyimpan file movie, foto dan sebagainya. Maka drive C tidak terlalu besar tetapi drive D yang dibesarkan.</p>
          <p>Lalu bagaimana caranya?</p>
          <p>Jika hardisk atau SSD anda adalah baru maka langkah-langkahnya adalah:</p>
          <ul className='ml-4 list-disc'>
            <li>
              Klik pada <strong>Drive 0 Unallocated Space.</strong>
            </li>
            <li>
              Klik <strong>New</strong> lalu isikan berapa besar partisi drive C anda. Misalnya 80 GB maka isikan 80000 karena di sana formatnya MB.
            </li>
            <li>
              Klik <strong>Apply</strong>. Lalu klik <strong>OK</strong>. Maka akan 3 partisi baru secara otomatis. Jangan kaget karena 2 partisi lainnya adalah partisi sistem. Selain itu, partisi yang kita buat tidak tepat menjadi 80GB melainkan 79.x karena adanya konversi dari MB ke GB.
            </li>
            <li>
              Selanjutnya, pilih pada partisi yang masih <strong>Unallocated Space</strong>. Lalu klik <strong>New</strong> lalu biarkan besar kapasitasnya sesuai yang tertera, kemudian klik <strong>Apply</strong>. Ini bertujuan untuk membuat 1 partisi lagi sisa dari hardisk kita agar menjadi partisi drive D.
            </li>
            <li>
              Klik pada partisi yang telah kita buat pertama kali tadi (yang 80GB tadi) lalu klik <strong>Next</strong>. Ini bertujuan untuk menginstall Windows 11 di drive 80GB yang telah kita buat pertama kali tadi.
            </li>
          </ul>
          <Image
            alt={'Format partisi'}
            src={'/blog/cara-install-windows-11/format-partisi.webp'}
            loading={'lazy'}
          />
          <p>Maka proses install Windows 11 akan dimulai.</p>
          <p>Nah, jika kita sedang melakukan install ulang Windows 11 dari hardisk lama kita dan tidak ingin menghapus data di drive lain kecuali drive C (yang berisi Windows) maka langkah-langkahnya adalah:</p>
          <ul className='ml-4 list-disc'>
            <li>
              Klik pada Drive tempat Windows lama anda berada. Anda dapat mengetahuinya melalui kapasitasnya. Jadi sebaiknya lihat terlebih dahulu dari Windows lama anda berapa kapasitas total drive tersebut lalu cocokkan dengan proses partisi ini. Di sini kita harus berhati-hati karena jika salah drive maka data drive lain akan terhapus.
            </li>
            <li>
              Setelah itu klik <strong>Format</strong>.
            </li>
            <li>
              Kemudian klik <strong>Next</strong>.
            </li>
          </ul>
          <Image
            alt={'Partisi baru'}
            src={'/blog/cara-install-windows-11/partisi-baru.webp'}
            loading={'lazy'}
          />
          <p>Maka proses instalasi Windows 11 akan dimulai pada drive yang telah anda pilih tadi.</p>
          <h2>7. Tunggu Proses Instalasi Hingga Selesai</h2>
          <p>Proses selanjutnya adalah menunggu hingga instalasi selesai. Mulai dari <strong>Copying…</strong>, lalu <strong>Getting files ready for installation</strong> yang prosesnya paling lama di antara yang lainnya. Lalu <strong>Installing Features</strong> dan <strong>Installing updates</strong>. Lama proses instalasi ini tergantung pada kecepatan laptop/PC kita antara 15-45 menit.</p>
          <p>Setelah proses <strong>Installing updates</strong> selesai maka laptop akan secara otomatis restart. Lalu akan menyala kembali. Jika ada tulisan <strong>Press any key to boot from USB…</strong> jangan ditekan apapun pada keyboard anda. Hal ini bertujuan agar kita tidak booting lagi dari flashdisk melainkan melanjutkan proses instalasi ke tahap berikutnya. Jika ada tulisan itu lalu kita tekan maka akan mengulangi lagi proses dari awal.</p>
          <p>Kemudian akan tampil Getting Ready. Tunggu dan biarkan proses berjalan beberapa menit. Setelah itu akan tampil logo Windows dan kita lanjut ke proses selanjutnya yaitu pengaturan.</p>
          <h2>8. Atur Konfigurasi Dasar Windows 11</h2>
          <p>Pengaturan pertama yang tampil adalah region atau wilayah maka pilih <strong>Indonesia</strong> lalu <strong>Yes</strong>. Kemudian pilih <strong>US</strong> untuk keyboard layout lalu klik <strong>Yes</strong>. Setelah itu klik <strong>Skip</strong> untuk second keyboard.</p>
          <p>Setelah itu akan muncul jendela <strong>Let’s connect you to a network</strong>. Pada langkah ini kita diharuskan login ke akun Microsoft. Agar lebih mudah dalam proses menginstall maka saya sarankan untuk tidak menghubungkan laptop atau PC ke internet sehingga kita tidak perlu login menggunakan akun Microsoft.</p>
          <p>Nah, karena tidak ada opsi untuk tanpa internet (skip internet) maka kita akan menutup paksa proses ini dengan cara tekan tombol <strong>SHIFT+F10</strong> di keyboard maka akan muncul tampilan <strong>CMD (Command Prompt)</strong>. Setelah itu klik pada tampilan tersebut kemudian ketikkan <code>OOBE\BYPASSNRO</code> lalu tekan <strong>Enter</strong>. Maka Windows akan restart otomatis.</p>
          <Image
            alt={'Opsi internet'}
            src={'/blog/cara-install-windows-11/opsi-internet.webp'}
            loading={'lazy'}
          />
          <p className='bg-green-200 rounded p-2'><strong>Catatan: </strong> Jika tidak tampil CMD saat ditekan <strong>SHIFT+F10</strong> maka coba tekan <strong>FN+SHIFT+F10</strong> hal ini karena ada laptop yang mengharuskan menekan tombol FN untuk mengakses F10.</p>
          <p>Jangan tekan apapun jika ada tampilan <strong>Press any key to boot from USB…</strong> setelah restart. Selanjutnya akan tampil lagi pilihan region, pilih <strong>Indonesia</strong>, lalu tekan <strong>Yes</strong>. Pilih <strong>US</strong> lalu tekan <strong>Yes</strong>. Lalu pilih <strong>Skip</strong>. Setelah itu pilih <strong>I don’t have Internet</strong> lalu pilih <strong>Continue with limited setup</strong>.</p>
          <Image
            alt={'Pilihan Koneksi'}
            src={'/blog/cara-install-windows-11/pilihan-koneksi.webp'}
            loading={'lazy'}
          />
          <p>Lalu beri nama laptop atau PC anda misalnya <code>pc-saya</code> lalu klik <strong>Next</strong>. Lalu isikan password jika ingin menggunakan password atau jika tidak maka kosongi saja lalu klik <strong>Next</strong>. Kemudian klik <strong>Next</strong>, lalu <strong>Next</strong> dan hingga menemukan tombol <strong>Accept</strong> lalu klik Accept.</p>
          <p>Tunggu laptop atau PC anda masuk ke tampilan Windows 11. Proses ini juga membutuhkan waktu beberapa menit. Maka jika sudah tampil halaman desktop Windows 11 berarti proses instalasi selesai dan berhasil.</p>
          <Image
            alt={'Tampilan awal'}
            src={'/blog/cara-install-windows-11/tampilan-awal.webp'}
            loading={'lazy'}
          />
          <p>Selanjutnya kita harus menginstal driver laptop atau PC agar bisa berjalan secara optimal. Sebenarnya Windows 11 sudah mengenali mayoritas device yang ada saat ini. Dalam proses instal windows 11 sendiri sudah terinstal driver yang dibutuhkan. Hal ini bisa dilihat pada laptop yang sudah bisa digunakan mulai dari tampilan layar, audio yang sudah berfungsi, Wi-Fi dan LAN yang sudah bisa digunakan meskipun kita belum menginstall driver-nya.</p>
          <p>Namun terkadang Windows belum memiliki driver pada device tertentu, khususnya jika device atau hardware tersebut masih baru dirilis. Biasanya jika demikian yang terjadi maka hardware tersebut masih tidak berfungsi, misalnya audio tidak keluar suaranya, layar/display belum jernih, Wi-Fi belum bisa digunakan dan sebagainya. Untuk itulah kita harus install driver.</p>
          <p>Untuk menginstallnya kita hanya perlu mencari driver tersebut melalui Google dengan kata kunci <code>driver tipe-laptop</code> misalnya saat ini saya menggunakan laptop ASUS TUF FX505GD. Maka kita hanya perlu mencari driver ASUS TUF FX505GD di Google.</p>
          <h3>Penutup</h3>
          <p>Cara menginstal Windows 11 bisa dikatakan cukup mudah jika dibandingkan Windows terdahulunya. Kemudahan ini memungkinkan semakin banyak pengguna bisa menginstal Windows sendiri di rumah tanpa jasa teknisi. Apalagi sekarang dipermudah dengan install dari OS lama yang hampir sama dengan proses instalasi software biasa.</p>
        </div>
        <div className='p-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt in, aliquam placeat iste at dicta fugiat rerum cumque! Neque aperiam officiis tempore impedit eos labore eius culpa quibusdam eum.
        </div>
      </div>
    </>
  );
};

(Index as PageWithLayoutType).layout = Main;

export default Index;

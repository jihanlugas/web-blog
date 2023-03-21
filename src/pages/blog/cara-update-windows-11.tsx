/* eslint-disable @next/next/no-img-element */
import Main from '@/components/layout/main';
import PageWithLayoutType from '@/types/layout';
import Head from 'next/head';
import Image from '@/components/image';
import Link from 'next/link';
import { useRef } from 'react';

type Props = {

}

const Index: React.FC<Props> = () => {
  const myRef = useRef<HTMLDivElement>(null)

  const executeScroll = () => {
    // myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', })
    let headerOffset = 64 // 4rem = 64px
    let elementPosition = myRef.current.getBoundingClientRect().top
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }



  const LeftContent = () => {
    return (
      <>
        <div>
          <h3>Content</h3>
        </div>
      </>
    )
  }

  const RightContent = () => {
    return (
      <>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt in, aliquam placeat iste at dicta fugiat rerum cumque! Neque aperiam officiis tempore impedit eos labore eius culpa quibusdam eum.
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{'Cara Update Windows 11'}</title>
        <meta name="description" content="Ada 2 cara update windows 11 yang bisa dilakukan dari windows 10. Kedua cara ini sangat mudah dan aman kerena tanpa menghilangkan data pada laptop atau pc kita. Cara pertama adalah melalui Windows Update, sedangkan yang kedua adalah melalui Windows Assistant." />
      </Head>
      <div className='p-4 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-primary-900 text-center'>{'Cara Update Windows 11'}</h1>
        <div onClick={executeScroll}>
          {'Jihan Lugas'}
        </div>
        <div className=''>
          {'Posted: March 9, 2023 | 7 min read'}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-4'>
        <div className='p-4 hidden lg:block'>
          <LeftContent />
        </div>
        <div className='p-4 col-span-1 lg:col-span-3'>
          <p>Windows 11 telah dirilis secara resmi beberapa hari lalu tepatnya pada tanggal 5 Oktober. Pengguna Windows 10 bisa melakukan upgrade ke windows 11 secara gratis dengan syarat win 10 tersebut sudah diaktivasi. Tentunya aktivasi tersebut harus legal baik dengan serial number Windows original atau bawaan dari laptop.</p>
          <p>Ada 2 cara update windows 11 yang bisa dilakukan dari windows 10. Kedua cara ini sangat mudah dan aman kerena tanpa menghilangkan data pada laptop atau pc kita. Cara pertama adalah melalui <strong>Windows Update</strong>, sedangkan yang kedua adalah melalui <strong>Windows Assistant</strong>.</p>
          <p className='bg-orange-200 rounded p-2'>Sebelum melakukan update Windows 11, pastikan terlebih dahulu laptop atau PC yang kita gunakan sudah memenuhi persyaratan minimal Windows 11. Apa saja syaratnya? Silahkan lihat pada requirements di bawah ini!</p>
          <p>Windows 11 Requirements</p>
          <ul className='ml-4 list-disc'>
            <li>Prosesor: 64bit dengan kecepatan 1 GHz minimal 2 core</li>
            <li>RAM: 4 GB</li>
            <li>Hardisk: 64 GB</li>
            <li>Sistem firmware: UEFI dengan dukungan Secure Boot.</li>
            <li>TPM: 2.0</li>
          </ul>
          <p>Untuk memastikan apakah laptop/PC sudah memenuhi semua persyaratan di atas maka kita bisa menggunakan tool pengecekan otomatis yang disediakan oleh Microsoft yang bernama <strong>PC Health check windows 11</strong>. Anda dapat mengunduhnya pada situs resmi Microsoft pada <Link href={'https://www.microsoft.com/en-id/windows/windows-11?r=1#pchealthcheck'}>Link ini</Link>. Lalu cukup buka aplikasi tersebut dan klik pada <strong>Check Now</strong> maka hasilnya akan diperlihatkan. Setelah memastikan bahwa PC/laptop memenuhi persyaratan dengan tampilnya <strong>This pc meets windows 11 requirements maka kita bisa melakukan update</strong>.</p>
          <Image
            alt={'Menu boot di bios'}
            src={'/blog/cara-install-windows-11/menu-boot-di-bios.webp'}
            loading={'lazy'}
          />
          <p>Selanjutnya kita akan membahas langkah-langkahnya baik dengan Windows Update atau Windows installation assistant beserta hal-hal yang perlu diketahui saat mengupdate dan setelah proses update berlangsung.</p>
          <h2 ref={myRef}>Cara Update Windows 11 melalui Windows Update</h2>
          <ul className='ml-4 list-disc'>
            <li>Buka menu <strong>Settings</strong> pada start menu Windows.</li>
            <li>Pilih menu <strong>Update & Security</strong>.</li>
            <li>Klik <strong>Check for Update</strong>, jika Windows 11 belum ada coba lakukan update yang tampil terlebih dahulu lalu restart. Lalu masuk ke <strong>Update & Security</strong> kembali dan klik <strong>Check for Update</strong> lagi. Lakukan hingga semua update selesai. Jika laptop/PC memenuhi persyaratan harusnya akan tampil update Windows 11 dengan tombol <strong>Review the License term</strong>.</li>
            <li>Klik <strong>Review the License term</strong> lalu pilih <strong>Accept and Install</strong>.</li>
            <li>Klik <strong>Download</strong> lalu tunggu hingga proses selesai sekitar 60 menit dengan kecepatan internet yang cepat dan stabil.</li>
            <li>Restart Windows lalu tunggu kembali hingga proses update selesai kurang lebih 30 menit.</li>
          </ul>
          <Image
            alt={'Menu boot di bios'}
            src={'/blog/cara-install-windows-11/menu-boot-di-bios.webp'}
            loading={'lazy'}
          />
          <h2>Cara Update Windows 11 menggunakan Windows 11 Installation Assistant</h2>
          <ul className="ml-4 list-disk">
            <li>Unduh Windows 11 Installation Assistant dari situs resmi Microsoft pada <Link href={'https://www.microsoft.com/en-us/software-download/windows11'}>Link ini</Link> .</li>
            <li>Buka file yang telah diunduh.</li>
            <li>Klik Accept and Install</li>
            <li>Tunggu hingga proses update selesai. Setelah selesai maka laptop atau PC akan minta direstart.</li>
            <li>Klik Restart Now. Maka komputer akan restart. Jika tidak ada proses restart terjadi maka lakukan restart secara manual seperti biasa.</li>
            <li>Tunggu proses restart dan update selesai. Setelah restart selesai maka Win 11 telah terinstall di laptop/PC kita.</li>
          </ul>
          <p>Setelah berhasil masuk ke Windows kembali maka kita akan disuguhkan dengan tampilan desktop yang baru. Mulai dari menu Start yang lebih keren, taskbar yang berada di tengah secara default dan icon yang berbeda</p>
          <h3 >Penutup</h3>
          <p>Update Windows 11 terasa sangat mudah dengan hanya beberapa klik saja tanpa perlu takut kehilangan data. Kemudahan upgrade windows ini tentu merupakan hal yang positif karena semua pengguna akan bisa menginstall Windows 11 dari Windows 10 tanpa bantuan teknisi. Namun sebaiknya tetap backup data yang penting sebelum melakukan update untuk mencegah hal yang tidak diinginkan seperti data hilang.</p>
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

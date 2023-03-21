import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/header';
// import Sidebar from '@com/Layout/Sidebar';
// import { useMutation } from '@tanstack/react-query';
// import UserContext from '@stores/userProvider';
import { useRouter } from 'next/router';
// import { USER_TYPE_ADMIN, USER_TYPE_SAKSI } from '@utils/Constant';

type Props = {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);

  const router = useRouter();

  const onClickOverlay = (isShow: boolean) => {
    if (isShow === undefined) {
      setSidebar(!sidebar);
    } else {
      setSidebar(isShow);
    }
  };


  return (
    <>
      <Head>
        <meta name="theme-color" content={'currentColor'} />
      </Head>
      <main className={''}>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className={'pt-16 overflow-y-auto'}>
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
import React, { useState, useEffect, useRef, useContext } from 'react';
import { BsList } from 'react-icons/bs';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  sidebar: boolean,
  setSidebar: (sidebar: boolean) => void,
}

const Header: React.FC<Props> = ({ sidebar, setSidebar }) => {

  const refProfile = useRef<HTMLDivElement>();
  const [profileBar, setProfileBar] = useState(false);
  const [headerBar, setHeaderBar] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (profileBar && refProfile.current && !refProfile.current.contains(e.target)) {
        setProfileBar(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [profileBar]);

  return (
    <>
      <header>
        <div className="fixed w-full shadow z-40 bg-white">
          <div className='flex justify-between items-center h-16'>
            <div className="p-2 flex items-center">
              <Link href={'/'} className={'no-underline'}>
                <div className="text-2xl px-2 text-primary-900">
                  <span className=''>{process.env.APP_NAME}</span>
                </div>
              </Link>
            </div>
            <div className='block lg:hidden'>
              <div className='p-2'>
                <button className="p-2 rounded-full duration-300" onClick={() => setHeaderBar(!headerBar)}>
                  <BsList className="" size={'1.5em'} />
                </button>
              </div>
            </div>
            <div className='hidden lg:block'>
              <div className="relative inline-block text-left p-2" ref={refProfile}>
                <div className="flex items-center">
                  <Link href={'/'} className={'no-underline'}>
                    <div className="mx-2 py-2 px-4 rounded text-primary-900 hover:bg-gray-200">{'Home'}</div>
                  </Link>
                  <Link href={'/blog'} className={'no-underline'}>
                    <div className="mx-2 py-2 px-4 rounded text-primary-900 hover:bg-gray-200">{'Blog'}</div>
                  </Link>
                  <Link href={'/about'} className={'no-underline'}>
                    <div className="mx-2 py-2 px-4 rounded text-primary-900 hover:bg-gray-200">{'About'}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${headerBar ? 'block' : 'hidden'} lg:hidden`}>
            <div className={'h-full p-2'}>
              <Link href={'/'} className={'no-underline'}>
                <div className="p-2 mb-2 rounded text-primary-900 hover:bg-gray-200">{'Home'}</div>
              </Link>
              <Link href={'/blog'} className={'no-underline'}>
                <div className="p-2 mb-2 rounded text-primary-900 hover:bg-gray-200">{'Blog'}</div>
              </Link>
              <Link href={'/about'} className={'no-underline'}>
                <div className="p-2 mb-2 rounded text-primary-900 hover:bg-gray-200">{'About'}</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

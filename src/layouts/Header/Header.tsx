import { Button, Drawer } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setIsSideBarOpen(false));
    return () =>
      window.removeEventListener('resize', () => setIsSideBarOpen(false));
  }, []);

  //// COMPONENT
  return (
    <nav className='w-full max-w-[1000px] h-[70px] xs:h-[90px] sm:h-[100px] flex items-center justify-between'>
      <Image
        src='/logo.svg'
        alt='Gradient Border CSS Logo'
        width={250}
        height={80}
        className='w-[87%] sm:w-[360px] md:w-[380px] flex'
        priority
      />
      <aside className='hidden md:flex gap-2'>
        <CTAs />
      </aside>
      <aside className='md:hidden'>
        <Image
          src='/icons/burguer-icon.svg'
          alt='Burguer Icon'
          width={25}
          height={25}
          className='ml-2'
          onClick={() => setIsSideBarOpen(true)}
        />
      </aside>

      <Drawer
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
        closable={false}
      >
        <header className='flex flex-col gap-2'>
          <CTAs />
        </header>
        <p className='flex flex-col items-center'>
          <span className='text-center text-pretty my-0'>
            Copyright © 2024{' '}
            <a
              href='https://facundochavez.com'
              target='_blank'
              className='pr-1 text-black underline focus:text-black focus:underline'
            >
              Facundo Chavez.
            </a>
          </span>
          <span className='text-center text-pretty'>All rights reserved.</span>
        </p>
      </Drawer>
    </nav>
  );
};

const CTAs = () => {
  function shareApp() {
    navigator.share({
      title: 'Gradient Border CSS',
      url: 'https://gradient-border.vercel.app/',
    });
  }

  return (
    <>
      <Button
        onClick={() =>
          window.open(
            'https://github.com/facundochavez/gradient-border',
            '_blank'
          )
        }
        type='primary'
        className='w-full'
        icon={
          <Image
            src='/icons/github-icon.svg'
            alt='GitHub Icon'
            width={17}
            height={17}
            className='brightness-[10] pb-[1px]'
          />
        }
      >
        GitHub Repo
      </Button>

      <Button
        onClick={shareApp}
        icon={
          <Image
            src='/icons/share-icon.svg'
            alt='Share Icon'
            width={15}
            height={15}
          />
        }
      >
        {' '}
        Share the app
      </Button>
    </>
  );
};

export default Header;

import { Button, Drawer } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  //// COMPONENT
  return (
    <nav className='w-full max-w-[1000px] h-[70px] xs:h-[90px] sm:h-[100px] flex items-center justify-between'>
      <Image
        src='/logo.svg'
        alt='Gradient Border CSS Logo'
        width={250}
        height={70}
        className='xs:w-[300px] sm:w-[350px] md:w-[350px]'
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
        <h3>
          Crafted by
          <br /> Facundo Chavez
        </h3>
      </Drawer>
    </nav>
  );
};

const CTAs = () => {
  return (
    <>
      <Button
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

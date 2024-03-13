import GradientBorder from '@/components/GradientBorder/GradientBorder';
import { Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

const Preview = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  //// COMPONENT
  return (
    <div
      className={`w-full h-full rounded-2xl p-5 pt-4 flex flex-col gap-4 md:p-6 md:pt-5 ${
        isDarkMode
          ? 'bg-[var(--color-primary)]'
          : 'outline outline-2 outline-[var(--color-primary)]'
      }`}
    >
      <header className='w-full flex justify-between'>
        <h2
          className={`text-xl font-semibold ml-1 text-light ${
            isDarkMode ? 'text-white' : 'text-[var(--color-primary)]'
          } `}
        >
          Preview{' '}
        </h2>
        {isDarkMode ? (
          <Button
            type='text'
            onClick={() => setIsDarkMode(!isDarkMode)}
            icon={
              <Image
                src='/icons/moon-icon.svg'
                alt='Moon Icon'
                width={23}
                height={23}
                className='brightness-[10]'
              />
            }
          />
        ) : (
          <Button
            type='text'
            onClick={() => setIsDarkMode(!isDarkMode)}
            icon={
              <Image
                src='/icons/sun-icon.svg'
                alt='Sun Icon'
                width={23}
                height={23}
              />
            }
          />
        )}
      </header>
      <main className='w-full h-full p-1'>
        <GradientBorder />
      </main>
    </div>
  );
};

export default Preview;

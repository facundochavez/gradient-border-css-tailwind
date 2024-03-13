import Image from 'next/image';
import Header from '@/layouts/Header/Header';
import Preview from '@/layouts/Preview/Preview';
import Samples from '@/layouts/Samples/Samples';
import ColorsPicker from '@/layouts/ColorsPicker/ColorsPicker';
import BorderSettings from '@/layouts/BorderSettings/BorderSettings';
import CSSCode from '@/layouts/CSSCode/CSSCode';
import Footer from '@/layouts/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full max-w-[1000px] flex flex-col gap-4 md:gap-6 md:flex-row mb-6'>
        <main className='w-full h-[250px] mt-[5px] md:h-[unset] md:min-h-full'>
          <Preview />
        </main>
        <aside className='w-full flex flex-col gap-3 md:gap-3 md:min-w-[380px]'>
          <ColorsPicker />
          <footer className='w-full flex flex-row-reverse gap-5 md:gap-6 md:flex-row'>
            <BorderSettings />
            <Samples />
          </footer>
        </aside>
      </main>
      <footer className='w-full max-w-[1000px] flex flex-col gap-4 md:gap-6'>
        <CSSCode />
      {/* <Footer /> */}
      </footer>
    </>
  );
}

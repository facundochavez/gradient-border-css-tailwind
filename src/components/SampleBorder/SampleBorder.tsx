import { useColorsContext } from '@/context/colors.context';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SampleBorder = ({ colors }: { colors: string[] }) => {
  const [colorsText, setColorsText] = useState('');
  const {applySample } = useColorsContext();

  useEffect(() => {
    let newColorsText = '';
    const step = 100 / (colors.length - 1);
    colors.forEach((color, index) => {
      newColorsText += `${color} ${index * step}%${
        index < colors.length - 1 ? ',' : ''
      }`;
    });
    setColorsText(newColorsText);
  }, [colors]);

  //// COMPONENT
  return (
    <div className='relative w-full aspect-square' onClick={() => applySample({ colors })}>
      <div
        className='absolute w-full aspect-square cursor-pointer'
        style={{
          border: `5px solid transparent`,
          borderRadius: `10px`,
          background: `linear-gradient(90deg,${colorsText}) border-box`,
          mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
          maskComposite: 'exclude',
        }}
      />
      <div className='absolute w-full h-full cursor-pointer flex justify-center items-center bg-[#ffffff15] rounded-xl opacity-0 hover:opacity-100 active:opacity-50'>
        <Image
          src='/icons/upload-icon.svg'
          alt='Upload icon'
          width={25}
          height={25}
          className='brightness-[10] select-none'
        />
      </div>
    </div>
  );
};

export default SampleBorder;

import { useEffect, useState } from 'react';
import { useColorsContext } from '@/context/colors.context';
import { ColorItem } from '@/context/colors.context';
import { Button } from 'antd';
import ColorPicker from '@/components/ColorPicker/ColorPicker';
import Image from 'next/image';

const ColorsPicker = () => {
  const { colors } = useColorsContext();

  //// COMPONENT
  return (
    <section className='w-full gap-[2%] flex list-none'>
      {colors.map((color, index) => (
        <ColorPicker key={color.id} color={color} index={index} />
      ))}
    </section>
  );
};

export default ColorsPicker;

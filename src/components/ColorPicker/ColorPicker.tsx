import { ColorItem, useColorsContext } from '@/context/colors.context';
import { ColorPicker as AntdColorPicker, Button } from 'antd';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ColorPicker = ({ color, index }: { color: ColorItem; index: number }) => {
  const { selectedColors, changeColor, deleteColor } = useColorsContext();
  const [isOpen, setIsOpen] = useState(false);

  //preventscroll onTouchStart

  useEffect(() => {
    const panel = document.querySelector(`[aria-label=panel${index}]`);
    if (!panel) return;

    const handleTouchStart = (e: any) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e: any) => {
      panel.removeEventListener('touchstart', handleTouchStart);
      panel.removeEventListener('touchend', handleTouchEnd);
    };

    panel.addEventListener('touchstart', handleTouchStart);
    panel.addEventListener('touchend', handleTouchEnd);

    return () => {
      panel.removeEventListener('touchstart', handleTouchStart);
    };
  });

  //// COMPONENT
  return (
    <div className='w-full aspect-square relative'>
      <AntdColorPicker
        aria-label={`picker${index}`}
        onOpenChange={() => setIsOpen(!isOpen)}
        placement='bottom'
        disabled={color.color === 'empty'}
        className='w-full h-full'
        disabledAlpha
        defaultValue={
          color.color === 'plus' || color.color === 'empty'
            ? '#EDEDED'
            : color.color
        }
        panelRender={(panel) => (
          <div className='flex flex-col gap-3'>
            <div aria-label={`panel${index}`}>{panel}</div>
            <header className='w-full flex gap-2 justify-end'>
              <Button
                disabled={
                  index <= selectedColors.length - 1 &&
                  selectedColors.length <= 2
                }
                danger
                onClick={() => deleteColor(color.id)}
              >
                {index > selectedColors.length - 1 ? 'Cancel' : 'Remove'}
              </Button>
              <Button
                type={
                  index <= selectedColors.length - 1 ? 'primary' : 'default'
                }
                disabled={index > selectedColors.length - 1}
                onClick={() => {
                  const element = document.querySelector(
                    `[aria-label=picker${index}]`
                  );
                  if (element instanceof HTMLElement) {
                    element.click();
                  }
                }}
              >
                Done
              </Button>
            </header>
          </div>
        )}
        onChangeComplete={(selectedColor) => {
          changeColor({
            ColorId: color.id,
            newColor: selectedColor.toHexString(),
            index: index,
          });
        }}
      />
      {color.color === 'plus' && !isOpen && (
        <Image
          src='/icons/plus-icon.svg'
          alt='Plus Icon'
          width={25}
          height={25}
          className='w-[35%] h-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none brightness-[2]'
        />
      )}
    </div>
  );
};

export default ColorPicker;

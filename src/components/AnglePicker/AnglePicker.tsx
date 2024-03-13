import { useBorderSettingsContext } from '@/context/borderSettings.context';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface AnglePickerProps {}

const AnglePicker: React.FC<AnglePickerProps> = () => {
  const baseRef = useRef<HTMLDivElement>(null);
  const { gradientAngle, setGradientAngle } = useBorderSettingsContext();

  const calculateAngle = (x: number, y: number): number => {
    const rect = baseRef.current?.getBoundingClientRect();

    if (!rect) return 0;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = (angleRad * 180) / Math.PI + 90;
    angleDeg = angleDeg < 0 ? angleDeg + 360 : angleDeg;

    return angleDeg;
  };

  const handleMouseDown = (e: any) => {
    const handleMouseMove = (event: MouseEvent) => {
      const newAngle = Math.round(calculateAngle(event.clientX, event.clientY));
      setGradientAngle(newAngle);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e: any) => {
    e.preventDefault();

    const touch = e.touches[0];
    const touchMove = (event: TouchEvent) => {
      const newAngle = Math.round(
        calculateAngle(event.touches[0].clientX, event.touches[0].clientY)
      );
      setGradientAngle(newAngle);
    };

    const touchEnd = () => {
      document.removeEventListener('touchmove', touchMove);
      document.removeEventListener('touchend', touchEnd);
    };

    document.addEventListener('touchmove', touchMove);
    document.addEventListener('touchend', touchEnd);
  };

  useEffect(() => {
    if (baseRef.current) {
      baseRef.current.addEventListener('mousedown', handleMouseDown);
      baseRef.current.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (baseRef.current) {
        baseRef.current.removeEventListener('mousedown', handleMouseDown);
        baseRef.current.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [baseRef]);

  return (
    <div
      ref={baseRef}
      className='w-full aspect-square bg-[var(--color-mid-light-gray)] rounded-lg mt-1 flex justify-center items-center select-none'
    >
      <div className='h-[80px] aspect-square bg-[var(--color-primary)] rounded-[50%] flex justify-center items-center'>
        <div
          className='h-[55px] w-[8px]'
          style={{ transform: `rotate(${gradientAngle}deg)` }}
        >
          <div className='w-[8px] h-[8px] bg-[var(--color-mid-light-gray)] rounded-[50%]' />
        </div>
      </div>
    </div>
  );
};

export default AnglePicker;

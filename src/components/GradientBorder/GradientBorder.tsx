import { useBorderSettingsContext } from '@/context/borderSettings.context';
import { useColorsContext } from '@/context/colors.context';
import { useEffect, useState } from 'react';

const GradientBorder = () => {
  const { borderWidth, borderRadius, gradientAngle } =
    useBorderSettingsContext();
  const { colorsText } = useColorsContext();
  const adaptedBorderWidth = Math.min(Math.max(borderWidth, 1), 30);
  const adaptedBorderRadius = Math.min(Math.max(borderRadius, 0), 60);

  //// COMPONENT
  return (
    <div
      className='relative w-full h-full'
      style={{
        border: `${adaptedBorderWidth}px solid transparent`,
        borderRadius: `${adaptedBorderRadius}px`,
        background: `linear-gradient(${gradientAngle}deg, ${colorsText}) border-box`,
        mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
        maskComposite: 'exclude',
      }}
    />
  );
};

export default GradientBorder;

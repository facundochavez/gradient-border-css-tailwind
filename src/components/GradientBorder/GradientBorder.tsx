import { useBorderSettingsContext } from '@/context/borderSettings.context';
import { useColorsContext } from '@/context/colors.context';
import { useEffect, useState } from 'react';

const GradientBorder = () => {
  const { borderWidth, borderRadius, gradientAngle } =
    useBorderSettingsContext();
  const { selectedColors } = useColorsContext();
  const adaptedBorderWidth = Math.min(Math.max(borderWidth, 1), 50);
  const adaptedBorderRadius = Math.min(Math.max(borderRadius, 0), 50);
  const [colorsText, setColorsText] = useState('');

  useEffect(() => {
    let newColorsText = '';
    const step = 100 / (selectedColors.length - 1);
    for (let i = 0; i < selectedColors.length; i++) {
      newColorsText += `${selectedColors[i].color} ${i * step}%${i<selectedColors.length-1?',' : ''}`;
    }
    setColorsText(newColorsText);
  }, [selectedColors]);

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

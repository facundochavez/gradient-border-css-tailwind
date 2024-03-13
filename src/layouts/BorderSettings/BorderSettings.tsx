import AnglePicker from '@/components/AnglePicker/AnglePicker';
import SettingInput from '@/components/SettingInput/SettingInput';
import { useBorderSettingsContext } from '@/context/borderSettings.context';
import { InputNumber, Slider } from 'antd';

const BorderSettings = () => {
  const {
    borderWidth,
    setBorderWidth,
    borderRadius,
    setBorderRadius,
    gradientAngle,
    setGradientAngle,
  } = useBorderSettingsContext();

  //// COMPONENT
  return (
    <section className='w-[110px] min-w-[110px] flex flex-col gap-2'>
      <SettingInput
        label='Border width:'
        value={borderWidth}
        min={0}
        max={undefined}
        addonAfter='px'
        onChange={(value) => setBorderWidth(Number(value))}
      />
      <Slider
        min={0}
        max={30}
        value={borderWidth}
        onChange={setBorderWidth}
        tooltip={{ formatter: null }}
        
      />
      <SettingInput
        label='Border radius:'
        value={borderRadius}
        min={0}
        max={undefined}
        addonAfter='px'
        onChange={(value) => setBorderRadius(Number(value))}
      />
      <Slider
        min={0}
        max={60}
        value={borderRadius}
        onChange={setBorderRadius}
        tooltip={{ formatter: null }}
      />
      <SettingInput
        label='Gradient angle:'
        value={gradientAngle}
        min={-360}
        max={360}
        addonAfter='deg'
        onChange={(value) => setGradientAngle(Number(value))}
      />
      <AnglePicker />
    </section>
  );
};

export default BorderSettings;

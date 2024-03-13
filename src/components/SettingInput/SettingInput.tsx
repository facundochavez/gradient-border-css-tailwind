import { InputNumber } from 'antd';

interface SettingInputProps extends React.ComponentProps<typeof InputNumber> {
  label: string;
}

const SettingInput: React.FC<SettingInputProps> = ({ label, ...props }: SettingInputProps) => {
  //// COMPONENT
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-semibold'>{label}</label>
      <InputNumber
        {...props}
        variant='filled'
        className='bg-[var(--color-light-gray)] rounded-lg'
        keyboard
        controls
        changeOnWheel
      />
    </div>
  );
};

export default SettingInput;

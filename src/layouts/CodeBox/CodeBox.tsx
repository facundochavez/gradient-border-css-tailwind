import CodeTabs from '@/components/CodeTabs/CodeTabs';
import MyCodeMirror from '@/components/MyCodeMirror/MyCodeMirror';
import { useCodeContext } from '@/context/code.context';
import { Button, message } from 'antd';
import Image from 'next/image';

const CodeBox = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { codes, selectedCode } = useCodeContext();

  function copyToClipboard() {
    navigator.clipboard.writeText(codes[selectedCode].value);
    messageApi.open({
/*       type: 'success', */
      content: 'Copied to clipboard!',
    });
  }

  //// COMPONENT
  return (
    <>
      {contextHolder}
      <div className='w-full bg-[var(--color-primary)] rounded-2xl flex flex-col p-5 pt-4 md:p-6 md:pt-5 gap-5'>
        <header className='w-full flex justify-between'>
          <CodeTabs />
          <Button
            type='text'
            onClick={copyToClipboard}
            icon={
              <Image
                src='/icons/copy-icon.svg'
                alt='Copy Icon'
                width={24}
                height={24}
                className='brightness-[10]'
              />
            }
            className='active:opacity-80'
          />
        </header>
        <MyCodeMirror
          value={codes[selectedCode].value}
          extensions={codes[selectedCode].extensions}
        />
      </div>
    </>
  );
};

export default CodeBox;

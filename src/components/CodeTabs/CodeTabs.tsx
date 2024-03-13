import { useCodeContext } from '@/context/code.context';
import { useEffect, useRef, useState } from 'react';

const CodeTabs = () => {

  const {codes, tab1Ref, tab2Ref, selectedCode, setSelectedCode} = useCodeContext();
 
  const [underlineLeft, setUnderlineLeft] = useState<number>(0);
  const [underlineWidth, setUnderlineWidth] = useState<number>(0);



  useEffect(() => {
    const code1Heading = tab1Ref.current;
    const code2Heading = tab2Ref.current;
    if (!code1Heading || !code2Heading) return;

    if (selectedCode === 0) {
      setUnderlineLeft(code1Heading.offsetLeft);
      setUnderlineWidth(code1Heading.offsetWidth);
    } else {
      setUnderlineLeft(code2Heading.offsetLeft);
      setUnderlineWidth(code2Heading.offsetWidth);
    }
  }, [selectedCode]);

  //// COMPONENT
  return (
    <div className='w-full flex gap-3 relative'>
      {codes.map((code) => (
        <h2
          key={code.index}
          ref={code.tabRef}
          className='text-xl font-semibold text-light text-white cursor-pointer active:opacity-50 select-none'
          onClick={() => {
            setSelectedCode(code.index);
          }}
        >
          {code.name}
        </h2>
      ))}
      <div
        className={`absolute bottom-0 h-0.5 bg-white `}
        style={{
          left: `${underlineLeft}px`,
          width: `${underlineWidth}px`,
          transition: 'all 0.15s ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default CodeTabs;

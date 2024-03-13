import { useEffect, useRef, useState } from 'react';

const CodeTab = () => {
  const cssRef = useRef<HTMLHeadingElement>(null);
  const tailwindRef = useRef<HTMLHeadingElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [underlineLeft, setUnderlineLeft] = useState<number>(0);
  const [underlineWidth, setUnderlineWidth] = useState<number>(0);

  const tabs = [
    {
      id: 0,
      name: 'CSS',
      ref: cssRef,
    },
    {
      id: 1,
      name: 'Tailwind',
      ref: tailwindRef,
    },
  ];

  useEffect(() => {
    const cssHeading = cssRef.current;
    const tailwindHeading = tailwindRef.current;
    if (!cssHeading || !tailwindHeading) return;

    if (selectedTab === 0) {
      setUnderlineLeft(cssHeading.offsetLeft);
      setUnderlineWidth(cssHeading.offsetWidth);
    } else {
      setUnderlineLeft(tailwindHeading.offsetLeft);
      setUnderlineWidth(tailwindHeading.offsetWidth);
    }
  }, [selectedTab]);

  //// COMPONENT
  return (
    <div className='w-full flex gap-3 relative'>
      {tabs.map((tab) => (
        <h2
          key={tab.id}
          ref={tab.ref}
          className='text-xl font-semibold text-light text-white cursor-pointer active:opacity-50 select-none'
          onClick={() => {
            setSelectedTab(tab.id);
          }}
        >
          {tab.name}
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

export default CodeTab;

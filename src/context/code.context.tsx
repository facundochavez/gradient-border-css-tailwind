import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { useBorderSettingsContext } from './borderSettings.context';
import { useColorsContext } from './colors.context';

interface Code {
  index: number;
  name: string;
  tabRef: React.RefObject<HTMLHeadingElement>;
  value: string;
  extensions: any;
}

interface CodeProps {
  codes: Code[];
  tab1Ref: React.RefObject<HTMLHeadingElement>;
  tab2Ref: React.RefObject<HTMLHeadingElement>;
  selectedCode: number;
  setSelectedCode: React.Dispatch<React.SetStateAction<number>>;
}

export const CodeContext = createContext<CodeProps | undefined>(undefined);

interface CodeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CodeProvider = ({ children }: CodeProviderProps) => {
  const { borderWidth, borderRadius, gradientAngle } =
    useBorderSettingsContext();
  const { colorsText } = useColorsContext();
  const tab1Ref = useRef<HTMLHeadingElement>(null);
  const tab2Ref = useRef<HTMLHeadingElement>(null);
  const codes: Code[] = [
    {
      index: 0,
      name: 'CSS',
      tabRef: tab1Ref,
      value: `.gradient-border {
    position: relative;
    border: ${borderWidth}px solid transparent;
    border-radius: ${borderRadius}px;
}
    
.gradient-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: inherit;
    border-radius: inherit;
    
    background: linear-gradient(${gradientAngle}deg,${colorsText}) border-box;
    mask:
        linear-gradient(white, white) padding-box,
        linear-gradient(white, white);
    mask-composite: exclude;
}`,
      extensions: [css()],
    },
    {
      index: 1,
      name: 'Tailwind',
      tabRef: tab2Ref,
      value: `<div //STYLE THIS WRAPPER
  className='relative w-10 h-10 border-[${borderWidth}px solid transparent] border-radius-[${borderRadius}px]'> 
  <div //KEEP THIS DIV FIRST
    className='absolute w-full h-full border-[inherit] border-radius-[inherit]'
    style={{
      background: 'linear-gradient(90deg,${colorsText}) border-box',
      mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
      maskComposite: 'exclude',
    }}
  />
  <div className='absolute w-full h-full border-[inherit] border-radius-[inherit]'>
     //YOUR CONTENT HERE
  </div>
</div>`,
      extensions: [javascript()],
    },
  ];
  const [selectedCode, setSelectedCode] = useState<number>(0);

  return (
    <CodeContext.Provider
      value={{
        codes,
        tab1Ref,
        tab2Ref,
        selectedCode,
        setSelectedCode,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error('useCodeContext must be used within a CodeProvider');
  }
  return context;
};

export default CodeProvider;

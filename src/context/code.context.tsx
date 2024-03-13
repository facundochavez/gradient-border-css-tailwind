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
      value: `.gradient_border {
    position: relative;
    border: ${borderWidth}px solid transparent;
    border-radius: ${borderRadius}px;
}
    
.gradient_border::before {
    content: '';
    position: absolute;
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
      value: `<div class='relative'>
  <div //KEEP THIS DIV FIRST
    class='absolute w-full h-full'
    style={{
      border: '${borderWidth}px solid transparent',
      borderRadius: '${borderRadius}px',
      background:
        'linear-gradient(${gradientAngle}deg,${colorsText}) border-box',
      mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
      maskComposite: 'exclude',
    }}
  />
  <div //STYLE THIS DIV
    class='p-4 flex items-center justify-center'
    style={{
      borderWidth: '${borderWidth}px solid transparent',
      borderRadius: '${borderRadius}px',
    }}
  >
    YOUR CONTENT HERE
  </div>
</div>`,
      extensions: [javascript({ jsx: true })],
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

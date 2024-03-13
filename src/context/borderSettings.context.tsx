import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface BorderSettingsProps {
  borderWidth: number;
  setBorderWidth: React.Dispatch<React.SetStateAction<number>>;
  borderRadius: number;
  setBorderRadius: React.Dispatch<React.SetStateAction<number>>;
  gradientAngle: number;
  setGradientAngle: React.Dispatch<React.SetStateAction<number>>;
}

export const BorderSettingsContext = createContext<
  BorderSettingsProps | undefined
>(undefined);

interface BorderSettingsProviderProps {
  children: JSX.Element | JSX.Element[];
}

const BorderSettingsProvider = ({ children }: BorderSettingsProviderProps) => {
  const [borderWidth, setBorderWidth] = useState<number>(5);
  const [borderRadius, setBorderRadius] = useState<number>(15);
  const [gradientAngle, setGradientAngle] = useState<number>(90);

  return (
    <BorderSettingsContext.Provider
      value={{
        borderWidth,
        setBorderWidth,
        borderRadius,
        setBorderRadius,
        gradientAngle,
        setGradientAngle,
      }}
    >
      {children}
    </BorderSettingsContext.Provider>
  );
};

export const useBorderSettingsContext = () => {
  const context = useContext(BorderSettingsContext);
  if (!context) {
    throw new Error(
      'useBorderSettingsContext must be used within a BorderSettingsProvider'
    );
  }
  return context;
};

export default BorderSettingsProvider;

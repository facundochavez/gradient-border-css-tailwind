import { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface ColorItem {
  id: string;
  color: string;
}

interface ColorsContextProps {
  colors: ColorItem[];
  selectedColors: ColorItem[];
  setSelectedColors: React.Dispatch<React.SetStateAction<ColorItem[]>>;
  colorsText: string;
  changeColor: ({
    ColorId,
    newColor,
    index,
  }: {
    ColorId: string;
    newColor: string;
    index: number;
  }) => void;
  deleteColor: (ColorId: string) => void;
  applySample: ({ colors }: { colors: string[] }) => void;
}

export const ColorsContext = createContext<ColorsContextProps | undefined>(
  undefined
);

interface ColorsProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_COLORS: ColorItem[] = [
  {
    id: crypto.randomUUID(),
    color: '#5FFF00',
  },
  {
    id: crypto.randomUUID(),
    color: '#00C9FF',
  },
];

const ColorsProvider = ({ children }: ColorsProviderProps) => {
  const [selectedColors, setSelectedColors] =
    useState<ColorItem[]>(INITIAL_COLORS);
  const [colors, setColors] = useState<ColorItem[]>(selectedColors);
  const [colorsText, setColorsText] = useState('');

  const changeColor = ({
    ColorId,
    newColor,
    index,
  }: {
    ColorId: string;
    newColor: string;
    index: number;
  }) => {
    let newColors: ColorItem[] = [];
    if (index > selectedColors.length - 1) {
      newColors = [...selectedColors, { id: ColorId, color: newColor }];
      setSelectedColors(newColors);
    } else {
      newColors = selectedColors.map((color) => {
        if (color.id === ColorId) {
          return {
            id: color.id,
            color: newColor,
          };
        } else {
          return color;
        }
      });
    }
    setSelectedColors(newColors);
  };

  const deleteColor = (ColorId: string) => {
    setSelectedColors(selectedColors.filter((color) => color.id !== ColorId));
  };

  const applySample = ({ colors }: { colors: string[] }) => {
    const newColors: ColorItem[] = [];
    colors.forEach((color) => {
      newColors.push({ id: crypto.randomUUID(), color });
    });
    setSelectedColors(newColors);
  };

  useEffect(() => {
    const newColors: ColorItem[] = [];
    for (let i = 0; i < 5; i++) {
      newColors.push(
        selectedColors[i]
          ? selectedColors[i]
          : selectedColors[i - 1]
          ? { id: crypto.randomUUID(), color: 'plus' }
          : { id: crypto.randomUUID(), color: 'empty' }
      );
    }
    setColors(newColors);
  }, [selectedColors]);

  useEffect(() => {
    let newColorsText = '';
    const step = Math.round(100 / (selectedColors.length - 1));
    for (let i = 0; i < selectedColors.length; i++) {
      newColorsText += ` ${selectedColors[i].color} ${
        i * step === 99 ? 100 : i * step
      }%${i < selectedColors.length - 1 ? ',' : ''}`;
    }
    setColorsText(newColorsText);
  }, [selectedColors]);

  return (
    <ColorsContext.Provider
      value={{
        colors,
        selectedColors,
        setSelectedColors,
        colorsText,
        changeColor,
        deleteColor,
        applySample,
      }}
    >
      {children}
    </ColorsContext.Provider>
  );
};

export const useColorsContext = () => {
  const context = useContext(ColorsContext);
  if (!context) {
    throw new Error('useColorsContext must be used within a ColorsProvider');
  }
  return context;
};

export default ColorsProvider;

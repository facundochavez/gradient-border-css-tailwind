import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { useCallback, useState } from 'react';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useBorderSettingsContext } from '@/context/borderSettings.context';
import { useColorsContext } from '@/context/colors.context';

const CSSCode = () => {
  const { borderWidth, borderRadius, gradientAngle } = useBorderSettingsContext();
  const { colorsText } = useColorsContext();

  const cssText = `.gradient-border {
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
}`;

  return (
    <CodeMirror
    maxHeight='100%'
      value={cssText}
      height='200px'
      extensions={[css()]}
      theme={dracula}
      editable={false}
      unselectable='on'
      style={{ backgroundColor: 'transparent' }}
      basicSetup={{
        foldGutter: false,
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
      }}
    />
  );
};

export default CSSCode;

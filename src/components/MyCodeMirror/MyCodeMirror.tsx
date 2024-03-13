import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';


const MyCodeMirror = ( {...props }: any) => {
  

  return (
    <CodeMirror
      {...props}
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

export default MyCodeMirror;
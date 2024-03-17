import styles from './TestBox.module.css';

const TestBox = () => {
  //// COMPONENT
  return (
    <div className='m-[50px]'>
      <div className='relative'>
        <div //KEEP THIS DIV FIRST
          className='absolute w-full h-full border-[5px] border-transparent border-solid rounded-[15px]
                    bg-[linear-gradient(50deg,#5FFF00,#00C9FF)] bg-origin-border'
          style={{
            /*             background:
              'linear-gradient(90deg, #5FFF00 0%, #00C9FF 100%) border-box', */
            mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
            maskComposite: 'exclude',
          }}
        />
        <div //STYLE THIS DIV KEEPING BORDER SETTINGS
          className='border-[5px] border-transparent border-solid rounded-[15px] '
        >
          YOUR CONTENT HERE
        </div>
      </div>
      <div className={styles.gradient_border}>YOUR CONTENT HERE</div>
    </div>
  );
};

export default TestBox;

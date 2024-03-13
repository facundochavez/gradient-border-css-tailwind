import styles from './TestBox.module.css';

const TestBox = () => {
  //// COMPONENT
  return (
    <div className='m-[50px] '>
      <div className='relative'>
        <div //KEEP THIS DIV FIRST
          className='absolute w-full h-full'
          style={{
            border: '5px solid transparent',
            borderRadius: '15px',
            background:
              'linear-gradient(90deg, #5FFF00 0%, #00C9FF 100%) border-box',
            mask: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)',
            maskComposite: 'exclude',
          }}
        />
        <div //STYLE THIS DIV AS YOU PREFER
          className='p-4 flex items-center justify-center'
          style={{
            borderWidth: '5px solid transparent',
          }}
        >
          YOUR CONTENT HERE
        </div>
      </div>
      <div className={styles.gradient_border}>YOUR CONTENT HERE</div>
    </div>
  );
};

export default TestBox;

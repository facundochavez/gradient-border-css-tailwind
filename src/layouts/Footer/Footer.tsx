const Footer = () => {
  //// COMPONENT
  return (
    <div className='w-screen h-[100px] bg-[var(--color-primary)] flex items-center flex-wrap justify-center px-6'>
      <p className='flex flex-col items-center'>
        <span className='text-white text-center text-pretty my-0'>
          Copyright © 2024{' '}
          <a
            href='https://facundochavez.com'
            target='_blank'
            className='text-white pr-1 hover:opacity-75 active:opacity-50'
          >
            Facundo Chavez.
          </a>
        </span>
        <span className='text-white text-center text-pretty'>
          All rights reserved.
        </span>
      </p>
    </div>
  );
};

export default Footer;

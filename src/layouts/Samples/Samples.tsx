import SampleBorder from '@/components/SampleBorder/SampleBorder';
import styles from './Samples.module.css';

const Samples = () => {
  const sampleItems = [
    {
      id: 1,
      colors: ['#5EFF00', '#00C9FF'],
    },
    {
      id: 2,
      colors: ['#DF00FF', '#6D31FF'],
    },
    {
      id: 3,
      colors: ['#FFE000', '#FF3000'],
    },
    {
      id: 4,
      colors: ['#A2FF00', '#FFE000', '#FF6700', '#DF00FF'],
    },
    {
      id: 5,
      colors: ['#AE00FF', '#00C9FF', '#FFE000'],
    },
    {
      id: 6,
      colors: ['#FF0037', '#DF00FF', '#FF0037'],
    },
    {
      id: 7,
      colors: ['#00C9FF', '#A2FF00', '#FF6700'],
    },
    {
      id: 8,
      colors: ['#FFE600', '#FF00F9', '#4400FF'],
    },
    {
      id: 9,
      colors: ['#5C25FF', '#00C9FF'],
    },
  ];

  //// COMPONENT
  return (
    <div className='w-full min-h-[calc(100% - 0.5px)] mt-1 rounded-2xl p-4 pt-3 md:p-6 md:pt-4 bg-[var(--color-primary)] md:mr-[5px] flex flex-col gap-4 '>
      <header className='w-full'>
        <h2 className='text-lg font-semibold ml-1 text-light text-white'>
          Samples
        </h2>
      </header>
      <main className={styles.samples_container}>
        {sampleItems.map((sample) => (
          <SampleBorder key={sample.id} colors={sample.colors} />
        ))}
      </main>
    </div>
  );
};

export default Samples;

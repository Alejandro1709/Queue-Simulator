import QueueHolder from './QueueHolder';

async function System() {
  return (
    <aside className='flex flex-col lg:w-80 gap-2 lg:gap-4'>
      <header className='bg-white border-b flex w-full p-3 gap-2 rounded'>
        <input className='flex-1' type='text' placeholder='Your name, age' />
        <button className='text-blue-500 hover:text-blue-600'>Enqueue</button>
      </header>

      <QueueHolder />
    </aside>
  );
}

export default System;

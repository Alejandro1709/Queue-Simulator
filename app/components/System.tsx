import Queue from './Queue';
import { generateTickets } from '../utils/generator';

async function System() {
  const tickets = await generateTickets();

  return (
    <aside className='flex flex-col lg:w-80 gap-2 lg:gap-4'>
      <header className='bg-white border-b flex w-full p-3 gap-2 rounded'>
        <input className='flex-1' type='text' placeholder='Your name, age' />
        <button className='text-blue-500 hover:text-blue-600'>Enqueue</button>
      </header>

      <Queue tickets={tickets} />
    </aside>
  );
}

export default System;

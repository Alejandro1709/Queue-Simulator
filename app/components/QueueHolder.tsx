'use client';
import { useEffect, useState } from 'react';
import { generateTickets } from '../utils/generator';
import Queue from '../utils/queue';
import type ITicket from '../types/ticket';

function QueueHolder() {
  const [queue, setQueue] = useState(new Queue<ITicket>());

  const tickets = queue.toArray();

  const configureQueue = async () => {
    const queue = await generateTickets(new Queue<ITicket>());
    setQueue(queue);
  };

  useEffect(() => {
    configureQueue();
  }, []);

  return (
    <ul className='flex flex-col border'>
      {tickets.map((ticket) => (
        <li
          className='bg-white p-3 flex items-center border-b justify-between'
          key={ticket.id}
        >
          <div className='flex gap-2 items-center'>
            <h3 className='text-xl font-semibold'>
              #{ticket.priority < 10 ? `0${ticket.priority}` : ticket.priority}
            </h3>
            <h2 className='text-lg font-medium overflow-ellipsis overflow-hidden'>
              {ticket.name}
            </h2>
          </div>
          <span className='text-red-500 font-medium'>{ticket.status}</span>
        </li>
      ))}
    </ul>
  );
}

export default QueueHolder;

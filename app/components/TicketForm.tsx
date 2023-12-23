'use client';

import { useState } from 'react';
import { useQueueStore } from '../stores/queueStore';
import ITicket from '../types/ticket';

function TicketForm() {
  const [input, setInput] = useState('');

  const queue = useQueueStore((state) => state.queue);
  const setTickets = useQueueStore((state) => state.setTickets);
  const tickets = useQueueStore((state) => state.tickets);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const [name, age] = input.split(',');

    const newTicket: ITicket = {
      id: tickets.length + 1,
      name,
      age: +age,
      priority: +age,
      status: 'waiting',
    };

    queue.enqueue(newTicket);

    setTickets([newTicket, ...tickets]);

    setInput('');
  };

  return (
    <form
      className='bg-white border-b flex w-full p-3 gap-2 rounded'
      onSubmit={handleSubmit}
    >
      <input
        className='flex-1'
        type='text'
        placeholder='Your name,age'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='text-blue-500 hover:text-blue-600'>Enqueue</button>
    </form>
  );
}

export default TicketForm;

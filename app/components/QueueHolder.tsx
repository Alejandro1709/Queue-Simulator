'use client';
import { useEffect, useMemo } from 'react';
import { generateTickets } from '../utils/generator';
import Queue from '../utils/queue';
import Ticket from './Ticket';
import { useQueueStore } from '../stores/queueStore';
import type ITicket from '../types/ticket';

function QueueHolder() {
  const tickets = useQueueStore((state) => state.tickets);
  const setQueue = useQueueStore((state) => state.setQueue);

  const configureQueue = useMemo(
    () => async () => {
      const queue = await generateTickets(new Queue<ITicket>());
      setQueue(queue);
    },
    [setQueue]
  );

  useEffect(() => {
    configureQueue();
  }, [configureQueue]);

  return (
    <ul className='flex flex-col border'>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}

export default QueueHolder;

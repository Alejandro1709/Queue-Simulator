import { create } from 'zustand';
import Queue from '../utils/queue';
import type ITicket from '../types/ticket';

type QueueStore = {
  queue: Queue<ITicket>;
  tickets: ITicket[];
  setQueue: (queue: Queue<ITicket>) => void;
  setTickets: (tickets: ITicket[]) => void;
};

export const useQueueStore = create<QueueStore>((set) => ({
  queue: new Queue<ITicket>(),
  tickets: [],
  setQueue: (queue) => set(() => ({ queue, tickets: queue.toArray() })),
  setTickets: (tickets) => set(() => ({ tickets })),
}));

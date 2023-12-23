import QueueHolder from './QueueHolder';
import TicketForm from './TicketForm';

async function System() {
  return (
    <aside className='flex flex-col lg:w-80 gap-2 lg:gap-4'>
      <TicketForm />
      <QueueHolder />
    </aside>
  );
}

export default System;

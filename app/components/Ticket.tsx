import type ITicket from '../types/ticket';

type TicketProps = {
  ticket: ITicket;
};

function Ticket({ ticket }: TicketProps) {
  return (
    <li className='bg-white p-3 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <h3 className='text-xl font-semibold'>#{ticket.priority}</h3>
        <h2 className='text-lg font-medium'>{ticket.name}</h2>
      </div>
      <span className='text-red-500 font-medium'>{ticket.status}</span>
    </li>
  );
}

export default Ticket;

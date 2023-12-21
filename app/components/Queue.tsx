import type ITicket from '../types/ticket';

type QueueProps = {
  tickets: ITicket[];
};

function Queue({ tickets }: QueueProps) {
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

export default Queue;

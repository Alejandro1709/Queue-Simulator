function Ticket() {
  return (
    <li className='bg-white p-3 flex items-center justify-between'>
      <div className='flex gap-2 items-center'>
        <h3 className='text-xl font-semibold'>#33</h3>
        <h2 className='text-lg font-medium'>Alejandro LR</h2>
      </div>
      <span className='text-green-500 font-medium'>In Turn</span>
    </li>
  );
}

export default Ticket;

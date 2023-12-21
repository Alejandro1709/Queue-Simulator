function Queue() {
  return (
    <aside className='flex flex-col lg:w-80 gap-2 lg:gap-4'>
      <header className='bg-white border-b flex w-full p-3 gap-2 rounded'>
        <input className='flex-1' type='text' placeholder='Your name, age' />
        <button className='text-blue-500 hover:text-blue-600'>Enqueue</button>
      </header>

      <ul className='flex flex-col border'>
        <li className='bg-white p-3 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-xl font-semibold'>#33</h3>
            <h2 className='text-lg font-medium'>Alejandro LR</h2>
          </div>
          <span className='text-green-500 font-medium'>In Turn</span>
        </li>
        <li className='bg-white p-3 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-xl font-semibold'>#37</h3>
            <h2 className='text-lg font-medium'>Fátima LR</h2>
          </div>
          <span className='text-red-500 font-medium'>Waiting</span>
        </li>
        <li className='bg-white p-3 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-xl font-semibold'>#42</h3>
            <h2 className='text-lg font-medium'>Alejandro LR</h2>
          </div>
          <span className='text-red-500 font-medium'>Waiting</span>
        </li>
        <li className='bg-white p-3 flex items-center justify-between'>
          <div className='flex gap-2 items-center'>
            <h3 className='text-xl font-semibold'>#60</h3>
            <h2 className='text-lg font-medium'>Fátima LR</h2>
          </div>
          <span className='text-red-500 font-medium'>Waiting</span>
        </li>
      </ul>
    </aside>
  );
}

export default Queue;

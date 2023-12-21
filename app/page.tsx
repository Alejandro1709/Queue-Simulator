import Navbar from './components/Navbar';
import Queue from './components/Queue';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex lg:flex-row flex-col-reverse gap-4 lg:flex-1 m-4'>
        <Queue />
        <aside className='flex-1'>
          <article className='p-4 text-center bg-white space-y-4 rounded-md'>
            <header className='space-y-1'>
              <h3 className='text-xl font-medium'>You are now in the queue.</h3>
              <h2 className='text-2xl font-bold'>#234</h2>
            </header>
            <button className='bg-blue-500 p-1.5 rounded font-semibold text-white hover:bg-blue-600'>
              Buy Ticket
            </button>
          </article>
        </aside>
      </main>
    </div>
  );
}

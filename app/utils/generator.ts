import axios from 'axios';
import type ITicket from '../types/ticket';
import type IUser from '../types/user';

const getRandomUsers = async (): Promise<IUser[]> => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return data;
};

const parseValidTicket = (user: IUser): ITicket => {
  const randomAge = Math.floor(Math.random() * 100);
  const ticket: ITicket = {
    id: user.id,
    name: user.name,
    age: randomAge,
    priority: randomAge,
    status: 'waiting',
  };

  return ticket;
};

export const generateTickets = async (): Promise<ITicket[]> => {
  const users = await getRandomUsers();

  const tickets = users.map((user) => {
    return parseValidTicket(user);
  });

  return tickets;
};

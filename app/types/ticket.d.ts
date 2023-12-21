type Status = 'in-turn' | 'waiting';

export default interface ITicket {
  id: number;
  name: string;
  age: number;
  priority: number;
  status: Status;
}

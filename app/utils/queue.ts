class Node<ITicket> {
  private value: ITicket;
  private next?: Node<ITicket>;

  constructor(value: ITicket) {
    this.value = value;
    this.next = undefined;
  }

  public getValue(): ITicket {
    return this.value;
  }

  public getNext(): Node<ITicket> | undefined {
    return this.next;
  }

  public setValue(value: ITicket): void {
    this.value = value;
  }

  public setNext(next: Node<ITicket> | undefined): void {
    this.next = next;
  }
}

export default class Queue<ITicket> {
  private first?: Node<ITicket>;
  private last?: Node<ITicket>;
  private size: number;

  constructor() {
    this.first = undefined;
    this.last = undefined;
    this.size = 0;
  }

  public enqueue(value: ITicket): number {
    let node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last?.setNext(node);
      this.last = node;
    }

    return ++this.size;
  }

  public dequeue() {}
}

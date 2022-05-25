class CircularQueue {
  constructor(length) {
    this.list = Array(length).fill(null);
    this.oldest = 0;
  }

  enqueue(item) {
    for (let idx = 0; idx < this.list.length; idx += 1) {
      let position = (this.oldest + idx) % this.list.length;
      if (this.list[position] === null) {
        this.list[position] = item;
        return;
      }
    }
    this.list[this.oldest] = item;
    this.oldest = (this.oldest + 1) % this.list.length;
  }

  dequeue() {
    let itemToReturn = this.list[this.oldest];
    this.list[this.oldest] = null;
    this.oldest = (this.oldest + 1) % this.list.length;
    return itemToReturn;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

console.log(queue)

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
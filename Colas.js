class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return console.log(this.queue);
    }
}


class Person {
    constructor(name, arrive) {  
    this.name = name;
    this.arrive = arrive
    }
  }

var queuePerson = new Queue()

  const persons = [
      new Person("Isabella", new Date()),
      new Person("Daniela", new Date()),
      new Person("Maria", "10:11 AM")
  ]
  
  persons.forEach(b => { queuePerson.enqueue(b)
      
  });
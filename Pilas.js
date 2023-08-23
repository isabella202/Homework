class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}

class Book {
    constructor(name, ISBN, author, editorial) {  
    this.name = name;
    this.ISBN = ISBN;
    this.author = author;
    this.editorial = editorial;
    }
  }

var stackBook = new Stack()

const books = [
    new Book("El principito", "12345678", "Daniel Malunda", "De papel"),
    new Book("El azul", "12345698", "Daniel Malunda", "De papel"),
    new Book("Rojo", "12345623", "Daniel Malunda", "De papel")
]

books.forEach(b => { stackBook.push(b)
    
});
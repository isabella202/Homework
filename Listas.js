const TodoItems = [];

function addTodo(title, description, nextTodo) {
  const todo = {
    title,
    description,
    nextTodo: nextTodo || null,
  };
  TodoItems.push(todo);
}

function printTodos() {
  for (const todo of todoItems) {
    console.log(`- ${todo.title}`);
    if (todo.description) {
      console.log(`  ${todo.description}`);
    }
    if (todo.nextTodo) {
      console.log(`  Next: ${todo.nextTodo.title}`);
    }
  }
}

addTodo('Buy fruits', 'Milk','Eggs');
addTodo('Go to the gym', 'Work out');
addTodo('Write a book', 'Write code');


printTodos();
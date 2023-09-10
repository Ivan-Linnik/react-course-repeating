import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './todoComponents/UI/Form';
import FuncButtons from './todoComponents/UI/FuncButtons';
import TodoList from './todoComponents/todos/TodoList';
import styles from './TodoApp.module.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  todos.sort((a, b) => a.isCompleted - b.isCompleted);

  function addTodoHandler(inputValue) {
    const newTodo = {
      text: inputValue,
      id: uuidv4(),
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  }

  function eraseAllHandler() {
    setTodos([]);
  }

  function eraseCompletedHandler() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }

  function deleteTodoHandler(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id === id ? !todo.id : todo;
      })
    );
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.TodoApp}>
      <h1 className={styles.appH}>Lindo</h1>
      <Form addTodo={addTodoHandler} />
      <FuncButtons
        eraseAll={eraseAllHandler}
        eraseCompleted={eraseCompletedHandler}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
}

export default TodoApp;

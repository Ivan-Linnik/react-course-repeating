import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className={styles.todoList}>
      {!todos.length && (
        <div className={styles.emptyMessage}>Todo list is empty</div>
      )}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

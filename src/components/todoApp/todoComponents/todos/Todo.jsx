import { SlRocket } from 'react-icons/sl';
import { SlCheck } from 'react-icons/sl';
import { SlTrash } from 'react-icons/sl';
import { SlControlRewind } from 'react-icons/sl';
import styles from './Todo.module.css';

function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.isCompleted ? styles.completedTodoItem : ''
      }`}
    >
      <SlRocket className={styles.itemIcon} />
      <div className={styles.TodoText}>{todo.text}</div>
      <div className={styles.itemButtons}>
        {todo.isCompleted ? (
          <SlControlRewind
            className={styles.doneBtn}
            onClick={() => toggleTodo(todo.id)}
          />
        ) : (
          <SlCheck
            className={styles.doneBtn}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
        <SlTrash
          className={styles.removeBtn}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default Todo;

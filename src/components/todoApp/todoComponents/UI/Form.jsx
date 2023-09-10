import { useState } from 'react';
import Button from './Button';
import buttonStyles from './Button.module.css';
import styles from './Form.module.css';

function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  function inputValueHandler(event) {
    setInputValue(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <form className={styles.Form} onSubmit={submitFormHandler}>
      <input
        type="text"
        className={styles.formInput}
        value={inputValue}
        onChange={inputValueHandler}
      />
      <Button type="submit" className={buttonStyles.button}>
        Create
      </Button>
    </form>
  );
}

export default Form;

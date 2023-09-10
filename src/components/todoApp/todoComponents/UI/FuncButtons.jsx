import { SlBan } from 'react-icons/sl';
import { SlMinus } from 'react-icons/sl';
import styles from './FuncButtons.module.css';
import buttonStyles from './Button.module.css';

function FuncButtons({ eraseAll, eraseCompleted, totalTodos, completedTodos }) {
  return (
    <div className={styles.funcButtons}>
      <SlBan className={buttonStyles.button} onClick={eraseAll} />
      <SlMinus className={buttonStyles.button} onClick={eraseCompleted} />
      <div className={styles.info}>
        <span>{`Total ${totalTodos}`}</span>
        <span>{`Completed ${completedTodos}`}</span>
      </div>
    </div>
  );
}

export default FuncButtons;

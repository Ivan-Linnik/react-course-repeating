import buttonStyles from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props;

  return (
    <button
      {...props}
      onClick={onClick}
      children={children}
      title={title}
      disabled={disabled}
      className={buttonStyles.button}
    >
      {children}
    </button>
  );
}

export default Button;

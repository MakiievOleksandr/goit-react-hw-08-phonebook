import css from './button.module.scss';

const Button = ({ children, type = 'submit', onClick, ...props }) => {
  return (
    <button
      className={`${css.button} ${props.style}`}
      onClick={onClick}
      type={type}
    >
      {children}{' '}
    </button>
  );
};

export default Button;

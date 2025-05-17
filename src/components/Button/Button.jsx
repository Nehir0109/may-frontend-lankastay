import style from './Button.module.scss';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const buttonClass = `${style.button} ${style[variant] || ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
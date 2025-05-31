import style from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ children,type, onClick,className}) => {
  
  return (
    <button type={type} onClick={onClick} className={clsx(style.button, className)}>
      {children}
    </button>
  );
};

export default Button;
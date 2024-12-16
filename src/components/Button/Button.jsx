import './Button.scss';
const Button = ({ disabled, style, type, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      className={`button ${style ? `button_${style}` : ''} button_${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

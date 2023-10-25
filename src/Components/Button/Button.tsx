import "./Button.css";
interface ButtonProps {
  method: () => void;
  innerText: string;
  className: string;
}

const Button = ({
  className,
  innerText,
  method,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={method}>
      {innerText}
    </button>
  );
};

export default Button;

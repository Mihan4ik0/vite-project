import './Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'blue' | 'red';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ label, onClick, color = 'blue', size = 'medium' }: ButtonProps) => {
  return (
    <button
      className={`btn btn-${color} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};


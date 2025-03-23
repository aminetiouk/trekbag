type ButtonProps = {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
};

export default function Button({
  text,
  type = 'primary',
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {text}
    </button>
  );
}

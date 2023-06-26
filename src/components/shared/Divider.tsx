const Divider: React.FC<{
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}> = ({ className, children, onClick }) => {
  return (
    <div
      className={`divide-y divide-dotted divide-[#2A2C2D] ${className}`}
      onClick={onClick}
    >
      <div />
      <div />
    </div>
  );
};

export { Divider };

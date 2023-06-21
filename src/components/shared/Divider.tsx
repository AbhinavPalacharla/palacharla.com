const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`divide-y divide-dotted divide-[#2A2C2D] ${className}`}>
      <div />
      <div />
    </div>
  );
};

export { Divider };

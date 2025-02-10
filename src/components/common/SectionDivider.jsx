const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </div>
  );
};

export default SectionDivider; 
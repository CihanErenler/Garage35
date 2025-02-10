const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float-delayed blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-yellow-500/10 rounded-full animate-float blur-xl" />
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-green-500/10 rounded-full animate-float-delayed blur-xl" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full animate-float blur-xl" />
    </div>
  );
};

export default FloatingElements; 
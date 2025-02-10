const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] opacity-[0.05]">
        <div className="absolute inset-0 rotate-12 transform">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-[1px] border-black rounded-full"
              style={{
                transform: `scale(${1 + i * 0.2})`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundPattern; 
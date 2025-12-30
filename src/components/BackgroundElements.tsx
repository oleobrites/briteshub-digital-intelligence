const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" 
        style={{ animationDelay: '2s' }} 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(199 89% 48%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(199 89% 48%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating dots */}
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div 
        className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-40" 
        style={{ animationDelay: '1s' }} 
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-float opacity-50" 
        style={{ animationDelay: '3s' }} 
      />

      {/* Geometric lines */}
      <svg className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10" viewBox="0 0 400 400">
        <path
          d="M 0 200 Q 100 100 200 200 T 400 200"
          stroke="hsl(199 89% 48%)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 0 250 Q 150 150 250 250 T 400 250"
          stroke="hsl(187 92% 50%)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BackgroundElements;

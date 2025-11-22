import React from 'react';

const NeonDivider = ({ className }: { className?: string }) => {
  return (
    <div className={`h-0.5 bg-gradient-to-r from-transparent via-neon-yellow to-transparent ${className}`}></div>
  );
};

export default NeonDivider;

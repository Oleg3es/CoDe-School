import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = ({ children, style, ...props }: ContainerProps) => {
  return (
    <div 
      className={`container`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
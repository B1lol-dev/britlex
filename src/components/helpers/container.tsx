import type { ComponentChildren } from "preact";

interface IContainerProps {
  children: ComponentChildren;
  className?: string;
}

const container = ({ children, className }: IContainerProps) => (
  <div class={`container max-w-[1338px] w-full mx-auto ${className}`}>
    {children}
  </div>
);

export default container;

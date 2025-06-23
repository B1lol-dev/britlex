import type { ComponentChildren } from "preact";

interface IContainerProps {
  children: ComponentChildren;
}

const container = ({ children }: IContainerProps) => (
  <div class="container max-w-[1338px] w-full mx-auto">{children}</div>
);

export default container;

import { twMerge } from "tailwind-merge";

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

const Main = ({ className, children, ...rest }: MainProps) => {
  return (
    <main
      className={twMerge("flex flex-col flex-grow justify-center", className)}
      {...rest}
    >
      {children}
    </main>
  );
};

export default Main;

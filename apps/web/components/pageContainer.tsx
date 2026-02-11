import { twMerge } from "tailwind-merge";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageContainer = ({
  children,
  className,
  ...props
}: PageContainerProps) => {
  return (
    <div
      className={twMerge(`flex flex-col min-h-screen ${className}`)}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageContainer;

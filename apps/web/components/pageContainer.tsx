interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

const PageContainer = ({ children, ...props }: PageContainerProps) => {
    return (
        <div className="flex flex-col min-h-screen" {...props}>
            {children}
        </div>
    );
}

export default PageContainer;
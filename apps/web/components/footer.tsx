import { twMerge } from "tailwind-merge"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}


const Footer = ({ className, children, ...rest }: FooterProps) => {
    return (
        <footer className={twMerge("px-5 py-10 flex justify-center", className)} {...rest}>
            {children}
        </footer>
    )
}

export default Footer;
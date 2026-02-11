import { twMerge } from "tailwind-merge"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {

}


const Section = ({ className, children, ...rest }: SectionProps) => {
    return (
        <section className={twMerge("flex justify-center items-center flex-grow", className)} {...rest}>
            {children}
        </section>
    )
}

export default Section;
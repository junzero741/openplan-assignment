import { Button, ButtonProps } from "@repo/ui/button";
import Link, { LinkProps } from "next/link";
import React from "react";

export interface PhotoLinkButtonProps extends LinkProps {
    children?: React.ReactNode;
}

const PhotoLinkButton = ({ href, children }: PhotoLinkButtonProps) => {
    return (
        <Link href={href}>
            <Button type="button" className="w-full">{children}</Button>
        </Link>
    );
};

export default PhotoLinkButton;
'use client';

import { Button, ButtonProps } from "@repo/ui/button";
import { useRouter } from "next/navigation";

const GoBackButton = ({ }: ButtonProps) => {

    const router = useRouter();

    return (
        <Button onClick={router.back} className="w-full">
            이전
        </Button>
    )
}

export default GoBackButton;
"use client"

import {FC, useState} from "react";
import {signOut} from "next-auth/react";
import {Button} from "@/ui/Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) =>{
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signUserOUt = async () => {
        try {
            setIsLoading(true)
            await signOut()
        } catch (error) {
            // toast({
            //     title: "Error signing out",
            //     message: "Please try it again",
            //     type: "error",
            // })
        }
    }

    return (
        <Button onClick={signUserOUt} isLoading={isLoading}>
            Sign Out
        </Button>
    )
}

export default SignOutButton;
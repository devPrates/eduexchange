'use client'
import { signOut } from "next-auth/react";
import { Power } from 'lucide-react';
import { Button } from "./ui/button";

export default function SignOutBtn() {
    return (
        <>
            <Button onClick={() => signOut()} className="bg-red-500 hover:bg-red-400 text-xl font-bold">
                <Power />
            </Button>
        </>
    )
}
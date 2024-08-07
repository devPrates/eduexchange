'use client'

import SignOutBtn from "@/components/signOutBtn";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <>
        <div className="container mx-auto h-screen w-full flex flex-col justify-center items-center">
            <h1 className="h1">Pagina da Dashboard</h1>
            <SignOutBtn />
            <div className="mt-3">
                {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
            </div>

        </div>
            
        </>
    )
}
'use client'
import SignOutBtn from "@/components/signOutBtn";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <>
        <div className="flex flex-col gap-3">
            <h1 className="">Pagina da Dashboard</h1>
            <div>
                <SignOutBtn />
            </div>
            <div className="mt-3">
                {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
            </div>
        </div>
        </>
    )
}
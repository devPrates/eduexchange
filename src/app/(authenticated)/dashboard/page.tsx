'use client'
import DashTitle from "@/components/dashTitle";
import SignOutBtn from "@/components/signOutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession()
    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex w-full justify-between items-center">
                    <DashTitle title="Dashboard" />
                    <div className="flex gap-x-4 items-center">
                        <SignOutBtn />
                        <Card>
                            <div className="flex gap-x-2 p-2 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-bold text-black">{session?.user?.name}</p>
                                    <p className="text-sm">{session?.user?.email}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                </div>
                <div className="mt-3">
                    {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
                </div>
            </div>
        </>
    )
}
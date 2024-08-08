'use client'
import DashCard from "@/components/DashCard";
import DashTitle from "@/components/dashTitle";
import SignOutBtn from "@/components/signOutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { seed } from "@/dataDashboard";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession()
    const { cardData } = seed
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex w-full justify-between items-center">
                    <DashTitle title="Dashboard" />
                    <div className="flex gap-x-4 items-center">
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
                        <SignOutBtn />
                    </div>
                </div>
                <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                    {cardData.map((card =>{
                        return(
                            <DashCard
                                key={card.id}
                                amount={card.amout}
                                discription={card.description}
                                icon={card.icon}
                                label={card.Label}
                            />
                        )

                    }))
                    }
                </section>
                
            </div>
        </>
    )
}
import { cn } from "@/lib/utils"
import { CardProps } from "@/types"
import React from "react"

export default function DashCard(props: CardProps) {
    return (
        <CardContent>
            <section className="flex justify-between gap-2">
                <p className="text-sm">{props.label}</p>
                <props.icon className="h-4 w-4 text-gray-400" />
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{props.amount}</h2>
                <p className="text-xs">{props.discription}</p>
            </section>
        </CardContent>
    )
}

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)} />

    )
}
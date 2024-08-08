import { LucideIcon } from "lucide-react"

export type CustomLinksProps = {
    href: string
    children: React.ReactNode
    nome: string
}

export type CardProps = {
    label: string;
    icon: LucideIcon;
    amount: string;
    discription: string;
}
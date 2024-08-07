'use client'
import { useState } from "react"
import CustomLink from "./customLink";
import { Bolt, Box, ChevronLeft, ChevronRight, FilePen, GitCompareArrows, GitPullRequestArrow, LayoutDashboard, UsersRound } from "lucide-react";
import { Button } from "./ui/button";
import { seed } from "@/dataDashboard";

const iconMap: Record<string, React.FC<{}>> = {
    dashboard: LayoutDashboard,
    users: UsersRound,
    substituicao: GitPullRequestArrow,
    troca: GitCompareArrows,
    solicitacoes: FilePen,
    settings: Bolt, 
}

export default function Nav() {
    const { itensMenu } = seed
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }


    return (
        <nav className={`relative bg-gray-100 border-r-gray-200 border-r-[1px] max-w-20 sm:max-w-48 flex justify-center pt-24 
            ${isOpen ? 'w-1/4' : 'w-20'}`}
        >
            <Button onClick={handleIsOpen} className="hidden sm:block absolute top-6 transform right-[-22px] bg-primary text-white hover:bg-gray-800 p-2 w-11 h-11 rounded-full">
                {isOpen ? (
                    <ChevronLeft className="w-6 h-6" />
                ) : (
                    <ChevronRight className="w-6 h-6" />
                )
                }
            </Button>
            <ul className="p-4">
                {itensMenu.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                        <li key={item.id}>
                            <CustomLink href={item.link} nome={item.title}>
                                <Icon />
                                <span className={`${isOpen ? 'hidden sm:block' : '!hidden'}`}> 
                                    {item.title} 
                                </span>
                            </CustomLink>
                        </li>
                    )
                })

                }
            </ul>
        </nav>
    )
}
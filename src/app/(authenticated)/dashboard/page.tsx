'use client'
import DashCard from "@/components/DashCard";
import DashNavbar from "@/components/DashNavbar";
import { seed } from "@/dataDashboard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { BookA, BookAIcon, CirclePlus, Filter, HouseIcon, User } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import TableCursos from "@/components/TableCursos";
import { useSession } from "next-auth/react";
  


export default function Dashboard() {
    const { data: session } = useSession()
    const userRole = session?.user?.role
    const { cardData } = seed
    const [position, setPosition] = useState("top")
    return (
        <>
            <section className="flex flex-col gap-5 w-full">
                <DashNavbar />
                <div className="pl-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dasboard" className="font-semibold">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">

                    {cardData.map((card => {
                        return (
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
                </div>

                <div>
                    <Tabs defaultValue="account" className="">
                        <div className="container mt-5 flex justify-between">
                            <TabsList className="bg-gray-500 text-white">
                                <TabsTrigger value="account">Cursos</TabsTrigger>
                                <TabsTrigger value="professores">Professores</TabsTrigger>
                                <TabsTrigger value="turmas">Turmas</TabsTrigger>
                                <TabsTrigger value="disciplinas">Disciplinas</TabsTrigger>
                            </TabsList>
                            <div className="flex gap-1">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="bg-blue-600 hover:bg-blue-500">
                                            <Filter className="mr-2 h-4 w-4" />
                                            Filtrar
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                            <DropdownMenuRadioItem value="top">A - Z</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="bottom">Z - A</DropdownMenuRadioItem>
                                            <DropdownMenuRadioItem value="right">Data</DropdownMenuRadioItem>
                                        </DropdownMenuRadioGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button disabled className="bg-blue-600 hover:bg-blue-500">Exportar</Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button >
                                            <CirclePlus className="mr-2 h-4 w-4" />
                                            Cadastrar
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>O que deseja</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <User className="mr-2 h-4 w-4" />
                                                <span>Professor</span>

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <BookAIcon className="mr-2 h-4 w-4" />
                                                <span>Curso</span>

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <HouseIcon className="mr-2 h-4 w-4" />
                                                <span>Turma</span>

                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <BookA className="mr-2 h-4 w-4" />
                                                <span>Disciplina</span>

                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className="container mt-6">
                            <TabsContent value="account" className="border-[1px] max-h-[300px] overflow-x-auto">
                                <TableCursos />
                            </TabsContent>
                            <TabsContent value="professores">Professores</TabsContent>
                            <TabsContent value="turmas">turmas</TabsContent>
                            <TabsContent value="disciplinas">Disciplinas</TabsContent>
                        </div>
                    </Tabs>
                </div>

            </section>
        </>
    )
}
'use client'
import DashNavbar from "@/components/dashboard/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DataTableDemo } from "@/components/tables/TableCursos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import {  CirclePlus, Filter, GraduationCap, School, User2 } from "lucide-react";
import { useState } from "react";
import { seed } from "@/dataDashboard";
import CardCadastro from "@/components/dashboard/cardCadastro";

export default function users() {
    const [position, setPosition] = useState("top")
    const { cardCadastro } = seed
    
    return (
        <section className="flex flex-col gap-5 w-full">
            <DashNavbar />
            <div className="pl-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard" className="font-semibold">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/users" className="font-semibold">Usuários</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3">

                    {cardCadastro.map((card => {
                        return (
                            <CardCadastro
                                key={card.id}
                                label={card.Label}
                                link={card.link}
                                icon={card.icon}
                            />
                        )

                    }))
                    }
                </div>

            <div>
                <Tabs defaultValue="account" className="">
                    <div className="container mt-5 flex justify-between">
                        <TabsList className="bg-gray-500 text-white">
                            <TabsTrigger value="account">Campus</TabsTrigger>
                            <TabsTrigger value="professores">Diretores</TabsTrigger>
                            <TabsTrigger value="turmas">Coordenadores</TabsTrigger>
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
                                    <DropdownMenuLabel>O que deseja cadastrar</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <School className="mr-2 h-4 w-4" />
                                            <span>Campus</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <GraduationCap className="mr-2 h-4 w-4" />
                                            <span>Diretor</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <User2 className="mr-2 h-4 w-4" />
                                            <span>Coordenador</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="container mt-6">
                        <TabsContent value="account" >
                            <DataTableDemo />
                        </TabsContent>
                        <TabsContent value="professores">Professores</TabsContent>
                        <TabsContent value="turmas">turmas</TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
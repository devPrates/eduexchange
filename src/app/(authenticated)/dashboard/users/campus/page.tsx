'use client'
import DashNavbar from "@/components/dashboard/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useRef } from "react";
import { toast } from "sonner";


async function handleCampusSubmit(event: FormEvent<HTMLFormElement>, formRef: React.RefObject<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const campusData = {
        city: formData.get('city') as string,
        address: formData.get('address') as string,
        directorName: formData.get('directorName') as string,
        directorEmail: formData.get('directorEmail') as string,
        directorPassword: formData.get('directorPassword') as string,
    };

    // Mostra os valores no console em formato JSON
    console.log("Dados do Campus:", JSON.stringify(campusData, null, 2));

    // Exibe um toast informando que os dados foram salvos
    toast.success('Dados salvos com sucesso!');

    // Limpa os dados do formulário
    if (formRef.current) {
        formRef.current.reset();
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou executar outras ações.
}


export default function CadastroCampus() {
    // Referência para o formulário
    const formRef = useRef<HTMLFormElement>(null);
    return (
        <section className="flex flex-col gap-5 w-full">
            <DashNavbar />
            <div className="pl-5 container mx-auto">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dasboard" className="font-semibold">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <section className="container mx-auto">
                <form
                    onSubmit={(event) => handleCampusSubmit(event, formRef)}
                    ref={formRef}
                    className="space-y-4 max-w-md p-4"
                >
                    {/* Campo Cidade */}
                    <div>
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" name="city" placeholder="Digite a cidade do campus" className="mt-1" required />
                    </div>
                    {/* Campo Endereço */}
                    <div>
                        <Label htmlFor="address">Endereço</Label>
                        <Input id="address" name="address" placeholder="Digite o endereço do campus" className="mt-1" required />
                    </div>
                    {/* Campo Nome do Diretor */}
                    <div>
                        <Label htmlFor="directorName">Nome do Diretor</Label>
                        <Input id="directorName" name="directorName" placeholder="Digite o nome do diretor" className="mt-1" required />
                    </div>
                    {/* Campo Email do Diretor */}
                    <div>
                        <Label htmlFor="directorEmail">Email do Diretor</Label>
                        <Input id="directorEmail" name="directorEmail" type="email" placeholder="Digite o email do diretor" className="mt-1" required />
                    </div>
                    {/* Campo Senha de Acesso do Diretor */}
                    <div>
                        <Label htmlFor="directorPassword">Senha de Acesso do Diretor</Label>
                        <Input id="directorPassword" name="directorPassword" type="password" placeholder="Digite a senha de acesso do diretor" className="mt-1" required />
                    </div>
                    <div className="flex justify-start space-x-2">
                        <Button type="reset">Cancelar</Button>
                        <Button type="submit">Salvar</Button>
                    </div>
                </form>
            </section>
        </section>
    )
}
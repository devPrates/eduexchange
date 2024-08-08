'use client'
import DashNavbar from "@/components/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function users() {
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
        </section>
    )
}
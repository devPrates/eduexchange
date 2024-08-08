import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { seed } from "@/dataDashboard"
export default function TableCursos() {
    const { tableCursos } = seed
    return (
        <Table>
            <TableHeader className="bg-gray-400">
                <TableRow>
                    <TableHead className="w-[100px] text-white">ID</TableHead>
                    <TableHead className="text-white">Nome Curso</TableHead>
                    <TableHead className="text-white">Numero Turma</TableHead>
                    <TableHead className="text-white">Semestre</TableHead>
                    <TableHead className="text-white">Coordenador</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableCursos.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">NVR0{item.id}</TableCell>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.numero}</TableCell>
                            <TableCell>{item.semestre}</TableCell>
                            <TableCell>{item.coordenador}</TableCell>
                        </TableRow>

                    )
                })}
            </TableBody>
        </Table>

    )
}
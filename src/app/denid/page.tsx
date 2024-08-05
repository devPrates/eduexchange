import Link from "next/link";

export default function denid() {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="h1">Acesso negado Pilantra</h1>
                <h3 className="h3">Você não tem permissão vai embora</h3>
                <Link href="/" className="p-5 bg-red-500 rounded-lg">Voltar</Link>
            </div>
        </>
    )
}
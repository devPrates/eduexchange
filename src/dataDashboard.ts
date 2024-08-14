import { Users, BookAIcon, HouseIcon, BadgeCheck, SquareX, CircleAlert, BellRing } from "lucide-react";

export const seed = {
    itensMenuProfessor: [
        { id: 1, title: 'Painel', link: '/dashboard/painel', icon: 'dashboard' },
        { id: 2, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
        { id: 3, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
        { id: 4, title: 'Documentos', link: '/dashboard/docs', icon: 'solicitacoes' },
        { id: 5, title: 'Configurações', link: '/dashboard/settings', icon: 'settings' },

    ],
    itensMenuCoordenador: [
        { id: 1, title: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
        { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
        { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
        { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
        { id: 5, title: 'Solicitações', link: '/dashboard/solicitacoes', icon: 'solicitacoes' },
        { id: 6, title: 'Configurações', link: '/dashboard/settings', icon: 'settings' },

    ],
    itensMenuDiretor: [
        { id: 1, title: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
        { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
        { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
        { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
        { id: 5, title: 'Solicitações', link: '/dashboard/solicitacoes', icon: 'solicitacoes' },
        { id: 6, title: 'Configurações', link: '/dashboard/settings', icon: 'settings' },

    ],
    itensMenuAdmin: [
        { id: 1, title: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
        { id: 2, title: 'Usuários', link: '/dashboard/users', icon: 'users' },
        { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
        { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
        { id: 5, title: 'Solicitações', link: '/dashboard/solicitacoes', icon: 'solicitacoes' },
        { id: 6, title: 'Configurações', link: '/dashboard/settings', icon: 'settings' },

    ],
    cardData: [
        {
            id: 1001,
            Label: 'Professores',
            amout: '16',
            description: 'Professores cadastrados',
            icon: Users,
        },
        {
            id: 1002,
            Label: 'Turmas',
            amout: '55',
            description: 'Turmas cadastrados',
            icon: Users,
        },
        {
            id: 1003,
            Label: 'Cursos',
            amout: '4',
            description: 'Cursos cadastrados',
            icon: HouseIcon,
        },
        {
            id: 1004,
            Label: 'Disciplinas',
            amout: '123',
            description: 'Disciplinas cadastrados',
            icon: BookAIcon,
        },
    ],
    cardDataSubs: [
        {
            id: 1001,
            Label: 'Deferidas',
            amout: '5',
            description: 'Solicitações Deferidas',
            icon: BadgeCheck,
        },
        {
            id: 1002,
            Label: 'Indeferidas',
            amout: '3',
            description: 'Solicitações Indeferidas',
            icon: SquareX,
        },
        {
            id: 1003,
            Label: 'Pendentes',
            amout: '4',
            description: 'Solicitações Pendentes',
            icon: CircleAlert,
        },
        {
            id: 1004,
            Label: 'Solicitadas',
            amout: '2',
            description: 'Solicitações de troca',
            icon: BellRing,
        },
    ],


    tableCursos: [
        {
            id: 1,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 2,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 3,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 4,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 5,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 6,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
        {
            id: 7,
            nome: 'Agronomia',
            numero: 3422,
            semestre: "3 Semestre",
            coordenador: "Matheus",
        },
    ]
}
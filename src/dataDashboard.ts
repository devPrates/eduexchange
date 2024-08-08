import { Activity, GitPullRequestArrow, GitCompareArrows, Users } from "lucide-react";

export const seed = {
    itensMenu: [
        { id: 1, title: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
        { id: 2, title: 'Users', link: '/dashboard/users', icon: 'users' },
        { id: 3, title: 'Substituição', link: '/dashboard/substituicao', icon: 'substituicao' },
        { id: 4, title: 'Troca', link: '/dashboard/troca', icon: 'troca' },
        { id: 5, title: 'Solicitações', link: '/dashboard/solicitacoes', icon: 'solicitacoes' },
        { id: 6, title: 'Settings', link: '/dashboard/settings', icon: 'settings' },

    ],
    cardData: [
        {
            id: 1001,
            Label: 'Usuarios',
            amout: '55',
            description: 'Usuarios cadastrados',
            icon: Users,
        },
        {
            id: 1002,
            Label: 'Trocas',
            amout: '55',
            description: 'Usuarios cadastrados',
            icon: GitCompareArrows,
        },
        {
            id: 1003,
            Label: 'Substituições',
            amout: '55',
            description: 'Usuarios cadastrados',
            icon: GitPullRequestArrow,
        },
        {
            id: 1004,
            Label: 'Outros',
            amout: '55',
            description: 'Usuarios cadastrados',
            icon: Activity,
        },
    ]
}
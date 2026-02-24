import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'library',
        path: '',
        title: 'Library',
        translateKey: 'nav.library.library',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'library.catalog',
                path: '/catalog',
                title: 'Catalog',
                translateKey: 'nav.library.catalog',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'library.dashboard',
                path: '/dashboard',
                title: 'My Library',
                translateKey: 'nav.library.dashboard',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'admin',
        path: '',
        title: 'Administration',
        translateKey: 'nav.admin.title',
        icon: '',
        type: NAV_ITEM_TYPE_TITLE,
        authority: ['admin'],
        subMenu: [
            {
                key: 'admin.panel',
                path: '/admin',
                title: 'Admin Panel',
                translateKey: 'nav.admin.panel',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_ITEM,
                authority: ['admin'],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig

import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    // Digital Library Routes
    {
        key: 'library.home',
        path: '/library',
        component: lazy(() => import('@/views/library/LibraryHome')),
        authority: [],
    },
    {
        key: 'library.browse',
        path: '/library/browse',
        component: lazy(() => import('@/views/library/LibraryBrowse')),
        authority: [],
    },
    {
        key: 'library.category',
        path: '/library/category/:category',
        component: lazy(() => import('@/views/library/LibraryBrowse')),
        authority: [],
    },
    {
        key: 'library.publication',
        path: '/library/publication/:id',
        component: lazy(() => import('@/views/library/PublicationDetails')),
        authority: [],
    },
    {
        key: 'library.checkout',
        path: '/library/checkout',
        component: lazy(() => import('@/views/library/Checkout')),
        authority: [],
    },
    {
        key: 'library.dashboard',
        path: '/library/dashboard',
        component: lazy(() => import('@/views/library/Dashboard')),
        authority: [],
    },
    {
        key: 'library.search',
        path: '/library/search',
        component: lazy(() => import('@/views/library/LibraryBrowse')),
        authority: [],
    },
    {
        key: 'admin.panel',
        path: '/admin',
        component: lazy(() => import('@/views/library/AdminPanel')),
        authority: ['admin'],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() =>
            import('@/views/demo/GroupSingleMenuItemView')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() =>
            import('@/views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
        meta: {
            header: 'Gateway to Unlimited Knowledge',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'catalog',
        path: '/catalog',
        component: lazy(() => import('@/views/Catalog')),
        authority: [],
        meta: {
            header: 'Digital Library Catalog',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'item.details',
        path: '/item/:id',
        component: lazy(() => import('@/views/ItemDetails')),
        authority: [],
        meta: {
            header: 'Publication Details',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'checkout',
        path: '/checkout/:id',
        component: lazy(() => import('@/views/Checkout')),
        authority: [],
        meta: {
            header: 'Secure Checkout',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'checkout.success',
        path: '/checkout/success',
        component: lazy(() => import('@/views/CheckoutSuccess')),
        authority: [],
        meta: {
            header: 'Purchase Successful',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard',
        path: '/dashboard',
        component: lazy(() => import('@/views/UserDashboard')),
        authority: [],
        meta: {
            header: 'My Library',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'admin.panel',
        path: '/admin',
        component: lazy(() => import('@/views/AdminPanel')),
        authority: ['admin'],
        meta: {
            header: 'Admin Panel',
            pageContainerType: 'contained',
        },
    },
    {
        key: 'accessDenied',
        path: '/access-denied',
        component: lazy(() => import('@/views/AccessDenied')),
        authority: [],
        meta: {
            header: 'Access Restricted',
            pageContainerType: 'contained',
        },
    },
]
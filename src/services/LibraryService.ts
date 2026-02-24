import ApiService from './ApiService'
import type { LibraryItem } from '@/@types/library'

export async function apiGetLibraryItems() {
    return ApiService.fetchData<LibraryItem[]>({
        url: '/library/items',
        method: 'get',
    })
}

export async function apiGetLibraryItem(id: string) {
    return ApiService.fetchData<LibraryItem>({
        url: `/library/items/${id}`,
        method: 'get',
    })
}

export async function apiGetFeaturedLibraryItems() {
    return ApiService.fetchData<LibraryItem[]>({
        url: '/library/featured',
        method: 'get',
    })
}


import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
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
        key: 'journals',
        path: '',
        title: 'Journals',
        translateKey: 'nav.journals',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            { key: 'journals.agriculture', path: '/journals/agriculture', title: 'Agriculture', translateKey: 'nav.journals.agriculture', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.appliedScience', path: '/journals/applied-science', title: 'Applied Science', translateKey: 'nav.journals.appliedScience', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.architecture', path: '/journals/architecture', title: 'Architecture', translateKey: 'nav.journals.architecture', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.ayurveda', path: '/journals/ayurveda', title: 'Ayurveda', translateKey: 'nav.journals.ayurveda', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.education', path: '/journals/education', title: 'Education', translateKey: 'nav.journals.education', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.engineering', path: '/journals/engineering', title: 'Engineering', translateKey: 'nav.journals.engineering', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.hindi', path: '/journals/hindi', title: 'Hindi', translateKey: 'nav.journals.hindi', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.homeopathy', path: '/journals/homeopathy', title: 'Homeopathy', translateKey: 'nav.journals.homeopathy', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.law', path: '/journals/law', title: 'Law', translateKey: 'nav.journals.law', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'journals.management', path: '/journals/management', title: 'Management', translateKey: 'nav.journals.management', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
        ],
    },
    {
        key: 'magazines',
        path: '',
        title: 'Magazines',
        translateKey: 'nav.magazines',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            { key: 'magazines.business', path: '/magazines/business', title: 'Business', translateKey: 'nav.magazines.business', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'magazines.science', path: '/magazines/science', title: 'Science', translateKey: 'nav.magazines.science', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
        ],
    },
    {
        key: 'books',
        path: '',
        title: 'Books',
        translateKey: 'nav.books',
        icon: 'collapseMenu',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            { key: 'books.academic', path: '/books/academic', title: 'Academic Textbooks', translateKey: 'nav.books.academic', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
            { key: 'books.reference', path: '/books/reference', title: 'Reference Materials', translateKey: 'nav.books.reference', icon: '', type: NAV_ITEM_TYPE_ITEM, authority: [], subMenu: [] },
        ]
    },
    {
        key: 'price-lists',
        path: '/price-lists',
        title: 'Price Lists',
        translateKey: 'nav.priceLists',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'partners',
        path: '/partners',
        title: 'Partners',
        translateKey: 'nav.partners',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'for-publishers',
        path: '/for-publishers',
        title: 'For Publishers',
        translateKey: 'nav.forPublishers',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'contact',
        path: '/contact-us',
        title: 'Contact Us',
        translateKey: 'nav.contact',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'blogs',
        path: '/blogs',
        title: 'Blogs',
        translateKey: 'nav.blogs',
        icon: 'singleMenu',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    }
]

export default navigationConfig

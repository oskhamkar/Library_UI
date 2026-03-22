export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'Journals',
    path: '/journals',
    children: [
      { label: 'Scientific', path: '/journals/scientific' },
      { label: 'Humanities', path: '/journals/humanities' },
      { label: 'Medical', path: '/journals/medical' },
    ],
  },
  {
    label: 'Magazines',
    path: '/magazines',
    children: [
      { label: 'Technology', path: '/magazines/technology' },
      { label: 'Science', path: '/magazines/science' },
      { label: 'Arts & Culture', path: '/magazines/arts-culture' },
    ],
  },
  {
    label: 'Books',
    path: '/books',
    children: [
      { label: 'Textbooks', path: '/books/textbooks' },
      { label: 'Reference', path: '/books/reference' },
      { label: 'Fiction', path: '/books/fiction' },
    ],
  },
  { label: 'My Subscriptions', path: '/subscriptions' },
];

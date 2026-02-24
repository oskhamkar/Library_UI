# Digital Library Application - Complete Documentation

## 📚 Overview

A modern, professional digital library web application built with React, TypeScript, and Tailwind CSS. This application provides a complete platform for browsing, purchasing, and managing academic publications including journals, magazines, books, and research papers.

## 🎯 Features

### User Features
- **Homepage** with hero section and category browsing
- **Publication Browsing** with advanced filtering and sorting
- **Smart Search** across titles, authors, and descriptions
- **Publication Details** with full information and preview
- **Shopping Cart** and checkout system
- **User Dashboard** with:
  - Purchase history
  - Reading history
  - Bookmarks
  - Profile settings
- **Role-Based Access** (User/Admin)
- **Authentication** (Login/Register/Forgot Password)

### Admin Features
- **Admin Panel** with:
  - Dashboard with analytics
  - Publication management (upload, edit, delete)
  - User management
  - Analytics overview
  - Revenue tracking

## 📁 Project Structure

```
src/
├── @types/
│   ├── library.ts              # Library domain types and interfaces
│   ├── auth.ts
│   ├── routes.tsx
│   └── ...
├── components/
│   ├── shared/
│   │   ├── Card.tsx            # Basic card component
│   │   ├── CategoryCard.tsx     # Category showcase card
│   │   ├── PublicationCard.tsx  # Publication listing card
│   │   ├── FilterSection.tsx    # Reusable filter component
│   │   └── ...
│   ├── layouts/
│   ├── template/
│   └── ...
├── configs/
│   ├── routes.config/
│   │   └── routes.config.ts     # Route definitions (includes library routes)
│   └── ...
├── mock/
│   ├── data/
│   │   ├── authData.ts
│   │   └── library.ts           # Mock publication data
│   ├── fakeApi/
│   │   ├── libraryFakeApi.ts    # Mock API endpoints
│   │   └── ...
│   └── mock.ts
├── views/
│   ├── library/
│   │   ├── LibraryHome.tsx      # Homepage
│   │   ├── LibraryBrowse.tsx    # Browse/listing page
│   │   ├── PublicationDetails.tsx
│   │   ├── Checkout.tsx
│   │   ├── Dashboard.tsx
│   │   ├── AdminPanel.tsx
│   │   └── index.ts
│   ├── auth/
│   ├── Home.tsx
│   └── ...
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build
```

### Configuration

The application uses mock APIs by default. To enable mock APIs, ensure this in `src/configs/app.config.ts`:

```typescript
export const appConfig = {
    enableMock: true,
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
}
```

## 🔑 Key Types & Interfaces

### Publication
```typescript
interface Publication {
    id: string
    title: string
    author: string
    publisher: string
    coverImage: string
    description: string
    publicationType: 'journal' | 'magazine' | 'book' | 'research-paper'
    category: 'science' | 'technology' | 'business' | 'health' | 'education' | 'humanities'
    year: number
    price: number
    rating?: number
    reviewCount?: number
    isFeatured?: boolean
    tags?: string[]
}
```

### UserProfile
```typescript
interface UserProfile {
    id: string
    email: string
    firstName: string
    lastName: string
    role: 'user' | 'admin'
    institution?: string
    department?: string
}
```

### CartItem
```typescript
interface CartItem {
    id: string
    publication: Publication
    quantity: number
    addedDate: string
}
```

## 📄 Pages & Routes

### Public Routes (Authentication)
- `/sign-in` - Login page
- `/sign-up` - Registration page
- `/forgot-password` - Password recovery
- `/reset-password` - Password reset

### Protected Routes

#### Library Routes
- `/home` - Dashboard home
- `/library` - Library homepage
- `/library/browse` - Browse all publications
- `/library/category/:category` - Browse by category
  - `journal` - Journals
  - `magazine` - Magazines
  - `book` - Books
  - `research-paper` - Research papers
- `/library/publication/:id` - Publication details
- `/library/checkout` - Checkout page
- `/library/dashboard` - User dashboard
- `/library/search?q=query` - Search results

#### Admin Routes
- `/admin` - Admin dashboard (requires admin role)

## 🎨 UI Components

### PublicationCard
Displays individual publication in a grid layout with:
- Cover image
- Title and author
- Rating and reviews
- Price
- Bookmark functionality
- Badge for publication type

```typescript
<PublicationCard
    publication={publication}
    isBookmarked={false}
    onBookmarkChange={(id, isBookmarked) => {}}
/>
```

### CategoryCard
Showcase card for publication categories with:
- Icon
- Title and description
- Publication count
- Click to browse

```typescript
<CategoryCard
    icon={<HiAcademicCap />}
    title="Journals"
    description="Peer-reviewed research journals"
    color="bg-gradient-to-br from-blue-500 to-blue-600"
    categoryPath="/library/category/journal"
    count={10}
/>
```

### FilterSection
Reusable filter component with:
- Expandable/collapsible sections
- Multiple filter options
- Count display

```typescript
<FilterSection
    title="Publication Type"
    options={[
        { label: 'Journals', value: 'journal' },
        { label: 'Books', value: 'book' }
    ]}
    selectedValues={selectedTypes}
    onChange={setSelectedTypes}
/>
```

### Card
Basic card wrapper component:

```typescript
<Card hover className="p-4">
    Content here
</Card>
```

## 📊 Mock Data

### Publications
10 sample publications provided in `src/mock/data/library.ts`:
- Journals
- Magazines
- Books
- Research Papers

Each with:
- Full metadata (title, author, publisher, year)
- Category and department
- Price and rating
- Description and tags
- Cover images (Unsplash URLs)

### User Data
Mock profile and purchase history for testing dashboard functionality.

## 🔗 API Endpoints

The application uses MirageJS for mock APIs. All endpoints are prefixed with `/api`.

### Publications
```
GET /api/publications
GET /api/publications/:id
GET /api/publications/search?q=query
GET /api/publications/category/:category
GET /api/publications/type/:type
GET /api/publications/featured
```

### Orders
```
POST /api/orders
GET /api/user/purchases
```

### User History
```
GET /api/user/history
POST /api/user/history
POST /api/user/bookmarks
GET /api/user/bookmarks
```

### Admin
```
POST /api/admin/publications
PUT /api/admin/publications/:id
DELETE /api/admin/publications/:id
GET /api/admin/analytics
```

## 🎨 Styling & Tailwind

The application uses Tailwind CSS with the following color scheme:
- **Primary**: Indigo (indigo-600)
- **Accent**: Blue, Purple, Orange, Pink
- **Neutral**: Gray shades
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Sticky navigation and floating elements
- Collapsible sidebars on mobile

## 🔐 Authentication & Authorization

### Role-Based Access
- **User**: Can browse, search, purchase, and manage dashboard
- **Admin**: Full access including publication management and analytics

### Protected Routes
Routes with `authority: ['admin']` require admin role. User can be any role.

Implementation in `AuthorityGuard.tsx`:
```typescript
const hasAuthority = authority.some(auth =>
    userAuthorities.includes(auth)
)
```

## 🔄 State Management

Uses Redux with Redux Toolkit:
- `auth` slice - Authentication state
- `theme` slice - Theme configuration
- `locale` slice - Language/localization
- `base` slice - Base application state

## 📱 Responsive Features

- **Mobile Menu**: Hamburger navigation
- **Sidebar Filters**: Toggle on mobile
- **Grid Layouts**: Responsive columns
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns
- **Touch-friendly**: Large tap targets
- **Flexible Typography**: Responsive text sizes

## 🚀 Performance

- **Code Splitting**: Lazy-loaded routes
- **Image Optimization**: Responsive images
- **Efficient Rendering**: Reusable components
- **Tailwind CSS**: Optimized CSS bundle

## 📖 Usage Examples

### Browsing Publications
1. Navigate to `/library`
2. Use search bar or category cards
3. Click on publication to view details
4. Add to cart or bookmark

### Making a Purchase
1. View publication details
2. Click "Buy Now" or "Add to Cart"
3. Proceed to checkout
4. Select payment method
5. Confirm purchase
6. View confirmation page

### Admin Tasks
1. Navigate to `/admin`
2. View analytics on dashboard
3. Upload new publication
4. Manage existing publications
5. View user management

## 🔧 Customization

### Adding New Publication Categories
1. Update `ContentCategory` type in `src/@types/library.ts`
2. Add publication data with new category
3. Update filter options in `LibraryBrowse.tsx`

### Styling Customization
All components use Tailwind CSS. Modify colors in:
- Component files directly
- `src/assets/styles/` for global styles
- `tailwind.config.cjs` for theme configuration

### Adding Mock Data
Update `src/mock/data/library.ts` with new publications, and they'll automatically appear in the application.

## 📚 Dependencies

Key dependencies:
- `react` & `react-dom` - UI framework
- `react-router-dom` - Routing
- `@reduxjs/toolkit` - State management
- `tailwindcss` - Styling
- `react-icons` - Icon library
- `miragejs` - Mock API
- `classnames` - Utility for conditional classes
- `axios` - HTTP client

## 🐛 Troubleshooting

### Mock APIs Not Working
- Ensure `enableMock: true` in `app.config.ts`
- Check browser console for MirageJS messages
- Verify API prefix matches configuration

### Routes Not Found
- Check route definitions in `src/configs/routes.config/`
- Ensure lazy imports are correct
- Verify component paths

### Styling Issues
- Clear build cache: `npm run build -- --reset-cache`
- Rebuild Tailwind: `npx tailwindcss:build`
- Check className syntax matches Tailwind

## 📝 Best Practices

1. **Component Organization**: Keep related components in same folder
2. **Type Safety**: Always use TypeScript interfaces
3. **Responsive Design**: Test on multiple screen sizes
4. **Performance**: Use lazy loading for routes and components
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Testing**: Create unit tests for components and utilities

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)

## 📄 License

This project is part of the Elstar admin template.

---

**Version**: 1.0.0  
**Last Updated**: 2024-02-24

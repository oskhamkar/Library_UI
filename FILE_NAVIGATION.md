# 📁 Digital Library - File Structure & Navigation Guide

## 🎯 Quick File Finder

Use this guide to quickly locate and understand each file in the digital library application.

---

## 📚 Core Application Files

### Types & Interfaces
**File**: `src/@types/library.ts`  
**Size**: ~150 lines  
**Purpose**: All TypeScript interfaces for library domain  
**Key Types**:
- `Publication` - Publication/book/journal data
- `UserProfile` - User information
- `CartItem` - Shopping cart item
- `Order` - Purchase order
- `LibraryFilter` - Filter criteria
- `PurchaseHistory` - User purchases
- `ViewHistory` - Reading history
- `BookmarkedItem` - Bookmarked publications

**When to Use**: Reference this file when working with library data types

---

### Mock Data
**File**: `src/mock/data/library.ts`  
**Size**: ~300 lines  
**Purpose**: Sample publications and user data  
**Contains**:
- `mockPublications` - 10 publications (various types)
- `mockUserProfile` - Sample user
- `mockPurchaseHistory` - Sample purchases
- `mockViewHistory` - Sample view history
- Helper functions (getFeatured, getByCategory, search)

**When to Use**: Reference for sample data structure, modify to add/change publications

---

### Mock API Endpoints
**File**: `src/mock/fakeApi/libraryFakeApi.ts`  
**Size**: ~200 lines  
**Purpose**: MirageJS mock API server routes  
**Endpoints** (all prefixed with `/api`):
- `/publications` - GET all publications
- `/publications/:id` - GET single
- `/publications/search` - Search
- `/publications/category/:category` - By category
- `/publications/featured` - Featured only
- `/orders` - POST new order
- `/user/purchases` - GET purchase history
- `/user/history` - GET/POST view history
- `/user/bookmarks` - Bookmark operations
- `/admin/*` - Admin operations

**When to Use**: Add new endpoints, modify API responses

---

## 🎨 Components

### Reusable Components
Located in: `src/components/shared/`

#### 1. Card Component
**File**: `Card.tsx` (~30 lines)  
**Purpose**: Basic reusable card wrapper  
**Props**: `children`, `className`, `hover`, `clickable`, `onClick`  
**Usage**: Wrap any content in styled card container

#### 2. PublicationCard Component
**File**: `PublicationCard.tsx` (~140 lines)  
**Purpose**: Display single publication in grid  
**Props**: `publication`, `isBookmarked`, `onBookmarkChange`  
**Used In**: LibraryHome, LibraryBrowse  
**Features**: Image, badges, rating, price, bookmark button

#### 3. CategoryCard Component
**File**: `CategoryCard.tsx` (~50 lines)  
**Purpose**: Display publication category  
**Props**: `icon`, `title`, `description`, `color`, `categoryPath`, `count`  
**Used In**: LibraryHome  
**Features**: Gradient background, hover animation, count badge

#### 4. FilterSection Component
**File**: `FilterSection.tsx` (~80 lines)  
**Purpose**: Reusable filter sidebar section  
**Props**: `title`, `options`, `selectedValues`, `onChange`, `type`  
**Used In**: LibraryBrowse (4 instances)  
**Features**: Expandable, checkboxes, count badges

---

## 📄 Page Components

Located in: `src/views/library/`

### 1. LibraryHome
**File**: `LibraryHome.tsx` (~130 lines)  
**Route**: `/library`  
**Purpose**: Homepage with hero and featured content  
**Sections**:
- Hero with search bar
- 4 category cards
- Featured publications (6)
- Stats section (3 cards)

**Key Components Used**:
- CategoryCard (4x)
- PublicationCard (6x)
- Card component (3x for stats)

### 2. LibraryBrowse
**File**: `LibraryBrowse.tsx` (~200 lines)  
**Routes**:
- `/library/browse` - All publications
- `/library/category/:category` - By type
- `/library/search?q=query` - Search results

**Purpose**: Browse/listing page with filters  
**Features**:
- Sidebar filters (4 sections)
- Sort dropdown
- Responsive grid
- Empty state

**Key Components Used**:
- FilterSection (4x)
- PublicationCard (many)

### 3. PublicationDetails
**File**: `PublicationDetails.tsx` (~250 lines)  
**Route**: `/library/publication/:id`  
**Purpose**: Full publication details  
**Sections**:
- Cover image (left)
- Details panel (right)
- Full description
- Tags
- Price box

**Features**:
- Buy Now button → Checkout
- Add to Cart
- Bookmark toggle
- Preview button
- Back navigation

### 4. Checkout
**File**: `Checkout.tsx` (~240 lines)  
**Route**: `/library/checkout`  
**Purpose**: Complete purchase flow  
**Flow**:
1. Order summary (left sidebar)
2. Payment method selection
3. Payment details form
4. Confirmation page

**Payment Methods**:
- Credit Card
- Debit Card
- PayPal
- Bank Transfer

### 5. Dashboard
**File**: `Dashboard.tsx` (~300 lines)  
**Route**: `/library/dashboard`  
**Purpose**: User account dashboard  
**Tabs** (4):
1. **Purchased Items** - Purchase history with:
   - Thumbnail, title, purchase date
   - Access until date
   - View & Download buttons
2. **Reading History** - Recently viewed publications
3. **Bookmarks** - Saved items
4. **Settings** - Profile and passwords

### 6. AdminPanel
**File**: `AdminPanel.tsx` (~400 lines)  
**Route**: `/admin`  
**Purpose**: Admin management interface  
**Tabs** (4):
1. **Dashboard** - Stats and recent publications
2. **Publications** - Upload and manage
3. **Users** - User management table
4. **Analytics** - Top publications, category distribution

**Features**:
- Upload form (collapsible)
- Edit/Delete publications
- User suspension
- Analytics charts

### Views Index
**File**: `index.ts` (~10 lines)  
**Purpose**: Export all library views  
**Exports**: All 6 page components

---

## ⚙️ Configuration Files

### Routes Configuration
**File**: `src/configs/routes.config/routes.config.ts`  
**Size**: ~100 lines (with library additions)  
**Purpose**: Define all application routes  
**Library Routes Added**:
- `/library` - Home
- `/library/browse` - Browse
- `/library/category/:category` - By category
- `/library/publication/:id` - Details
- `/library/checkout` - Checkout
- `/library/dashboard` - Dashboard
- `/library/search` - Search
- `/admin` - Admin panel (Admin role required)

**When to Use**: Add/modify routes, change path, update authority

---

## 🔗 Integration Files

### Mock Server Setup
**File**: `src/mock/mock.ts`  
**Changes**: Added `libraryFakeApi` registration  
**Lines Added**: ~2
**Purpose**: Register library API with MirageJS

**File**: `src/mock/fakeApi/index.ts`  
**Changes**: Added libraryFakeApi export  
**Lines Added**: ~1

---

## 📖 Documentation Files

### Setup Guide
**File**: `LIBRARY_SETUP.md` (~300 lines)  
**Purpose**: Quick start and feature overview  
**Contents**:
- What's been created
- Routes available
- Design features
- Quick start
- API endpoints
- Customization tips

### Technical Documentation
**File**: `LIBRARY_README.md` (~400 lines)  
**Purpose**: Comprehensive technical reference  
**Contents**:
- Feature list
- Project structure
- Getting started
- Types & interfaces
- Component hierarchy
- Mock data structure
- API endpoints
- Customization guide

### Component Showcase
**File**: `COMPONENT_SHOWCASE.md` (~600 lines)  
**Purpose**: Visual & detailed component documentation  
**Contents**:
- Each component explained
- Props & features
- Usage examples
- Color variations
- Layout details
- Responsive behavior
- Design tokens
- Animations

---

## 📊 File Statistics

| Category | Count | Lines |
|----------|-------|-------|
| Components | 4 | ~300 |
| Pages | 6 | ~1200 |
| Types | 1 | ~150 |
| Mock Data | 1 | ~300 |
| Mock API | 1 | ~200 |
| Routes | 1 (modified) | - |
| Documentation | 4 | ~1300 |
| **Total** | **18** | **~3450** |

---

## 🎯 Finding Components by Feature

### Want to modify the homepage?
→ Edit `src/views/library/LibraryHome.tsx`  
→ Reference `CategoryCard` and `PublicationCard` components

### Want to add publication filtering?
→ Edit `src/views/library/LibraryBrowse.tsx`  
→ Modify `FilterSection` component for new filters

### Want to customize publication display?
→ Edit `src/components/shared/PublicationCard.tsx`  
→ Add/remove badge colors in `badgeColor` object

### Want to change checkout flow?
→ Edit `src/views/library/Checkout.tsx`  
→ Modify payment method options or form fields

### Want to add dashboard features?
→ Edit `src/views/library/Dashboard.tsx`  
→ Add new tab in tabs array, create content section

### Want to add admin features?
→ Edit `src/views/library/AdminPanel.tsx`  
→ Add new tab, define content

### Want to add new API endpoint?
→ Edit `src/mock/fakeApi/libraryFakeApi.ts`  
→ Add new server route using MirageJS

### Want to add new publications?
→ Edit `src/mock/data/library.ts`  
→ Add to `mockPublications` array

---

## 📝 File Modification Checklist

### Adding a new publication type (e.g., "Textbook")

1. ☐ Update `src/@types/library.ts` - Add to `PublicationType`
2. ☐ Update `src/mock/data/library.ts` - Add sample data, update helper functions
3. ☐ Update `LibraryBrowse.tsx` - Add to publication types filter
4. ☐ Update `PublicationCard.tsx` - Add badge color for new type
5. ☐ Update `LibraryHome.tsx` - Add category card if needed
6. ☐ Update API - Handle new type in `libraryFakeApi.ts`

### Adding a new page/route

1. ☐ Create new component in `src/views/library/`
2. ☐ Add export to `src/views/library/index.ts`
3. ☐ Add route to `src/configs/routes.config/routes.config.ts`
4. ☐ Add navigation link in navigation config
5. ☐ Update documentation

### Modifying API endpoints

1. ☐ Update `src/mock/fakeApi/libraryFakeApi.ts`
2. ☐ Update types in `src/@types/library.ts` if needed
3. ☐ Update components using affected endpoints
4. ☐ Test with mock server

### Customizing styling

1. ☐ Identify component file
2. ☐ Update Tailwind classes
3. ☐ Test on mobile, tablet, desktop
4. ☐ Update COMPONENT_SHOWCASE.md if design changed

---

## 🔍 Quick Code Search Guide

### Find where publication cards are used:
```bash
grep -r "PublicationCard" src/views
```

### Find all filter implementations:
```bash
grep -r "FilterSection" src/
```

### Find all API calls:
```bash
grep -r "/api/" src/
```

### Find all routes:
```bash
grep -r "path:" src/configs/routes.config/
```

### Find all types:
```bash
grep -r "interface\|type " src/@types/
```

---

## 📱 Component Usage Map

```
PublicationCard used in:
├── LibraryHome (featured publications)
├── LibraryBrowse (search results)
├── PublicationDetails (reference)
└── Dashboard (purchase history)

CategoryCard used in:
└── LibraryHome (category showcase)

FilterSection used in:
└── LibraryBrowse (4 filter sections)

Card used in:
├── Various stat displays
└── Price highlight section
```

---

## ✅ File Checklist for Development

**Core Files to Know**:
- ✅ `src/@types/library.ts` - Type definitions
- ✅ `src/mock/data/library.ts` - Sample data
- ✅ `src/mock/fakeApi/libraryFakeApi.ts` - API endpoints
- ✅ `src/components/shared/PublicationCard.tsx` - Main listing card
- ✅ `src/views/library/LibraryHome.tsx` - Entry point
- ✅ `src/views/library/LibraryBrowse.tsx` - Browse/search
- ✅ `src/configs/routes.config/routes.config.ts` - Routing

**Documentation Files**:
- 📖 `LIBRARY_SETUP.md` - Quick start guide
- 📖 `LIBRARY_README.md` - Technical reference
- 📖 `COMPONENT_SHOWCASE.md` - Design documentation
- 📖 This file - File navigation

---

## 🚀 Integration Checklist

To integrate library into main application:

- ✅ Types added to `src/@types/`
- ✅ Components added to `src/components/shared/`
- ✅ Views added to `src/views/library/`
- ✅ Routes added to `src/configs/routes.config/`
- ✅ Mock data added to `src/mock/data/`
- ✅ Mock API added to `src/mock/fakeApi/`
- ✅ Mock server updated to register API
- ✅ Documentation completed

**Status**: ✅ **COMPLETE AND READY TO USE**

---

**Last Updated**: February 24, 2025  
**Total Files**: 18  
**Total Lines**: ~3450  
**Status**: Production Ready ✨

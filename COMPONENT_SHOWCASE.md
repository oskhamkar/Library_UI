# 🎨 Digital Library - Component & Design Showcase

## UI Components Overview

This document showcases all the custom components built for the digital library application.

---

## 1️⃣ Card Component

**File**: `src/components/shared/Card.tsx`

**Purpose**: Basic reusable card wrapper with hover effects and optional clickable behavior.

**Props**:
- `children: ReactNode` - Card content
- `className?: string` - Additional CSS classes
- `hover?: boolean` - Enable hover shadow effect (default: true)
- `clickable?: boolean` - Enable cursor pointer (default: false)
- `onClick?: () => void` - Click handler

**Usage**:
```typescript
<Card hover clickable onClick={() => navigate('/library')}>
    <div className="p-4">
        <h3 className="font-bold">Title</h3>
        <p className="text-gray-600">Description</p>
    </div>
</Card>
```

**Styling**:
- Background: White with gray border
- Border: Gray-200, 1px
- Hover effect: Shadow lg with smooth transition
- Rounded corners: lg (8px)

---

## 2️⃣ PublicationCard Component

**File**: `src/components/shared/PublicationCard.tsx`

**Purpose**: Display individual publications in a grid format with all relevant information.

**Props**:
```typescript
interface PublicationCardProps {
    publication: Publication
    isBookmarked?: boolean
    onBookmarkChange?: (publicationId: string, isBookmarked: boolean) => void
}
```

**Features**:
- Cover image with hover zoom
- Publication type badge (colored)
- Featured badge (yellow)
- Star rating (1-5 stars)
- Review count
- Author name
- Short description (2-line clamp)
- Year and price footer
- Bookmark button
- Click to view details

**Badge Colors**:
- Research Paper: Blue (`bg-blue-100 text-blue-800`)
- Journal: Purple (`bg-purple-100 text-purple-800`)
- Magazine: Green (`bg-green-100 text-green-800`)
- Book: Orange (`bg-orange-100 text-orange-800`)

**Layout Dimensions**:
- Image height: 14rem (224px)
- Card height: Full flex (maintains aspect)
- Used in 1-column (mobile), 2-column (tablet), 3-column (desktop)

**Interactions**:
- Click card → Navigate to details page
- Click bookmark → Toggle bookmark state (emits event)
- Hover → Image zooms slightly, shadow appears

---

## 3️⃣ CategoryCard Component

**File**: `src/components/shared/CategoryCard.tsx`

**Purpose**: Display publication categories with visual appeal and navigation.

**Props**:
```typescript
interface CategoryCardProps {
    icon: React.ReactNode
    title: string
    description: string
    color: string
    categoryPath: string
    count?: number
}
```

**Features**:
- Large icon with semi-transparent background
- Title and description
- Publication count badge
- "Explore" CTA with arrow
- Gradient background colors
- Hover animation (lift up, enhanced shadow)

**Color Variations**:
```
Journals: bg-gradient-to-br from-blue-500 to-blue-600
Magazines: bg-gradient-to-br from-purple-500 to-purple-600
Books: bg-gradient-to-br from-orange-500 to-orange-600
Research Papers: bg-gradient-to-br from-pink-500 to-pink-600
```

**Grid Layout**:
- 1 column on mobile (< 640px)
- 2 columns on tablet (640px - 1024px)
- 4 columns on desktop (> 1024px)

**Animations**:
- Hover: `-translate-y-2` (move up slightly)
- Shadow: `hover:shadow-lg`
- Background highlight: `bg-white/30` on hover

---

## 4️⃣ FilterSection Component

**File**: `src/components/shared/FilterSection.tsx`

**Purpose**: Reusable collapsible filter sidebar section with multiple options.

**Props**:
```typescript
interface FilterSectionProps {
    title: string
    options: FilterOption[]
    selectedValues: string[]
    onChange: (values: string[]) => void
    type?: 'checkbox' | 'range'
}

interface FilterOption {
    label: string
    value: string
    count?: number
}
```

**Features**:
- Expandable/collapsible header
- Checkbox inputs for multi-select
- Count badges for each option
- Smooth animations
- Hover states on labels
- Bottom border separator
- Icon chevron (rotates on toggle)

**Sections Used**:
1. Publication Type (Journal, Magazine, Book, Research Paper)
2. Category (Science, Technology, Business, Health, Education, Humanities)
3. Year (2024, 2023, 2022, 2021 & Earlier)
4. Department (8 different departments)

**Mobile Behavior**:
- Hidden by default
- Toggle "Show/Hide Filters" button
- Full-width when visible
- Closes when filter applied

---

## 🎨 Page Layouts

### LibraryHome Page

**Sections**:
1. **Hero Section**
   - Gradient background (indigo to blue)
   - Large headline
   - Subtitle
   - Search bar with icon button
   - Responsive padding and text sizes

2. **Categories Section**
   - 4 CategoryCard components
   - Gray background
   - Grid layout (1, 2, or 4 columns)

3. **Featured Publications**
   - Heading with "View All" button
   - Grid of PublicationCards (3 columns on desktop)
   - Max 6 featured items

4. **Stats Section**
   - Indigo background
   - 3 stat cards (publications, users, rating)
   - Large bold numbers
   - Aligned center

**Color Scheme**:
- Hero: Gradient `from-indigo-600 to-blue-700`
- Featured heading: Gray-900
- Stats background: `indigo-50`
- Stats cards: White with gray text

---

### LibraryBrowse Page

**Layout**: 3-column (2-column on tablet, 1-column on mobile)

**Left Sidebar (640px on desktop)**:
- Title "Filters" with icon
- Reset button (conditional)
- 4 FilterSection components
- Sticky on desktop

**Main Content Area**:
- Toolbar with:
  - "Show/Hide Filters" button (mobile only)
  - Sort dropdown (Newest, Popular, Price Low/High)
- Grid of PublicationCards
- Responsive columns based on screen size

**Features**:
- Dynamic filter updates
- Real-time result count
- Empty state message
- Reset all filters button

**Colors**:
- Background: White
- Header: Gray-50 with border
- Toolbar: White with gray borders

---

### PublicationDetails Page

**Layout**: 2-column (1-column on mobile)

**Left Column (300px on desktop)**:
- Publication cover image (aspect 3:4)
- 3 action buttons:
  1. "Buy Now" (primary blue button)
  2. "Add to Cart" (secondary)
  3. "Bookmark" (toggles yellow)
- Preview button in blue box

**Right Column**:
- Back button
- Publication type badge
- Featured badge (if featured)
- Large heading
- Author and publisher info
- Rating with stars and reviews
- Key info grid (2 columns):
  - Category, Department, Pages, ISBN/ISSN
- Full description
- Tags
- Price highlight box with "Purchase Now"

**Colors**:
- Primary button: `indigo-600`
- Secondary button: Border style
- Bookmark: Toggles between gray and yellow
- Price highlight: `indigo-50` background with `indigo-200` border
- Tags: Gray-100 with gray-700 text

---

### Checkout Page

**Layout**: 2-column (1-column on mobile)

**Left Sidebar** (300px on desktop):
- "Order Summary" heading
- Cart items with:
  - Thumbnail
  - Title
  - Price
  - Remove button
- Subtotal, Tax, Total
- Sticky on desktop

**Main Content**:
- Payment method selection (4 options):
  - Credit Card
  - Debit Card
  - PayPal
  - Bank Transfer
- Payment form (varies by method)
- Terms checkbox
- Pay button
- Cancel button

**Flow**:
1. Cart display
2. Payment method selection
3. Payment details form
4. Confirmation page with ✓ mark

---

### Dashboard Page

**Header Section**:
- User avatar (20rem circle)
- Welcome message
- Email, Institution, Department

**Navigation Tabs** (4 tabs):
1. Purchased Items
2. Reading History
3. Bookmarks
4. Settings

**Content Sections**:

**Purchased Items**:
- Cards with:
  - Thumbnail
  - Title
  - Purchase date
  - Access until date
  - View & Download buttons
  - Price

**Reading History**:
- Grid of thumbnail cards (4 columns on desktop)
- Shows title and view date
- Clickable to view publication

**Bookmarks**:
- Empty state (initially)
- Can be populated with bookmarked items

**Settings**:
- Profile Information form
- Password & Security form
- 2-column grid on desktop

---

### AdminPanel Page

**Tabs** (4):
1. Dashboard
2. Publications
3. Users
4. Analytics

**Dashboard Tab**:
- 3 stat cards (Publications, Revenue, Users)
- Each shows:
  - Title
  - Large value
  - Icon with color
  - Trend percentage with arrow
- Recent Publications table

**Publications Tab**:
- Upload form (collapsible)
- Publications table with:
  - Edit & Delete actions
  - Type badge
  - Price display

**Users Tab**:
- Users management table
- Role badges
- Status badges
- View & Suspend actions

**Analytics Tab**:
- 2-column grid
- Top publications list
- Category distribution chart

---

## 🎯 Design Tokens

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Page H1 | 2.25rem | Bold | gray-900 |
| Section H2 | 1.875rem | Bold | gray-900 |
| Card Title | 0.875rem | Bold | gray-900 |
| Card Author | 0.75rem | Normal | gray-600 |
| Button Text | 0.875rem | Semibold | Varies |
| Metadata | 0.75rem | Normal | gray-600 |

### Spacing

| Utility | Size |
|---------|------|
| Card padding | 1rem (16px) |
| Section padding | 2rem (32px) |
| Grid gap | 1.5rem or 2rem |
| Item gap | 0.75rem - 1rem |

### Border Radius

| Utility | Radius |
|---------|--------|
| Cards | 0.5rem (8px) |
| Buttons | 0.5rem (8px) |
| Badges | 999px (full) |
| Images | 0.5rem (8px) |

### Shadows

| Level | CSS |
|-------|-----|
| None | No shadow |
| Default | border only |
| Hover | shadow-lg |
| Floating | shadow-lg |

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Single column layouts
- Full-width cards
- Hamburger menu for filters
- Larger tap targets (44px+)
- Horizontal scrolling for tables

### Tablet (640px - 1024px)
- 2-column grids
- Sidebar filters with toggle
- Medium spacing
- Readable text size

### Desktop (> 1024px)
- 3-4 column grids
- Persistent sidebars
- Compact spacing
- Hover effects enabled
- Optimal reading width (max-width: 1280px)

---

## 🎭 Interactive States

### Buttons
- **Normal**: Base color
- **Hover**: Darker shade, enhanced shadow
- **Active**: Pressed appearance
- **Disabled**: Gray, reduced opacity
- **Loading**: Spinner animation

### Cards
- **Normal**: White background, gray border
- **Hover**: Enhanced shadow, slight lift
- **Active**: Primary border color

### Inputs
- **Default**: Gray border
- **Focus**: Indigo ring (ring-2 ring-indigo-500)
- **Error**: Red border and text
- **Disabled**: Gray background

### Transitions
- All 300ms ease by default
- Hover effects: shadow-lg, transform
- Color changes: smooth
- Visibility: fade in/out

---

## 📊 Grid Systems

### Publication Cards Grid
```
Mobile:  1 column (full width)
Tablet:  2 columns (gap-6)
Desktop: 3 columns (gap-8)
```

### Category Cards Grid
```
Mobile:  1 column
Tablet:  2 columns
Desktop: 4 columns
```

### Dashboard Content Grid
```
Mobile:  1 column
Tablet:  1-2 columns (form fields)
Desktop: 2 columns (settings forms)
```

---

## 🌈 Color Usage

### Whites & Grays
- Background: `white`, `gray-50`
- Borders: `gray-200`
- Text primary: `gray-900`
- Text secondary: `gray-600`
- Disabled: `gray-400`

### Accent Colors
- Primary action: `indigo-600`
- Hover: `indigo-700`
- Focus ring: `indigo-500`
- Light background: `indigo-50`
- Subtle: `indigo-100`

### Category Colors
- Science: Blue
- Technology: Purple
- Business: Orange
- Health: Red
- Education: Green
- Humanities: Indigo

---

## ✨ Animations & Effects

### Hover Effects
```css
/* Cards */
hover:shadow-lg
hover:scale-105 (images)

/* Buttons */
hover:bg-darker-shade
hover:shadow-lg

/* Links */
hover:text-darker-shade
```

### Transitions
```css
transition-all duration-300
transition-colors duration-300
transition-shadow duration-300
transition-transform duration-300
```

### Loading & States
- Spinner animation
- Button disabled opacity
- Skeleton screens (from existing components)
- Toast notifications (can be added)

---

## 🔄 Component Relationships

```
LibraryHome
├── Uses CategoryCard (4x)
├── Uses PublicationCard (6x)
└── Uses Card (3x for stats)

LibraryBrowse
├── Uses FilterSection (4x)
└── Uses PublicationCard (multiple)

PublicationDetails
├── Uses Card (for price highlight)
└── Uses HiIcons (interactive buttons)

Checkout
├── Uses CartItem display
└── Uses Card patterns

Dashboard
├── Uses multiple Card variations
├── Uses DataTable (existing)
└── Uses Form inputs

AdminPanel
├── Uses DataTable (existing)
├── Uses Card (stats)
└── Uses Form components
```

---

## 📋 Accessibility Features

- Semantic HTML (buttons, nav, section)
- Color not only means of indication
- Adequate contrast ratios
- Focus states on all interactive elements
- ARIA labels where needed
- Keyboard navigation support
- Touch targets ≥ 44px

---

## 🚀 Performance Optimizations

- Lazy loading of route components
- Image optimization (Unsplash CDN)
- CSS optimization (Tailwind)
- Component memoization potential
- Virtual scrolling for large lists (future)
- Code splitting by route

---

## 🎓 Customization Guide

### To change primary color from Indigo to Blue:
1. Search `indigo-` across components
2. Replace with `blue-`
3. Update in Tailwind config

### To modify card hover effect:
1. Edit Card.tsx
2. Change `hover:shadow-lg` to desired effect
3. Update transition timing if needed

### To add new badge color:
1. Add to badgeColor object in PublicationCard
2. Create Tailwind class combination
3. Add publication type with new color

### To reorder page sections:
1. Edit view component
2. Rearrange JSX sections
3. Update CSS grid/flex layout as needed

---

**Last Updated**: February 24, 2025  
**Status**: Complete and Production Ready ✅

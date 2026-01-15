# JasminCSS Example Templates

Ready-to-use templates demonstrating JasminCSS features and best practices.

## Templates

### 1. Landing Page (`/landing`)

A modern SaaS landing page featuring:
- Responsive navigation with mobile menu
- Hero section with gradient background
- Feature cards
- Pricing table with featured plan
- Testimonials section
- FAQ accordion
- Call-to-action section
- Footer with multiple columns

**Key components used:** Navbar, Cards, Buttons, Badges, Accordion, Offcanvas

### 2. Dashboard (`/dashboard`)

An admin dashboard layout featuring:
- Fixed sidebar navigation
- Header with search and user menu
- Stats cards with icons
- Data tables with actions
- Charts placeholder
- Activity feed
- Responsive mobile sidebar

**Key components used:** Sidebar, Dropdown, Tables, Cards, Badges, Avatars, Offcanvas

### 3. Blog (`/blog`)

A content-focused blog template featuring:
- Clean navigation
- Featured article hero
- Article cards grid
- Sidebar with newsletter, categories, popular posts
- Typography styles for article content
- Pagination
- Footer

**Key components used:** Cards, Badges, Avatars, Forms, Offcanvas

## Running the Examples

1. Make sure you've built the CSS:
   ```bash
   npm run build:css
   ```

2. Open any template in your browser:
   ```bash
   # Using a local server
   npx serve .

   # Or open directly
   open examples/landing/index.html
   ```

## Customization

Each template uses JasminCSS utilities and components. To customize:

1. **Colors**: Update CSS variables in your `jasmin.config.js`
2. **Components**: Modify component classes directly in HTML
3. **Layout**: Adjust grid and flex utilities

## Using in Your Project

Copy the template files and modify as needed:

```bash
# Copy landing page template
cp -r examples/landing my-project/

# Update CSS/JS paths
# Edit: href="../../dist/jasmin.css" -> href="path/to/jasmin.css"
```

## Template Structure

```
examples/
├── landing/
│   └── index.html       # SaaS landing page
├── dashboard/
│   └── index.html       # Admin dashboard
├── blog/
│   └── index.html       # Blog/content site
└── README.md
```

## Requirements

- JasminCSS CSS (`dist/jasmin.css`)
- JasminCSS JavaScript (`src/js/index.js`)
- Modern browser (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+)

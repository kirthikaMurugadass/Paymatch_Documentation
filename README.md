# PayMatch Documentation

A professional, modern documentation website for the PayMatch payment application built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional SaaS documentation design
- 🌓 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 📱 **Responsive**: Fully responsive design for all device sizes
- ✨ **Animations**: Smooth scroll animations and section reveals using Framer Motion
- 🎭 **Glassmorphism**: Modern glassmorphism effects on cards and components
- 📚 **Comprehensive Content**: Complete documentation covering all aspects of PayMatch
- 🧭 **Sidebar Navigation**: Sticky sidebar with active state indicators
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Framer Motion** for animations
- **next-themes** for theme management
- **lucide-react** for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Documentation Sections

- **Introduction** - Overview and getting started
- **About PayMatch** - Platform overview and mission
- **Key Features** - Comprehensive feature list
- **User Roles** - Admin, Merchant, and Customer roles
- **Authentication** - Authentication flow and security
- **Dashboard** - Dashboard overview and components
- **Transactions** - Transaction management and processing
- **Settlement** - Settlement process and workflows
- **Security** - Security features and compliance
- **Architecture** - System architecture and API overview
- **Screens & Modules** - UI modules and screen descriptions
- **FAQs** - Frequently asked questions
- **Conclusion** - Summary and next steps

## Project Structure

```
paymatch-document/
├── app/                    # Next.js app router pages
│   ├── about/
│   ├── architecture/
│   ├── authentication/
│   ├── dashboard/
│   ├── features/
│   ├── user-roles/
│   ├── transactions/
│   ├── settlement/
│   ├── security/
│   ├── screens/
│   ├── faqs/
│   ├── conclusion/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Site header
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── section.tsx         # Animated section wrapper
│   ├── glass-card.tsx      # Glassmorphism card component
│   └── theme-toggle.tsx    # Theme switcher
└── lib/                    # Utility functions
    └── utils.ts            # Helper functions
```

## Customization

### Colors

Edit `app/globals.css` to customize the color scheme and theme variables.

### Content

All documentation content is in the respective page files under `app/`. Update these files to modify the documentation content.

### Navigation

Update the `navigation` array in `components/sidebar.tsx` to modify the sidebar navigation items.

## License

This project is private and proprietary.

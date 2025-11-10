# SFx Dashboard

A payment analytics dashboard built with Next.js, reproducing the Figma design with pixel-perfect accuracy and multi-language support.

## 🚀 Live Demo

[View Live Demo](https://sfx-xi.vercel.app/)

## 📋 Features

- **Interactive Charts** - Bar charts and donut charts for payment analytics using Recharts
- **Multi-language Support** - English, French, Spanish, and Turkish with automatic translation
- **Collapsible Sidebar** - Expandable sections for Payments and Commerce
- **Tab Animations** - Smooth transitions between Stats and Messages in the right panel

## 🛠️ Technologies Used

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts 3.4.1
- **Animations**: Framer Motion 12.23.24
- **Internationalization**: next-intl 4.5.0
- **Package Manager**: Bun
- **Fonts**: Montserrat

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sfx
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
bun run build
bun start
```

## 🌍 Language Support

The app supports 4 languages:
- English (en)
- French (fr)
- Spanish (es)
- Turkish (tr)

Language selection is persisted via cookies and all content is automatically translated.

## 📁 Project Structure

```
app/
├── components/
│   ├── Sidebar.tsx        # Navigation with collapsible sections
│   ├── Topbar.tsx         # Search, language switcher, user menu
│   ├── BarChart.tsx       # Monthly earnings chart
│   ├── Donut.tsx          # Success rate visualization
│   ├── StatCards.tsx      # Success rate & payment issues cards
│   └── RightPanel.tsx     # Stats/Messages tabbed panel
├── hooks/
│   └── useChangeLocale.ts # Language switching hook
├── layout.tsx             # Root layout with i18n provider
├── page.tsx               # Main dashboard layout
└── globals.css            # Global styles and Tailwind config

i18n/
├── messages/              # Translation files for all languages
│   ├── en.json
│   ├── fr.json
│   ├── es.json
│   └── tr.json
└── request.ts             # next-intl configuration

public/
└── icons/                 # SVG icons for navigation
```

## 🎨 Design Implementation

The dashboard faithfully reproduces the [Figma design](https://www.figma.com/design/lny02vDjo41foboGAyEOv9/SFx-Frontend-Task?node-id=0-1&p=f&t=kuR5zDBgUZ8hZBs3-0) with:

- Custom color palette (--color-ash: #828282, --color-primary: violet)
- Exact spacing and typography from design specs
- Dashed gridlines on bar charts
- Rounded donut charts with clockwise progression
- Payment issue badges with color coding
- Smooth animations and transitions

## 📝 Assumptions Made


1. **Chart Data**: Sample data used for demonstration; real API integration would replace static data
2. **User Authentication**: User menu items are presentational; authentication not implemented
3. **Search Functionality**: Search input is UI-only; actual search logic not implemented
4. **Live Toggle**: Toggle state is visual; backend integration needed for real-time data
5. **Responsive Design**: Optimized for desktop; mobile breakpoints can be added as needed
6. **Browser Support**: Modern browsers with ES6+ support assumed

## 📄 License

This project was created as a frontend task submission.

# Personal Website / Online CV

A modern, professional, and visually attractive personal website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- Modern, clean, and professional design
- Dark mode and Light mode toggle
- Smooth animations with Framer Motion
- Fully responsive for desktop, tablet, and mobile
- Single-page vertical scroll layout
- Sections include:
  - Hero section with profile
  - About Me
  - Technical Skills (categorized)
  - Experience & Education Timeline
  - Featured Projects
  - Certifications
  - Contact Form
  - Footer with social links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Customization

### Update Your Personal Information

Edit the file `src/data/resume.ts` to update:
- Personal information (name, title, contact details)
- About section
- Skills
- Work experience and education
- Projects
- Certifications

### Change Colors

The color scheme uses a blue-to-purple gradient throughout. To change colors, search for gradient classes in the components:
- `from-blue-500 to-purple-600`
- `from-blue-600 to-purple-600`

Replace with your preferred Tailwind color classes.

### Add Your Profile Photo

Replace the initials-based avatar in `src/components/Hero.tsx` with an image:

```tsx
<img
  src="/path-to-your-photo.jpg"
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

### Add Your CV PDF

Place your CV PDF file in the `public` folder as `cv.pdf`. The download button in the Hero section will automatically link to it.

## Build for Production

Build the project:
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Deployment

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/                # Data files
│   │   └── resume.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/                  # Static assets
├── index.html
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Accessibility

The website follows accessibility best practices:
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Responsive text sizing

## License

MIT License - feel free to use this template for your own personal website.

## Credits

Built with modern web technologies and design principles.

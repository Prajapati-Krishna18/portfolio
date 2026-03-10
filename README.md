# 🚀 Modern React Portfolio Website

A stunning, fully-responsive portfolio website built with React 18, Vite, and Framer Motion. Features dark/light mode, smooth animations, and a modern glassmorphism design.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green.svg)

> **[Live Demo](https://your-portfolio.vercel.app)** | **[Report Bug](https://github.com/username/portfolio/issues)** | **[Request Feature](https://github.com/username/portfolio/issues)**

---

## 📑 Table of Contents

- [About](#about)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Customization Guide](#-customization-guide)
- [Build & Deployment](#️-build--deployment)
- [Troubleshooting](#-troubleshooting)
- [Browser Support](#-browser-support)
- [Performance](#-performance)
- [Available Scripts](#-available-scripts)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Author](#-author)

---

## About

This is a **modern, production-ready portfolio template** designed for developers, designers, and creative professionals who want to showcase their work with style.

**Who is this for?**
- Developers looking for a professional online presence
- Designers who want a beautiful portfolio without starting from scratch
- Students and job seekers wanting to stand out
- Freelancers needing a landing page for clients

**What makes it special?**
- 🎨 **Modern Design** - Glassmorphism, gradients, and smooth animations
- ⚡ **Blazing Fast** - Built with Vite for instant hot reload
- 🌓 **Dark/Light Mode** - Toggle with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, and performance tuned
- 🛠️ **Easy to Customize** - Well-organized code with clear documentation

---

## ✨ Features

### Design & UI
| Feature | Description |
|---------|-------------|
| 🎨 Glassmorphism | Modern frosted glass effect on cards and forms |
| 🌓 Dark/Light Mode | Theme toggle with localStorage persistence |
| 📱 Fully Responsive | Mobile-first design (320px to 4K) |
| ✨ Smooth Scrolling | CSS smooth scroll with navbar integration |
| 🎭 Framer Motion | Fade, slide, and stagger animations |
| 💫 Gradient Effects | Animated text gradients and background orbs |
| 🎯 Active Section | Navbar highlights current section |

### Sections
| Section | Features |
|---------|----------|
| 🏠 **Hero** | Animated avatar, floating elements, scroll indicator |
| 👤 **About** | Bio, skills grid, services cards, stats |
| 💼 **Projects** | Category filtering, featured badges, links |
| 📄 **Resume** | Timeline layout for experience & education |
| 🏆 **Certificates** | Card grid with credential links |
| 📧 **Contact** | Glass form, contact info cards, availability status |

### Technical
- ⚡ Vite for fast development and optimized builds
- 🧩 Component-based architecture
- 🎨 400+ line custom design system in CSS
- 📦 Tree-shaking and code splitting
- 🔍 SEO-friendly with meta tags
- ♿ Accessibility considerations (focus states, ARIA)

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Build Tool** | Vite 5.x | Fast development & optimized builds |
| **Framework** | React 18.x | Component-based UI library |
| **Styling** | Tailwind CSS 3.x | Utility-first CSS framework |
| **Animations** | Framer Motion 11.x | Smooth, declarative animations |
| **Icons** | React Icons 5.x | Comprehensive icon library |
| **Routing** | React Router 6.x | Client-side navigation |
| **Email** | EmailJS 4.x | Contact form (no backend needed) |

**Why these technologies?**
- **Vite** - 10-100x faster than CRA, native ES modules
- **Tailwind** - Rapid styling, consistent design system
- **Framer Motion** - Production-ready animations with minimal code
- **React Icons** - Access to thousands of icons from one package

---

## 📦 Installation

### Prerequisites

Ensure you have:
- **Node.js 18+** ([Download](https://nodejs.org))
- **npm 8+** (comes with Node.js)
- **Git** (optional, for cloning)

Verify installation:
```bash
node --version  # Should be 18.x or higher
npm --version   # Should be 8.x or higher
```

### Step 1: Get the Code

**Option A: Clone with Git**
```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

**Option B: Download ZIP**
1. Click "Code" → "Download ZIP" on GitHub
2. Extract the folder
3. Open terminal in that folder

### Step 2: Install Dependencies

```bash
npm install
```

This installs React, Tailwind CSS, Framer Motion, and other dependencies.

### Step 3: Start Development Server

```bash
npm run dev
```

Open **http://localhost:5174** in your browser.

🎉 **Success!** You should see the portfolio homepage.

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
# EmailJS Configuration (for Contact form)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Site Configuration
VITE_SITE_URL=https://yourportfolio.com
VITE_SITE_NAME=Your Name Portfolio
```

### Setting Up EmailJS

1. **Create Account** at [emailjs.com](https://www.emailjs.com)
2. **Add Email Service** → Select your email provider → Copy **Service ID**
3. **Create Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}` → Copy **Template ID**
4. **Get Public Key** from Account → General
5. **Add to .env** file

> ⚠️ **Important**: Restart dev server after changing `.env` file!

---

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── images/
│   │   ├── profile.jpg       # Your profile photo
│   │   ├── projects/         # Project screenshots
│   │   └── certificates/     # Certificate images
│   └── resume.pdf            # Downloadable resume
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    # Navigation with scroll spy
│   │   │   └── Footer.jsx    # Footer with social links
│   │   │
│   │   ├── sections/         # Main page sections
│   │   │   ├── Hero.jsx      # Landing with avatar
│   │   │   ├── About.jsx     # Bio + skills + services
│   │   │   ├── Projects.jsx  # Filterable portfolio
│   │   │   ├── Resume.jsx    # Experience timeline
│   │   │   ├── Certificates.jsx
│   │   │   └── Contact.jsx   # Glass morphism form
│   │   │
│   │   └── ui/               # Reusable components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       ├── Textarea.jsx
│   │       └── SectionHeading.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode provider
│   │
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Design system (400+ lines)
│
├── index.html                # HTML template + SEO
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json              # Dependencies
```

---

## 🎨 Customization Guide

### Quick Checklist

Before deploying, customize these:
- [ ] Personal information (name, title, bio)
- [ ] Profile photo
- [ ] Social media links
- [ ] Projects showcase
- [ ] Work experience
- [ ] Education
- [ ] Certificates
- [ ] Contact information
- [ ] Resume PDF
- [ ] Color scheme (optional)

---

### 1. Personal Information

**File:** `src/components/sections/Hero.jsx`

Find and replace:
```jsx
// Replace with your info
<span className="text-gradient">Your Name</span>  // Line ~40
<p>Full Stack Developer & UI/UX Enthusiast</p>    // Line ~50
```

**File:** `src/components/sections/About.jsx`

Update the bio text and skills array:
```jsx
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 
  'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL'
];
```

---

### 2. Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. Recommended: 500x500px square, under 500KB
3. Update path in `Hero.jsx` if using different filename

---

### 3. Social Links

**File:** `src/components/layout/Footer.jsx`

```jsx
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
];
```

---

### 4. Projects

**File:** `src/components/sections/Projects.jsx`

Update the projects array:
```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Brief description of what it does.',
    category: 'Web App',  // For filtering
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/...',
    live: 'https://project.com',
    featured: true,  // Shows larger
  },
  // Add more projects...
];
```

**Project images:**
1. Take screenshots (1200x800px recommended)
2. Save to `public/images/projects/`
3. Reference in the `image` property

---

### 5. Experience & Education

**File:** `src/components/sections/Resume.jsx`

Update the `experience` and `education` arrays:
```jsx
const experience = [
  {
    title: 'Senior Developer',
    company: 'Company Name',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: [
      'Led development of microservices architecture',
      'Reduced API response time by 40%',
    ],
  },
];
```

---

### 6. Certificates

**File:** `src/components/sections/Certificates.jsx`

```jsx
const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'ABC123XYZ',
    verifyUrl: 'https://aws.amazon.com/verify/...',
    icon: '☁️',
  },
];
```

---

### 7. Contact Information

**File:** `src/components/sections/Contact.jsx`

```jsx
const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'your.email@example.com', href: 'mailto:...' },
  { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', href: null },
  { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:...' },
];
```

---

### 8. Color Scheme

**File:** `src/index.css`

Modify the CSS variables under `@theme`:
```css
@theme {
  --color-primary-500: #6366f1;  /* Main brand color (Indigo) */
  --color-accent-500: #ec4899;   /* Accent color (Pink) */
  /* ... more colors */
}
```

**Popular combinations:**
- **Professional**: Blue (#3B82F6) + Slate
- **Creative**: Purple (#8B5CF6) + Pink (#EC4899)
- **Tech**: Teal (#14B8A6) + Cyan (#06B6D4)

---

### 9. Hiding Sections

To hide a section (e.g., Certificates):

**File:** `src/App.jsx`
```jsx
// Comment out or remove:
// <Certificates />
```

**File:** `src/components/layout/Navbar.jsx`
```jsx
// Remove from navItems array
```

---

## 🏗️ Build & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder.

**Preview locally:**
```bash
npm run preview
```

---

### Deploying to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repo
4. Add environment variables in project settings
5. Click "Deploy"

**URL:** `https://your-project.vercel.app`

---

### Deploying to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add environment variables
6. Deploy!

---

### Deploying to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Update `vite.config.js`:
```js
base: '/repo-name/',
```
4. Run: `npm run deploy`

---

## 🐛 Troubleshooting

### Installation Issues

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Port already in use:**
```bash
npm run dev -- --port 3000
```

---

### Environment Variables Not Working

1. Ensure variables start with `VITE_`
2. Restart dev server after changes
3. Check for typos in variable names

```bash
# Debug: Print value in component
console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
```

---

### Styling Not Applying

1. Check Tailwind is configured
2. Verify index.css has `@import "tailwindcss";`
3. Restart dev server

---

### Dark Mode Not Working

1. Check `ThemeProvider` wraps app in `App.jsx`
2. Verify localStorage is accessible
3. Check for `dark:` classes in Tailwind

---

### Images Not Loading

1. Check files are in `public/images/`
2. Use absolute paths: `/images/profile.jpg`
3. Verify file extensions match (case-sensitive)

---

### Build Fails

```bash
# Clear everything and rebuild
rm -rf dist node_modules
npm install
npm run build
```

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Last 2 versions |
| Firefox | ✅ Last 2 versions |
| Safari | ✅ Last 2 versions |
| Edge | ✅ Last 2 versions |
| Mobile Safari | ✅ iOS 12+ |
| Chrome Mobile | ✅ Android 8+ |

**Not supported:** Internet Explorer (any version)

---

## ⚡ Performance

**Target Lighthouse Scores:**
- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

**Optimizations included:**
- Code splitting
- Lazy loading images
- Minified CSS/JS
- Tree-shaking
- Gzip compression (on Vercel/Netlify)

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint (if configured)
```

---

## ❓ FAQ

**Q: Can I use this commercially?**  
A: Yes! MIT License allows commercial use.

**Q: How do I add more sections?**  
A: Create component in `sections/`, import in `App.jsx`, add to navbar.

**Q: Can I use TypeScript?**  
A: Yes! Rename `.jsx` to `.tsx` and add types.

**Q: Contact form not working?**  
A: Check EmailJS credentials, ensure `.env` variables have `VITE_` prefix.

**Q: How do I change fonts?**  
A: Update the Google Fonts link in `index.html` and font-family in `index.css`.

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [EmailJS](https://www.emailjs.com) - Email service
- [Google Fonts](https://fonts.google.com) - Inter font

---

## 👨‍💻 Author

**Your Name**

- 🌐 Website: [https://portfolio-liard-beta-93.vercel.app/](https://yourportfolio.com)
- 💼 LinkedIn: [https://www.linkedin.com/in/krishna-prajapati-1651a93aa/](https://linkedin.com/in/yourusername)
- 🐙 GitHub: [https://github.com/Prajapati-Krishna18](https://github.com/yourusername)
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)
- 📧 Email: your.email@example.com

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ and ☕**

</div>

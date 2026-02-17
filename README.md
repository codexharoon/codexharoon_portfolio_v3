# Code x Haroon — Professional Portfolio

![Code x Haroon Portfolio Banner](public/og-image.jpg)

A modern, high-performance portfolio website built for **Muhammad Haroon**, an iOS & macOS App Developer. This project showcases apps, skills, and services with a premium, native-feeling UI/UX design.

## 🚀 Features

- **Modern & Responsive Design**: Built with a mobile-first approach using Tailwind CSS.
- **Dark Mode Support**: Seamless theme switching (Light/Dark/System) for better accessibility.
- **Premium UI Components**: Utilizes HeroUI and Framer Motion for smooth animations and interactions.
- **SEO Optimized**: Includes meta tags, Open Graph support, and sitemap generation.
- **Fast Performance**: Optimized with Next.js App Router and Vercel Analytics.
- **PWA Ready**: Designed to be installable and work offline (future enhancement).

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [HeroUI](https://www.heroui.com/) (formerly NextUI)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Iconify](https://iconify.design/) & [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Nodemailer](https://nodemailer.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codexharoon/portfolio-v3.git
   cd portfolio-v3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the necessary variables (refer to `.env.local.example`).

   ```env
   # Example
   NEXT_PUBLIC_SITE_URL=https://codexharoon.com
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, etc.
│   ├── sections/         # Home page sections (Hero, About, Work, etc.)
│   ├── ui/               # Generic UI elements (Buttons, Cards, etc.)
├── data/                 # Static data and constants
├── public/               # Static assets (images, icons)
├── styles/               # Global styles and Tailwind configuration
└── types/                # TypeScript type definitions
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/codexharoon/portfolio-v3/issues).

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

Designed & Developed by **[Muhammad Haroon](https://codexharoon.com)**

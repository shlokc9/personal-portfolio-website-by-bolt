# Shlok Chaudhari - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and a professional design showcasing software engineering experience and achievements.

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Elements**: Hover effects, cursor glow, and micro-interactions
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git (for version control)

## 🎯 Building This Project on Bolt.new

### Step 1: Initial Setup

1. **Visit Bolt.new**
   - Go to [bolt.new](https://bolt.new)
   - Sign in with your preferred account

2. **Create New Project**
   - Click "New Project"
   - Choose "React + TypeScript + Tailwind" template
   - Name your project (e.g., "portfolio-website")

### Step 2: Project Structure Setup

3. **Install Dependencies**
   ```bash
   npm install framer-motion lucide-react
   ```

4. **Create Component Structure**
   ```
   src/
   ├── components/
   │   ├── Header.tsx
   │   ├── Hero.tsx
   │   ├── About.tsx
   │   ├── Skills.tsx
   │   ├── WorkExperience.tsx
   │   ├── OpenSource.tsx
   │   ├── Projects.tsx
   │   ├── Achievements.tsx
   │   ├── Contact.tsx
   │   ├── Footer.tsx
   │   ├── CursorGlow.tsx
   │   └── ThemeProvider.tsx
   ├── utils/
   │   └── smoothScroll.ts
   ├── App.tsx
   ├── main.tsx
   └── index.css
   ```

### Step 3: Core Development

5. **Theme System**
   - Set up dark/light theme with CSS variables
   - Create ThemeProvider component for context management
   - Configure Tailwind for theme switching

6. **Component Development**
   - Build each section as a separate component
   - Implement responsive design with Tailwind classes
   - Add Framer Motion animations for smooth interactions

7. **Content Integration**
   - Replace placeholder content with your personal information
   - Add your professional experience, skills, and projects
   - Include your profile image and social links

8. **Styling & Animations**
   - Implement gradient backgrounds and hover effects
   - Add cursor glow effect for desktop users
   - Create smooth scroll navigation between sections

### Step 4: Advanced Features

9. **Interactive Elements**
   - Smooth scrolling navigation
   - Active section highlighting
   - Mobile-responsive hamburger menu
   - Technology tag hover effects

10. **Performance Optimization**
    - Optimize images and assets
    - Implement lazy loading for sections
    - Minimize bundle size with proper imports

### Step 5: Testing & Refinement

11. **Cross-Browser Testing**
    - Test on Chrome, Firefox, Safari, Edge
    - Verify mobile responsiveness
    - Check accessibility features

12. **Content Review**
    - Proofread all text content
    - Verify all links work correctly
    - Test contact form functionality

## 🚀 Deploying to Netlify

### Method 1: Direct Deployment (Recommended)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account

3. **Deploy via Drag & Drop**
   - In Netlify dashboard, scroll to "Deploy manually"
   - Drag and drop your `dist` folder to the deployment area
   - Wait for deployment to complete
   - Your site will be live with a random URL

4. **Custom Domain (Optional)**
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Configure DNS settings as instructed

### Method 2: Git Integration (For Continuous Deployment)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - In Netlify dashboard, click "New site from Git"
   - Choose GitHub and authorize access
   - Select your portfolio repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Future pushes to main branch will auto-deploy

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## 🔧 Configuration Files

### Environment Variables (Optional)

Create `.env` file for any environment-specific configurations:
```env
VITE_SITE_URL=https://yoursite.netlify.app
VITE_CONTACT_EMAIL=your.email@example.com
```

### Netlify Configuration

Create `netlify.toml` in project root:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 📱 Customization Guide

### Personal Information

1. **Update Hero Section** (`src/components/Hero.tsx`)
   - Change name, title, and description
   - Update social media links
   - Replace profile image

2. **Modify About Section** (`src/components/About.tsx`)
   - Write your personal story
   - Update statistics and interests
   - Customize philosophy section

3. **Add Your Experience** (`src/components/WorkExperience.tsx`)
   - List your work history
   - Include education details
   - Add certifications

4. **Showcase Projects** (`src/components/Projects.tsx`)
   - Add your best projects
   - Include GitHub links
   - Describe technologies used

5. **Update Contact Info** (`src/components/Contact.tsx`)
   - Add your contact details
   - Update social media links
   - Customize contact methods

### Styling Customization

1. **Colors** (`src/index.css`)
   ```css
   :root {
     --primary: 213 94% 50%;    /* Blue */
     --secondary: 170 100% 35%; /* Teal */
     /* Modify these values for different colors */
   }
   ```

2. **Fonts** (`index.html`)
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

3. **Animations**
   - Modify Framer Motion variants in components
   - Adjust transition durations and easing
   - Customize hover effects

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run lint`
   - Verify all imports are correct
   - Ensure all dependencies are installed

2. **Deployment Issues**
   - Verify build command produces `dist` folder
   - Check Netlify build logs for errors
   - Ensure all environment variables are set

3. **Performance Issues**
   - Optimize images (use WebP format)
   - Minimize bundle size
   - Enable gzip compression

### Performance Tips

- Use `React.memo()` for expensive components
- Implement code splitting with `React.lazy()`
- Optimize images with proper sizing
- Use CDN for external assets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio or have questions about the implementation:

- **Email**: shlokmc9.work@gmail.com
- **LinkedIn**: [linkedin.com/in/shlokc9](https://www.linkedin.com/in/shlokc9)
- **GitHub**: [github.com/shlokc9](https://github.com/shlokc9)

## 🙏 Acknowledgments

- **Built on**: [StackBlitz](https://stackblitz.com) - Online development environment
- **Powered by**: [Bolt.new](https://bolt.new) - AI-powered development tool
- **Hosted by**: [Netlify](https://netlify.com) - Web hosting platform
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful icon library
- **Animations**: [Framer Motion](https://framer.com/motion) - Animation library

---

**Built with ❤️ using Bolt.new and deployed on Netlify**

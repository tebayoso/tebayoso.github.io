---
layout: post
title: "Portfolio Website - Jekyll + Animations"
date: 2025-01-31
categories: [project, web, jekyll, animation]
project_type: website
status: completed
---

## Overview

This portfolio website you're viewing right now! Built with **Jekyll** and featuring pure CSS/JS animations without external image assets.

## Design Philosophy

### Zero External Images
Every visual element is created with:
- CSS gradients and animations
- SVG graphics
- Canvas-based particle systems
- Typography-driven design

### Performance First
- No heavy animation libraries
- Pure CSS keyframes
- Intersection Observer for scroll animations
- Reduced motion support for accessibility

## Technical Highlights

### 🎨 Particle System
Custom Canvas-based particle system:
```javascript
// Mouse-responsive particles
// Connection lines between nearby particles
// 50 particles @ 60fps
// Respects prefers-reduced-motion
```

### ⌨️ Typing Animation
Dynamic typing effect in the hero section cycling through roles:
- Software Architect
- Platform Engineer  
- Blockchain Developer
- Startup Founder
- Open Source Contributor

### 📜 Scroll-Triggered Timeline
Interactive career timeline with:
- Scroll progress indicator
- Color-coded milestones
- Achievement badges
- Mobile-responsive layout

### 🎴 3D Flip Cards
Facts section features CSS 3D transforms:
```css
.fact-card:hover .fact-card-inner {
  transform: rotateY(180deg);
}
```

## Technology Stack

| Category | Technologies |
|----------|-------------|
| **Static Site** | Jekyll |
| **Styling** | SASS/SCSS |
| **Animations** | CSS Keyframes, Canvas API |
| **Hosting** | GitHub Pages |
| **Plugins** | jekyll-seo-tag, jekyll-sitemap |

## File Structure

```
_sass/
├── _variables.scss        # Colors, fonts, breakpoints
├── _base.scss             # Reset & base styles
├── _utilities.scss        # Helper classes
├── components/            # Reusable components
│   ├── _navigation.scss
│   ├── _footer.scss
│   └── ...
└── sections/              # Page sections
    ├── _hero.scss
    ├── _timeline.scss
    └── ...

_includes/
├── navigation.html
├── hero.html
├── timeline.html
└── ...

_layouts/
└── default.html

assets/
├── css/main.scss
└── js/main.js
```

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~114KB (HTML+CSS+JS)

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` media query support
- High contrast mode compatible

## Deployment

Deployed via GitHub Pages with Jekyll build:
```bash
git push origin main
# GitHub Actions builds and deploys automatically
```

## Future Enhancements

- [ ] Dark/light mode toggle
- [ ] Multi-language support
- [ ] Blog integration (already set up!)
- [ ] Project case study pages
- [ ] Interactive code playground

## Source Code

🔗 [View on GitHub](https://github.com/tebayoso/tebayoso.github.io)
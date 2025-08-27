# Portfolio Website - Webdesigner & ML Engineer

A modern, responsive portfolio website inspired by the [Bazil website](https://en.bazil.fr/) with a clean design and advanced features.

## Features

### 🎨 Design Features
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Gradient Text**: Beautiful gradient text effects for headings

### 🧭 Navigation
- **Fixed Navigation Bar**: Always accessible navigation with blur effect
- **Logo**: Customizable logo in the top left
- **Navigation Links**: "Design" and "ML" sections
- **Theme Toggle**: Sun/moon icons for dark/light mode switching
- **Email CTA**: Direct email contact button
- **Mobile Menu**: Hamburger menu for mobile devices

### 🏠 Homepage
- **Hero Section**: Large hero area with greeting and main title
- **Dual CTA Buttons**: "Webdesigner" and "ML Engineer" call-to-action buttons
- **Profile Placeholder**: Circular profile image area with gradient background
- **Animated Wave**: Interactive wave emoji animation

### 📱 Responsive Features
- **Mobile-First Design**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop Optimization**: Enhanced layouts for larger screens
- **Touch-Friendly**: Optimized touch targets for mobile

### ⚡ Performance
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Scrolling**: CSS smooth scrolling behavior
- **Intersection Observer**: Efficient scroll-based animations
- **Resource Preloading**: Critical resources preloaded for better performance

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with dark/light mode
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Download Files**: Save all files in the same directory
2. **Open in Browser**: Double-click `index.html` or open it in your web browser
3. **Customize**: Edit the content, colors, and styling to match your preferences

## Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #1a1a1a;
    --accent-primary: #007bff;
    --accent-secondary: #6f42c1;
    /* ... more variables */
}
```

### Content
- **Logo**: Change the text in `.nav-logo h2` or replace with an image
- **Name**: Update the greeting text in the hero section
- **Location**: Modify the location text in `.hero-subtitle`
- **Email**: Update the email address in navigation and contact sections
- **Work Items**: Customize the design and ML project sections

### Images
- **Profile Image**: Replace the placeholder icon with your actual profile image
- **Work Images**: Add your project images to the work items

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties and Grid/Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Features in Detail

### Dark/Light Mode
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Automatic icon switching (sun/moon)
- Keyboard accessible (Enter/Space to toggle)

### Mobile Navigation
- Hamburger menu with smooth animations
- Touch-friendly navigation
- Escape key to close menu
- Auto-close when clicking links

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Parallax scrolling effect
- Smooth page transitions

### Accessibility
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- ARIA-friendly design

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspiration: [Bazil website](https://en.bazil.fr/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

**Ready to showcase your work?** Customize this portfolio and start sharing your Webdesigner and ML Engineer skills with the world! 
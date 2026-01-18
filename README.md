# Kahani Buffet - Media & Entertainment Website

A modern, responsive website for Kahani Buffet media and entertainment company, inspired by professional media company websites.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Banner Carousel**: Auto-playing image carousel with manual controls
- **Project Showcase**: Filterable projects section (Movies/Webseries)
- **News Section**: Latest updates and announcements
- **Contact Information**: Easy-to-find contact details
- **Smooth Animations**: Modern fade-in effects and transitions
- **Mobile Navigation**: Hamburger menu for mobile devices

## Project Structure

```
kahani buffet/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. That's it! No build process required - it's a static website

## Customization

### Update Content

- **Logo/Company Name**: Edit the `<h1>` tag in the navbar section
- **Projects**: Add/modify project cards in the "Upcoming Section"
- **News**: Update news articles in the "News Section"
- **Contact Info**: Modify contact details in the "Contact Section"

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Main dark color */
    --secondary-color: #f5f5f5;   /* Light background */
    --accent-color: #d4af37;       /* Gold accent color */
    --text-color: #333;            /* Main text color */
}
```

### Add Images

Replace the placeholder divs with actual images:
- Banner slides: Add background images to `.banner-slide`
- Project images: Replace `.placeholder-image` divs with `<img>` tags
- News images: Replace `.placeholder-image` divs with `<img>` tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add actual project images
- Integrate a CMS for easy content management
- Add a contact form
- Implement a blog/news system
- Add social media links
- SEO optimization

## License

This project is created for Kahani Buffet.

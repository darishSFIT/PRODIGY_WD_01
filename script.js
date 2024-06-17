// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');
    const pages = document.querySelectorAll('.page');
    const highlightBox = document.getElementById('highlight-box');

    // Smooth scroll to section when clicking on navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
            updateHighlightBox(this); // Update highlight box position
        });
    });

    // Function to scroll to a specific section
    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }

    // Update highlight box position based on active link
    function updateHighlightBox(link) {
        const linkRect = link.getBoundingClientRect();
        highlightBox.style.width = `${linkRect.width}px`;
        highlightBox.style.transform = `translateX(${linkRect.left}px)`;
    }

    // Fade in sections when they come into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const currentLinkId = `#${entry.target.id}`;
                const currentLink = Array.from(navLinks).find(link => link.getAttribute('href') === currentLinkId);
                updateHighlightBox(currentLink);
            }
        });
    }, {
        threshold: 0.5 // Trigger when section is 50% visible
    });

    pages.forEach(page => {
        observer.observe(page);
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('#navbar ul li a');
    const highlightBox = document.getElementById('highlight-box');

    function updateHighlightBox(element) {
        const rect = element.getBoundingClientRect();
        const parentRect = element.parentNode.getBoundingClientRect();
        highlightBox.style.width = `${rect.width}px`;
        highlightBox.style.left = `${rect.left - parentRect.left}px`;
    }

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            updateHighlightBox(this);
        });
        item.addEventListener('mouseover', function() {
            updateHighlightBox(this);
        });
    });

    // Highlight the first item by default on page load
    if (navItems.length > 0) {
        updateHighlightBox(navItems[0]);
    }
});

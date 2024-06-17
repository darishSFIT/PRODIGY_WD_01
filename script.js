// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function addAnimationIfVisible() {
    const elementsToAnimate = document.querySelectorAll('.line, .about, .contacts');
    elementsToAnimate.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Check on initial page load
document.addEventListener('DOMContentLoaded', addAnimationIfVisible);

// Check again on scroll
window.addEventListener('scroll', addAnimationIfVisible);




// document.addEventListener("DOMContentLoaded", function() {
//     const input1 = document.querySelector('.input1');
//     const input3 = document.querySelector('.input3');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate');
//             } else {
//                 entry.target.classList.remove('animate');
//             }
//         });
//     }, {
//         threshold: 0.5 // Trigger when section is 50% visible
//     });

//     observer.observe(document.getElementById('contact')); // Observe the #contact section
// });


document.addEventListener("DOMContentLoaded", function() {
    // GSAP timeline for animations
    let tl = gsap.timeline();

    // Animation for #nav elements
    tl.from("#nav h1, #nav ul li, #nav h2", {
        y: -100,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // Animation for #left h1
    tl.from("#left h1", {
        x: -100,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    });

    // Animation for #right img
    tl.from("#right img", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });

    // GSAP ScrollTrigger for animating .box elements in .page2
    gsap.from(".page2 .box", {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".page2",
            start: "top center", // Animation starts when top of .page2 hits center of viewport
            end: "bottom center", // Animation ends when bottom of .page2 hits center of viewport
            scrub: true // Smooth animation
        }
    });

    // Intersection Observer for .input1 and .input3 animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5 // Trigger when section is 50% visible
    });

    observer.observe(document.querySelector('.input1'));
    observer.observe(document.querySelector('.input3'));
});

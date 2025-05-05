// Store individual slide indexes for each slideshow
const slideIndices = [];

// Initialize all slideshows
document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    slideIndices[index] = 1; // Start each at slide 1

    const slides = container.querySelectorAll('.slides');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');

    function showSlides(n) {
        if (n > slides.length) slideIndices[index] = 1;
        if (n < 1) slideIndices[index] = slides.length;

        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndices[index] - 1) ? 'block' : 'none';
        });
    }

    // Initial display
    showSlides(slideIndices[index]);

    // Add event listeners for buttons
    prev.addEventListener('click', () => {
        showSlides(--slideIndices[index]);
    });

    next.addEventListener('click', () => {
        showSlides(++slideIndices[index]);
    });
});
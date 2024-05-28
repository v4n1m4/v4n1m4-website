// about-section.js

document.addEventListener('DOMContentLoaded', function () {
    const aboutWrapper = document.querySelector('.about-wrapper');
    const prevAboutBtn = document.getElementById('prev-about');
    const nextAboutBtn = document.getElementById('next-about');
    let currentAboutIndex = 0;
    const aboutSlides = document.querySelectorAll('.about-slide');
    const aboutSlidesPerPage = 1; // Display one slide at a time

    function displayAboutSlides(startIndex) {
        aboutWrapper.style.transition = 'transform 2s ease';
        aboutWrapper.style.transform = `translateX(-${startIndex * 100}%)`;
        prevAboutBtn.disabled = startIndex === 0;
        nextAboutBtn.disabled = startIndex === aboutSlides.length - aboutSlidesPerPage;
    }

    prevAboutBtn.addEventListener('click', () => {
        currentAboutIndex = Math.max(currentAboutIndex - 1, 0);
        displayAboutSlides(currentAboutIndex);
    });

    nextAboutBtn.addEventListener('click', () => {
        currentAboutIndex = Math.min(currentAboutIndex + 1, aboutSlides.length - aboutSlidesPerPage);
        displayAboutSlides(currentAboutIndex);
    });

    displayAboutSlides(currentAboutIndex);

    // Dynamic content for about section
    const aboutContent = document.querySelector('.about-content');
    const aboutData = {
        history: "V4N1M4 was formed in...",
        'early-achievements': "In the early years, V4N1M4 achieved...",
        'major-milestones': "Major milestones include...",
        'recent-works': "Recent works by V4N1M4 include...",
        'future-goals': "Future goals for V4N1M4 include...",
        'vision-mission': "The vision and mission of V4N1M4 are..."
    };

    aboutSlides.forEach(slide => {
        slide.addEventListener('click', function () {
            const contentKey = this.getAttribute('data-content');
            aboutContent.innerHTML = `<p>${aboutData[contentKey]}</p>`;
        });
    });
});

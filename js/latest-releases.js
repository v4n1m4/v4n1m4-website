// latest-releases.js

document.addEventListener("DOMContentLoaded", () => {
    const albums = document.querySelectorAll(".album");
    const modals = document.querySelectorAll(".modal");
    const closes = document.querySelectorAll(".close");

    albums.forEach(album => {
        album.addEventListener("click", () => {
            const modalId = album.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    closes.forEach(close => {
        close.addEventListener("click", () => {
            const modal = close.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    window.addEventListener("click", event => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

    // Carousel functionality
    const carousel = document.querySelector(".album-wrapper");
    const prevBtn = document.querySelector(".carousel-btn.left");
    const nextBtn = document.querySelector(".carousel-btn.right");
    let currentIndex = 0;
    const itemsPerPage = 5;

    const updateCarousel = () => {
        const totalItems = albums.length;
        const maxIndex = totalItems - itemsPerPage;
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }
        const offset = -currentIndex * (albums[0].offsetWidth + 40); // 40 is the margin
        carousel.style.transform = `translateX(${offset}px)`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        updateCarousel();
    });

    updateCarousel(); // Initial update
});

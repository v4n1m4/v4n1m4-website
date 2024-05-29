// latest-releases.js

document.addEventListener("DOMContentLoaded", () => {
    const albumCarousel = document.querySelector(".album-carousel");
    const albumWrapper = document.querySelector(".album-wrapper");
    const albums = document.querySelectorAll(".album");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");
    let albumIndex = 0;
    const albumsPerRow = 6;

    const updateCarousel = () => {
        const transformValue = -albumIndex * (albums[0].offsetWidth + 20); // 20px is the margin
        albumWrapper.style.transform = `translateX(${transformValue}px)`;
    };

    rightBtn.addEventListener("click", () => {
        albumIndex++;
        if (albumIndex > albums.length - albumsPerRow) {
            albumIndex = 0; // Loop back to the start
        }
        updateCarousel();
    });

    leftBtn.addEventListener("click", () => {
        albumIndex--;
        if (albumIndex < 0) {
            albumIndex = albums.length - albumsPerRow; // Loop back to the end
        }
        updateCarousel();
    });

    const searchInput = document.getElementById("album-search");
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        albums.forEach(album => {
            const title = album.getAttribute("data-title").toLowerCase();
            if (title.includes(searchTerm)) {
                album.style.display = "block";
            } else {
                album.style.display = "none";
            }
        });
        // Reset the carousel index and update the display
        albumIndex = 0;
        updateCarousel();
    });

    albums.forEach(album => {
        album.addEventListener("click", () => {
            const modalId = album.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        const closeBtn = modal.querySelector(".close");
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
});

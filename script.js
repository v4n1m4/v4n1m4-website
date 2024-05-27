// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Slideshow for album covers
    const albums = document.querySelectorAll('.album-cover');
    let currentAlbum = 0;

    function showNextAlbum() {
        albums[currentAlbum].classList.remove('visible');
        currentAlbum = (currentAlbum + 1) % albums.length;
        albums[currentAlbum].classList.add('visible');
    }

    setInterval(showNextAlbum, 3000);

    // Filter/Search functionality for track list
    const trackSearch = document.getElementById('track-search');
    const table = document.querySelector('.track-list table tbody');
    const rows = Array.from(table.rows);

    trackSearch.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        rows.forEach(row => {
            const cells = Array.from(row.cells);
            const match = cells.some(cell => cell.textContent.toLowerCase().includes(query));
            row.style.display = match ? '' : 'none';
        });
    });

    // Pagination for latest releases
    const albumsData = [
        {
            img: 'album-placeholder.png',
            name: 'Album 1',
            description: 'This is a brief description of Album 1.',
            price: '$10.00',
            date: '2024-01-01'
        },
        {
            img: 'album-placeholder.png',
            name: 'Album 2',
            description: 'This is a brief description of Album 2.',
            price: '$12.00',
            date: '2024-02-15'
        },
        // More album data
    ];

    const albumGrid = document.getElementById('album-grid');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    let currentPage = 1;
    const albumsPerPage = 4;

    function displayAlbums(page) {
        albumGrid.innerHTML = '';
        const startIndex = (page - 1) * albumsPerPage;
        const endIndex = page * albumsPerPage;
        const albumsToShow = albumsData.slice(startIndex, endIndex);

        albumsToShow.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');
            albumCard.innerHTML = `
                <img src="${album.img}" alt="${album.name}">
                <h3>${album.name}</h3>
                <p>${album.description}</p>
                <p><strong>Price:</strong> ${album.price}</p>
                <p><strong>Release Date:</strong> ${album.date}</p>
            `;
            albumGrid.appendChild(albumCard);
        });

        prevPageBtn.disabled = page === 1;
        nextPageBtn.disabled = endIndex >= albumsData.length;
    }

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayAlbums(currentPage);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage * albumsPerPage < albumsData.length) {
            currentPage++;
            displayAlbums(currentPage);
        }
    });

    displayAlbums(currentPage);
});

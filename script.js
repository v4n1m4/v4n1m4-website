document.addEventListener('DOMContentLoaded', function () {
    const publishedAlbums = document.querySelector('.latest-releases-heading');

    const albumsData = [
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 1',
            description: 'Description 1',
            price: '$10',
            date: '2024-01-01',
            playTime: '40:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 2',
            description: 'Description 2',
            price: '$15',
            date: '2024-02-01',
            playTime: '45:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 3',
            description: 'Description 3',
            price: '$20',
            date: '2024-03-01',
            playTime: '50:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 4',
            description: 'Description 4',
            price: '$25',
            date: '2024-04-01',
            playTime: '35:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 5',
            description: 'Description 5',
            price: '$30',
            date: '2024-05-01',
            playTime: '60:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 6',
            description: 'Description 6',
            price: '$35',
            date: '2024-06-01',
            playTime: '55:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 7',
            description: 'Description 7',
            price: '$40',
            date: '2024-07-01',
            playTime: '70:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 8',
            description: 'Description 8',
            price: '$45',
            date: '2024-08-01',
            playTime: '38:00'
        },
        {
            img: 'album-cover-placeholder-2.png',
            name: 'Album 9',
            description: 'Description 9',
            price: '$50',
            date: '2024-09-01',
            playTime: '42:00'
        }
    ];

    function updatePublishedAlbumsCount() {
        publishedAlbums.textContent = `Latest Releases (${albumsData.length})`;
    }
    updatePublishedAlbumsCount();

    // Integrate search functionality for albums
    const albumSearch = document.getElementById('album-search');
    const albumWrapper = document.querySelector('.album-wrapper');
    let filteredAlbums = albumsData;

    albumSearch.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        filteredAlbums = albumsData.filter(album =>
            album.name.toLowerCase().includes(query) ||
            album.description.toLowerCase().includes(query)
        );
        currentAlbumIndex = 0;
        displayAlbums(currentAlbumIndex);
    });

    // Carousel for latest releases
    const prevAlbumBtn = document.getElementById('prev-album');
    const nextAlbumBtn = document.getElementById('next-album');
    let currentAlbumIndex = 0;
    const albumsPerPage = Math.min(3, Math.floor(window.innerWidth / 300)); // Adjust based on screen width

    function displayAlbums(startIndex) {
        albumWrapper.style.transition = 'transform 2s ease';
        albumWrapper.style.transform = `translateX(-${startIndex * (100 / albumsPerPage)}%)`;
        albumWrapper.innerHTML = '';
        const endIndex = Math.min(startIndex + albumsPerPage, filteredAlbums.length);
        for (let i = startIndex; i < endIndex; i++) {
            const album = filteredAlbums[i];
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album-info');
            albumDiv.innerHTML = `
                <img src="${album.img}" alt="${album.name}" class="album-cover">
                <div>
                    <h3>${album.name}</h3>
                    <p>${album.description}</p>
                    <p><strong>Price:</strong> ${album.price}</p>
                    <p><strong>Release Date:</strong> ${album.date}</p>
                    <p><strong>Play Time:</strong> ${album.playTime}</p>
                </div>
            `;
            albumWrapper.appendChild(albumDiv);
        }
        prevAlbumBtn.disabled = startIndex === 0;
        nextAlbumBtn.disabled = endIndex >= filteredAlbums.length;
    }

    prevAlbumBtn.addEventListener('click', () => {
        currentAlbumIndex = Math.max(currentAlbumIndex - 1, 0);
        displayAlbums(currentAlbumIndex);
    });

    nextAlbumBtn.addEventListener('click', () => {
        currentAlbumIndex = Math.min(currentAlbumIndex + 1, filteredAlbums.length - albumsPerPage);
        displayAlbums(currentAlbumIndex);
    });

    window.addEventListener('resize', () => {
        displayAlbums(currentAlbumIndex);
    });

    displayAlbums(currentAlbumIndex);

    // Carousel for about section
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

/* header-albums-section.js */

function showAlbumDetails(albumId) {
    const albumDetails = {
        album1: {
            title: 'Album 1',
            description: 'Description of Album 1',
            price: '$10',
            releaseDate: '2024-01-01',
            playTime: '40:00'
        },
        album2: {
            title: 'Album 2',
            description: 'Description of Album 2',
            price: '$15',
            releaseDate: '2024-02-01',
            playTime: '45:00'
        },
        album3: {
            title: 'Album 3',
            description: 'Description of Album 3',
            price: '$20',
            releaseDate: '2024-03-01',
            playTime: '50:00'
        },
        // Add more album details as needed
    };

    const album = albumDetails[albumId];
    const albumDetailsContainer = document.getElementById('albumDetails');
    albumDetailsContainer.innerHTML = `
        <h2>${album.title}</h2>
        <p>${album.description}</p>
        <p>Price: ${album.price}</p>
        <p>Release Date: ${album.releaseDate}</p>
        <p>Play Time: ${album.playTime}</p>
    `;

    const modal = document.getElementById('albumModal');
    modal.style.display = 'block';
}

function closeAlbumDetails() {
    const modal = document.getElementById('albumModal');
    modal.style.display = 'none';
}

function filterAlbums() {
    const input = document.getElementById('albumSearch');
    const filter = input.value.toLowerCase();
    const albumContainer = document.getElementById('albumContainer');
    const albums = albumContainer.getElementsByClassName('album');

    for (let i = 0; i < albums.length; i++) {
        const title = albums[i].getAttribute('data-title');
        if (title.toLowerCase().indexOf(filter) > -1) {
            albums[i].style.display = '';
        } else {
            albums[i].style.display = 'none';
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const albumsContainer = document.querySelector('.album-container');
    const albums = document.querySelectorAll('.album');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let scrollAmount = 0;

    function scrollAlbums(direction) {
        const albumWidth = albums[0].offsetWidth + 20; // 20 for margin
        const containerWidth = albumsContainer.offsetWidth;
        const maxScroll = (albums.length * albumWidth) - containerWidth;

        if (direction === 'left') {
            scrollAmount = Math.max(scrollAmount - albumWidth, 0);
        } else if (direction === 'right') {
            scrollAmount = Math.min(scrollAmount + albumWidth, maxScroll);
        }

        albumsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }

    leftArrow.addEventListener('click', () => scrollAlbums('left'));
    rightArrow.addEventListener('click', () => scrollAlbums('right'));

    // Tooltip functionality
    albums.forEach(album => {
        album.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = this.getAttribute('data-title');
            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        album.addEventListener('mouseleave', function() {
            document.querySelector('.tooltip').remove();
        });
    });
});

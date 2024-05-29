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

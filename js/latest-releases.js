/* latest-releases.js */

let currentIndex = 0;
const albumsPerPage = 6;

function updateAlbumDisplay() {
    const albumWrapper = document.getElementById('album-container');
    const totalAlbums = albumWrapper.children.length;
    currentIndex = (currentIndex + totalAlbums) % totalAlbums;
    albumWrapper.style.transform = `translateX(-${currentIndex * 160}px)`;
}

function scrollLeft() {
    const albumWrapper = document.getElementById('album-container');
    const totalAlbums = albumWrapper.children.length;
    currentIndex = (currentIndex - 1 + totalAlbums) % totalAlbums;
    updateAlbumDisplay();
}

function scrollRight() {
    const albumWrapper = document.getElementById('album-container');
    const totalAlbums = albumWrapper.children.length;
    currentIndex = (currentIndex + 1) % totalAlbums;
    updateAlbumDisplay();
}

function searchAlbums() {
    const searchInput = document.getElementById('album-search').value.toLowerCase();
    const albums = document.querySelectorAll('.album');
    albums.forEach(album => {
        const title = album.getAttribute('data-title').toLowerCase();
        album.style.display = title.includes(searchInput) ? 'inline-block' : 'none';
    });
    updateAlbumDisplay(); // Ensure carousel updates after filtering
}

// Modal functionality
const albums = document.querySelectorAll('.album');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <div id="modal-content"></div>
    </div>
`;
document.body.appendChild(modal);

albums.forEach(album => {
    album.addEventListener('click', () => {
        const title = album.getAttribute('data-title');
        document.getElementById('modal-content').innerHTML = `<h2>${title}</h2>`;
        openModal();
    });
});

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

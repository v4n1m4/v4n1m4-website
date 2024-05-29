<!-- sections/header-albums-section.php -->

<div class="header-albums">
    <div class="scroll-container" id="albumContainer">
    <div class="album" onclick="showAlbumDetails('album1')" data-title="Album 1">
            <img src="images/v4n1m4.webp" alt="Album 1">
        </div>
        <div class="album" onclick="showAlbumDetails('album2')" data-title="Album 2">
            <img src="images/artist-profile.webp" alt="Album 2">
        </div>
        <div class="album" onclick="showAlbumDetails('album3')" data-title="Album 3">
            <img src="images/album-cover-placeholder-2.png" alt="Album 3">
        </div>
        <div class="album" onclick="showAlbumDetails('album1')" data-title="Album 1">
            <img src="images/v4n1m4.webp" alt="Album 1">
        </div>
        <div class="album" onclick="showAlbumDetails('album2')" data-title="Album 2">
            <img src="images/artist-profile.webp" alt="Album 2">
        </div>
        <div class="album" onclick="showAlbumDetails('album3')" data-title="Album 3">
            <img src="images/album-cover-placeholder-2.png" alt="Album 3">
        </div>
        <div class="album" onclick="showAlbumDetails('album1')" data-title="Album 1">
            <img src="images/v4n1m4.webp" alt="Album 1">
        </div>
        <div class="album" onclick="showAlbumDetails('album2')" data-title="Album 2">
            <img src="images/artist-profile.webp" alt="Album 2">
        </div>
        <div class="album" onclick="showAlbumDetails('album3')" data-title="Album 3">
            <img src="images/album-cover-placeholder-2.png" alt="Album 3">
        </div>
        <div class="album" onclick="showAlbumDetails('album1')" data-title="Album 1">
            <img src="images/v4n1m4.webp" alt="Album 1">
        </div>
        <div class="album" onclick="showAlbumDetails('album2')" data-title="Album 2">
            <img src="images/artist-profile.webp" alt="Album 2">
        </div>
        <div class="album" onclick="showAlbumDetails('album3')" data-title="Album 3">
            <img src="images/album-cover-placeholder-2.png" alt="Album 3">
        </div>
        <!-- Add more albums as needed -->
        <input type="text" id="albumSearch" onkeyup="filterAlbums()" placeholder="Search for albums..." class="album-search">
    </div>
</div>

<!-- Modal for album details -->
<div id="albumModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeAlbumDetails()">&times;</span>
        <div id="albumDetails">
            <!-- Album details will be loaded here dynamically -->
        </div>
    </div>
</div>

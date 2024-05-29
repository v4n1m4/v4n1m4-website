<!-- latest-releases.php -->

<div class="latest-releases">
    <h2 class="latest-releases-heading">Latest Releases (9)</h2>
    <input type="text" id="album-search" placeholder="Search for albums..." onkeyup="filterAlbums()">

    <div class="album-carousel">
        <button class="carousel-btn left">&lt;</button>
        <div class="album-display">
            <div class="album-wrapper">
                <?php
                $albums = [
                    ["id" => "modal1", "title" => "Album 1", "img" => "images/v4n1m4.webp"],
                    ["id" => "modal2", "title" => "Album 2", "img" => "images/artist-profile.webp"],
                    ["id" => "modal3", "title" => "Album 3", "img" => "images/album-cover-placeholder-2.png"],
                    ["id" => "modal4", "title" => "Album 4", "img" => "images/v4n1m4.webp"],
                    ["id" => "modal5", "title" => "Album 5", "img" => "images/artist-profile.webp"],
                    ["id" => "modal6", "title" => "Album 6", "img" => "images/album-cover-placeholder-2.png"],
                    ["id" => "modal7", "title" => "Album 7", "img" => "images/v4n1m4.webp"],
                    ["id" => "modal8", "title" => "Album 8", "img" => "images/artist-profile.webp"],
                    ["id" => "modal9", "title" => "Album 9", "img" => "images/album-cover-placeholder-2.png"]
                ];

                foreach ($albums as $album) {
                    echo '<div class="album" data-title="' . $album['title'] . '" data-modal="' . $album['id'] . '">';
                    echo '<img src="' . $album['img'] . '" alt="' . $album['title'] . '">';
                    echo '<div class="overlay">' . $album['title'] . '</div>';
                    echo '</div>';
                }
                ?>
            </div>
        </div>
        <button class="carousel-btn right">&gt;</button>
    </div>

    <?php
    foreach ($albums as $album) {
        echo '<div id="' . $album['id'] . '" class="modal">';
        echo '<div class="modal-content">';
        echo '<span class="close">&times;</span>';
        echo '<h2>' . $album['title'] . '</h2>';
        echo '<p>Description of ' . $album['title'] . '.</p>';
        echo '</div>';
        echo '</div>';
    }
    ?>
</div>

<script>
function filterAlbums() {
    const searchInput = document.getElementById("album-search").value.toLowerCase();
    const albums = document.querySelectorAll(".album");

    albums.forEach(album => {
        const title = album.getAttribute("data-title").toLowerCase();
        if (title.includes(searchInput)) {
            album.style.display = "block";
        } else {
            album.style.display = "none";
        }
    });
}
</script>

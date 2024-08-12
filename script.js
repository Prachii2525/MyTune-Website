// script.js

// Dark Mode Toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Playlist Creation
const createPlaylistBtn = document.getElementById('create-playlist-btn');
const playlistContainer = document.getElementById('playlist-container');

createPlaylistBtn.addEventListener('click', () => {
    const playlistName = document.getElementById('playlist-name').value;
    if (playlistName) {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.textContent = playlistName;
        playlistContainer.appendChild(playlistItem);
        document.getElementById('playlist-name').value = ''; // Clear input field
    } else {
        alert('Please enter a playlist name.');
    }
});
// script.js

// Playlist Management
document.getElementById("add-song-btn").addEventListener("click", function () {
    const songNameInput = document.getElementById("song-name");
    const songName = songNameInput.value.trim();

    if (songName !== "") {
        const playlist = document.getElementById("playlist");
        const listItem = document.createElement("li");
        listItem.className = "playlist-item";
        listItem.textContent = songName;

        // Add remove button to the list item
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.padding = "5px";
        removeBtn.style.fontSize = "12px";
        removeBtn.style.cursor = "pointer";

        removeBtn.addEventListener("click", function () {
            playlist.removeChild(listItem);
        });

        listItem.appendChild(removeBtn);
        playlist.appendChild(listItem);

        songNameInput.value = "";
    }
});



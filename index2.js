document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const songList = document.getElementById("songList");
    const songs = songList.getElementsByTagName("li");
    let currentSongIndex = 0;

    function playSong(index) {
        const song = songs[index];
        if (song) {
            audioPlayer.src = song.getAttribute("data-src");
            audioPlayer.play();
            currentSongIndex = index;
        }
    }

    for (let i = 0; i < songs.length; i++) {
        songs[i].addEventListener("click", () => {
            playSong(i);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentSongIndex > 0) {
            playSong(currentSongIndex - 1);
        }
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentSongIndex < songs.length - 1) {
            playSong(currentSongIndex + 1);
        }
    });

    // Play the first song initially
    playSong(0);
});

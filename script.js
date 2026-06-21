    const playBtn = document.getElementById("playSongBtn");
const song = document.getElementById("birthdaySong");

playBtn.addEventListener("click", () => {

    if(song.paused){
        song.play();
        playBtn.innerText = "⏸ Pause Song";
    }
    else{
        song.pause();
        playBtn.innerText = "🎵 Play Song";
    }

});
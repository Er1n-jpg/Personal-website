
const audio1 = document.getElementById("audio")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")

const playlist = [
    {title: "Kill the romeo", artist: "Zerobaseone"},
    {title: "Iconick", artist: "Zerobaseone"},
    {title: "Kidult", artist: "SEVENTEEN"}
]
let currentTrack = 0;
var applicationopen = true;



function updatesong (index){
    const song = playlist[index]
    document.getElementById("Songtitle").textContent = song.title;
    document.getElementById('artist').textContent = song.artist;

}


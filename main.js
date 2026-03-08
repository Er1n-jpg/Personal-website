
const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const skip = document.getElementById("button1")
const back = document.getElementById("button2")
const songtitle = document.getElementById("Songtitle")

var yes = true
console.log(songtitle)


const playlist = [
    {title: "Kill the romeo", artist: "Zerobaseone", audioElement: audio1},
    {title: "Iconick", artist: "Zerobaseone", audioElement: audio2},
    {title: "Kidult", artist: "SEVENTEEN", audioElement: audio3}
]
skip.addEventListener("click", () => skipsong())
back.addEventListener("click", () => reversesong())
var currentTrack = 1;
var applicationopen = true;


function shuffle(){
    currentTrack = Math.floor(Math.random() * playlist.length)
}

function updatesong(index){
    const song = playlist[index]
    songtitle.textContent = song.title

}

function playcurrentrack(){
    audio1.pause()
    audio2.pause()
    audio3.pause()

    audio1.volume = 0.5
    audio2.volume = 0.5
    audio3.volume = 0.5

    updatesong(currentTrack)
    playlist[currentTrack].audioElement.play()
    console.log('Now playing:', playlist[currentTrack].title)


}

function start(){
    shuffle();
    updatesong(currentTrack);
    playcurrentrack();
} 

function skipsong(){
    currentTrack = (currentTrack + 1) % playlist.length
    playcurrentrack()
}

function reversesong(){
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length
    playcurrentrack()

}


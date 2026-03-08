
const audio1 = document.getElementById("audio")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const skip = document.getElementById("button1")
const back = document.getElementById("button2")
const songtitle = document.getElementById("Songtitle")

var yes = true
console.log(songtitle)


start()
const playlist = [
    {title: "Kill the romeo", artist: "Zerobaseone", audioElement: audio1},
    {title: "Iconick", artist: "Zerobaseone", audioElement: audio2},
    {title: "Kidult", artist: "SEVENTEEN", audioElement: audio3}
]
var currentTrack = 2;
var applicationopen = true;


function shuffle(){
    let randomizedvalue = Math.random() * 3
    currentTrack = randomizedvalue
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
    playlist[currentTrack].play;
    
    playlist[currentTrack].audioElement.play()
    console.log('started')

    skip.addEventListener("click", () => {
    skipsong();
    })
}

function start(){
    shuffle();
    updatesong(currentTrack);
    playcurrentrack();
} 

function skipsong(){
    if (index < playlist.length){
    const song = playlist[index + 1]
    } else {
        const song = playlist[1]
    }
}

function reversesong(){
    if (index > 1){
    const song = playlist[index - 1]
    } else{
    const song = playlist[playlist.length];
    }


}


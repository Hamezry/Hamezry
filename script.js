onload = alert ("Music is life");

const data =[
    {
        artist: "Cory Absury",
        songTitle: "Reckless love",
        song:"./song/Cory Absury-Reckless Love.mp3",
        coverImage: "./image/Cory Absury.jpg"
    },


    {
        artist: "Hilsongs United",
        songTitle: "Oceans",
        song:"./song/Hilsong-Oceans.mp3",
        coverImage: "./image/Hillsong.jpg"
    },

    {
        artist: "Paul Wilbur",
        songTitle: "Baruch Haba",
        song:"./song/Paul_Wilbur-Baruch_Haba.mp3",
        coverImage: "./image/Paul Wilbur.jpg",
    },
];

window.onload = () => {
    let musicPlayer = new MusicPlayer();
    let play_event = document.querySelector("#play_event");
    play_event.addEventListener("click", () => {
        musicPlayer.playAndPause();
    });


    let prev_event = document.querySelector("#prev_event");
    prev_event.addEventListener("click", () => {
        musicPlayer.prev();
    });


    let next_event = document.querySelector("#next_event");
    next_event.addEventListener("click", () => {
        musicPlayer.next();
    });


};

class MusicPlayer{
    toggle = true;
    currentIndex = 0;

    constructor() {
        this.audio = document.getElementById("audio");
        this.artist = document.querySelector(".artist");
        this.songTitle = document.querySelector(".song-title");
        this.coverImage = document.querySelector(".album-cover-image");
        this.artist = document.querySelector(".artist");
        this.setCurrentSong();
        this.setCurrentElements();
    }

    playAndPause(){
     if(this.toggle) {
        this.audio.play();
        this.toggle = false;
        HelperElement.setupPlayOrPauseElement("fa-pause-circle");
        this.rotateCoverPicture();

     } 
     else{
        this.audio.pause();
        this.toggle = true;
        HelperElement.setupPlayOrPauseElement("fa-play-circle");
        this.pauseCoverPicture();
     }

    }



    prev(){
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = data.length -1;
        }

        this.setCurrentSong();
        this.setCurrentElements();
        this.forcePlay();
    }

    next(){
        this.currentIndex++;
        if (this.currentIndex > data.length -1){
        this.currentIndex = 0;
        }

        this.setCurrentSong();
        this.setCurrentElements();
        this.forcePlay();
    }

    setCurrentElements(){
        this.artist.innerHTML = data [this.currentIndex].artist;
        this.songTitle.innerHTML = data [this.currentIndex].songTitle;
        this.coverImage.setAttribute ("src", data [this.currentIndex].coverImage);

    }

    forcePlay(){
        this.toggle = true;
        this.playAndPause();
    }

    setCurrentSong(){
        this.audio.setAttribute("src", data[this.currentIndex].song);

    }

    rotateCoverPicture() {
        this.coverImage.style.animation ="rotateFrame 4s linear infinite"
    }

    pauseCoverPicture(){
        this.coverImage.style.animationPlayState = "paused";
    }
   
}

class HelperElement {

    static setupPlayOrPauseElement(icon) {
        let play_event =document.getElementById("play_event");
        play_event.innerHTML = "";
        play_event.append(HelperElement.createPauseOrPlayElememt(icon));
    }

    static createPauseOrPlayElememt(icon){
        let pause = document.createElement("i")
        pause.classList.add("fas", icon);
        return pause;
    }
}
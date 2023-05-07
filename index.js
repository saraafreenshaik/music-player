 let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");

song.onloadedmetadata=function(){
  progress.max=song.duration;
  progress.value=song.currentTime;

}
function playPause(){
  if(ctrlIcon.classList.contains("fa-pause")){
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    

  }
  else{
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}
if(song.play()){
  setInterval(()=>{
    progress.value=song.currentTime;
  },500);
}
progress.onchange=function(){
  song.play();
  song.currentTime=progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

































//  var audio = document.getElementById("audio");
//        var playBtn = document.getElementById("play");
//        var pauseBtn = document.getElementById("pause");
//        var volumeSlider = document.getElementById("volume");
      
//        playBtn.onclick = function() {
//          audio.play();
//        };
      
//        pauseBtn.onclick = function() {
//          audio.pause();
//        };
      
//        volumeSlider.oninput = function() {
//          audio.volume = volumeSlider.value;
//        };
















       
// $(document).ready(function() {
//     var audio = new Audio();
//     var playlist = [
//       {
//         title: "Song Title 1",
//         artist: "Artist Name 1",
//         file: "song1.mp3"
//       },
//       {
//         title: "Song Title 2",
//         artist: "Artist Name 2",
//         file: "song2.mp3"
//       },
//       {
//         title: "Song Title 3",
//         artist: "Artist Name 3",
//         file: "song3.mp3"
//       }
//     ];
//     var currentSong = 0;
//     $("#play").click(function() {
//       if (audio.paused) {
//         audio.src = playlist[currentSong].file;
//         audio.play();
//         $(this).html("<i class='fa fa-pause'></i>");
//       } else {
//         audio.pause();
//         $(this).html("<i class='fa fa-play'></i>");
//       }
//     }
//     )
// })

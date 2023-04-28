 var audio = document.getElementById("audio");
       var playBtn = document.getElementById("play");
       var pauseBtn = document.getElementById("pause");
       var volumeSlider = document.getElementById("volume");
      
       playBtn.onclick = function() {
         audio.play();
       };
      
       pauseBtn.onclick = function() {
         audio.pause();
       };
      
       volumeSlider.oninput = function() {
         audio.volume = volumeSlider.value;
       };



















































       
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
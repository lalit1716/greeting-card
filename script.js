
 const noVideo = "./videos/no_no_no_video.mp4";
 const yesVideo = "./videos/yes_video.mp4";
 const thankyouVideo = "./videos/Thankyou_video.mp4";


const target = document.getElementById("target");
function moveTarget() {
  const maxWidth = 500;
  const maxHeight = 500;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

// function changeVideo3() {
// }

target.addEventListener("mouseenter", function () {
  moveTarget();
  var video = document.getElementById('bgVideo');
  video.src = noVideo;
  video.load();
});





function changeVideo() {
  var video = document.getElementById('bgVideo');
  video.src = yesVideo;
  video.load();
}

function changeVideo2() {
  var video = document.getElementById('bgVideo');
  video.src = thankyouVideo;
  video.load();
  
}






// yes.addEventListener("click", () => {
// alerlt("Thank you😍 I love you too💓😁");
// });
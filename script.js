


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
  video.src = "./videos/no_no_no_video.mp4";
  video.load();
});





function changeVideo() {
  var video = document.getElementById('bgVideo');
  video.src = "./videos/yes_video.mp4";
  video.load();
}

function changeVideo2() {
  var video = document.getElementById('bgVideo');
  video.src = "./videos/Thankyou_video.mp4";
  video.load();
  
}






// yes.addEventListener("click", () => {
// alerlt("Thank you😍 I love you too💓😁");
// });
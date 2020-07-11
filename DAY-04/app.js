var box = document.getElementById("box");
box.addEventListener("mousemove", runEvent);

var pos = document.getElementById("position");
function runEvent(e) {
  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

  pos.innerHTML =
    "<h4>Mouse X : " + e.offsetX + "</h4><h4>Mouse Y : " + e.offsetY + "</h4>";
}

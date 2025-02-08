var colors = ["#ff6700", "#ebebeb", "#c0c0c0", "#3a6ea5"];
var len = colors.length - 1;
var buttoncontrol = document.getElementById("myButton");
var outerContainer = document.querySelector(".outercontainer");
buttoncontrol.addEventListener("click", () => {
  var index = rand();

  outerContainer.style.backgroundColor = colors[index];
});
var i = 0;
function rand() {
  i++;
  if (i > len) {
    i = 0;
  }
  return i;
}

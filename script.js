var btnReset = document.querySelector(".btnReset");
const removeTextContent = function () {
  document.getElementById("resultArea").innerHTML = `Result : 0`;
};

function outcome() {
  var x = Number(document.getElementById("num-one").value);
  var y = Number(document.getElementById("num-two").value);

  var z = 0;

  if (document.getElementById("box1").checked) {
    z = x + y;
  } else if (document.getElementById("box2").checked) {
    z = x - y;
  } else if (document.getElementById("box3").checked) {
    z = x * y;
  } else {
    z = x / y;
  }
  document.getElementById("resultArea").innerHTML = `Result : ${z}`;
}
btnReset.addEventListener("click", removeTextContent);

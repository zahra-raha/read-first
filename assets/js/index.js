
function nav() {
  var x = document.getElementById("menu");
  var header = document.getElementById("header");
  if (x.className === "menu") {
    x.className += " phone-menu";
    header.style.height = 'auto';
    header.style.padding = '0 0 7px';
  } else {
    x.className = "menu";
    header.style.height = '80px';
    header.style.padding = '0';
  }
}

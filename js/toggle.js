let toggle = false;

document.getElementById("toggle").addEventListener("click", () => {
  if (toggle) {
    document.getElementById("items").style.display = "none";
    toggle = !toggle;
  } else {
    document.getElementById("items").style.display = "flex";
    toggle = !toggle;
  }
});

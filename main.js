const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector(".btn");
const cont = document.querySelector(".container-1");
const cont2 = document.querySelector(".container-2");
const selection = document.querySelector(".selection");

let text = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    text = rating.innerHTML;
    rating.classList.toggle('active')
  });
});

submit.addEventListener("click", () => {
  if (!text) {
    alert("select a rating");
  } else {
    cont.classList.toggle("hidden");
    cont2.classList.toggle("hidden");
    var h2 = document.createElement("h2");
    h2.appendChild(
      document.createTextNode("You selected" + " " + text + " " + "out of 5")
    );
    selection.appendChild(h2);
  }
});

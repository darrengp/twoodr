const buttton = document.querySelector("#submit-twood");
// console.log(buttton);

buttton.addEventListener("click", function () {
  console.log("Button was clicked");
  const twood = document.getElementById("twood-input").value;
  document.querySelector(".twood").innerHTML = twood;

  console.log(twood);
});

// document.querySelector(".twood");

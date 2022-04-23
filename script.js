"use strict";

const buttons = document.querySelectorAll(".selection button");

buttons.forEach((button) =>
  button.addEventListener("click", () => console.log("a button was clicked"))
);

// const handleButtonClick = () => {
//   console.log('a button was clicked');
// };

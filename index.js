/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇
document.addEventListener("DOMContentLoaded", () => {
  // Logo
  let logo = document.querySelector(".logo");
  let logoText = document.querySelector("#text");

  // Logo Styles
  let logoBackground = getComputedStyle(logo).backgroundColor;
  let logoTextColor = getComputedStyle(logoText).color;
  let logoShadow = false;

  // Buttons
  let logoTextColorButton = document.querySelector("#button-one");
  let logoBackgroundColorButton = document.querySelector("#button-two");
  let logoShadowButton = document.querySelector("#button-three");

  logoTextColorButton.addEventListener("click", () => {
    logoText.style.color = getComputedStyle(logoTextColorButton).backgroundColor
  });

  logoBackgroundColorButton.addEventListener("click", () => {
    logo.style.backgroundColor = getComputedStyle(logoBackgroundColorButton).backgroundColor
  });

  logoShadowButton.addEventListener("click", () => {
    logoShadow = !logoShadow;
    logoShadow
      ? (logo.style.boxShadow = "5px 10px grey")
      : (logo.style.boxShadow = "");
  });
});
/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML 
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/

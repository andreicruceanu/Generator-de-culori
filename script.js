const btnChangeColor = document.querySelector("#btn");
const RGB = document.querySelector("#rgb");
const HEX = document.querySelector("#hex");

btnChangeColor.addEventListener("click", function () {
  const red = generateRendomNumber();
  const green = generateRendomNumber();
  const blue = generateRendomNumber();

  const RGBstring = `rgb(${red},${green},${blue})`;
  const HEXstring = `#${convertNumber(red)}${convertNumber(
    green
  )}${convertNumber(blue)}`;

  RGB.innerHTML = RGBstring;
  HEX.innerHTML = HEXstring;

  document.body.style.backgroundColor = RGBstring;
});

function generateRendomNumber() {
  return Math.floor(Math.random() * 256);
}

function convertNumber(value) {
  return value.toString(16).padStart(2, "0");
}

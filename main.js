let colors = [
    "#FFADBC", "#863A6F", "#E7AB79", "#CE49BF", "#F68989", "#781D42", "#FF9F45", "#FFED99", "#046582", "#FF4646", "#BE8ABF",
    "#B3FFAE", "#7FBCD2", "#F900BF"
];


function changeColor() {
let randomColor = Math.floor(Math.random() * colors.length);
let backgroundColor = document.getElementById('background-el');
backgroundColor.textContent = "Background Color: " + colors[randomColor]
document.body.style.backgroundColor = colors[randomColor]
}


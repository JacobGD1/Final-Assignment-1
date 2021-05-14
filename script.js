document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)
document.getElementById('area1').addEventListener('click',area1Button)
// Connects buttons to area and circumference

let radius = 0
let area = 0
let circumference = 0
let pinumber = Math.PI
let side = 0
// Sets Variables/Let statements

function areaButton () {
  radius = document.getElementById('number').value
  radius = parseFloat(radius)
  pinumber = parseFloat(pinumber)

  area = pinumber * (radius * radius)
  document.getElementById('area-answer').innerHTML = area
}// Function of Area Button

function circumferenceButton () {
  radius = document.getElementById('number').value
  radius = parseFloat(radius)
  pinumber = parseFloat(pinumber)

  circumference = (2 * pinumber) * radius
  document.getElementById('circumference-answer').innerHTML = circumference
}// Function of Circumference Button

function area1Button () {
  side = document.getElementById('squarenumber').value
  side = parseFloat(side)

  area = side * side
  document.getElementById('area1-answer').innerHTML = area
}

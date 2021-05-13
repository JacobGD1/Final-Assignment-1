document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)
// Connects buttons to area and circumference

let radius = 0
let area = 0
let circumference = 0
let pinumber = Math.PI
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

function areaofsquare () {
  const side = document.getElementById('side').value
  const output = side * side
  document.getElementById('area-status').innerHTML = 'your area is ' + output
}// this code allows the document to take the side and times it by itself giving you an answer after clicking the calculate button.

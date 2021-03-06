document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)
document.getElementById('area1').addEventListener('click', area1Button)
document.getElementById('area2').addEventListener('click', area2Button)
// Connects buttons to area and circumference

let radius = 0
let area = 0
let circumference = 0
let pinumber = Math.PI
let side = 0
let base = 0
let height = 0
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
}// Function of area1Button

function area2Button () {
  base = document.getElementById('trianglebase').value
  base = parseFloat(base)
  height = document.getElementById('triangleheight').value
  height = parseFloat(height)

  area = (base * height) / 2
  document.getElementById('area2-answer').innerHTML = area
}// Function of area2Button

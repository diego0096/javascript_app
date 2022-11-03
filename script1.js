const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    pid,
    input
})

h1.innerHTML = "Diego <br/> Felipe"
h1.innerText = "Diego <br/> Felipe"
/* console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); */
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.colombia.com/images/v2/colombia-info/informacion/informacion-800.jpg');
console.log(img);   

pid.innerHTML = "";
pid.appendChild(img);
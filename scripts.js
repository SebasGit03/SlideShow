"use strict";
const imagenes = ['img1.png', 'img2.png', 'img3.png']

const image = document.querySelector('.img')
const button = document.querySelector('.boton')
const button1 = document.querySelector('.boton1')

let i = 0
button.addEventListener('click', () => {
    if(i == imagenes.length ) i = 0
    image.setAttribute('src', imagenes[i++])
    
})

button1.addEventListener('click', () => {
    if(i < 0) i += imagenes.length
    image.setAttribute('src', imagenes[i--])
})

setInterval(()=>{
    if(i == imagenes.length ) i = 0
    image.setAttribute('src', imagenes[i])
    i++
}, 5000)
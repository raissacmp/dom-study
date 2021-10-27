const naruto = document.getElementById("naruto")
console.log("🚀 ~ file: script.js ~ line 2 ~ naruto", naruto)

const gridSection = document.getElementsByClassName('grid-section')
console.log("🚀 ~ file: script.js ~ line 4 ~ gridSection", gridSection)

const firstLi = document.querySelector('li')
console.log("🚀 ~ file: script.js ~ line 7 ~ firstLi", firstLi)

const firstUl = document.querySelector('ul')
console.log("🚀 ~ file: script.js ~ line 10 ~ firstUl", firstUl)

const linkInter =  document.querySelector('[href^="#"]') //seleciona o que começa com:
console.log("🚀 ~ file: script.js ~ line 13 ~ linksInters", linkInter)

const imgNaruto = document.querySelectorAll(".naruto img")
console.log("🚀 ~ file: script.js ~ line 16 ~ imgNaruto", imgNaruto)
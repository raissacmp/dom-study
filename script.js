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

const gridSectionHMTML = document.getElementsByClassName('grid-section')
console.log("🚀 ~ file: script.js ~ line 20 ~ gridSectionHMTML", gridSectionHMTML)

const gridSectionNode = document.querySelectorAll('.grid-section')
console.log("🚀 ~ file: script.js ~ line 23 ~ gridSectionNode", gridSectionNode)

// firstUl.classList.add('grid-section')

gridSectionNode.forEach((item, index)=> {
    console.log("🚀 ~ file: script.js ~ line 28 ~ gridSectionNode.forEach ~ item", item)
    console.log("🚀 ~ file: script.js ~ line 28 ~ index", index)
}) 

const arrayGrid = Array.from(gridSectionHMTML)
console.log("🚀 ~ file: script.js ~ line 33 ~ arrayGrid", arrayGrid)

// Exercício

// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img')
console.log("🚀 ~ file: script.js ~ line 39 ~ allImages", allImages)

// Retorne no console apenas as imagens que começaram com a palavra imagem 
const selectedImages = document.querySelectorAll('[src^="assets/naruto"]')  //src=atributo, pasta e nome da imagem
console.log("🚀 ~ file: script.js ~ line 43 ~ selectedImages", selectedImages)

// Selecione todos os links internos (onde o href começa com #)
const linksInters = document.querySelector('[href^="#"]')   // ^ esse simbolo quer dizer comece com:
console.log("🚀 ~ file: script.js ~ line 43 ~ linksInters", linksInters)

// Selecione o primeiro h2 dentro de .naruto-descricao
const firsth2 = document.querySelector('.naruto-description h2')
console.log("🚀 ~ file: script.js ~ line 51 ~ firsth2", firsth2)

// Selecione o último p do site
const paragraph = document.querySelectorAll('p')
console.log("🚀 ~ file: script.js ~ line 54 ~ paragraph", paragraph[paragraph.length -1])
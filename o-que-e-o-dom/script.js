// window.alert("Olá")

const h1Select = document.querySelector("h1")

h1Select.addEventListener("click", () => {
    console.log("clicou em", h1Select.innerText)
})

//Exercício

// Retorne o url da página atual utilizando o objeto window

const locationURL = location.href
console.log("🚀 ~ file: script.js ~ line 14 ~ location", locationURL)


// Seleciona o primeiro elemento da página que possua a classe ativo
 const classAtiva = document.querySelector('.ativo') //ponto p selecionar c css
 console.log("🚀 ~ file: script.js ~ line 19 ~ classAtiva", classAtiva)
 
// Retorne a linguagem do navegador

const navigatorLanguage = navigator.language
console.log("🚀 ~ file: script.js ~ line 24 ~ navigatorLanguage", navigatorLanguage)

// Retorne a largura da janela 

const widthWindow = window.innerWidth
console.log("🚀 ~ file: script.js ~ line 28 ~ widthWindow", widthWindow)
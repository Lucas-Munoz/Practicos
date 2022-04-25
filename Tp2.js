var prueba = document.getElementById('prueba')
var titulo = document.createElement('h1');
titulo.innerHTML = "Prueba de creacion de elementos y etiquetas con JS"
prueba.appendChild(titulo)

var texto = document.createElement('p')
var contenido = document.createTextNode('Probando etiquetas')
texto.appendChild(contenido)
document.body.appendChild(texto)
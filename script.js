let teclas = document.getElementsByClassName('button')

let pantalla = document.getElementById('pantalla');

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener('click', function(){
        if (teclas[i].innerHTML === '=') {
            pantalla.innerHTML = eval(pantalla.innerHTML)
        } else if (teclas[i].innerHTML === 'C'){
            pantalla.innerHTML = ''
        } else if (teclas[i].innerHTML === '√') {
            pantalla.innerHTML = Math.sqrt(pantalla.innerHTML)
        } else if (teclas[i].innerHTML === '←'){
            pantalla.innerHTML = pantalla.innerHTML.substring(0, pantalla.innerHTML.length - 1)
        }
        else {
            pantalla.innerHTML = pantalla.innerHTML+teclas[i].innerHTML;
        }
    })
    pantalla.style.fontSize = '2em'
}

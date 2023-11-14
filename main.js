function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null)

}
if (elemento && elemnto.localName === 'audio') {

    elemento.play();
}
else {
    //alert ('Elemento não encontrado');
    console.log('Elemento não encontrado ou setor inválido');
}
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length;) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const audio = '#som_${instrumento}'; //template strings

    tecla.onclick = function () {
        tocaSom(idAudio);
     }

     tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space')

        if(evento.code === 'Soace' || evento.code === 'Enter') {

        }

     }

     tecla.onkeyup = fuction () {
        tecla.classList.remove('ativa');
     }
let nota1;
let nota2;
let nota3;
let nota4;
let media;
let resultado;

function calcular() {
    nota1 = parseFloat(document.querySelector('#nota1').value);
    nota2 = parseFloat(document.querySelector('#nota2').value);
    nota3 = parseFloat(document.querySelector('#nota3').value);
    nota4 = parseFloat(document.querySelector('#nota4').value);


    validaNota(nota1, document.querySelector('#nota1'));
    validaNota(nota2, document.querySelector('#nota2'));
    validaNota(nota3, document.querySelector('#nota3'));
    validaNota(nota4, document.querySelector('#nota4'));

    media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7) {
        aprovado = 'APROVADO' 
        document.querySelector('#reprovado').innerHTML = '';
        document.querySelector('#aprovado').innerHTML = aprovado;
        document.querySelector('#aprovadoimg').innerHTML = check;
        document.querySelector('#reprovadoimg').innerHTML = '';

    } else {
        if (media <= 6) {
            reprovado = 'REPROVADO'
            document.querySelector('#aprovado').innerHTML = '';
            document.querySelector('#reprovado').innerHTML = reprovado;
            document.querySelector('#reprovadoimg').innerHTML = check;
            document.querySelector('#aprovadoimg').innerHTML = '';
        }

        document.querySelector('#media').innerHTML = media;
    }

    function limpar() {
        document.querySelector('#nota1').value = '';
        document.querySelector('#nota2').value = '';
        document.querySelector('#nota3').value = '';
        document.querySelector('#nota4').value = '';
        document.querySelector('#media').value = '';
        document.querySelector('#aprovado').innerHTML = '';
        document.querySelector('#reprovado').innerHTML = '';
    }

    function validaNota(nota, id) {
        if ((nota < 0) || (nota > 10)) {
            alert('NOTA FORA DO PADRÃO ESTIPULADO')
            id.focus();
            return false;
        }
    }

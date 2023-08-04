function idade(a)
{
    return 2023-a;
}

let y = parseInt(prompt('Digite seu ano de nascimento:'));
const nome = prompt('Digite seu primeiro nome:');
const sobrenome = prompt('Digite seu sobrenome:');

let anos = idade(y) ;
alert(`Olá, seu nome é ${nome} ${sobrenome} e você tem ${anos} anos.`)
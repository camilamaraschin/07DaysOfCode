const nome = prompt ('Qual é o seu nome?');
const idade = prompt ('Qual é a sua idade?');
const linguagem = prompt ('Qual é a linguagem que você está estudando?')


alert("Olá " + nome + ", você tem " + idade + " anos, e está estudando " + linguagem );

const novaLinguagem = prompt("Você está disposto(a) a estudar Java Script? Digite " + 1 + " para SIM ou " +  2 + " para NÃO ");

if (novaLinguagem == 1){
    alert("Que legal que queria estudar JS! Vamos juntos nesta caminhada!");
} else{
   alert("Você não gosta de JS? Que pena! Espero que tenha interesse em outra linguagens");
}



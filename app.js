//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];
let quantidade_nomes = 0;

//Função para armazenar os nomes recebidos
function adicionarAmigo(){

    //recebe o nome e o coloca em na lista "nomes"
    let nome = document.querySelector("input").value;

    //Testa se o input está vazio
    if (nome != "") {

        //Guarda o nome na lista e apaga o campo input
        nomes[quantidade_nomes] = nome;
        quantidade_nomes++;
        document.querySelector("input").value = "";
        
        //Adiciona o nome na lista
        adicionarLista(nome);

    }else{
        //Alerta caso input esteja vazio
        alert("Campo vazio. Por favor, escreva um nome e tente novamente!");
    }

}

//Função para adicionar o nome rececbido do input no final da lista
function adicionarLista(nome_recebido){
    document.getElementById("listaAmigos").innerHTML += "<li>" + nome_recebido + "</li>";
}

//Função para sortear a posição do nome e mostrar na tela o amigo secreto
function sortearAmigo(){
    let posicao = parseInt(Math.random() * (quantidade_nomes));
    document.getElementById("resultado").innerHTML = "<li>" + "O nome sorteado foi: " + nomes[posicao] + "</li>";
}

let jogadores = [];
let jogador = {};


let divSumir = document.querySelector("#divInput"); 
const addButton = document.querySelector("#addButton");
const buttonOK = document.querySelector("#buttonOk")


addButton.addEventListener("click", abrirEFecharInput)
buttonOK.addEventListener("click", adicionarJogador)

function abrirEFecharInput() {

  let clicar

  if (clicar == true) {
    divSumir.classList.add("none")
  } else {
    divSumir.classList.add("ok")
  }

  
}

function adicionarJogador() {
  
  jogador = {
    nome: jogador = document.querySelector("#inputJogador").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
     
  document.querySelector("#inputJogador").value = ""
    

  jogadores[jogadores.length] = jogador
    
  exibeJogadoresNaTela()
}

function exibeJogadoresNaTela() {
  organizarLista()
  
  let elemento = "";

  for (i = 0; i < jogadores.length; i++) {
    jogador = jogadores[i]
    

    elemento +=  "<tr>"
    elemento += "<td>" + jogador.nome + "</td>"
    elemento += "<td>"+ jogador.vitorias+"</td>"
    elemento += "<td>" + jogador.empates + "</td>"
    elemento += "<td>"+ jogador.derrotas + "</td>"
    elemento += "<td>" + jogador.pontos + "</td>"
    
    elemento += "<td><button class='mais' onClick='adicionarVitoria("+ i +")'>+</button><h6>Vitórias</h6><button class='menos' onClick='removerVitoria("+ i + ")'>-</button></td>"

    elemento += "<td><button class='mais' onClick='adicionarEmpate("+ i +")'>+</button><h6>Empates</h6><button class='menos' onClick='removerEmpate("+ i +")'>-</button></td>"
    elemento += "<td><button class='mais' onClick='adicionarDerrota("+ i +")'>+</button><h6>Derrota</h6><button class='menos' onClick='removerDerrota("+ i +")'>-</button></td>"
    elemento += "</tr>"

    
  }

  document.querySelector("#tabelaJogadores").innerHTML = elemento;
  //document.getElementById("inputJogador") = ""
}


function adicionarVitoria(i) {
  jogador = jogadores[i];
  jogador.vitorias++;
  calculaPontos(i);
  
}

function removerVitoria(i) {
  jogador = jogadores[i];
  if (jogador.vitorias > 0) {
    jogador.vitorias--;
    calculaPontos(i);
  }
}

function adicionarEmpate(i) {
  let jogador = jogadores[i];
  jogador.empates++;
  calculaPontos(i);
  
}

function removerEmpate(i) {
  jogador = jogadores[i];
  if (jogador.empates > 0) {
    jogador.empates--;
  } calculaPontos(i);
}

function adicionarDerrota(i) {
  let jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela()
  
}

function removerDerrota(i) {
  jogador = jogadores[i];
  if (jogador.derrotas > 0) {
    jogador.derrotas--;
    calculaPontos(i);
  }  
  
}

function calculaPontos(i) {
  jogador = jogadores[i]
  jogador.pontos = (jogador.vitorias * 3) + jogador.empates;
  exibeJogadoresNaTela()
    
}

let zeraPontuacao = document.querySelector("#zeraPontuacao")
zeraPontuacao.onclick = zerarPontos

function zerarPontos() { 
  for(let i = 0; i < jogadores.length; i++){
    jogador = jogadores[i]
    jogador.vitorias = 0
    jogador.empates = 0
    jogador.derrotas = 0
    calculaPontos(i)
  }
}

function organizarLista() {
  jogadores = jogadores.sort(function (a, b) {
     if (a.pontos < b.pontos) {
       return 1;
     }
     if (a.pontos > b.pontos) {
       return -1;
     }
     return 0;
   });
}

let removerJogadores = document.querySelector("#eliminarJogadores")
removerJogadores.onclick = removerJog

function removerJog() {
  let nomeDoJogador = document.querySelector("#inputJogador").value

  for(i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i]

    if (nomeDoJogador == jogador.nome) {
      jogadores.splice(i, 1)

    }
  }
  exibeJogadoresNaTela()
}


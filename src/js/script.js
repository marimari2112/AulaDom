// Arrow funcion

const multiplicarValor=(num1,num2)=>{
    return num1 * num2;
}
console.log(multiplicarValor(3,5))

// Array (lista)

let herois = ["Arqueiro", "thor", "viuva negra"];
console.log(herois)

// push adicionar final
herois.push("Capitão")
console.log(herois)

// pop remove o item no final
herois.pop("Capitão")
console.log(herois)

// DOM - Document Object Model
// O Dom usa o id para manipular

document.getElementById("titulo").innerText="Dev";

// função mudar

function mudar(){
    let novo = document.getElementById("name");
    let titulo = document.getElementById("titulo")
    titulo.innerText = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value -1;
    let novoTime = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML = novoTime;
}
let div = document.createElement("div"); // cria div, tabela, cabeçário e corpo da tabela
let table = document.createElement("table");
let thead = document.createElement ("thead");
let tbody = document.createElement ("tbody");
let thNome = document.createElement ("th"); // th cabeça da tabela
let thPeso = document.createElement ("th");
let thAltura = document.createElement ("th");
let thIMC = document.createElement ("th");
let tdNome = document.createElement ("td"); // td corpo da tabela
let tdPeso = document.createElement ("td");
let tdAltura = document.createElement ("td");
let tdIMC = document.createElement ("td");
let body = document.querySelector ("body"); // adiciona tudo no body

body.append (div); // cria a estrutura do body, colocando os elementos dentro dele
div.append (table);
thead.append (thNome);
thead.append (thPeso);
thead.append (thAltura);
thead.append (thIMC);
table.append (thead);
table.append (tbody);


thNome.innerHTML = "Nome"; // da nome aos elementos do cabeçário da tabela
thPeso.innerHTML = "Peso";
thAltura.innerHTML = "Altura";
thIMC.innerHTML = "IMC";

function evento(event) {
    event.preventDefault();
    let valorNome = document.querySelector("#nome-input").value;
    let valorPeso = document.querySelector("#peso-input").value;
    let valorAltura = document.querySelector("#altura-input").value;
    let valorIMC = valorPeso / (valorAltura * valorAltura);

    tdNome.setAttribute("id", "tdNome");
    tdPeso.setAttribute("id", "tdPeso");
    tdAltura.setAttribute("id", "tdAltura");
    tdIMC.setAttribute("id", "tdIMC");

    document.querySelector("#tdNome").value = valorNome;
    document.querySelector("#tdPeso").value = valorPeso;
    document.querySelector("#tdAltura").value = valorAltura;
    document.querySelector("#tdIMC").value = valorIMC;
}

/*  Tentei rodar e deu nisso, não sei qual é o problema. Se puder me explicar na próxima aula seria ótimo.

    Uncaught TypeError: Cannot set properties of null (setting 'value')
    at evento (script.js:42:45)
    at HTMLButtonElement.onclick (AulaUm.html:14:52)
   */


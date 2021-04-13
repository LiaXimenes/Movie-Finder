const adcfilmes = document.querySelector(".movies");

let promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promessa.then(processarfilmes);


function processarfilmes(resposta){
    console.log(resposta);
    for(let i = 0; i < resposta.data.length; i++){
        adcfilmes.innerHTML +=  
        `<div class="movie">
            <img src="${resposta.data[i].imagem}">
            <div class="title">${resposta.data[i].titulo}</div>
            <button onclick="comprar(${resposta.data[i].id})">
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
      </div>`
    
    }
}


function comprar(){
    let nomecomprador = prompt("Qual seu nome?");
    let quantidadeingresso = prompt("Quantos ingressos?");


    const enviar = { nome: nomecomprador, quantidade: quantidadeingresso}

const requisisao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${resposta.data[i].id}/ingresso`)

    requisisao.then(confirmado)
    requisisao.catch(falhou)

}

function confirmado(){
    alert("Seus ingressos foram comprados com sucesso!")
}

function falhou(){
    alert("Os ingressos estão esgotados!")
}



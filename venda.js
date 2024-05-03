let valorto = 0; // soma total de todos os produtos


let nome = ''; // var pros nomes dos produtos
let valor = 0; // var pros preços dos produtos
let quatidade = 0; // var pra quantidade dos produtos
let dade = 0; // var pro calculo da quantidade
let soma = 0; // var pro calculo do valor dos produtos

let nome2 = '';
let valor2 = 0;
let quatidade2 = 0;
let soma2 = 0;
let dade2 = 0;

let nome3 = '';
let valor3 = 0;
let quatidade3 = 0;
let soma3 = 0;
let dade3 = 0;


var vlt = document.getElementById('vlt'); // var pra mostar o valor total dos produtos


if(valorto < 0){ // pra caso o valor total fique negativo 
valorto = 0;
}




function it1(){ // quanto "por no carrinho" for ativo

var car = document.getElementById('car1'); // localizar o local do produtos
quatidade = document.getElementById('nu1'); // puchando a quantidade
quatidad1 = Number(quatidade.value); // tranformando o valor da quantidade em numero


if(quatidade <= 0) { // checar se a algo no pedio do produto
// caso estiver com nada n ira acontecer nada
}
    
else if(quatidade > 0){ // caso estiver com algo 
car1.style.display = 'block'; // reset pro "REMOVER"
   
    
    

valorto = valorto - soma; // parte do 'REMOVER'
valor = valor + 3.50; // valor do produto
dade = dade + quatidade; // preparo pro calculo do valor



soma = valor * dade; // calculo do valor
nome = 'cerveja';// nome do produto



valorto = valorto + soma; // adicionhando o valor dp produtos no valor total
vlt.innerHTML = valorto; // colocando o valor no seu local



// inprimindo a "receita do produto" no seu local
car1.innerHTML = ` 
<div class="ui">

    <div class="ifo">
        <strong>Item: `+nome+`</strong>

        <strong>R$: `+soma+`</strong>
    
        <strong>Unidades: `+dade+`</strong>
    </div>
  

    <p onclick="rev1()">Remover</p>
</div>`;

};

valor = 0; // reset do valor para evitar bug
quatidade = 0; // reset da quantidade para evitar bug


}

function rev1(){ // quanto "REMOVER" for ativado
    valorto = valorto - soma1; // subitrair o valor do produtos do valor tatol 
    vlt.innerHTML = valorto; // mostrando o valor total sem o valor do produto

    soma1 = 0; // reset calculo da quantidade do produto
    dade1 = 0; // reset calculo do valor do produto


    car1.style.display = 'none'; // apagando a inpressão da "receita do produto"
    
}




function it2(){

var car2 = document.getElementById('car2');
quatidade2 = document.getElementById('nu2'); 
quatidade2 = Number(quatidade2.value); 


if(quatidade2 <= 0) {
}
    
else if(quatidade2 > 0){
    car2.style.display = 'block'; 
   
    
    

valorto = valorto - soma2; 
valor2 = valor2 + 9.00; 
dade2 = dade2 + quatidade2; 



soma2 = valor2 * dade2; 
nome2 = 'Jujuba';
    
    
valorto = valorto + soma2;
vlt.innerHTML = valorto; 


    
    
    car2.innerHTML = `
    <div class="ui">
    
        <div class="ifo" >
            <strong>Item: `+nome2+`</strong>
    
            <strong>R$: `+soma2+`</strong>
        
            <strong>Unidades: `+dade2+`</strong>
        </div>
      
    
        <p onclick="rev2()">Remover</p>
    </div> `;

};

valor2 = 0;
quatidade2 = 0;

}

function rev2(){
    valorto = valorto - soma2;
    vlt.innerHTML = valorto;

     dade2 = 0;
     soma2 = 0;
        
     car2.style.display = 'none';
    }





 function it3(){
var car3 = document.getElementById('car3');
quatidade3 = document.getElementById('nu3'); 
quatidade3 = Number(quatidade3.value);


if(quatidade3 <= 0) {
}
    
 else if(quatidade3 > 0){
    car3.style.display = 'block'; 

    
    

valorto = valorto - soma3; 
valor3 = valor3 + 7.00; 
dade3 = dade3 + quatidade3; 

   
soma3 = valor3 * dade3; 
nome3 = 'bolacha';
    
    
valorto = valorto + soma3;
vlt.innerHTML = valorto; 

    

    
    car3.innerHTML = `
    <div class="ui">
    
        <div class="ifo" >
            <strong>Item: `+nome3+`</strong>
    
            <strong>R$: `+soma3+`</strong>
        
            <strong>Unidades: `+dade3+`</strong>
        </div>
      
    
        <p onclick="rev3()">Remover</p>
    </div> `;

};

valor3 = 0;
quatidade3 = 0;

 }

 function rev3(){    
    valorto = valorto - soma3;
    vlt.innerHTML = valorto;

     dade3 = 0;
     soma3 = 0;
        
     car3.style.display = 'none';
}






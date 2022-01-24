var select = document.getElementById("metodo");
//chaves

var ocultar = document.getElementById("ocultar");
var chave = document.querySelector("#chave");


//botao enviar
 var enviar = document.querySelector("#enviar");

 //mensagem resultado
 var mensagem=document.querySelector("#digite");

 //input resultado
 var resultado = document.querySelector("#resultado");

 //slelcionado os radios button
 var criptografar = document.querySelector("#criptografar");
 var decriptografar = document.querySelector("#decriptografar");

 // tirando a chave oculta
 select.addEventListener('change',  function(){
     if(select.value ==="cifra"){
         ocultar.style.display= "block";
       document.querySelector("body").style.backgroundColor = "#e5fafa";
     }else{
         ocultar.style.display = "none";
      document.querySelector("body").style.backgroundColor = "#F0FFF0";
     }
 });


//pegando o q o usuario digitou e atribuindo nas funções base64.js e cifraCesar.js, e retornando o resultado
enviar.addEventListener('click', function () {
    var texto = digite.value;

    if (criptografar.checked) { //se o radio buttom criptografar estiver selecionado ele faz >>
        if (selecionado.value == 'cifra') {
            resultado.value = cifraCesar(texto); //pega valor digitado e coloca no resultado
        }
        else {
            resultado.value = base64(texto);//pega valor digitado e coloca no resultado
        }
    }
    else {
        if (selecionado.value == 'cifra') {
            resultado.value = decodifCesar(texto); //mesma coisa q acima, só q com a função de descodificar
        }
        else {
            resultado.value = decodif64(texto);
        }
    }
});



// o codigo abaixo e para estudar bem

//function(){
//"cor":"Amarela", 
//"acesa": false,
//"acender": function(){
//    if(!this.acesa){
  //      this.acesa=true;
//    },
//}
//}
//esta m,uito relacionada a programação orientada a objetos
    //a cor, acesa, são tipos as APIS são criadas com base
   // em prientação a objetoS
   // API esse metos de busca e  retorna o acesso nos seus inputs
          

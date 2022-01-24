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
     }else{
         ocultar.style.display = "none";
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
          

const bntCriptografar = document.querySelector("#criptografar");
const bntDescriptografar = document.querySelector("#descriptografar");
const mensagem = document.querySelector("#mensagem");
//const resultado = document.querySelector("#resultado");
const img = document.querySelector("#img");
const mostra =document.querySelector(".mostra");





function criptografarMensagem(mensagem){
    mensagem = mensagem.replaceAll('a', 'ai');
    mensagem = mensagem.replaceAll('e', 'enter');
    mensagem = mensagem.replaceAll('i', 'imes');    
    mensagem = mensagem.replaceAll('o', 'ober');
    mensagem = mensagem.replaceAll('u',  'ufat');
    return mensagem;
}

function descriptografarMensagem(mensagem){
    mensagem = mensagem.replaceAll('enter', 'e');
    mensagem = mensagem.replaceAll('imes', 'i' );
    mensagem = mensagem.replaceAll('ai', 'a');
    mensagem = mensagem.replaceAll('ober', 'o');
    mensagem = mensagem.replaceAll('ufat', 'u');
    return mensagem;
}




bntCriptografar.addEventListener('click', ()=>{
    if(mensagem.value !== "" ){
        const result = criptografarMensagem(mensagem.value.toLowerCase());
        img.style.display='none';
        //resultado.style.display='flex';
        document.querySelector(".mostra").innerHTML = "";
       
        document.querySelector(".mostra").innerHTML = result;
        
        
    }
    
});

bntDescriptografar.addEventListener('click', ()=>{
    if(mensagem.value !== "" ){
        document.querySelector(".mostra").innerHTML = "";
        const result = descriptografarMensagem(mensagem.value.toLowerCase());
        img.style.display='none';
        document.querySelector(".mostra").innerHTML = result;
        console.log(result)
    }
    
});


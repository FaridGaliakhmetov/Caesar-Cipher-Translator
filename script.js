const arrLet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const arrNum = []; 
let input = document.querySelector('input');
let textarea = document.querySelector("textarea");
let exit = document.querySelector('.exit');
let c=0;
let d;
function shifr(){ 
    let b;
    
    for(let l=0; l<arrLet.length; l++){
      if(textarea.value[c] === arrLet[l]){
       c++; 
       b=Number(input.value);
       
       exit.innerHTML+=arrLet[l+b];
      }  
      if(textarea.value.length<exit.innerHTML.length){
        exit.innerHTML=exit.innerHTML.slice(0, -1);
        c--;
      } 
    }  
        
    
      
}

textarea.oninput = shifr;
/*
exit.innerHTML="farid";
exit.innerHTML=exit.innerHTML.slice(0, -1);
console.log(exit.innerHTML) */
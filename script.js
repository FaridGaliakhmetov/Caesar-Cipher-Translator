const arrLet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const sLet =   ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
let input = document.querySelector('input');
let textarea = document.querySelector("textarea");
let exit = document.querySelector('.exit');

function resultString(inputnum, string, array) {
  let str = "";
  let strIndex = 0;
  for (let i = 0; i < array.length; i++) {
     if (array[i] === string[strIndex] && strIndex < string.length){  
        let r = i+inputnum;
        if(r>= array.length){
          r = r-array.length;  
          str+= array[r];
          strIndex++;
          i=-1;
        } else {
          str+= array[r];
          strIndex++;
          i=-1;
        }  
      } else if(!(array[i]===string[strIndex]) && strIndex < string.length && i===25){
         
          str+= string[strIndex];
          strIndex++;
          i=-1;
     }      
  }
  return str;
}/*function resultString*/

function shifr(){ 
let w = Number(input.value);
  const small = resultString(w, textarea.value, sLet);
  const big   = resultString(w, small, arrLet);
  
  

  exit.innerHTML = big;  
    
}

textarea.oninput = shifr;
input.oninput = shifr;



































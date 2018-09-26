let meninos = ["Zézão", "Chicão", "Jão"];
let meninas = ["Mariazinha", "Chiquinha", "Josefinha"];

let i = 0;

while(i < meninos.length){
  let j = 0;

  while(j < meninas.length){
   
    console.log(`Casal: ${meninos[i]} e ${meninas[j]}`);
    j++;
  }

  i++;
}


// FOR

// for(let i = 0; i < meninos.length; i++){
//   for(let j = i+1; j< meninos.length; j++){
//     console.log(`par: ${meninos[i]} e ${meninos[j]}`);
//   }
// }
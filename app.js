import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
const valid = [
  "+",
  "-",
  "*",
  "/",
  "**",
  "^0.5",
  "persegi",
  "kubus",
  "tabung",
];

console.log('Operator : ' +valid);
rl.question('Pilih Operator : ', (operator) => {
  if (!valid.includes(operator)) {
    console.log('Invalid input operator');
    return rl.close()
  }
  if(operator == '^0.5' || operator == '**' || operator == "persegi" || operator == "kubus"){
    let a;
    operator == "persegi" || operator == "kubus" ?  a = 'sisi' :  a = 'angka';
    rl.question(`Masukan ${a} : `, (input1) => {
      const angka1 = Number(input1);
      //console.log(angka1);
      if (isNaN(angka1)) {
        console.log('Invalid input number');
        return rl.close();
      }
      const result = calculator(angka1, operator, 0);

      console.log(result);
      return rl.close()
    })
  } else {
    let a, b;
    operator == 'tabung' ? a = 'jari-jari' : a = 'angka';
    operator == 'tabung' ? b = 'tinggi' : a = 'angka2';
    rl.question(`Masukan ${a} : `, (input1) => {
      const angka1 = Number(input1);
      //console.log(angka1);
      if (isNaN(angka1)) {
        console.log('Invalid input number');
        return rl.close();
      }
      rl.question(`Masukan ${b} : `, (input2) => {
        const angka2 = Number(input2);
        //console.log(angka2);
        if (isNaN(angka2)) {
          console.log('Invalid input number');
          return rl.close();
        }

        const result = calculator(angka1, operator, angka2);

        console.log(result);
        return rl.close()
      })
    })
  }
})

function calculator(angka1, operator, angka2){
  if (operator === "+") return angka1 + angka2;
  else if (operator === "-") return angka1 - angka2;
  else if (operator === "*") return angka1 * angka2;
  else if (operator === "/") return angka1 / angka2;
  else if (operator === "^0.5") return Math.sqrt(angka1);
  else if (operator === "**" || operator === "persegi") return angka1 ** 2;
  else if (operator === "kubus") return angka1 ** 3;
  else if (operator === "tabung") return (Math.PI * (angka1 ** 2)) * angka2;
}

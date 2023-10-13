//https://chat.openai.com/share/bc72ec66-8a0c-4dbb-abfd-3742f58074a1

{
  //soal satu
  let angka1 = 2;
  let angka2 = 3;
  let result =
    angka1 > angka2 ? "Angka pertama lebih besar." : "Angka kedua lebih besar.";
  console.info(result);
}

{
  //soal dua
  let bilangan = -12;
  if (bilangan < 0) {
    bilangan *= -1;
  }
  console.info(`Nilai mutlaknya =  ${bilangan}`);
}
{ //soal tiga
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Masukkan angka pertama: ", (input1) => {
    rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
      rl.question("Masukkan angka kedua: ", (input2) => {
        const angka1 = parseFloat(input1);
        const angka2 = parseFloat(input2);

        let hasil;

        switch (operator) {
          case "+":
            hasil = angka1 + angka2;
            break;
          case "-":
            hasil = angka1 - angka2;
            break;
          case "*":
            hasil = angka1 * angka2;
            break;
          case "/":
            hasil = angka1 / angka2;
            break;
          default:
            console.log("Operator tidak valid.");
            rl.close();
            return;
        }

        console.log(`Hasil: ${hasil}`);

        rl.close();
      });
    });
  });
}

{//soal empat
    const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka: ', (input) => {
  const angka = parseInt(input);

  if (angka <= 1) {
    console.log('Bukan bilangan prima.');
    rl.close();
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${angka} adalah bilangan prima.`);
  } else {
    console.log(`${angka} bukan bilangan prima.`);
  }

  rl.close();
});

}

{
//soal lima
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka: ', (input) => {
  const angka = parseFloat(input);

  if (angka > 0) {
    console.log(`${angka} adalah angka positif.`);
  } else if (angka < 0) {
    console.log(`${angka} adalah angka negatif.`);
  } else {
    console.log(`${angka} adalah nol.`);
  }

  rl.close();
});
}

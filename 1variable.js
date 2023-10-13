// https://chat.openai.com/share/91bd31cb-4db8-4544-9cf1-65689316d786

//soal 1
let birthYear = 2003;
console.log(`my birth Year is ${birthYear}`);

//soal 2
let price = 2300;
let quantity = 4;
let total = price * quantity;
console.log(`the price is ${price}`);

//soal 3
const originalString = "reversed";
const reversedString = "desrever";
console.log(reversedString);

{
  //perbaikan
  const originalString = "reversed";
  let reversedString = "";

  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
  }

  console.log(reversedString);
}

//soal 4
const celsius = 23;
const fahrenheit = celsius * 9/5 + 32;
console.log("the temperature is " + fahrenheit);

//soal 5
const userInput =  prompt ("input text di sini = " )
const charCount  = userInput.length;
console.log("the chat count is " + charCount);

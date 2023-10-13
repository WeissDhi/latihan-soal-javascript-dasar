{
  for (let num = 1; num <= 20; num++) {
    console.log(num);
  }
}
console.warn(" ");
{
  for (let num = 1; num <= 20; num++) {
    if (num % 2 === 0) {
      console.log(num);
    } else {
      continue;
    }
  }
}
console.warn(" ");
{
    for (let num = 1; num <= 15; num++) {
        if (num % 2 !== 0) {
          console.log(num);
        } else {
          continue;
        }
      }
}

console.warn(" ");

{
    for (let num = 1; num <= 50; num++) {
        if (num % 5 === 0) {
          console.log(num);
        } else {
          continue;
        }
      }
}
console.warn(" ");
{
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
          let hasil = i * j;
          console.log(`${i} x ${j} = ${hasil}`);
        }
      }

}
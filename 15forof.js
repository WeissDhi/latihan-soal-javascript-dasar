{
  //soal 1
  const names = ["Ardhi", "Jamal", "Aisyah", "Siti"];
  for (const name of names) {
    console.log(name);
  }
}

{
  //soal 2
  const texts = ["Teuku Ardhi", "Firmansyah Al Ghozali"];
  for (const text of texts) {
    console.log(text.length);
  }
}

{
  //soal 3
  const orang = {
    name: "Jamal",
    kelas: "3IA28",
    npm: 51421472,
  };

  for (const prop in orang) {
    const value = orang[prop];
    console.log(`Properti ${prop} memiliki nilai ${value}`);
  }
}

{
  //soal 4
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

{
  //soal 5
  const text = "17 Agustus tahun 45 itulah hari kemerdekaan kita";
  const charToCount = "5"; // Karakter yang ingin dihitung

  let count = 0; // Inisialisasi jumlah karakter yang dihitung

  for (const character of text) {
    if (character === charToCount) {
      count++;
    }
  }

  console.log(`${charToCount} dalam teks: ${count}`);
}

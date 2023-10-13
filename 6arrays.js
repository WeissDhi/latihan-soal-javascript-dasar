//https://chat.openai.com/share/63ff93a0-d2c6-4e51-accd-8e326b813c4c
//https://chat.openai.com/c/03dc5f7f-ce31-4afd-9f03-a8ae8323cb6f

//SOAL SATU
const kota1 = ["Jakarta", "Palangka Raya", "Tangerang"];
const kota2 = ["Bekasi", "Depok", "Bogor", "Bandung"];

//menggabung semua array
const semuaKota = [...kota1, ...kota2];
console.table(semuaKota);
{
  //cara 2
  const semuaKota = kota1.concat(kota2);
  console.table(semuaKota);
}

//SOAL DUA
semuaKota[3] = "ibukota";
console.table(semuaKota);

//SOAL TIGA
semuaKota.unshift("Garut");
semuaKota.push("Sukabumi");
console.table(semuaKota);

{
  //kalau make delete akan menghasilkan undefined jadi ga bener bener ilang
  // delete semuaKota[0];
  // delete semuaKota[8];
}

//delete garut
semuaKota.splice(0, 1); //start dari index 0 ngapus sebanyak 1
semuaKota.splice(7, 1);
console.table(semuaKota);

//SOAL EMPAT
semuaKota.sort();
console.table(semuaKota);

//SOAL LIMA
if (semuaKota.includes("Surabaya")) {
  console.log("Surabaya ditemukan");
} else {
  console.log("Surabaya tidak ditemukan");
}

//https://chat.openai.com/share/09d5fcec-d1d8-4f79-ba6e-cbe3915181d9

{
  //soal satu
  let bilangan = 17;
  const result = bilangan % 2 === 1 ? "Ganjil" : `Genap`;
  console.info(result);
}

{
  //soal dua
  const umur = 14;
  let izinRemaja = umur >= 13;
  if (izinRemaja === true) {
    console.info(`Selamat datang, Remaja`);
  } else {
    console.info("Anda belum cukup umur");
  }

  //ternary operatornya
  const age = 14;
  let teenagerPass = age >= 13 ? "Selamat datang, Remaja" : "Anda belum cukup umur";
  console.info(teenagerPass);
}

{ //soal tiga
    let saldo = 14000;
    let pinjamBuku = false;
    const syarat =  saldo > 0 && pinjamBuku !==true ? "Anda dapat meminjam buku" : "Anda tidak dapat meminjam buku";
    console.info(syarat);
}

{
    //soal empat
    const uangYangDimiliki = 20000;
    const totalBelanja = 1500;
    const transaksi = uangYangDimiliki > totalBelanja ? 'Transaksi berhasil' : 'Maaf, uang anda tidak mencukupi'
    console.info(transaksi);
}

{ //soal lima
    const nilaiFisika = 80;
    const nilaiMatematika = 90;
    const lulus = nilaiMatematika > 70 && nilaiFisika > 60 ? "Selamat anda lulus Ujian" : "Maaf, Anda belum lulus ujian"
    console.info(lulus);
}



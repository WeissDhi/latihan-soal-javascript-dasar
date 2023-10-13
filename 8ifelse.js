//https://chat.openai.com/share/41595156-6e0f-433d-b9dd-75377ff3ef83
{//soal 1
    const bilangan = -4;

    if (bilangan % 2 === 0) {
        console.log("bilangan ini adalah genap");
    } else if (bilangan % 2 !== 0) {
        console.log("bilangan ini adalah ganjil");
    } else {
        console.log("bilangan ini adalah 0");
    }
}

{//soal 2
    const age = 19;
    if(age <18){
        console.log("anda belum bisa mengakses fitur ini"); 
    }else{
        console.log("anda sudah bisa mengakses fitur ini");
    }
}

{//soal 3
    const tahun = 2024;
    if ((tahun %4 == 0 || tahun %100 !=0)&& (tahun %400==0)){
        console.log(`tahun ${tahun} adalah tahun kabisat`);
    }else{
        console.log(`tahun ${tahun} adalah bukan tahun kabisat`);
    }

}

{//soal 4
    const kata = "kemek";
    let isPalindrome = true;
    
    // Mengonversi kata menjadi huruf kecil dan menghapus spasi (jika ada)
    const cleanKata = kata.toLowerCase().replace(/ /g, '');
    
    // Mengecek apakah kata tersebut adalah palindrome
    for (let i = 0; i < cleanKata.length / 2; i++) {
        if (cleanKata[i] !== cleanKata[cleanKata.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    
    if (isPalindrome) {
        console.log(`"${kata}" adalah palindrome.`);
    } else {
        console.log(`"${kata}" bukan palindrome.`);
    }
}

{//soal 5
    const berat = 10;
    if(berat<=1){
    console.log(`Biaya pengiriman adalah 10.000`);
}else{
    console.log(`Biaya pengiriman adalah 20.000`);
    }
}

{
    const angkaRandom = Math.floor(Math.random() * 100) + 1; // Menghasilkan angka acak antara 1 dan 100
    let tebakanPengguna;
    let jumlahTebakan = 0;
    
    while (tebakanPengguna !== angkaRandom) {
        tebakanPengguna = parseInt(prompt("Tebak angka (antara 1 dan 100):"));
    
        if (isNaN(tebakanPengguna)) {
            alert("Masukkan angka yang valid!");
        } else {
            jumlahTebakan++;
            if (tebakanPengguna < angkaRandom) {
                alert("Tebakan Anda terlalu rendah, coba lagi!");
            } else if (tebakanPengguna > angkaRandom) {
                alert("Tebakan Anda terlalu tinggi, coba lagi!");
            } else {
                alert(`Selamat, Anda berhasil menebak angka! Jumlah tebakan yang diperlukan: ${jumlahTebakan}`);
            }
        }
    }
    
    
}
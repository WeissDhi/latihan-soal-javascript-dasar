//lhttps://chat.openai.com/share/1bd953e4-51e5-4fe3-b135-9bd54135ec87

{//soal 1
    function sapaan(greeting, name){
        console.log(`${greeting} ${name}`);
    }
    sapaan("Selamat Pagi", "Teuku");
}

{//soal 2
    function pengurangan (num1, num2){
        const hasil = num1 -num2;
        console.log(`hasilnya adalah ${hasil}`);
    }
    pengurangan(18,9); 
}

{//soal 3
    function perkalian (num1, num2){
        const hasil = num1 *num2;
        console.log(`hasil perkalian adalah ${hasil}`);
    }
    perkalian(19,3);
}

{//soal4
    function pemangkatan(base,exponent){
        hasil = base ** exponent;
        console.log(`hasil dari ${base}^${exponent} = ${hasil}`);
    }
    pemangkatan(3,2);
}

{//soal5
    function penentu(number){
        if (number % 2 === 0) {
            console.log("bilangan ini adalah genap");
        } else if (number % 2 !== 0) {
            console.log("bilangan ini adalah ganjil");
        } else {
            console.log("bilangan ini adalah 0");
        }
    }
    penentu(4);
}
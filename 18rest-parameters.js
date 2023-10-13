//https://chat.openai.com/share/056b24a4-46df-4d9e-840c-d8ec0d4d530c

{//soal 1
    function calculateAverage(name, ...nilai){
        let total = 0;
        for(let i = 0; i < nilai.length; i++){
            total   += nilai[i];
        }
        let rataRata = total / nilai.length;
        console.log(`Rata-rata ${name} adalah ${rataRata}` );
    }

    calculateAverage("Pendapatan", 5000,2500,2340,1000,7000,4000)

}

{//soal 2
    function combineArrays(array,...arr){
        let totalArrays = array.concat(...arr);
        console.log(totalArrays);
    }
    combineArrays([1,2,3,45,5,6,18,"Teuku","Ardhi"], ["Alyaa","Aliifah","Febrianti",18,23,4],[12.4,'HIMTI','LITBANG','UNIVERSITAS','CENGKARENG']);
}

{//soal 3
    //with max value
    function findMaxValue(...value){
        const maxValue = Math.max(...value);
        console.log(maxValue)
    }
    findMaxValue(17,18,20,-2,99,51,32,14,512)
}

{//soal 4
    function calculateTotal(...angka){
        let total= 0;
        for(let i = 0; i < angka.length; i++){
            total   += angka[i];
        }
        console.log(total);
    }
    calculateTotal(12,12,12,14,14,15,15,16,19);
}

{//soal5
    function concatenateWords(word, ...words){
        let gabungan = word.concat(" ",...words);
        console.log(gabungan);
    }
    concatenateWords("Teuku","Ardhi",' Firmansyah',' Al Ghozali');

    function concatenateWords(word, ...words){
        let gabungan = word+' '+ words;
        console.log(gabungan);
    }
    concatenateWords("Teuku","Ardhi"," Firmansyah"," Al Ghozali");
} 
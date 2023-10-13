//https://chat.openai.com/share/39e159b1-ff40-4ee6-b240-660f484b4819

{//soal1
    function luas(panjang, lebar){
        return (panjang*lebar);
    }
    console.log(luas(17, 5));

    const x = luas(19, 5);
    console.log(x);
}

{//soal2
    function hitungArray(arr){
        let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += arr[i]
            }
            return total;
    }

    const arrayX = [2,21,42,523,2];
    const  totalArray = hitungArray(arrayX);
    console.log(totalArray);
}
{//soal3
    function isPalindrome(word) {
        // Menghapus spasi dan mengubah huruf menjadi lowercase
        const cleanedWord = word.toLowerCase().replace(/\s/g, '');
        
        // Membalikkan kata
        const reversedWord = cleanedWord.split('').reverse().join('');
        
        // Memeriksa apakah kata asli dan kata yang dibalik sama
        return cleanedWord === reversedWord;
    }
    
    const kata1 = "radar";
    const kata2 = "kasur rusak";
    
    console.log(`Apakah ${kata1} palindrom? : ${isPalindrome(kata1)}`);
    console.log(`Apakah ${kata2} palindrom? : ${isPalindrome(kata2)}`);
    }


{//soal 4
    function isOdd(arr){
        const odd = [];
        for (const num of arr) {
            if (num % 2 === 1) {
              odd.push(num);
            }
          }
          return odd;
    }

    const array = [1,3,4,6,7,9];
    const arrayOdd = isOdd(array);
    console.log(arrayOdd);
}

{//soal5
    const mahasiswa ={
        nama : "Teuku",
        usia : 20,
        jurusan : 'informatika',
    }
    const mahasiswa2 ={
        nama : "Ardhi",
        usia : 20,
        jurusan : 'Matematika',
    }

    function information(obj){
        console.log(obj.nama, obj.usia, obj.jurusan)
    }
    information(mahasiswa);
    information(mahasiswa2)

   
}
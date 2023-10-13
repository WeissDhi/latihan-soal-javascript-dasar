//https://chat.openai.com/share/fb7464aa-2013-45a8-a722-2dee13b734f7
{//soal 1
    const person={
        name : "Teuku",
        age : 21
    }
    for (const property in person){
        console.log(property);
    }
}

{//soal 2
    const car={
     brand: "Toyota",
     model :'Supra',
     year : 2000
    }
    for (const property in car){
        console.log(`${property} : ${car[property]}`);
    }

}

{ //soal 3
    const fruits = ['Mango', 'Banana', 'Apple'];
    for(const index in fruits){
        console.log(`${index}`);
    }
}

{ //soal 4
    const colors =['red', 'green', 'blue'];
    for (const color in colors){
        console.log(`index-${color} : color ${colors[color]}`);
    };

}

{ //soal 6
    let studentScores = {
        John: 90,
        Sarah: 88,
        Michael: 75,
        Emily: 95,
        Daniel: 82
    };
    for (const student in studentScores){
        const score = studentScores[student];
        if(score > 85){
        console.log(`${student} : ${score}`);}
    }
}

{ //soal 7
    const angka = [2,5,8,9,12];
    for (const genap in angka){
     const bilangan = angka[genap];
     if(bilangan %2===0){
        console.log(bilangan);
    }
    }
}

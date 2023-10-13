{
  //checking array apakah kosong
  const arr = [];
  if (0 in arr) {
    console.log("Array kosong: ");
  } else {
    console.log("Array tidak kosong");
  }
}

{
  //checking harga tidak undefined
  const laptop = {
    brand: "HP",
    model: "Pavilion",
    price: undefined,
  };
  if (laptop.price !== undefined) {
    console.log(`harga laptop ini adalah: ${laptop.price}`);
  } else {
    console.log(`Laptop ini belum ada harganya`);
  }
}

{
  //checking null di dalam array
  const values = [42, null, "Hello", undefined, 7];

  for (let i = 0; i < values.length; i++) {
    if (values[i] === null || values[i] === undefined) {
      console.log(`Nilai di indeks ${i} adalah null atau undefined.`);
    } else {
      console.log(`Nilai di indeks ${i} adalah ${values[i]}.`);
    }
  }
  //lebih simple mengecek adakah null

  console.log(`Apakah di array values terdapat null: ${values.includes(null)}`);
}

{


    const fruits = ["Apple", "Banana", null, "Orange", undefined];

    // Bagaimana Anda dapat menentukan apakah indeks 2 dan 4 di dalam array "fruits" adalah nilai yang valid?
    // if (fruits[2] !== undefined && fruits[2] !== null && fruits[4] !== undefined && fruits[4] !== null) {
    //   console.log(`Nilai dari array ini adalah valid: ${fruits[2]} ${fruits[4]}`);
    // } else {
    //   console.log(`Nilai dari array ini tidak valid.`);
    // }
    if(fruits.includes(null) || fruits.includes(undefined)){
        console.log(`Nilai dari array tersebut ada yang invalid`);
    }else{
        console.log(`Nilai dari array tersebut valid`);
    }
        
    
}

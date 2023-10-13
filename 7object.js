// https://chat.openai.com/share/a6db4939-5655-48eb-be97-2c1d9203c1ca;

const mobil = {
  merk: "Toyota",
  tahun: 2020,
};

console.log(mobil.merk);
console.log(mobil["merk"]);

mobil.tahun = 2022;
console.log(`tahun: ${mobil.tahun}`);

const buku = {
  judul: "Harry Potter",
  penulis: "J.K. Rowling",
  tahun: 1997,
};
console.log(buku.penulis);

{
  const mahasiswa = {
    nama: " Teuku Ardhi",
    nilai: [90, 87, 90],
    status: function () {
      const totalNilai = this.nilai.reduce((total, nilai) => total + nilai, 0);
      const rataRata = totalNilai / this.nilai.length;

      return rataRata >= 70 ? `lulus` : `tidak lulus`;
    },
  };
  console.log("Nama Mahasiswa:", mahasiswa.nama);
  console.log("Nilai Mata Kuliah:", mahasiswa.nilai);
  console.log("Status Mahasiswa:", mahasiswa.status());
}

{
  const restoran = {
    nama: "Warung Makan Enak",
    lokasi: "Jakarta",
    menu: ["Nasi Goreng", "Mie ayama", "Pangsit", "Baso"],
    tambahMenu: function (makanBaru) {
      this.menu.push(makanBaru);
    },
  };
  console.log(`menu awal restoran adalah ${restoran.menu}`);
  restoran.tambahMenu("Tetelan");
  console.log(`menu setelah ditambahkan adalah ${restoran.menu}`);
}

{
  const kendaraan = {
    jenis: "mobile",
    kecepatan: 79,
    tambahKecepatan: function (tambahinKecepatan) {
      this.kecepatan += tambahinKecepatan;
    },
  };
  console.log("Kecepatan Awal Kendaraan:", kendaraan.kecepatan);
  kendaraan.tambahKecepatan(20);
  console.log("Kecepatan Setelah Ditambahkan:", kendaraan.kecepatan);
}

{
  const barang = {
    nama: "Laptop",
    harga: 5000000,
    jumlah: 3,
    hitungTotal: function () {
      return this.harga * this.jumlah;
    },
  };

  console.log("Total Harga Barang:", barang.hitungTotal());
}

{
  const karyawan = {
    nama: "Alice",
    gaji: 5000000,
    tunjangan: {
      makanan: 1000000,
      transportasi: 500000,
    },
    hitungPendapatan: function () {
      return this.gaji + this.tunjangan.makanan + karyawan.tunjangan.transportasi;
    },
  };

  console.log("Pendapatan Total Karyawan:", karyawan.hitungPendapatan());
}

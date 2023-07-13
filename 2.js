const PijarFood = (harga, voucher, jarak, pajak) => {
  let potongan = 0;
  let biayaAntar = 5000;
  let pajakTambahan = 0;
  let subtotal = 0;

  if (voucher === 'PIJARFOOD5' && harga >= 50000) {
    potongan = Math.min(harga * 0.5, 50000); //maka akan ambil yang minimal
  } else if (voucher === 'DITRAKTIRPIJAR' && harga >= 25000) {
    potongan = Math.min(harga * 0.6, 30000); //maka akan ambil yang minimal
  }

  if (jarak > 2) {
    biayaAntar = biayaAntar + ((jarak - 2) * 3000);
  } 

  if (pajak) {
    pajakTambahan = harga * 0.05;
  }

  subtotal = harga - potongan + biayaAntar + pajakTambahan;

  console.log(`Harga      : ${harga}`);
  console.log(`Potongan   : ${potongan}`);
  console.log(`Biaya Antar: ${biayaAntar}`);
  console.log(`Pajak      : ${pajakTambahan}`);
  console.log(`SubTotal   : ${subtotal} (harga - potongan + biaya antar + pajak)`);
};

PijarFood(75000, 'PIJARFOOD5', 5, true);

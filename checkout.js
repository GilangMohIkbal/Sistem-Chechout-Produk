function hitungCheckout(harga, jumlah, isMember) {
  if (
    !Number.isFinite(harga) ||
    harga <= 0 ||
    !Number.isInteger(jumlah) ||
    jumlah <= 0 ||
    typeof isMember !== "boolean"
  ) {
    return "Input tidak valid";
  }

  const subtotal = harga * jumlah;

  let diskon = 0;

  if (isMember === true) {
    diskon = subtotal * 0.1;
  } else {
    diskon = 0;
  }

  const totalSetelahDiskon = subtotal - diskon;

  let ongkir = 0;

  if (totalSetelahDiskon >= 250000) {
    ongkir = 0;
  } else {
    ongkir = 15000;
  }

  const totalBayar = totalSetelahDiskon + ongkir;

  return totalBayar;
}

console.log("Test 1:", hitungCheckout(100000, 2, true));

console.log("Test 2:", hitungCheckout(100000, 2, false));

console.log("Test 3:", hitungCheckout(249999, 1, false));

console.log("Test 4:", hitungCheckout(250000, 1, false));

console.log("Test 5:", hitungCheckout(260000, 1, false));

console.log("Test 6:", hitungCheckout(100000, 0, false));

console.log("Test 7:", hitungCheckout(100000, 1.5, true));

console.log("Test 8:", hitungCheckout(-100000, 1, false));

console.log("Test 9:", hitungCheckout(260000, 1, true));

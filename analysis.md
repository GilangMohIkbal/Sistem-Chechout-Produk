# Analisis Masalah — Sistem Checkout Produk Sederhana

## 1. Deskripsi Masalah

Program ini bertujuan menghitung total pembayaran produk berdasarkan harga, jumlah pembelian, dan status member.

Sistem akan melakukan validasi input, menghitung subtotal, menentukan diskon dan ongkos kirim, kemudian menghasilkan total pembayaran sesuai aturan yang ditentukan.

## 2. Problem Decomposition

Masalah checkout dibagi menjadi beberapa bagian kecil agar lebih mudah diselesaikan:

1. **Input:** Menerima harga, jumlah produk, dan status member.
2. **Validasi:** Memastikan input memenuhi ketentuan.
3. **Subtotal:** Menghitung harga dikalikan jumlah produk.
4. **Diskon:** Menentukan diskon berdasarkan status member.
5. **Total setelah diskon:** Mengurangi subtotal dengan diskon.
6. **Ongkos kirim:** Menentukan biaya pengiriman berdasarkan total setelah diskon.
7. **Total pembayaran:** Menjumlahkan total setelah diskon dan ongkos kirim.
8. **Output:** Menghasilkan rincian perhitungan atau pesan error.

## 3. Input

Program menerima tiga parameter:

- **harga:** Angka positif (lebih dari 0).
- **jumlah:** Bilangan bulat positif (minimal 1).
- **isMember:** Status member berupa boolean (`true` atau `false`).

Jika input tidak valid, program mengembalikan pesan "Input tidak valid" dan menghentikan perhitungan.

## 4. Process

Perhitungan dilakukan secara berurutan:

1. Validasi harga dan jumlah.
2. Hitung `subtotal = harga × jumlah`.
3. Tentukan diskon:
   - Member: 10% dari subtotal.
   - Non-member: 0%.
4. Hitung `totalSetelahDiskon = subtotal - diskon`.
5. Tentukan ongkos kirim:
   - Jika total setelah diskon ≥ Rp250.000, ongkir Rp0.
   - Jika kurang dari Rp250.000, ongkir Rp15.000.
6. Hitung `totalBayar = totalSetelahDiskon + ongkir`.

## 5. Output

Jika input valid, fungsi mengembalikan hasil perhitungan yang terdiri dari:

- Subtotal
- Diskon
- Ongkos kirim
- Total pembayaran

Jika input tidak valid, fungsi mengembalikan pesan "Input tidak valid".

## 6. Aturan Keputusan (Decision)

Terdapat tiga keputusan utama:

1. **Apakah input valid?** Jika tidak, hentikan perhitungan.
2. **Apakah pembeli member?** Jika ya, berikan diskon 10%.
3. **Apakah total setelah diskon ≥ Rp250.000?** Jika ya, gratis ongkir. Jika tidak, ongkir Rp15.000.

## 7. Pattern Recognition

Setiap transaksi menggunakan pola perhitungan yang sama, yaitu:

- Subtotal dihitung dari harga × jumlah.
- Diskon ditentukan berdasarkan status member.
- Ongkos kirim ditentukan berdasarkan batas minimal Rp250.000 setelah diskon.
- Total pembayaran merupakan total setelah diskon ditambah ongkir.

Pola tersebut dapat digunakan kembali untuk transaksi dengan input yang berbeda.

## 8. Abstraction

Program hanya menggunakan data yang diperlukan untuk perhitungan, yaitu harga, jumlah produk, dan status member.

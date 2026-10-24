# Testing — Sistem Checkout Produk Sederhana

## 1. Tujuan Pengujian

Pengujian dilakukan untuk memastikan fungsi `hitungCheckout(harga, jumlah, isMember)` menghitung total pembayaran sesuai aturan diskon dan ongkos kirim, serta menolak input yang tidak valid.

## 2. Metode Pengujian

Pengujian dilakukan dengan memanggil fungsi menggunakan berbagai input, lalu membandingkan **hasil yang diharapkan (expected)** dengan **hasil yang muncul saat program dijalankan (actual)**.

Cara menjalankan:

```bash
node checkout.js
```

**Catatan:** Kolom actual di bawah berasal dari menjalankan **kode referensi `checkout.js`**. Jika menggunakan implementasi sendiri, jalankan kodenya dan perbarui kolom actual serta status sesuai hasil yang benar-benar muncul.

## 3. Skenario dan Hasil Pengujian

| No. | Skenario                                                                         | Input `hitungCheckout(harga, jumlah, isMember)` | Expected            | Actual (kode referensi) | Status |
| --- | -------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------- | ----------------------- | ------ |
| 1   | Pembeli member                                                                   | `hitungCheckout(100000, 2, true)`               | `195000`            | `195000`                | Lulus  |
| 2   | Pembeli non-member                                                               | `hitungCheckout(100000, 2, false)`              | `215000`            | `215000`                | Lulus  |
| 3   | Total setelah diskon di bawah Rp250.000                                          | `hitungCheckout(249999, 1, false)`              | `264999`            | `264999`                | Lulus  |
| 4   | Total setelah diskon tepat Rp250.000                                             | `hitungCheckout(250000, 1, false)`              | `250000`            | `250000`                | Lulus  |
| 5   | Total setelah diskon di atas Rp250.000                                           | `hitungCheckout(260000, 1, false)`              | `260000`            | `260000`                | Lulus  |
| 6   | Jumlah produk 0                                                                  | `hitungCheckout(100000, 0, false)`              | `Input tidak valid` | `Input tidak valid`     | Lulus  |
| 7   | Jumlah produk pecahan                                                            | `hitungCheckout(100000, 1.5, true)`             | `Input tidak valid` | `Input tidak valid`     | Lulus  |
| 8   | Harga negatif (tidak valid)                                                      | `hitungCheckout(-100000, 1, false)`             | `Input tidak valid` | `Input tidak valid`     | Lulus  |
| 9   | Member dengan subtotal di atas batas, tetapi total setelah diskon di bawah batas | `hitungCheckout(260000, 1, true)`               | `249000`            | `249000`                | Lulus  |

Delapan skenario pertama memenuhi jenis pengujian yang diminta assignment. Skenario kesembilan merupakan pengujian tambahan untuk memastikan ongkir ditentukan dari **total setelah diskon**, bukan subtotal.

## 4. Contoh Perhitungan Manual

Untuk skenario 9:

- Harga = Rp260.000, jumlah = 1, member = `true`.
- Subtotal = Rp260.000 × 1 = **Rp260.000**.
- Diskon = 10% × Rp260.000 = **Rp26.000**.
- Total setelah diskon = Rp260.000 − Rp26.000 = **Rp234.000**.
- Karena Rp234.000 kurang dari Rp250.000, ongkir = **Rp15.000**.
- Total pembayaran = Rp234.000 + Rp15.000 = **Rp249.000**.

## 5. Output Terminal

```text
Test 1: 195000
Test 2: 215000
Test 3: 264999
Test 4: 250000
Test 5: 260000
Test 6: Input tidak valid
Test 7: Input tidak valid
Test 8: Input tidak valid
Test 9: 249000
```

## 6. Kesimpulan

seluruh **9 dari 9 skenario** menghasilkan output yang sesuai dengan expected result. Pengujian mencakup kondisi member, non-member, batas gratis ongkir, dan input tidak valid.

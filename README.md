# Mini Project — Sistem Checkout Produk Sederhana

**Nama:** Gilang Moh. Ikbal  
**Materi:** Problem-Solving Essentials for Developers  
**Bahasa pemrograman:** JavaScript (Vanilla JavaScript)

## Deskripsi

Proyek ini merupakan latihan penerapan _computational thinking_, flowchart, pseudocode, dan JavaScript untuk menyelesaikan studi kasus checkout satu jenis produk.

Program menerima tiga input: harga produk, jumlah produk yang dibeli, dan status member. Program kemudian memvalidasi input serta menghitung subtotal, diskon, ongkos kirim, dan total pembayaran.

## Aturan Perhitungan

1. Harga harus berupa angka positif (`> 0`) dan jumlah harus berupa bilangan bulat positif (`>= 1`). Jika input tidak valid, fungsi mengembalikan `"Input tidak valid"` dan menghentikan perhitungan.
2. **Subtotal** = harga × jumlah.
3. Jika pembeli adalah **member**, diskon sebesar **10% dari subtotal**; jika bukan, diskon **0**.
4. **Total setelah diskon** = subtotal − diskon.
5. Jika total setelah diskon **>= Rp250.000**, ongkir **Rp0**; jika kurang dari itu, ongkir **Rp15.000**.
6. **Total pembayaran** = total setelah diskon + ongkir.

## Cara Menjalankan

1. Pastikan [Node.js](https://nodejs.org/) sudah terpasang.
2. Buka folder proyek melalui VS Code atau terminal.
3. Jalankan perintah:

   ```bash
   node checkout.js
   ```

4. Lihat hasil pemanggilan fungsi yang ditampilkan di terminal.

Fungsi utama program:

```javascript
hitungCheckout(harga, jumlah, isMember);
```

Contoh penggunaan:

```javascript
console.log(hitungCheckout(100000, 2, true)); // 195000
```

Pada contoh tersebut, subtotal Rp200.000 dikurangi diskon Rp20.000, lalu ditambah ongkir Rp15.000.

## File Proyek

| File               | Keterangan                                                             |
| ------------------ | ---------------------------------------------------------------------- |
| `analysis.md`      | Analisis masalah, input–proses–output, keputusan, pola, dan abstraksi. |
| `flowchart.drawio` | Diagram alur yang dapat diedit di draw.io.                             |
| `flowchart.png`    | Hasil ekspor diagram alur.                                             |
| `pseudocode.md`    | Langkah penyelesaian yang ditulis dalam pseudocode.                    |
| `checkout.js`      | Implementasi fungsi checkout menggunakan JavaScript.                   |
| `testing.md`       | Skenario dan hasil pengujian program.                                  |
| `README.md`        | Informasi proyek dan petunjuk menjalankan program.                     |

## Pengujian

Program diuji menggunakan beberapa skenario, termasuk member dan non-member, nilai di bawah/tepat/di atas batas gratis ongkir, jumlah nol, jumlah pecahan, dan harga tidak valid. Rincian input, hasil yang diharapkan, dan hasil pengujian dicatat di [`testing.md`](testing.md).

## Penggunaan AI

ChatGPT digunakan sebagai **partner belajar dan reviewer** untuk membantu memahami instruksi tugas, memeriksa flowchart dan pseudocode, serta memberikan contoh implementasi JavaScript, pengujian, dan dokumentasi. Logika dan keluaran program tetap perlu diperiksa berdasarkan aturan assignment dan hasil pengujian sendiri.

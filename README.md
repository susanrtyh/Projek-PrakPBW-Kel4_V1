# Projek-PrakPBW-Kel4_V1

Aplikasi To-Do List Berbasis Web

1. Deskripsi Proyek

Aplikasi To-Do List berbasis web ini merupakan sebuah sistem sederhana yang dirancang untuk membantu pengguna dalam mencatat, mengelola, dan memantau daftar tugas harian. Aplikasi ini menyediakan fitur autentikasi pengguna berupa registrasi dan login, sehingga setiap pengguna dapat memiliki data tugas yang tersimpan secara terpisah.

Selain itu, aplikasi ini mendukung pengelolaan tugas secara dinamis, seperti penambahan, penandaan status selesai, penghapusan, serta pencarian dan penyaringan tugas. Seluruh data disimpan secara lokal menggunakan mekanisme penyimpanan pada browser, sehingga aplikasi dapat dijalankan tanpa memerlukan koneksi ke server atau basis data eksternal.

2. Teknologi yang Digunakan

Dalam pengembangan aplikasi ini digunakan beberapa teknologi dasar dalam pengembangan web, yaitu:
 - HTML (HyperText Markup Language)
   Digunakan untuk membangun struktur dan elemen tampilan halaman web.
 - CSS (Cascading Style Sheets)
   Digunakan untuk mengatur tampilan visual dan tata letak antarmuka pengguna.
  -JavaScript (Vanilla JavaScript)
   Digunakan untuk mengelola logika aplikasi, manipulasi DOM, serta interaksi pengguna.
  -Web Storage API (localStorage)
   Digunakan sebagai media penyimpanan data secara lokal pada browser tanpa memerlukan database eksternal.
  
  Aplikasi ini tidak menggunakan framework tambahan sehingga seluruh implementasi dilakukan secara langsung menggunakan JavaScript murni.

  3. Alur Penggunaan Aplikasi
3.1 Registrasi dan Login

Pengguna terlebih dahulu melakukan registrasi dengan memasukkan username dan password. Setelah berhasil terdaftar, pengguna dapat melakukan login untuk mengakses fitur utama aplikasi.

3.2 Penambahan Tugas

Setelah login, pengguna dapat menambahkan tugas dengan mengisi beberapa informasi, yaitu:
1. Judul tugas
2. Deskripsi tugas (opsional)
3. Tanggal
4. Tingkat prioritas (Low, Medium, High)

Tugas yang ditambahkan akan langsung tersimpan dan ditampilkan pada daftar tugas.

3.3 Pengelolaan Tugas

Setiap tugas yang ditampilkan dapat dikelola melalui beberapa aksi, yaitu:
- Menandai tugas sebagai selesai
- tugas dari daftar

Tugas yang telah selesai akan ditandai secara visual dengan perubahan tampilan (misalnya garis coret).

3.4 Pencarian dan Penyaringan

Aplikasi menyediakan fitur untuk mempermudah pencarian dan pengelompokan tugas, yaitu:
1. Pencarian (Search): untuk menemukan tugas berdasarkan judul
2. Filter: untuk menampilkan tugas berdasarkan status (semua, selesai, belum selesai)

3.5 Penyimpanan Data

Seluruh data pengguna dan tugas disimpan menggunakan localStorage pada browser. Dengan demikian, data tetap tersimpan meskipun halaman dimuat ulang, selama tidak dilakukan penghapusan data pada browser.

4. Tujuan Pengembangan

Tujuan dari pengembangan aplikasi ini adalah:
- Memahami konsep dasar pengembangan aplikasi web
- Mempelajari manipulasi DOM menggunakan JavaScript
- Mengimplementasikan operasi CRUD (Create, Read, Update, Delete)
- Memanfaatkan penyimpanan data lokal menggunakan localStorage




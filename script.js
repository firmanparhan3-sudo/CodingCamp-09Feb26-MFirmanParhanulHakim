// 1. Fitur Sambutan Nama di Home
function setUserName() {
    let name = prompt("Halo! Masukkan nama kamu agar kami bisa menyapamu:");
    if (name === null || name === "") {
        name = "Stranger";
    }
    document.getElementById("welcome-text").innerText = `Hi ${name}, Welcome To Website`;
}

// Jalankan fungsi sapaan saat halaman dimuat
setUserName();

// 2. Validasi & Penampilan Hasil Form
const form = document.getElementById("message-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman reload

    // Ambil data dari input
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const msg = document.getElementById("message-input").value;

    // Tampilkan ke area hasil (Validasi sederhana otomatis oleh browser 'required')
    document.getElementById("res-name").innerText = name;
    document.getElementById("res-email").innerText = email;
    document.getElementById("res-phone").innerText = phone;
    document.getElementById("res-msg").innerText = msg;

    alert("Pesan Berhasil Dikirim!");
});

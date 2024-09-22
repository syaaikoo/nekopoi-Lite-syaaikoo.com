let users = {}; // Objek untuk menyimpan username dan password

document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-reminder').style.display = 'block'; // Pengingat untuk pendaftaran
    animateTransition();
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    animateTransition();
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan username dan password
    users[username] = password;
    alert("Pendaftaran berhasil! Silakan login.");
    
    // Tampilkan form login
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Verifikasi username dan password
    if (users[loginUsername] && users[loginUsername] === loginPassword) {
        window.location.href = "https://syaaikoo.github.io/";
    } else {
        alert("Username tidak ditemukan, harap daftar jika merasa penguna baru");
    }
});

function animateTransition() {
    const forms = document.querySelectorAll('.card');
    forms.forEach(form => {
        form.classList.add('fade-in');
        setTimeout(() => form.classList.remove('fade-in'), 300);
    });
}

function showErrorPopup(event) {
    event.preventDefault(); // Mencegah tautan default
    alert("Maaf, tampaknya ada yang error saat aku koding, jadi akun yang bisa kamu hubungi cuma akun Instagramku saja:v (padahal gapunya jir)");
}
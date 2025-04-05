import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { firebaseConfig } from './firebase-config.js';

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Đăng ký người dùng
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Đăng ký thành công
            const user = userCredential.user;
            alert('Đăng ký thành công!');
            window.location.href = "login.html";  // Chuyển đến trang đăng nhập
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Lỗi: ' + errorMessage);
        });
});

// Đăng nhập người dùng
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Đăng nhập thành công
            const user = userCredential.user;
            alert('Đăng nhập thành công!');
            window.location.href = "index.html";  // Chuyển đến trang chủ
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Lỗi: ' + errorMessage);
        });
});

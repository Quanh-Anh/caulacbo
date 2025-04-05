// app.js
import { db } from './firebase-config.js';

const addPostBtn = document.getElementById('addPostBtn');
const sendNotificationBtn = document.getElementById('sendNotificationBtn');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const messageBox = document.getElementById('messageBox');
const postSection = document.getElementById('posts');
const notificationList = document.getElementById('notificationList');
const userPosts = document.getElementById('userPosts');
const memberList = document.getElementById('memberList');

// Hiển thị bài đăng cho người dùng
const showPosts = async () => {
    const snapshot = await db.collection('posts').get();
    snapshot.forEach(doc => {
        const post = doc.data();
        const postElement = document.createElement('div');
        postElement.textContent = post.content;
        userPosts.appendChild(postElement);
    });
};

// Đăng bài (Quản lý)
addPostBtn.addEventListener('click', () => {
    const postContent = prompt('Nhập nội dung bài đăng');
    if (postContent) {
        db.collection('posts').add({
            content: postContent,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
});

// Gửi thông báo (Quản lý)
sendNotificationBtn.addEventListener('click', () => {
    const notificationContent = prompt('Nhập thông báo');
    if (notificationContent) {
        db.collection('notifications').add({
            content: notificationContent,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
});

// Nhận thông báo (Trưởng ban)
const getNotifications = async () => {
    const snapshot = await db.collection('notifications').get();
    snapshot.forEach(doc => {
        const notification = doc.data();
        const notificationElement = document.createElement('li');
        notificationElement.textContent = notification.content;
        notificationList.appendChild(notificationElement);
    });
};

// Gửi tin nhắn (Trưởng ban)
sendMessageBtn.addEventListener('click', () => {
    const message = messageBox.value;
    if (message) {
        db.collection('messages').add({
            message: message,
            sentAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
});

// Hiển thị bài đăng cho người dùng khi tải trang
showPosts();

// Hiển thị thông báo khi Trưởng ban vào trang
getNotifications();

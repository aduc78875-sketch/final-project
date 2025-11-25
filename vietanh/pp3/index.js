const logo = document.querySelector('.navbar1')
    logo.addEventListener('click', function() {
        location.reload();
})
const userAvatar = document.getElementById('userAvatar');
const dropdownMenu = document.getElementById('dropdownMenu');
const btnProfile = document.getElementById('btnProfile');
const btnLogout = document.getElementById('btnLogout');

userAvatar.addEventListener('click', function(e) {
    e.stopPropagation(); // Dừng lan truyền , chỉ khi click vào avt mới hiện lên menu 
    dropdownMenu.classList.toggle('active');//
});

document.addEventListener('click', function(e) {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

btnProfile.addEventListener('click', function() {
    alert('Xem thông tin cá nhân');
    dropdownMenu.classList.remove('active');
});

btnLogout.addEventListener('click', function() {
    const confirmed = confirm('Bạn có chắc muốn đăng xuất?');
    if (confirmed) {
        alert('Đăng xuất thành công!');
        dropdownMenu.classList.remove('active');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        dropdownMenu.classList.remove('active');
    }
}); 

// ========== 3. TÌM KIẾM GIÁO VIÊN ==========
const searchBox = document.querySelector('.search-box2');
const teacherCards = document.querySelectorAll('.teacher-card');

searchBox.addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    
    teacherCards.forEach(function(card) {
        const teacherName = card.querySelector('.teacher-name').textContent.toLowerCase();
        
        if (teacherName.includes(searchText)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// ========== 4. GỬI TIN NHẮN ==========
const sendMessageBtns = document.querySelectorAll('.send-message-btn');

sendMessageBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const teacherCard = btn.closest('.teacher-card');
        const teacherName = teacherCard.querySelector('.teacher-name').textContent;
        
        // Chuyển đến trang messages
        window.location.href = `pp2.html?teacher=${teacherName}`;
    });
});
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
// ĐỔI MÀU TRÁI TIM
document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.getElementById('heartIcon');
    
    if (heartIcon) {
        heartIcon.addEventListener('click', function() {
            // Toggle active class (đổi màu đỏ)
            this.classList.toggle('active');
            
            // Thêm animation heartBeat
            this.classList.add('animating');
            
            // Xóa animation sau 300ms
            setTimeout(() => {
                this.classList.remove('animating');
            }, 300);
        });
    }
});
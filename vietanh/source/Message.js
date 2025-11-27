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
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('btn-cm2');
    const chatMessagesArea = document.querySelector('.chat-messages-area');
    
    // Kiểm tra các phần tử có tồn tại không
    if (!messageInput || !sendButton || !chatMessagesArea) {
        console.error('Không tìm thấy các phần tử cần thiết!');
        return;
    }

    // Hàm lấy thời gian hiện tại theo định dạng 12h
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        return `${hours}:${minutes} ${ampm}`;
    }

    // Hàm tạo tin nhắn mới
    function createMessage(text) {
        // Tạo container chính
        const messageWrapper = document.createElement('div');
        messageWrapper.style.cssText = `
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 20px;
            margin-top: 25px;
            margin-left: 15px;
        `;
        
        // Tạo phần thời gian
        const timeElement = document.createElement('p');
        timeElement.style.cssText = `
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 12px;
            color: #6B7280;
            margin: 0 0 6px 0;
            padding-right: 16px;
        `;
        timeElement.textContent = getCurrentTime();
        
        // Tạo bubble tin nhắn
        const messageBubble = document.createElement('div');
        messageBubble.style.cssText = `
            max-width: 490px;
            min-width: 60px;
            border-radius: 8px;
            background-color: #0F172A;
            color: white;
            padding: 10px 16px;
            word-wrap: break-word;
            word-break: break-word;
            margin-right: 16px;
        `;
        
        const messageText = document.createElement('p');
        messageText.style.cssText = `
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
        `;
        messageText.textContent = text;
        
        // Ghép các phần lại
        messageBubble.appendChild(messageText);
        messageWrapper.appendChild(timeElement);
        messageWrapper.appendChild(messageBubble);
        
        return messageWrapper;
    }

    // Hàm gửi tin nhắn
    function sendMessage() {
        const text = messageInput.value.trim();
        
        // Kiểm tra nội dung có rỗng không
        if (text === '') {
            messageInput.focus();
            return;
        }
        
        // Tạo và thêm tin nhắn mới vào chat
        const newMessage = createMessage(text);
        chatMessagesArea.appendChild(newMessage);
        
        // Xóa nội dung input
        messageInput.value = '';
        
        // Cuộn xuống tin nhắn mới với hiệu ứng mượt
        setTimeout(() => {
            chatMessagesArea.scrollTo({
                top: chatMessagesArea.scrollHeight,
                behavior: 'smooth'
            });
        }, 50);
        
        // Focus lại vào input để tiếp tục gõ
        messageInput.focus();
    }

    // Gắn sự kiện click cho nút Send
    sendButton.addEventListener('click', function(e) {
        sendMessage();
    });

    // Gắn sự kiện nhấn Enter để gửi
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn xuống dòng
            sendMessage();
        }
    });

    // Cuộn xuống tin nhắn mới nhất khi trang load
    chatMessagesArea.scrollTop = chatMessagesArea.scrollHeight;
    
    // Focus vào input khi trang load
    messageInput.focus();
}); 

const logo = document.querySelector('.navbar1')
    logo.addEventListener('click', function() {
        location.reload();
    })
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
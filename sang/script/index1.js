
document.getElementById("btn3").addEventListener("click", function (e) {
   
    e.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let userName = document.getElementById("users").value.trim();
    let email = document.getElementById("Email").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let confirm = document.getElementById("confirm").value.trim();


    if (!firstName || !lastName || !userName || !email || !pass || !confirm) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

   
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        alert("Email không hợp lệ!");
        return;
    }

   
    if (pass !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    
    const user = {
        firstName,
        lastName,
        userName,
        email,
        pass
    };

    let list = JSON.parse(localStorage.getItem("users")) || [];
    list.push(user);
    localStorage.setItem("users", JSON.stringify(list));

    alert("Đăng ký thành công!");

   
    window.location.href = "shopping-cart.html";
});
const searchInput = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", function () {
    let value = searchInput.value.trim();
    if (value !== "") {
        window.location.href = "index4.html"; 
    }
});


searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let value = searchInput.value.trim();
        if (value !== "") {
            window.location.href = "checkout.html";
        }
    }
});




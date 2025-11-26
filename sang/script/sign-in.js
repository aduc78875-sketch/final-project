
document.addEventListener("DOMContentLoaded", () => {

    const btnLogin = document.getElementById("btn-sign-in");

    if (!btnLogin) return;

    btnLogin.addEventListener("click", function (e) {
        e.preventDefault();

        const userInput = document.getElementById("ID").value.trim();
        const passInput = document.getElementById("Password").value.trim();

      
        const saved = JSON.parse(localStorage.getItem("userAccount"));

        if (!saved) {
            alert("Chưa có tài khoản nào được đăng ký!");
            return;
        }

      
        const isCorrect =
            (userInput === saved.username || userInput === saved.email) &&
            passInput === saved.password;

        if (isCorrect) {
            alert("Đăng nhập thành công!");
            window.location.href = "design-course.html"; 
        } else {
            alert("Sai thông tin đăng nhập!");
        }
    });
});

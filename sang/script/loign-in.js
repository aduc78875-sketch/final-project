
document.addEventListener("DOMContentLoaded", () => {
    const btnCreate = document.getElementById("btn3");

    if (btnCreate) {
        btnCreate.addEventListener("click", function (e) {
            e.preventDefault(); 

            const first = document.getElementById("firstName").value.trim();
            const last = document.getElementById("lastName").value.trim();
            const username = document.getElementById("users").value.trim();
            const email = document.getElementById("Email").value.trim();
            const pass = document.getElementById("pass").value.trim();
            const confirm = document.getElementById("confirm").value.trim();

            if (!first || !last || !username || !email || !pass || !confirm) {
                alert("Không được để trống bất kỳ trường nào!");
                return;
            }

            if (pass !== confirm) {
                alert("Mật khẩu không trùng khớp!");
                return;
            }

            const userData = {
                firstName: first,
                lastName: last,
                username: username,
                email: email,
                password: pass
            };

            localStorage.setItem("userAccount", JSON.stringify(userData));

            alert("Đăng ký thành công!");

           
            window.location.href = "sign-in.html";
        });
    }

    const btnLogin = document.getElementById("btnLogin");

    if (btnLogin) {
        btnLogin.addEventListener("click", function (e) {
            e.preventDefault();

            const user = document.getElementById("loginUser").value.trim();
            const pass = document.getElementById("loginPass").value.trim();

            const saved = JSON.parse(localStorage.getItem("userAccount"));

            if (!saved) {
                alert("Chưa có tài khoản nào được đăng ký!");
                return;
            }

            if (user === saved.username && pass === saved.password) {
                alert("Đăng nhập thành công!");
                window.location.href = "trangchu.html";
            } else {
                alert("Sai username hoặc mật khẩu!");
            }
        });
    }
});

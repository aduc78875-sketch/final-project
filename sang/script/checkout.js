

const country = document.getElementById("country");
const state = document.getElementById("state");
const cardName = document.getElementById("card1");
const cardNumber = document.getElementById("number");
const expiry = document.getElementById("Expiry");
const cvv = document.getElementById("cvv");
const btnCheckout = document.getElementById("btn");

const creditOption = document.querySelector(".visa");
const paypalOption = document.querySelector(".paypau");

const creditInputs = document.querySelector(".credit"); 


creditOption.addEventListener("click", function () {
    creditInputs.style.display = "block";
    creditOption.querySelector("img").style.opacity = "1";
    paypalOption.querySelector("img").style.opacity = "0.3";
});

paypalOption.addEventListener("click", function () {
    creditInputs.style.display = "none";
    paypalOption.querySelector("img").style.opacity = "1";
    creditOption.querySelector("img").style.opacity = "0.3";
});

function validateCardInfo() {
    if (creditInputs.style.display !== "none") {
        if (!cardName.value.trim()) return alert("Vui lòng nhập tên trên thẻ");
        if (!/^\d{10}$/.test(cardNumber.value)) return alert("Card Number phải nhập 10 số");
        if (!expiry.value.trim()) return alert("Vui lòng nhập Ngày Hết Hạn");
        if (!/^\d{3}$/.test(cvv.value)) return alert("CVC/CVV phải nhập 3 số");
    }
    return true;
}

function validateLocation() {
    if (!country.value.trim() || !state.value.trim()) {
        alert("Vui lòng nhập Quốc gia và Bang 'Country and State'");
        return false;
    }
    return true;
}



btnCheckout.addEventListener("click", function () {
    if (!validateLocation()) return;

    if (creditInputs.style.display !== "none") {
        if (!validateCardInfo()) return;
    }

    alert("🎉 Thanh toán thành công! Đơn hàng của bạn đã được xác nhận.");
});
const profileBox = document.getElementById("profileBox");
const logoutMenu = document.getElementById("logoutMenu");
const logoutBtn = document.getElementById("logoutBtn");


profileBox.addEventListener("click", (e) => {
    e.stopPropagation(); 
    logoutMenu.style.display =
        logoutMenu.style.display === "block" ? "none" : "block";
});


logoutBtn.addEventListener("click", () => {
    window.location.href = "trangchu.html"; 
});


document.addEventListener("click", () => {
    logoutMenu.style.display = "none";
});


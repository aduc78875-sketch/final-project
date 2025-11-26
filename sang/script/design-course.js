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
function searchPage() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

  
    const pages = {
       
        "cart": "shopping-cart.html",
        "shopping": "shopping-cart.html",
        "shopping cart": "shopping-cart.html",
        "shop": "shopping-cart.html",

    };

    if (pages[keyword]) {
        window.location.href = pages[keyword];
    } else {
        alert("Không tìm thấy trang!");
    }
}

const categorybtn = document.querySelector('.btn-category')
categorybtn.addEventListener('click',() =>{
 console.log("🚀 ~ categorybtn:", categorybtn)   
 const categorylist = document.querySelector('.category-list')
 console.log("🚀 ~ categorylist:", categorylist)
 const detailList = document.querySelector(".detail-list")
 detailList.style.display = 'none';
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





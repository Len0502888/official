const menuBtn = document.getElementById("openBtn");
const sideMenu = document.getElementById("menuOverlay");

// 開く
menuBtn.addEventListener("click", ()=>{
  menuOverlay.classList.add("open");
});

// 閉じる
closeBtn.addEventListener("click", ()=>{
  menuOverlay.classList.remove("open");
});

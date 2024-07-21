let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");

    // Change logo image on toggle
    let logoImg = document.getElementById("logo-img");
    if (logoImg.src.includes("Logo.ico")) {
        logoImg.src = "assets/imgs/MayaVitaYazı.png"; 
        logoImg.style.width = "250px"; 
        logoImg.style.height = "150px"; 
    } else {
        logoImg.src = "assets/imgs/Logo.ico"; 
        logoImg.style.width = "50px"; 
        logoImg.style.height = "50px"; 
    }
};
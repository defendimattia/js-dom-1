const switchBtn = document.getElementById("switch-btn");
const lampImg = document.getElementById("lamp-img");

switchBtn.addEventListener("click",
    function () {
        if (lampImg.src.includes("white_lamp.png")) {
            lampImg.src = "img/yellow_lamp.png"
            lampImg.classList.add("fixed-img")
            switchBtn.innerHTML = "Spegni"
        }
        else {
            lampImg.src = "img/white_lamp.png";
            lampImg.classList.remove("fixed-img");
            switchBtn.innerHTML = "Accendi";
        }
    }
)

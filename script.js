const cups = document.querySelectorAll(".cup");
const bigcup = document.querySelector(".bigcup");
const liters = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");
const piggy = document.createElement("img");
piggy.src = "shaking-butt-happy.gif";


bigcup.addEventListener("click", function () {
    percentage.style.height = "0%";
    percentage.innerText = "";
    liters.innerText = "0l";
    cups.forEach((cup) => {
        cup.classList.remove("filled");
    });
    removePig(0);
});

cups.forEach((cup, idx) => {
    cup.addEventListener("click", function () {
        highlightCup(idx);
        removePig(idx);
    });
})

function highlightCup(idx) {
    cups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("filled");
            percentage.style.height = (idx + 1) * 12.5 + "%";
            percentage.innerText = (idx + 1) * 12.5 + "%";
            liters.innerText = (idx + 1) * 0.25 + "l";
        } else {
            cup.classList.remove("filled");
        }
    })
}

cups[7].addEventListener("click", function () {
    piggy.classList.add("succes");
    document.querySelector("body").appendChild(piggy);
});

function removePig(idx) {
    if (idx < 7) {
        document.querySelector("body").removeChild(piggy);
    }
}

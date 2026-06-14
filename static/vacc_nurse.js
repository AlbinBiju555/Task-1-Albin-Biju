const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        if (index === 0) {
            window.location.href = "/records";
        } else if (index === 1) {
            window.location.href = "/addrecord";
        } else if (index === 2) {
            window.location.href = "/updaterecord";
        } else if (index === 3) {
            window.location.href = "/schedule";
        }
    });
});

const accountBtn = document.getElementById("accountBtn");
const dropdown = document.getElementById("dropdown");

accountBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
});

window.addEventListener("click", (e) => {
    if (!accountBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});
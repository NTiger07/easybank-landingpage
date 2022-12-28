const hambtn = document.getElementById("hamBtn")
const mobilenav = document.getElementById("mobileNav")
hambtn.addEventListener('click', toggle)
mobilenav.style.display = "none"
hambtn.src = "../images/ham_icon.png"
function toggle() {
    if (mobilenav.style.display == "none") {
        mobilenav.style.display = "flex";
        hambtn.src = "../images/x_icon.png"
    }
    else {
        mobilenav.style.display = "none";
        hambtn.src = "../images/ham_icon.png"
    }
}

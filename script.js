const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

function toggleDropdown() {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
}

dropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
});

//close dropdown when clicking outside
document.documentElement.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});
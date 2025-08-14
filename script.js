// Toggle mobile menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Search functionality
function searchSite() {
    const query = document.getElementById("searchInput").value.trim();
    query ? alert("Searching for: " + query) : alert("Please enter a search term.");
}

// Active section highlighting
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-nav ul li a");

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`.main-nav ul li a[href*=${id}]`).classList.add("active");
            });
        }
    });
});

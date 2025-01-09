
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");
const contactBtn = document.getElementById("contact-btn");

let currentSection = 0;

links[currentSection].classList.add("active");

function scrollToSection(index) {
    sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
    links.forEach((value, key) => {
        if (key !== currentSection) links[key].classList.remove("active");
    });
    links[currentSection].classList.add("active");
}

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
    } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
    }
    scrollToSection(currentSection);
});
    
document.addEventListener("wheel", e => {
    e.preventDefault();
}, {passive: false});

contactBtn.addEventListener("click", () => {
    currentSection = 4;
    links.forEach((value, key) => links[key].classList.remove("active"));
});

links.forEach((link, key) => {
    link.addEventListener("click", () => {
        link.classList.add("active");
        const otherLinks= Array.from(links).filter(l => l !== link);
        otherLinks.forEach(l => l.classList.remove("active"));
        currentSection = key;
    });
})
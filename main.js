document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");
    let currentSection = 0, activeLink = 0;
    
    links[activeLink].classList.add("active");
    function scrollToSection(index) {
        sections[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        links.forEach((value, key) => {
            if (key !== activeLink) links[key].classList.remove("active"); 
        })
        links[activeLink].classList.add("active");
    }

    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
            activeLink++;
        } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
            activeLink--;
        }
        scrollToSection(currentSection);
    });
});

document.addEventListener("wheel", ev => {
    ev.preventDefault();
    
}, {passive: false});

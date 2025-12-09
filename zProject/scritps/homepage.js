document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerHTML = currentYear;
    document.getElementById("lastModified").innerHTML = document.lastModified;

   
    const header = document.querySelector("header");
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav");

    if (hamButton && navigation && header) {
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
            header.classList.toggle("open");
        });
    }

    const filterButtons = document.querySelectorAll("[data-category][role='button'], button[data-category]");
    const items = document.querySelectorAll("[data-category].card, [data-category].item, [data-category].place");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            items.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
    let visits = Number(localStorage.getItem("visits")) || 0;
    visits++;

    localStorage.setItem("visits", visits);

    const visitsEl = document.getElementById("visits");
    if (visitsEl) {
        visitsEl.textContent = `Page visits: ${visits}`;
    }


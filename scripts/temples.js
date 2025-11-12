const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;
const header = document.querySelector("header");


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    header.classList.toggle("open");
});
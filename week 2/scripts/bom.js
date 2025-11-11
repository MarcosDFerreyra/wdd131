const input = document.querySelector("favchap");
const button = document.querySelector("submit");
const ul = document.querySelector("list");
const li = document.createElement("li");
const buttonDelate = document.createElement("button");
li.textContent = input.value;
buttonDelate.textContent = "✖️";
li.append(buttonDelate);
list.append(li);

button.addEventListener("click", function () {
    if (input.value.trip() !== "") {
        
    }
});



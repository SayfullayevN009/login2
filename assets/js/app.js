const ochiq = document.querySelector(".b1");
const yopiq = document.querySelector(".b2");
const input = document.querySelector(".inputs");

ochiq.addEventListener("click", (e) => {
    e.preventDefault();

    yopiq.classList.add("bor");
    ochiq.classList.add("yuq");
    yopiq.classList.remove("yuq");
    ochiq.classList.remove("bor");
    input.setAttribute("type", "text");
    document.body.backgroundColor = "red";
});
yopiq.addEventListener("click", (e) => {
    e.preventDefault();

    yopiq.classList.add("yuq");
    ochiq.classList.add("bor");
    yopiq.classList.remove("bor");
    ochiq.classList.remove("yuq");
    input.setAttribute("type", "password");
});

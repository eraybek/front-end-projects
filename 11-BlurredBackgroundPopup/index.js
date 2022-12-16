const closeIconEl = document.querySelector(".close-icon");
const popupContainerEl = document.querySelector(".popup-container");
const mainContainerEl = document.querySelector(".main-container");
const btnEl = document.querySelector(".btn");
const popupBtnEl = document.querySelector(".popup-btn")
const inputEl = document.querySelector(".input");

btnEl.addEventListener("click", () => {
    mainContainerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    mainContainerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})
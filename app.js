const modalBody = document.querySelector(".popup");
const btnOpen = document.querySelector(".open-modal");
const btnClose = document.querySelector(".close-modal");

const openModal = () => {
    modalBody.style.display = "flex"
};
const closeModal = () => {
    modalBody.style.display = "none"
};


btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)
modalBody.addEventListener("click", closeModal)

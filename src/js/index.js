const principal = document.querySelector(".principal")

const microCard = document.getElementById("micro")

const sharryButton = document.getElementById("compartilhas")

sharryButton.addEventListener("click", () => {
    microCard.classList.remove("esconder")
})


const itensdoMenu = document.querySelectorAll("ul p");
const menuPrincipal = document.querySelector("header");
const crescerFigura = document.querySelectorAll(".fig")
const imgModal = document.querySelector(".imgModal")
const backgroundColor = document.querySelector(".backgroundColor")
const posicaoFixed1 = document.querySelector(".posicaoFixed1")
const posicaoFixed2 = document.querySelector(".posicaoFixed2")
const posicaoFixed3 = document.querySelector(".posicaoFixed3")
const like = document.querySelector(".like")
const likeModal = document.querySelector(".likeModal")

let passadorImg = " "

function larguraMenuPrincipal() {

    if (menuPrincipal.style.width === "120px") {
        menuPrincipal.style.width = "240px"
        itensdoMenu.forEach(item => {
            item.style.display = "inline"

        });
    } else {
        menuPrincipal.style.width = "120px"
        itensdoMenu.forEach(item => {
            item.style.display = "none"

        });
    }
}
crescerFigura.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        passadorImg = imagem
        abrirModal(passadorImg)
    })
})
function abrirModal(passadorImg) {
    const imagemModal = passadorImg.querySelector(".fig img")
    const imagemLike = passadorImg.querySelector(".like")
    imgModal.src = imagemModal.src
    backgroundColor.style.display = "flex"
    imgModal.style.width = "600px"
    posicaoFixed1.classList.remove("escondido")
    posicaoFixed2.classList.remove("escondido")
    posicaoFixed3.classList.remove("escondido")
    imagemLike.classList.contains("escondido") ? likeModal.classList.add("escondido") : likeModal.classList.remove("escondido")
}
function fecharModal() {
    backgroundColor.style.display = "none"

}

function proximaFigura() {
    passadorImg = passadorImg.nextElementSibling;
    abrirModal(passadorImg)
}

function anteriorFigura() {
    passadorImg = passadorImg.previousElementSibling;
    abrirModal(passadorImg)

}

imgModal.addEventListener("dblclick", () => {
    const likeAtual = passadorImg.querySelector(".like");
    likeAtual.classList.toggle("escondido")
    abrirModal(passadorImg)
})
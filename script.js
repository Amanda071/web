function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituit a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light mode adiconar a imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem de um cachorro border collie sentado no sofá com uma bolinha rosa na boca"
    )
  } else {
    //se tiver sem o light mode, manter a imagem colorida
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem de um cachorro boredr collie pulando em uma piscina de bolinha colorida"
    )
  }
}

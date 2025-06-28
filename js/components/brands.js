const brands = [
  "./assets/img/logos/logo.svg",
  "./assets/img/logos/logo-1.svg",
  "./assets/img/logos/logo-2.svg",
  "./assets/img/logos/logo-3.svg",
  "./assets/img/logos/logo-4.svg",
  "./assets/img/logos/logo-5.svg"
]

const marcas = document.querySelector(".brands")
brands.forEach(element => {
  const img = document.createElement("img")
  img.src = `${element}`
  marcas.appendChild(img)
});

export default brands
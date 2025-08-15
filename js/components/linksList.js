export default function NavLinks () {
  const links = [
    { name: "About Us", link: "#" },
    { name: "Services", link: "#" },
    { name: "Use Cases", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Request a quote", link: "#", class: "link__outline" }
  ]

  const listElement = (name, link, classe = "") => {
    return `<li><a href="${link}" class="${classe}">${name}</a></li>`
  }

  const linkList = document.getElementById('linkList')
  linkList.innerHTML = links.map(item => {
    return listElement(item.name, item.link, item.class)
  }).join('')
}
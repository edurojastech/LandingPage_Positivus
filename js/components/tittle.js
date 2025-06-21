const titles = [
  { 
    h2: 'Services', 
    p: `At our digital marketing agency, we offer a range of services to help businesses 
    grow and succeed online. These services include:` 
  },

  { 
    h2: 'Case Studies', 
    p: `Explore Real-Life 
    Examples of Our Proven Digital Marketing Success through Our Case Studies` 
  }
]

const classElement = document.querySelectorAll(".title__item")
titles.map((item, index) => {
  classElement[index].innerHTML =`
    <h2>${item.h2}</h2>
    <p>${item.p}</p>
  `
}).join('')
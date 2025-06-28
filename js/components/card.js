const cardRender = ({...props}) => {
  return `
    <div class="card ${props.bg}">
      <div class="card_description">
        <div>
          <h3 class="title__h3 ${props.bgTitle}">${props?.firstTitle}</h3> <br>
          <h3 class="title__h3 ${props.bgTitle}">${props?.secondTitle}</h3>
        </div>
        <a class="card__link" href="${props.toGoUrl}">
          <img src="./assets/img/cards/${props.light ? 'icon-light' : 'icon'}.svg" alt="clicar">
          <p style="color: ${props.light ? '#fff' : '#000'}">Lean More</p>
        </a>
      </div>

      <img src="${props.imgUrl}" alt="Search" class="card__img">
    </div>
  `
}

const cardsDesc = [
  {
    bg: 'bg-white', 
    bgTitle: 'bg-lemon', 
    imgUrl: "./assets/img/cards/img-3.svg", 
    toGoUrl: "#",
    firstTitle: 'Search engine',
    secondTitle: 'optimization'
  },

  {
    bg: 'bg-lemon', 
    bgTitle: 'bg-white', 
    imgUrl: "./assets/img/cards/img-5.svg", 
    toGoUrl: "#",
    firstTitle: 'Pay-per-click',
    secondTitle: 'optimization'
  },

  {
    bg: 'bg-dark', 
    bgTitle: 'bg-white', 
    imgUrl: "./assets/img/cards/img.svg", 
    toGoUrl: "#",
    firstTitle: 'Social Media',
    secondTitle: 'Marketing',
    light: true
  },

  {
    bg: null, 
    bgTitle: 'bg-lemon', 
    imgUrl: "./assets/img/cards/img-6.svg", 
    toGoUrl: "#",
    firstTitle: 'Email',
    secondTitle: 'Marketing'
  },

  {
    bg: 'bg-lemon', 
    bgTitle: 'bg-lemon', 
    imgUrl: "./assets/img/cards/img-4.svg", 
    toGoUrl: "#",
    firstTitle: 'Content',
    secondTitle: 'Creation'
  },

  {
    bg: 'bg-dark', 
    bgTitle: 'bg-white', 
    imgUrl: "./assets/img/cards/img-2.svg", 
    toGoUrl: "#",
    firstTitle: 'Analytics and',
    secondTitle: 'Tracking',
    light: true
  }
]


const classElement = document.querySelectorAll(".cardElement")
cardsDesc.map((item, index) => {
  classElement[index].innerHTML = cardRender({...item})
}).join('')

export default cardsDesc
import { people } from './people.js'

// elements
const nav = document.querySelector('nav')
const peopleDiv = document.querySelector('#people')

// nav
const btnAll = document.createElement('button')
btnAll.textContent = 'All Folks'
btnAll.addEventListener('click', () => displayFolks(people))

nav.appendChild(btnAll)

const btnF = document.createElement('button')
btnF.textContent = 'Female Folks'
btnF.addEventListener('click', () => {
  const arrayF = people.filter(person => person.gender === 'female')
  displayFolks(arrayF)
})

nav.appendChild(btnF)

const btnM = document.createElement('button')
btnM.textContent = 'Male Folks'
btnM.addEventListener('click', () => {
  const arrayM = people.filter(person => person.gender === 'male')
  displayFolks(arrayM)
})

nav.appendChild(btnM)

const btnX = document.createElement('button')
btnX.textContent = 'Other Folks'
btnX.addEventListener('click', () => {
  const arrayX = people.filter(person => person.gender !== 'male' && person.gender !== 'female')
  displayFolks(arrayX)
})

nav.appendChild(btnX)

// loop
function displayFolks(folks) {
  peopleDiv.innerHTML = ''

  folks.forEach(person => {
    // elements to create
    //  figure | img | figCaption | 
    let imgID = person.url.split('/')[person.url.split('/').length-2]
    
    let className;
    
    switch (person.gender) {
      case('female'):
        className = 'female'
        break;
      case('male'):
        className = 'male'
        break;
      default:
        className = 'other'
    }

    let html = `
      <figure class="${className}">
        <img src="https://starwars-visualguide.com/assets/img/characters/${imgID}.jpg" >
        <figCaption>${person.name}</figCaption>
      </figure>
    `

    peopleDiv.innerHTML += html
  })
}

displayFolks(people)
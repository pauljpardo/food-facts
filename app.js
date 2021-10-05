

const foodDiv = document.querySelector('#tile-container')
const button = document.getElementById('food-button')
let food;
button.addEventListener('click', () => {
  let allItems = document.querySelectorAll('#allFoods')
  for (let i = 0; i < allItems.length; i++){
    
    const foodContent = document.createElement('p')
    console.log(i)
    console.log(allItems.length)

    if (i === 0) {
      food = 'pizza'
    foodContent.innerText = 'Pizza is ____'
    } else if (i === 1) {
      food = 'tacos'
      foodContent.innerText = 'Tacos originate from ___'
    } else if (i === 2) {
      food = 'sushi'
      foodContent.innerText = 'Sushi originates from Japan...'
    } else if (i === 3) {
      food = 'risotto'
      foodContent.innerText = 'Risotto is '
    } else if (i === 4) {
      food = 'lasagna'
      foodContent.innerText = 'Lasagna is a famous'
    } else if (i === 5) {
      food = 'paella'
      foodContent.innerText = 'Paella originates from Spain.'
    } else if (i === 6) {
      food = 'gyros'
      foodContent.innerText = 'Gyros are a famous greek'
    } else if (i === 7) {
      food = 'padthai'
      foodContent.innerText = 'Pad Thai is a '
    }
    
    foodDiv.append(foodContent)
    allItems[i].remove();
  }

  // let foodOptions = document.getElementById('allFoods')
  // let food = foodOptions.options[foodOptions.selectedIndex].text

const url = `https://api.spoonacular.com/food/menuItems/search?apiKey=54f523904c8247bda81b6d9f2e9e1322&query=${food}`


fetch(url)
  .then((res) => { return res.json() })
  .then((resJSON) => {
    const number = (Math.floor(Math.random() * resJSON.menuItems.length))
    console.log(resJSON)
    renderFood(resJSON.menuItems[number])
  })
  
  
  const renderFood = (resJSON) => {
  console.log(resJSON)
  const foodTitle = document.createElement('h4')
  foodTitle.innerHTML = resJSON.title
    document.querySelector('#tile-container').append(foodTitle)
    foodTitle.className = 'item'

const foodImg = document.createElement('img')
    foodImg.src = `${ resJSON.image }`
    document.querySelector('#tile-container').append(foodImg)
    foodImg.className = 'item'
  }
})

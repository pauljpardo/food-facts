


const button = document.getElementById('food-button')
button.addEventListener('click', () => {
  let allItems = document.querySelectorAll('.item')
  for (let i = 0; i < allItems.length; i++){
    allItems[i].remove();
  }
  let foodOptions = document.getElementById('allFoods')
  let food = foodOptions.options[foodOptions.selectedIndex].text

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

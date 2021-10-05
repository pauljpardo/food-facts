


const button = document.getElementById('food-button')
button.addEventListener('click', () => {
  let allItems = document.querySelectorAll('.item')
  for (let i = 0; i < allItems.length; i++){
    
    const foodContent = document.createElement('p')
    
    if (i === [0]) {
      foodContent.innerText = 'Pizza is ____'
      console.log()
      //const pizzadiv = document.getElementById('pizza')
      //pizzadiv = document.createElement('div')
    } else if (i === [1]){ 
      
    } 
  
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



/*
; (function () {
  let tiles;
  let hasData;
  let hasLoaded;

  function renderTiles() {
    const fragment = new DocumentFragment()

    tiles.forEach((tile) => {
      const div = document.createElement('div')
      div.innerHTML = `
      <div class='tile-holder'>
      <a href='${tile.url}'> <img src='${tile.image}' class='image'></a>
      </div> 
      `
      fragment.appendChild(div)
    })
document.getElementById('tile-container').appendChild(fragment)
  }

  async function fetchImgData () {
  
  const res = await fetch(url)
  return res.json()
  }
  
  fetch()

  fetchImgData().then((data) => {
    hasData = true;
    tiles = data.menuItems
    if (hasLoaded) {
      renderTiles()
    }
  })

  window.addEventListener('DOMContentLoaded', (event) => {
    hasLoaded = true;
    if (hasData) {
      renderTiles()
    }
  })
    
}
)
*/

let food = 'pizza';
const url = `https://api.spoonacular.com/food/menuItems/search?apiKey=54f523904c8247bda81b6d9f2e9e1322&query=${food}`

console.log(url)
const foodList = document.getElementById('foods')
foodList.addEventListener('click', () => {
  document.querySelector(food).value
})

fetch(url)
  .then((res) => { return res.json() })
  .then((resJSON) => {
    renderFood(resJSON.menuItems[2]);
  })
  
  
const renderFood = (resJSON) => {
  const foodTitle = document.createElement('h4')
  foodTitle.innerHTML = resJSON.title
  document.querySelector('#tile-container').append(foodTitle)

  }
  

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
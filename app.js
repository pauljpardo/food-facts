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
  const url = `https://api.spoonacular.com/food/menuItems/search?apiKey=54f523904c8247bda81b6d9f2e9e1322&query=pizza`
  const res = await fetch(url)
  return res.json()
  }
  
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
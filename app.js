

const foodDiv = document.querySelector('#tile-container')
const button = document.getElementById('food-button')
let food;
button.addEventListener('click', () => {
  let allItems = document.querySelectorAll('#allFoods')

  


  // for (let i = 0; i < allItems.length; i++){
   
    const foodContent = document.createElement('p')
    
    console.log(allItems.length)

  const id = document.querySelector('#allFoods').value
  
    if (id === 'pizza') {
      food = 'pizza'
      foodContent.innerText = "Pizza was not always the delicacy it is today. Flatbreads with toppings is an idea that had been around for a long time, even in Greek, Roman and Egyptian eras; around the first century B.C. a Roman poet was found to have written about circles of bread that is thought to look like pizza. In 18th century Naples is when the pizza we think about today was developed, however this type of food was considered a cheap simplistic food because at first all that was used was the dough, garlic and maybe one more ingredient. Modern pizza was born when italians introduced tomatoes to it that would give it it's signature flavor and became a household favorite."
    } else if (id === 'tacos') {
      food = 'tacos'
      foodContent.innerText = 'Tacos as we know today is a mix of Mexican tastes along with international influences. Tacos are thought to come from Mexico, long before the Spanish arrived. Ancient Mexicans used freshly made, soft, flat corn tortillas and gave them with fillings like fish and cooked organs. It was a staple meal that provided vital nutrients and energy to those who consumed it. In the late 1920s Mexican immigrants started to adapt the traditional taco into a more americanized version, which has a less spicy filling such as ground beef and chicken, and eventually would adopt using ingredients such as cheddar cheese, lettuce and tomato. This became known as the ultimate taco to Americans whose traditional cuisine favored more subtle flavors.'
    } else if (id === 'sushi') {
      food = 'sushi'
      foodContent.innerText = 'Contrary to popular belief, Sushi actually originates from China and not Japan. Sushi originates from an old Chinese dish named narezushi; a dish that consisted of fermented rice and salted fish, may not sound like the most appetizing meal however it was highly functional as we must remember this was where keeping food fresh and edible was a daily challenge, and narezushi was very effective at being a consistent meal. This dish even dates back to the 2nd Century BC. Modern day sushi really began to take place in the 1800s but it was often cooked as this was still prior to being able to keep raw food fresh for long, however a chef named Hanaya Yohei changed this when he came up with a sliver of fish on top of sticky rice, which today is what we know as Nigiri. Sushi became popular in the U.S. and the Western world in the 1960s when middle class citizens started to try sushi and began loving it, it would be adapted in many ways and would eventually result in what we call Sushi today.'
    } else if (id === 'risotto') {
      food = 'risotto'
      foodContent.innerText = 'Risotto is defined as a northern Italian dish with rice and a creamy texture. Interestingly enough, as you may or may not know rice is not often associated with Italian food and that is because it was not introduced to Italy, Sicily and Spain until the 14th century by the Arabs. Due to the Mediterranean climate with high humidity, the rice that would be grown in this area would be short and medium-grained rice. The recipe that resembles todays risotto was one that was published in 1829, which included roasting the rice with butter and onion, followed by adding broth little by little until it reached a creamy consistency.'
    } else if (id === 'lasagna') {
      food = 'lasagna'
      foodContent.innerText = 'Lasagna is a famous wide, flat pasta dish and is a very old dish. Lasange (plural for Lasanga) originated from Italy, traditionally the dough for the pasta was made in Southern Italy with semolina and water, and in North Italy, substituted semolina for flour and eggs due to it not being available in the North. The oldest Lasanga recipe is dated in the 13th century, however the original recipes did not include tomatoes as they were not yet known to Europeans, and many Europeans believed that tomatoes were poisonous. Instead it just consisted of different cheeses. It wasnt until the 1880s where recipes can be found in Italian cookbooks that featured tomato sauce and became what it is today.'
    } else if (id === 'paella') {
      food = 'paella'
      foodContent.innerText = 'Paella is perhaps the most famous dish to come from Spain. If you havent already tried it I emplore you to find your nearest spanish restaurant and give it a try; my family originates from Spain so it was made in my house countless times. Paella first was originally made by farmers and farm labourers, cooked over a wood fire for a quick lunchtime meal. Paella is typically cooked with rice, chicken, green peppers, onions, shrimps, scallops, and the list does not really end since there are so many different variations of it. However, when it was first invented it was mostly cooked with rice, tomatoes, onions, rabbit or duck could also have been added, and chicken was for a special occasion, with a touch of saffron for the yellow coloring it provides. Traditional Paella was always eaten straight out of the pan with each person using their own wooden spoon, this is how it is typically served in authentic restaurants.'
    } else if (id === 'gyros') {
      food = 'gyros'
      foodContent.innerText = 'Gyros in todays world are the current popular greek sandwich on pita bread, usually paired with lamb, lettuce, tomato, and tzaiki sauce. Although delicious, this sandwich has actually been deemed to have been created as recent as the 1970s out of New York City by greek immigrants opening their own restaurants. Greek historians believe the origin of the actual gyro meat comes from the army of Alexander the great, who skewered meet on knives and cooked it over a fire by turning it. '
    } else if (id === 'padthai') {
      food = 'padthai'
      foodContent.innerText = 'Funny enoough, Pad Thai is a recently new dish and even is the youngest dish on this list. In the late 1930s and early 40s World War II was approaching and the Thai government felt an increasing sense of pressure from their neighbors being colonized by the French and English, along with an increased neighboring pressure with China becoming more powerful. The current Thai leader Plaek Phibunsongkhram felt as though that the Thai people needed more of a sense of culture, and felt as though Pad Thai was a good way to raise his countrys nationalism and implored the population to make and eat Pad Thai. At the time, Pad Thai was a new concept for the Thai people, but it caught on quickly and became a staple. Fast foward a couple years later, Plaek Phibunsongkhram was driven out of office and most of his policies were abandoned, however interestingly enough Pad Thai stuck within the culture and its political origin was forever left behind in the past. '
    }
    
    foodDiv.append(foodContent)
    //allItems[].remove();
  //}

  // let foodOptions = document.getElementById('allFoods')
  // let food = foodOptions.options[foodOptions.selectedIndex].text

  const url = `https://api.spoonacular.com/food/menuItems/search?apiKey
=54f523904c8247bda81b6d9f2e9e1322&query=${food}`


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

    // const foodInfo = document.createElement('p')
    // foodInfo.innerText = allInfo
    // document.querySelector('#tile-container').append(foodInfo)
    
  }
})

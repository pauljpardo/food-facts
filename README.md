
<h2> Project Description. </h2>

For this project I decided I wanted to make a site based on facts and history on different food dishes/cuisines. Having several years of experience in the restaurant industry has given me a special appreciation for different foods from different cultures. Watching Anthony Bourdain's show was also an influence as it showed how the dishes from specific parts of the world tell a story about who the people are and why they ate what they ate. 

<h2>API and Data Sample</h2>
https://spoonacular.com/food-api/docs

```
{
                "aisle": "Baking",
                "amount": 1.0,
                "id": 18371,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
                "meta": [],
                "name": "baking powder",
                "original": "1 tsp baking powder",
                "originalName": "baking powder",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 1.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "meta": [],
                "name": "cinnamon",
                "original": "1 tsp cinnamon",
                "originalName": "cinnamon",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "id": 1123,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
                "meta": [],
                "name": "egg",
                "original": "1 egg",
                "originalName": "egg",
                "unit": "",
                "unitLong": "",
                "unitShort": ""
                }
```                
<h2>Wireframe</h2>
https://whimsical.com/6RU3RTh5CEYy56tfbJjQRP

### MVP/Post MVP

### MVP 

- [x] Retrieve API info

- [x] Render food dishes to page for the user to choose from
- [x] Build layout using HTML and JavaScript
- [x] Style the page using CSS and Flexbox
- [x] Use "mobile first" principles to create a responsive website

### Post-MVP
- [x] Specify data values to retrieve
- [x] Add cool features , improve drop down menu


  ### Time Estimates
 
 Planning ~ 3 hrs
 
 HTML/Setup ~ 2 hrs
 
 JavaScript Beginning structure ~ 2 hrs
 
 API Troubleshooting/Call/Rendering ~ 3 hrs
 
 Troubleshooting JavaScript/Correcting ~ 2.5 hrs
 
 CSS - 3 hrs
 
### Code Snippets

```
const foodDiv = document.querySelector('#tile-container')
const button = document.getElementById('food-button')
let food;
button.addEventListener('click', () => {
  let allItems = document.querySelectorAll('#allFoods')

  


  // for (let i = 0; i < allItems.length; i++){
   
  const foodContent = document.createElement('p')
  foodContent.className = 'food-description'
    
    console.log(allItems.length)

  const id = document.querySelector('#allFoods').value
  
    if (id === 'pizza') {
      food = 'pizza'
      foodContent.innerText = "Pizza was not always the delicacy it is today. Flatbreads with toppings is an idea that had been around for a long time, even in Greek, Roman and Egyptian eras; around the first century B.C. a Roman poet was found to have written about circles of bread that is thought to look like pizza. In 18th century Naples is when the pizza we think about today was developed, however this type of food was considered a cheap simplistic food because at first all that was used was the dough, garlic and maybe one more ingredient. Modern pizza was born when italians introduced tomatoes to it that would give it it's signature flavor and became a household favorite."
    } else if (id === 'tacos') {
      food = 'tacos'
      foodContent.innerText = 'Tacos as we know today is a mix of Mexican tastes along with international influences. Tacos are thought to come from Mexico, long before the Spanish arrived. Ancient Mexicans used freshly made, soft, flat corn tortillas and gave them with fillings like fish and cooked organs. It was a staple meal that provided vital nutrients and energy to those who consumed it. In the late 1920s Mexican immigrants started to adapt the traditional taco into a more americanized version, which has a less spicy filling such as ground beef and chicken, and eventually would adopt using ingredients such as cheddar cheese, lettuce and tomato. This became known as the ultimate taco to Americans whose traditional cuisine favored more subtle flavors.'
    
```

```

food-description{
  margin: 20px;
  border:2px solid black;
  border-radius: 8px;
  padding: 10px;
  background-color: bisque;
}

```


```
media screen and (max-width: 468px){
  #tile-container {
    flex-direction: column;
    justify-content: center;
  }
```

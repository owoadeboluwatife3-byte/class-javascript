const foodList = document.getElementById('foodList');

     const food=[
        {foodclass:'carbohydrate', example:'Yam'},
        {foodclass:'protein', example:'Egg'},
        {foodclass:'fat', example:'Cooking oil'},
        {foodclass:'vitamin', example:' vegetables'},
        {foodclass:'mineral', example:'salt'},
        {foodclass:'water', example:'water'},]


   food.forEach(foodlist => {
    const li = document.createElement('li');
    li.innerText = `${foodlist.foodclass}: ${foodlist.example}`;
    foodList.appendChild(li);
   });
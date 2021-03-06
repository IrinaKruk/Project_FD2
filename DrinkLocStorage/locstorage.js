"use strict"

class LocStorageClass {

   constructor(_lsKeyName) {
      this.lsKeyName = _lsKeyName;
      this.storage = {};
      if (localStorage[_lsKeyName]) {
         this.storage = JSON.parse(localStorage[_lsKeyName]);
      }
   }

   addValue(key, value) {
      this.storage[key] = value;
      localStorage[this.lsKeyName] = JSON.stringify(this.storage);
   }

   getValue(key) {
      return this.storage[key];
   }

   deleteValue(key) {
      if (key in this.storage) {
         delete this.storage[key];
         localStorage[this.lsKeyName] = JSON.stringify(this.storage);
         return true;
      }
      return false;
   }

   getKey() {
      return Object.keys(this.storage);
   }

}


let drink = new LocStorageClass("Напитки");

let addDrinkButton = document.getElementById('add-coctail');
addDrinkButton.onclick = function () {
   let name = prompt("Название напитка?");
   let r = prompt("Рецепт");
   let a = confirm("Алкогольный или нет?");
   drink.addValue(name, { recipe: r, alko: a });
}

let getDrinkButton = document.getElementById('get-coctail');
getDrinkButton.onclick = function () {
   let name = prompt("Название напитка?");
   let info = drink.getValue(name);
   if (info == undefined) {
      alert('Нет такого напитка');
   } else {
      alert('Напиток ' + name + '\n' + 'Алкогольный: ' + info.alko + '\n' + 'Рецепт приготовления: ' + info.recipe);
   }
}

let delDrinkButton = document.getElementById('delete-coctail');
delDrinkButton.onclick = function () {
   let name = prompt("Название напитка?");
   let res = drink.deleteValue(name);
   if (res == true) {
      alert('Напиток удален');
   } else {
      alert('Такого напитка и нет');
   }
}

let allDrinkButton = document.getElementById('all-coctail');
allDrinkButton.onclick = function () {
   let allDrink = drink.getKey();
   alert(allDrink);
}

let food = new LocStorageClass("Блюда");

let addFoodButton = document.getElementById('add-food');
addFoodButton.onclick = function () {
   let name = prompt("Название блюда?");
   let r = prompt("Рецепт");
   let a = confirm("Диетическое или нет?");
   food.addValue(name, { recipe: r, diet: a });
}

let getFoodButton = document.getElementById('get-food');
getFoodButton.onclick = function () {
   let name = prompt("Название блюда?");
   let info = food.getValue(name);
   if (info == undefined) {
      alert('Нет такого блюда');
   } else {
      alert('Блюдо ' + name + '\n' + 'Диетическое: ' + info.diet + '\n' + 'Рецепт приготовления: ' + info.recipe);
   }
}

let delFoodButton = document.getElementById('delete-food');
delFoodButton.onclick = function () {
   let name = prompt("Название блюда?");
   let res = food.deleteValue(name);
   if (res == true) {
      alert('Блюдо удалено');
   } else {
      alert('Такого блюда и нет');
   }
}

let allFoodButton = document.getElementById('all-food');
allFoodButton.onclick = function () {
   let allFood = food.getKey();
   alert(allFood);
}

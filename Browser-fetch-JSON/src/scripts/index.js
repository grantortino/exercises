// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
<<<<<<< HEAD

import {
    exportJSON
} from '../scripts/data.js';

=======
import { recipes } from './data.js';
>>>>>>> d2ac006bac3b465ed6d89797d3d5bcdbe9599324

// \/ All of your javascript should go here \/
// convert from JSON to JAVASCRIPT OBJECT: 
//const recipesOBJ = JSON.parse(recipesJSON);
const recipesOBJ = recipes;
//console.log(recipesJSON);
console.log(recipesOBJ);

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {

    const myJSON = JSON.parse(exportJSON);

    const cakeSection = document.getElementById('cakes');

    for (let i = 0; i < myJSON.cakes.length; i++) {
        let cakeName = myJSON.cakes[i].title;
        // let type = myJSON.cakes[i].type;
        let author = myJSON.cakes[i].author;
        let ingredients = myJSON.cakes[i].ingredients;
        let image = myJSON.cakes[i].image;
        for (let j = 0; j < myJSON.cakes.length; j++) {
            console.log(container.length)
            let template = `<div class="card">
                <img src=${image}>
                <p class="type">${type}</p>
                <p class="author">${author}</p>
                <p class="cakeName">${cakeName}</p>
                <p class="ingredients"> ${ingredients}</p>
              </div>`
              cakeSection[j].innerHTML += template;
        }
    }
});
=======
const myPromise = new Promise(resolve, reject) 
>>>>>>> d2ac006bac3b465ed6d89797d3d5bcdbe9599324

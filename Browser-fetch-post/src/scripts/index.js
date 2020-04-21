// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

const url = "https://jsonplaceholder.typicode.com/posts" // https://jsonplaceholder.typicode.com/
const form = document.querySelector('.btn');

const myBody = {
    username: userName.value,
    password: password.value // possibilities to secure the password /encrypt 
};

fetch(url, {
        method: 'POST',
        body: JSON.stringify(myBody)
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

form.addEventListener('submit', handleSubmit);
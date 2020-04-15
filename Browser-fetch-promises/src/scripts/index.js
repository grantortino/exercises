// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

<<<<<<< HEAD
console.log(' out there?');

const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

const promise = new Promise(function (resolve, reject) {
    window.setTimeout(function () {
        modal.style.display = "block";
        resolve();
    }, 60 * 1000);
}).then(function () {
    console.log('successfully shown modal');
}).catch(function () {
    console.log('Some error has occured');
});

const closeFunction = () => {
    modal.style.display = "none";
}

close.addEventListener('click', closeFunction);
=======
document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    let promiseOfModal = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve(modal, body); // give your references 
        }, (2*1000)); // 60 seconds
        // reject(body);
    });
    promiseOfModal.then(function() {
        modal.style.display = "block";
    });
    promiseOfModal.then(function() {
        body.style.background = "black";
    });
    promiseOfModal.catch(function(e) {
        console.error(e);
    });
    const close = document.querySelector('.close');
    close.addEventListener('click', function() {
        modal.style.display = "none";
    });
});
>>>>>>> d2ac006bac3b465ed6d89797d3d5bcdbe9599324

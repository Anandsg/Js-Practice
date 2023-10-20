'use strict';


const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');


// to remove hidden class in html
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnShowModal.length; i++)
    console.log(btnShowModal[i].addEventListener('click', openModal));


// adding hidden class in html
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if (e.key === 'Escape' && (!modal.classList.contains('hidden')))
        closeModal();
})
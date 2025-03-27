// all the const  

const resetButton = document.querySelector(".btn btn-primary");
const saveButton = document.querySelector("#saveButton");
const noteTextarea = document.querySelector('.card-text');

const card = document.querySelector('#the-card');
// saveButton.addEventListener('click' , ()=> {card.style.display = "block";})

function addCard() {
    //    all the consts
    const card = document.querySelector('#the-card').innerHTML;

    const newCard = document.createElement('div');
    newCard.innerHTML = card;
    newCard.style.animation = "fade 1s  ease-out";

    const deleteButton = newCard.querySelector('.btn-close');
    const noteTextarea = newCard.querySelector('.card-text');
    const noteTimeDateArea = newCard.querySelector('#card-footer');
    const taskInput = document.querySelector('#text-board').value;
    const dateInput = document.querySelector('#date-board').value;
    const timeInput = document.querySelector('#time-board').value;
    
    deleteButton.style.display = "none";

    // if the inputs are empty   
    if (taskInput === "") {
        alert("error there is no task");
        return;

    }
    if (dateInput === "") {
        alert("error please set a date for your task");
        return;
    }
    if (timeInput === "") {
        alert("error please set a time for your task");
        return;
    }


    // push the task to the card
    if (noteTimeDateArea) {
        noteTimeDateArea.innerText = ` ${dateInput} |  ${timeInput}`;
    }

    if (noteTextarea) {
        noteTextarea.innerText = taskInput;
    }

    // show the delete button & delet the task
    newCard.addEventListener('mouseover', () => {deleteButton.style.display = "block";});
    newCard.addEventListener('mouseout', () => {deleteButton.style.display = "none";});
    deleteButton.addEventListener('click', () => { deleteTask(newCard) });
    
    document.querySelector('#ThirdSic-cards').appendChild(newCard);

}

function deleteTask(e) {
    e.remove();
}






























const resetButton = document.querySelector("#resetButton");
const saveButton = document.querySelector("#saveButton");
const card = document.querySelector('.the-card');
const CARDS = []


resetButton.addEventListener("click", () => { localStorage.clear(); location.reload(); });

function addCard() {

    const newCard = document.createElement('div');
    const cardId = `card-${CARDS.length + 1}`;

    newCard.style.animation = "fade 1s  ease-out";
    newCard.id = cardId;
    newCard.innerHTML = card.innerHTML;

    const deleteButton = newCard.querySelector('.btn-close');
    const noteTextarea = newCard.querySelector('.card-text');
    const noteTimeDateArea = newCard.querySelector('#card-footer');

    const taskInput = document.querySelector('#text-board').value;
    const dateInput = document.querySelector('#date-board').value;
    const timeInput = document.querySelector('#time-board').value;


    // if the inputs are empty   
    if (!taskInput) return alert("Please enter a task");
    if (!dateInput) return alert("Please set a date for your task");
    if (!timeInput) return alert("Please set a time for your task");


    // push the task to the card
    if (noteTimeDateArea) noteTimeDateArea.innerText = ` ${dateInput} |  ${timeInput}`;
    if (noteTextarea) noteTextarea.innerText = taskInput;

    // show the delete button & delet the task

    newCard.addEventListener('mouseover', () => { deleteButton.style.display = "block"; });
    newCard.addEventListener('mouseout', () => { deleteButton.style.display = "none"; });
    deleteButton.addEventListener('click', () => { deleteTask(newCard) });

    // push the new card to the [] & appear on the doc &  save in localStorage
    // CARDS.push(newCard);
    document.querySelector('#ThirdSic-cards').appendChild(newCard);
    tasksRecord(newCard);
}

function deleteTask(e) {
    const cardId = e.id;
    e.remove();
    localStorage.removeItem(cardId);
    const cardIndex = CARDS.findIndex(card => card.id === cardId);
    if (cardIndex !== -1) CARDS.splice(cardIndex, 1);

}


function tasksRecord(card) {
    const cardId = card.id;

    const task = card.querySelector('.card-text')?.innerText || "";
    const timeDate = card.querySelector('#card-footer')?.innerText || "";

    const cardData = {
        id: cardId,
        task: task,
        timeDate: timeDate
    };

    CARDS.push(cardData);
    localStorage.setItem("savedCards", JSON.stringify(CARDS));
    localStorage.setItem(cardId, JSON.stringify(cardData));


}


function existingTasks() {
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

    savedCards.forEach(cardData => {
        createCard(cardData);
    });

    CARDS.push(...savedCards);
};

// load saved tasks on page load
document.addEventListener("DOMContentLoaded", () => { existingTasks(); });


function createCard(cardData) {
    const newCard = document.createElement('div');
    newCard.id = cardData.id;
    newCard.style.animation = "fade 1s ease-out";

    newCard.innerHTML = card.innerHTML;

    const noteTextarea = newCard.querySelector('.card-text');
    const noteTimeDateArea = newCard.querySelector('#card-footer');

    if (noteTextarea) noteTextarea.innerText = cardData.task;
    if (noteTimeDateArea) noteTimeDateArea.innerText = cardData.timeDate;


    const deleteButton = newCard.querySelector('.btn-close');
    deleteButton.addEventListener('click', () => deleteTask(newCard));

    newCard.addEventListener('mouseover', () => deleteButton.style.display = "block");
    newCard.addEventListener('mouseout', () => deleteButton.style.display = "none");

    document.querySelector('#ThirdSic-cards').appendChild(newCard);

};






















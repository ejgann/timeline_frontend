let addTimeline = false;
const startButton = document.querySelector('#startButton')
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const newEventUI = document.getElementById("events");
const addButton = document.getElementById("add-button");
const displayedTimeline = document.querySelector('.card-columns');



document.addEventListener("DOMContentLoaded", () => {
    console.log('LOADED');
    getTimeline();

    // timelineForm.addEventListener("submit", (e) => 
    // e.preventDefault()
    // ) 
})


function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(timeline => {
        // console.log(timeline.data[1]);
        timeline.data.forEach(timeline => {
            // console.log(timeline.attributes);
            const timelineMarkup = `
            <div class="card bg-light">
                <div class="card-body text-center">
                <h4 class="card-text">${timeline.attributes.title}</h4>
                <div class="card-body">
                <p class="card-text">${timeline.attributes.description} </p>
                <button type="button" class="btn btn-sm">Select</button>
            </div>
            <br><br>`;

            document.querySelector('.card-columns').innerHTML += timelineMarkup
        })
    })
    
    .catch(error => {
        alert('An error occurred while retrieving some essential timeline info. The error was: ' + error.toString())
    })





       

// formHandler function grabs all of the values input through the timeline form 
// function createFormHandler(e) {
//     e.preventDefault()
//     const titleInput = document.querySelector('#title').value
//     const descriptionInput = document.querySelector('#description').value
//     postFetch(titleInput, descriptionInput)
// }

// function postFetch(title, description) {
//     console.log(title, description);
//     const bodyData = {title, description}
//     fetch(URL, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(bodyData)
//     })
//     .then(res => res.json())
//     .then(timeline => {
//         console.log(timeline.bodyData);
//     })
// }

document.getElementById("startButton").addEventListener('click', formToggle);

function formToggle(button) {
    if (timelineForm.style.display === "block") {
        timelineForm.style.display = "none";
        document.getElementById(startButton.id).value = 'Start Building';
    } else {
        timelineForm.style.display = "block";
        document.getElementById(startButton.id).value = "Nevermind";
    }
  }
}
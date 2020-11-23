let addTimeline = false;
const startButton = document.querySelector('#startButton')
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const displayedTimeline = document.querySelector('#displayed-timeline');

document.addEventListener("DOMContentLoaded", () => {
    console.log('LOADED');
    
    
})

// function getTimeline() {
//     return fetch(URL)
//     .then(res => res.json())
//     .then(json => {})
// }
       
function formToggle() {
    if (timelineForm.style.display === "none") {
        timelineForm.style.display = "block";
    } else {
        timelineForm.style.display = "none";
    }
  }

// function postTimeline(timelineData) {
//     fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify({
//            "title": timelineData.title.value,
//            "description": timelineData.description.value 
//         })
//     })
//     .then(res => res.json())
//     .then((obj_timeline) => {
//         let new_timeline = renderTimeline(obj_timeline)
//         displayedTimeline.append(new_timeline)
//     })
// }

// function renderTimeline(timeline) {
//     let h2 = document.createElement('h2')
//     h2.innerText = `${timeline.title}`

//     let p = document.createElement('p')
//     p.innerText = `${timeline.description}`

//     let divCard = document.createElement('div')
//     divCard.setAttribute('class', 'card')
//     divCard.append(h2, p)
//     displayedTimeline.append(divCard)
// }


let noteList = document.getElementById("noteList");
let missionText= document.getElementById("missionText");
let missionDate= document.getElementById("missionDate");
let missionHour= document.getElementById("missionHour");

let missionList = []
let id = 0;

function addMission(event) {
    event.preventDefault();
    id++
    let newMission = {};
    newMission.id = id
    newMission.txt = missionText.value;
    newMission.date = missionDate.value;
    newMission.hour = missionHour.value;
    missionList.push(newMission);
    save();
    showData(missionList);
}

function showData(a) {  
    noteList.innerHTML = ""
    for (let mission of a) {
        noteList.innerHTML += 
    `<div class="note">
        <span onclick = "closeNote(${mission.id})" class="fa-solid fa-trash"></span>
        <div class="note-text">${mission.txt}</div>   
        <div class="note-date">${mission.date}</div>
        <div class="note-hour">${mission.hour}</div>
    </div>`                        
    }
}

function save() {
    localStorage.setItem("missions", JSON.stringify(missionList));
}
function load() {
    missionList = JSON.parse(localStorage.getItem("missions"));
    if (!missionList)
        missionList = [];
    showData(missionList);
}


function clearAll() {
    missionText.value = "";
    missionDate.value = "";
    missionHour.value = "";
}

function closeNote(id) {
    let index = missionList.findIndex(m => m.id == id);
    missionList.splice(index, 1);
    save();
    showData(missionList);
}
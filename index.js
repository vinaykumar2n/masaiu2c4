// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var schedule= JSON.parse(localStorage.getItem("schedule")) || []

function myfunction(){
    event.preventDefault();
    var obj={matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value}
    schedule.push(obj)
    localStorage.setItem("schedule",JSON.stringify(schedule));
}

// write js code here corresponding to matches.html

var schedule= JSON.parse(localStorage.getItem("schedule")) || []
var favourites=JSON.parse(localStorage.getItem("favourites")) || []
display(schedule)
document.querySelector("#filterVenue").addEventListener("change",venuefun);
function venuefun(){
    var filteredvalue=document.querySelector("#filterVenue").value;
    if(filteredvalue=="none"){
        display(schedule)
    }
    else{
        var out=schedule.filter(function(el){
            return filteredvalue===el.venue
        })
        display(out)
    }
}

function display(data){
    document.querySelector("tbody").innerHTML="";
    data.map(function(el){
        var row=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=el.matchnum;

        var td2=document.createElement("td");
        td2.innerText=el.teamA;

        var td3=document.createElement("td");
        td3.innerText=el.teamB;

        var td4=document.createElement("td");
        td4.innerText=el.date;

        var td5=document.createElement("td");
        td5.innerText=el.venue;

        var td6=document.createElement("td");
        td6.innerText="Add as Favourite";
        td6.style.cursor="pointer"
        td6.style.color="green"
        td6.addEventListener("click",function(){
            favfunc(el)
        })

        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(row)
    })
}

function favfunc(el){
    favourites.push(el);
    localStorage.setItem("favourites",JSON.stringify(favourites))

}
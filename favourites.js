// write js code here corresponding to favourites.html

var favourites=JSON.parse(localStorage.getItem("favourites")) || []

display(favourites)
function display(data){
    document.querySelector("tbody").innerHTML="";
    data.map(function(el,i){
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
        td6.innerText="Delete";
        td6.style.cursor="pointer"
        td6.style.color="red"
        td6.addEventListener("click",function(){
            delfunc(el,i)
        })

        row.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(row)
    })
}

function delfunc(el,i){
    favourites.splice(i,1);
    localStorage.setItem("favourites",JSON.stringify(favourites))
    display(favourites)
}
/*-----------------------------------------------------Number of User Visits--------------------------------------------------*/
let daysBetweenVisits = Number(window.localStorage.getItem("last-visit-ls"));

let timeStamp = Date.now();
let findDaysBetween = timeStamp;

if (daysBetweenVisits !== 0){
    findDaysBetween -= daysBetweenVisits;
    findDaysBetween = Math.round(findDaysBetween / (1000*60*60*24));
    if (findDaysBetween < 1){
        document.getElementById("daysBetweenVisits").textContent = "No days have passed since your last visit";
    }
    else{
        document.getElementById("daysBetweenVisits").textContent = `Last Visit: ${findDaysBetween} day(s) ago.`;
    }
}
else {
    document.getElementById("daysBetweenVisits").innerHTML = "Join us again soon!";
}

localStorage.setItem("last-visit-ls", timeStamp);

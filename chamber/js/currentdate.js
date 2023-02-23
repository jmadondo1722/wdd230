
    
    let d = new Date();
    let fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

    document.getElementById("currentdate").textContent = fulldate;

article = document.querySelector("#message");
weekday = d.getDay();


/* Banner */

document.addEventListener("DOMContentLoaded", () => {
    const day = new Date().getDay();
  
    if(day === 5 || day === 6){
      document.getElementById("banner").classList.remove('hidden');
    }
  
    document.querySelector("#year").innerHTML = new Date().getFullYear();
    document.getElementById("updated").innerHTML = new Date();
    let today = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(new Date());
    document.querySelector("#today").innerHTML = today;
  });
  
  function openMenu(){
    document.querySelector(".page-links").classList.remove("hidden");
    document.querySelector("#open-btn").classList.add("hidden");
    document.querySelector("#close-btn").classList.remove("hidden");
  }
  
  function closeMenu() {
    document.querySelector(".page-links").classList.add("hidden");
    document.querySelector("#open-btn").classList.remove("hidden");
    document.querySelector("#close-btn").classList.add("hidden");
  }


    
    let d = new Date();
    let fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

    document.getElementById("currentdate").textContent = fulldate;

article = document.querySelector("#message");
weekday = d.getDay();


/* Banner */

if (weekday === 1 || weekday === 2){
    article.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    article.setAttribute('class', 'banner-message');
}

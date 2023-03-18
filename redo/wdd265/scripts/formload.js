
//Get current date and time
let formLoadTime = document.querySelector(".formLoadTime");
const fulltime = `${now.getHours()}:${now.getMinutes()}.${now.getSeconds()}`;
formLoadTime.textContent = `${fulldate} at ${fulltime}`;

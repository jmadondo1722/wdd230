const daysDifference = (startDate, endDate) => {
    const difference = endDate.getTime() - startDate.getTime();
    const days = Math.floor(difference / (1000 * 3600 * 24));
    return days;
  }
  
  document.addEventListener("DOMContentLoaded", ()=>{
    const lastVisit = localStorage.getItem('@visits');
    if(!lastVisit){
      localStorage.setItem('@visits', new Date().toDateString());
      document.getElementById('visits').innerHTML = `Welcome!`
    } else {
      const days = daysDifference(new Date(lastVisit), new Date());
      document.getElementById('visits').innerHTML = `Number of visits: ${days === 0 ? "Today.": `${days} days ago.`}`
      localStorage.setItem('@visits', new Date().toDateString());
    }
  });
let timer = document.querySelector("#time");

let showColon = true;



const display = () => {
    let currDate =  new Date() ;

    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();
    let period = "";
    let colon ;
    
    showColon = !showColon;
  if (showColon) {
    colon = ":";
   
    
  } else {
    colon = " ";
  }

  
      if (hours >= 12){
        period = "PM";
      } 
      else {
        period = "AM";
      }

      if (hours > 12) {

        hours = hours - 12;
      }
      if (hours === 0) {
        hours = 12;
      }

      if (seconds < 10 ){
        seconds = "0" + seconds;
        
      }
      
      if (minutes < 10 ){
        minutes = "0" + minutes;
        
      }
       
      if  (hours < 10 ){
        hours = "0" + hours;
      }
  

    
      timer.innerText = `${hours}${colon}${minutes}${colon}${seconds}  ${period}`;
        
        





    }
    setInterval(display , 1000);
    display();

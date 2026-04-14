let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById("minute");
let secondEl = document.getElementById("second");

let counter = 0;
let minCnt = 0;
let hourCnt = 0;

let startBtnEl=document.getElementById("timerBtn");
let stopBtnEl = document.getElementById("stopBtn");
let intervalId = 0;


let resetBtn=document.getElementById("resetTimerBtn");

startTimer =() =>{

    startBtnEl.style.display="none";
    stopBtnEl.style.display="inline";

     intervalId = setInterval( () => {
        counter += 1;
        if(counter < 10){
            secondEl.textContent = `0${counter}`;
        }
        else  if(counter >= 10 && counter <= 60){    //to check result change this 60 to 20 or less digit
            secondEl.textContent = `${counter}`;
        }
        
         if(counter === 60){    //to check result change this 60 to 20 or less digit
                counter=0;
                minCnt += 1;
                if(minCnt < 10){
                    minuteEl.textContent = `0${minCnt}`;
                }
                else if(minCnt >=10 && minCnt <= 60){  //to check result change this 60 to 20 or less digit
                    minuteEl.textContent = `${minCnt}`;
                }
            }


           if(minCnt === 60){
            counter = 0;
            minCnt = 0;
            hourCnt += 1; 
            if(hourCnt < 10){
              hourEl.textContent = `0${hourCnt}`;  
            }
            else if(hourCnt >= 10 ){
              hourEl.textContent =  `${hourCnt}`;
            }
           } 

        // if(counter > 60){
        //     clearInterval(intervalId);
        // }

    }, 1000);
}
stopTimer = () =>{
     clearInterval(intervalId);
     startBtnEl.style.display="inline";
     stopBtnEl.style.display = "none";
}

function resetTimer(){
    counter = 0;
    minCnt = 0;
    hourCnt = 0;
    secondEl.textContent = `00`;
    minuteEl.textContent = `00`;
    hourEl.textContent = `00`;    
    stopTimer();
}
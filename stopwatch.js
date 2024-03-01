// 1
const start = document.querySelector(".start")
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const pause = document.querySelector(".pause");
const output = document.getElementById("numbers");
const time = document.querySelector(".time");

//2
let [seconds, minutes, hours] = [0, 0, 0];

let timer = null;

//3 For start button
start.addEventListener('click', ()=>{
			if(timer!== null){
							clearInterval(timer);
			}
				timer = setInterval(()=>{
				seconds++;
				if(seconds == 60){
								seconds = 0;
								minutes++;
								if(minutes == 60){
								minutes = 0;
								hours++;
				}
				}
				
								let h = hours < 10 ? "0" + hours : hours;
								let m = minutes < 10 ? "0" + minutes : minutes;
								let s = seconds < 10 ? "0" + seconds : seconds;
								
								output.textContent = h + ':'+ m + ':' + s;
      }, 1000)
				if(start.src.includes("icon/play.svg")){
								start.src = "icon/pause.svg";
							
				}else{
								start.src = "icon/play.svg";
									if(start.src.includes("icon/play.svg")){
												clearInterval(timer);
								}
				}
});
				//4 for Stop button
stop.addEventListener('click', ()=>{
				clearInterval(timer);
})

//5 for reset button
reset.addEventListener('click', ()=>{
				clearInterval(timer);
					[seconds, minutes, hours] = [0, 0, 0];
				output.textContent = '00:00:00';
})


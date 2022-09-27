let userName = prompt("Enter Your Name: ")
let promptName = document.querySelector("#myName")
promptName.innerHTML = `${userName}`


function clock(){
 let date = new Date()

let dayz = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

 let h = date.getHours();
 let min = date.getMinutes();
 let sec = date.getSeconds();
 let day = date.getDay();

 let myClock = document.querySelector("#myClock");
 myClock.innerHTML = `${h}:${min}:${sec}     ${dayz[day]}`


}
setInterval(clock,1000);

 const toggleSwitch = document.querySelector(".toggle-switch");
 console.log(toggleSwitch)
 toggleSwitch.addEventListener("change",() =>{
   if(toggleSwitch.checked){
   	document.querySelector("#plan-details").classList.add("active");
   }
   else{
   	document.querySelector("#plan-details").classList.remove("active");
   }
 });
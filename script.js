let selected = "";

function startBot(){
document.getElementById("chatBox").style.display = "block";
}

function sendMsg(){

let input = document.getElementById("userInput").value;
let log = document.getElementById("chatLog");
let sound = document.getElementById("clickSound");

if(input=="") return;

sound.play();

// user
log.innerHTML += "<div>Сен: "+input+"</div>";

let bot = "";

if(input.toLowerCase().includes("сәлем")){
bot = "Сәлем! 🤖 Мен сіздің AI көмекшіңізбін.";
}
else if(input.toLowerCase().includes("дизайн")){
bot = "AI дизайн логотип, постер және визуал контент жасайды 🎨";
}
else if(input.toLowerCase().includes("рахмет")){
bot = "Әрқашан көмектесуге дайынмын 😊";
}
else{
bot = "Кешіріңіз, мен тек AI дизайн тақырыбында көмектесе аламын 🤖";
}

// typing effect
let i = 0;
let text = "Bot: ";

let temp = document.createElement("div");
log.appendChild(temp);

let interval = setInterval(()=>{
temp.innerHTML = text + bot.substring(0,i);
i++;
if(i > bot.length){
clearInterval(interval);

setTimeout(()=>{
log.innerHTML += "<div>Bot: Тағы сұрағыңыз бар ма? 😊</div>";
},600);

}
},20);

document.getElementById("userInput").value="";
}

// team info
function showInfo(name){

let info="";

if(name=="a1") info="AI және дизайн идеяларын зерттейді.";
if(name=="a2") info="Креативті визуал контент жасайды.";
if(name=="a3") info="AI құралдарын қолданады.";
if(name=="a4") info="Техникалық AI бағытында жұмыс істейді.";
if(name=="a5") info="Шығармашылық дизайн идеялары.";

document.getElementById("infoBox").innerHTML=info;
}

let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";

document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен сіздің AI көмекшімін!</div>";

botActive = true;
}

// ✅ FIX: сұрақты input-қа жазып, автомат жіберу
function ask(type){

let input = document.getElementById("userInput");

let text = "";

switch(type){

case "q1": text = "ИИ деген не?"; break;
case "q2": text = "AI дизайн қалай жұмыс істейді?"; break;
case "q3": text = "AI қайда қолданылады?"; break;
case "q4": text = "Логотип жасай ма?"; break;
case "q5": text = "AI болашағы қандай?"; break;

case "q6": text = "Сен не істейсің?"; break;
case "q7": text = "Постер жасай ма?"; break;
case "q8": text = "Дизайн деген не?"; break;
case "q9": text = "AI адамды алмастыра ма?"; break;
case "q10": text = "AI қауіпсіз бе?"; break;

case "q11": text = "Мысал келтір"; break;
case "q12": text = "AI қалай үйренеді?"; break;
case "q13": text = "AI сурет сала ма?"; break;
case "q14": text = "AI видео жасай ма?"; break;
case "q15": text = "AI пайдасы"; break;

case "q16": text = "Студенттерге пайдасы"; break;
case "q17": text = "Дизайнерлерге әсері"; break;
case "q18": text = "AI салалары"; break;
case "q19": text = "Қазіргі AI"; break;
case "q20": text = "Қорытынды"; break;
}

input.value = text;

// автомат жіберу
sendMsg();
}

function sendMsg(){

if(!botActive) return;

let input = document.getElementById("userInput").value.toLowerCase();
let log = document.getElementById("chatLog");

if(input=="") return;

log.innerHTML += "<div>Сен: "+input+"</div>";

let reply = "";

// 🧠 SMART ANSWERS
if(input.includes("сәлем")){
reply = "Сәлем! 🤖 Мен AI көмекшімін.";
}
else if(input.includes("дизайн")){
reply = "AI дизайн логотип, постер және визуал контент жасайды 🎨";
}
else if(input.includes("не істейсің")){
reply = "Мен AI және дизайн туралы сұрақтарға жауап беремін.";
}
else if(input.includes("рахмет")){
reply = "Рақмет! 😊 Көмектесе алғаныма қуаныштымын.";
}
else if(input.includes("логотип")){
reply = "Иә, AI бірнеше секундта логотип жасай алады.";
}
else if(input.includes("постер")){
reply = "Иә, AI әдемі постер жасай алады 🎨";
}
else{
reply = "Мен тек AI дизайн тақырыбында жауап беремін 🤖";
}

// typing effect
let i = 0;
let div = document.createElement("div");
log.appendChild(div);

let interval = setInterval(()=>{
div.innerHTML = "Bot: " + reply.substring(0,i);
i++;

if(i > reply.length){
clearInterval(interval);

// 🔥 FIXED FINAL MESSAGE
setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},600);
}

},15);

document.getElementById("userInput").value = "";
}

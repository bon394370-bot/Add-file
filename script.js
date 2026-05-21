let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен дайынмын!</div>";
botActive = true;
}

function ask(type){

let input=document.getElementById("userInput");

let map={
q1:"ИИ деген не?",
q2:"AI дизайн",
q3:"Қайда қолданылады?",
q4:"Логотип",
q5:"AI болашағы",
q6:"Сен не істейсің?",
q7:"Постер",
q8:"Дизайн",
q9:"AI адамды алмастыра ма?",
q10:"Қауіпсіз бе?",
q11:"Мысал",
q12:"Үйрену",
q13:"Сурет",
q14:"Видео",
q15:"Пайда",
q16:"Студент",
q17:"Дизайнер",
q18:"Салалар",
q19:"Қазіргі AI",
q20:"Қорытынды"
};

input.value=map[type];
sendMsg();
}

function sendMsg(){

if(!botActive) return;

let input=document.getElementById("userInput");
let log=document.getElementById("chatLog");
let sound=document.getElementById("clickSound");

let text=input.value.toLowerCase();
if(text=="") return;

sound.play();

log.innerHTML += "<div>Сен: "+text+"</div>";

let reply="";

// 🧠 AI RESPONSES
if(text.includes("сәлем")) reply="Сәлем! 🤖";
else if(text.includes("дизайн")) reply="AI дизайн жасайды 🎨";
else if(text.includes("логотип")) reply="Иә, логотип жасайды";
else if(text.includes("постер")) reply="Иә, постер жасайды 🎨";
else if(text.includes("рахмет")) reply="Рақмет! 😊";
else reply="Мен тек AI дизайн туралы жауап беремін 🤖";

// typing effect
let i=0;
let div=document.createElement("div");
log.appendChild(div);

let interval=setInterval(()=>{
div.innerHTML="Bot: "+reply.substring(0,i);
i++;

if(i>reply.length){
clearInterval(interval);

// 🔥 FINAL MESSAGE (FIXED)
setTimeout(()=>{
log.innerHTML += "<div>Bot: Тағы сұрағыңыз бар ма? 😊</div>";
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},500);
}

},15);

input.value="";
}

function info(name){

let data={
a1:"AI зерттеуші",
a2:"Креатив дизайнер",
a3:"AI қолданушы",
a4:"Техникалық бағыт",
a5:"Шығармашылық идея"
};

document.getElementById("infoBox").innerHTML=data[name];
}

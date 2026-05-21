let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен AI көмекшімін!</div>";
botActive = true;
}

function sendMsg(){

if(!botActive) return;

let input = document.getElementById("userInput").value.toLowerCase();
let log = document.getElementById("chatLog");
let sound = document.getElementById("clickSound");

if(input=="") return;

sound.play();

log.innerHTML += "<div>Сен: "+input+"</div>";

let reply="";

// SMART ANSWERS
if(input.includes("сәлем")) reply="Сәлем! 🤖";
else if(input.includes("дизайн")) reply="AI дизайн жасайды 🎨";
else if(input.includes("не істейсің")) reply="Мен AI туралы жауап беремін 🤖";
else if(input.includes("логотип")) reply="Иә, логотип жасайды";
else if(input.includes("постер")) reply="Иә, постер жасайды";
else if(input.includes("рахмет")) reply="Әрқашан көмектесемін 😊";
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

setTimeout(()=>{
log.innerHTML+="<div>Bot: Тағы сұрағыңыз бар ма? 😊</div>";
},500);
}
},15);

document.getElementById("userInput").value="";
}

// AUTO QUESTION → INPUT → SEND
function ask(type){

let input=document.getElementById("userInput");

if(type=="q1") input.value="ИИ деген не?";
if(type=="q2") input.value="AI дизайн";
if(type=="q3") input.value="Қайда қолданылады?";
if(type=="q4") input.value="Логотип";
if(type=="q5") input.value="AI болашағы";
if(type=="q6") input.value="Сен не істейсің?";
if(type=="q7") input.value="Постер";
if(type=="q8") input.value="Дизайн";
if(type=="q9") input.value="AI адамды алмастыра ма?";
if(type=="q10") input.value="Қауіпсіз бе?";
if(type=="q11") input.value="Мысал";
if(type=="q12") input.value="Үйрену";
if(type=="q13") input.value="Сурет";
if(type=="q14") input.value="Видео";
if(type=="q15") input.value="Пайда";
if(type=="q16") input.value="Студент";
if(type=="q17") input.value="Дизайнер";
if(type=="q18") input.value="Салалар";
if(type=="q19") input.value="Қазіргі AI";
if(type=="q20") input.value="Қорытынды";

sendMsg();
}

// TEAM INFO
function showInfo(name){

let info="";

if(name=="a1") info="AI зерттеу бағыты";
if(name=="a2") info="Креатив дизайн";
if(name=="a3") info="AI қолдану";
if(name=="a4") info="Техникалық бағыт";
if(name=="a5") info="Шығармашылық идея";

document.getElementById("infoBox").innerHTML=info;
}

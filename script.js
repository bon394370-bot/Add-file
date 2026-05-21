let botActive = false;

// START BOT
function startBot(){
document.getElementById("chatBox").style.display = "block";

let log = document.getElementById("chatLog");
log.innerHTML = "<div>Bot: Сәлем 🤖 Мен AI көмекшімін. Қалай көмектесе аламын?</div>";

botActive = true;
}

// CHAT INPUT
function sendMsg(){

if(!botActive) return;

let input = document.getElementById("userInput").value.toLowerCase();
let log = document.getElementById("chatLog");
let sound = document.getElementById("clickSound");

if(input=="") return;

sound.play();

log.innerHTML += "<div>Сен: "+input+"</div>";

let reply="";

if(input.includes("сәлем")) reply="Сәлем! 🤖";
else if(input.includes("дизайн")) reply="AI дизайн жасай алады 🎨";
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

// 20+ QUESTIONS
function ask(type){

let log=document.getElementById("chatLog");

let q="",a="";

if(type=="q1"){q="ИИ деген не?";a="ИИ – адамның ойлауын модельдейтін технология 🤖";}
if(type=="q2"){q="AI дизайн";a="AI автомат түрде дизайн жасайды 🎨";}
if(type=="q3"){q="Қайда қолданылады?";a="Білім, медицина, дизайн, бизнес";}
if(type=="q4"){q="Логотип";a="Иә, жасай алады";}
if(type=="q5"){q="AI болашағы";a="Өте үлкен даму болады 🚀";}
if(type=="q6"){q="Сен не істейсің?";a="AI туралы ақпарат беремін";}
if(type=="q7"){q="Постер";a="Иә, постер жасайды";}
if(type=="q8"){q="Дизайн";a="Визуал өнер";}
if(type=="q9"){q="Адамды алмастыра ма?";a="Жоқ, тек көмектеседі";}
if(type=="q10"){q="Қауіпсіз бе?";a="Иә, дұрыс қолданса";}
if(type=="q11"){q="Мысал";a="ChatGPT, Midjourney";}
if(type=="q12"){q="Үйрену";a="Деректер арқылы үйренеді";}
if(type=="q13"){q="Сурет";a="Иә, сала алады";}
if(type=="q14"){q="Видео";a="Кейбір AI жасайды";}
if(type=="q15"){q="Пайда";a="Жұмысты жеңілдетеді";}
if(type=="q16"){q="Студент";a="Оқуға көмектеседі";}
if(type=="q17"){q="Дизайнер";a="Жылдам жұмыс";}
if(type=="q18"){q="Салалар";a="Барлық салада";}
if(type=="q19"){q="Қазіргі AI";a="ChatGPT, Gemini";}
if(type=="q20"){q="Қорытынды";a="AI – болашақ технологиясы 🚀";}

log.innerHTML+="<div>Сен: "+q+"</div>";
log.innerHTML+="<div>Bot: "+a+"</div>";
}

// TEAM INFO
function showInfo(name){

let info="";

if(name=="a1") info="AI зерттеуші";
if(name=="a2") info="Креатив дизайнер";
if(name=="a3") info="AI қолданушы";
if(name=="a4") info="Техникалық бағыт";
if(name=="a5") info="Шығармашылық идея";

document.getElementById("infoBox").innerHTML=info;
}

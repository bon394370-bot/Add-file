let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен дайынмын!</div>";
botActive = true;
}

// =====================
// 📌 10 QUESTIONS FIXED
// =====================
function ask(type){

let input=document.getElementById("userInput");

const q={
q1:"ИИ деген не?",
q2:"AI дизайн деген не?",
q3:"AI қайда қолданылады?",
q4:"Логотип",
q5:"Сурет",
q6:"Видео",
q7:"Адамды алмастыра ма?",
q8:"Пайда",
q9:"Қауіпсіз бе?",
q10:"Болашағы"
};

input.value=q[type];
sendMsg();
}

// =====================
// 📌 STRICT ANSWER SYSTEM
// =====================
function sendMsg(){

if(!botActive) return;

let input=document.getElementById("userInput");
let log=document.getElementById("chatLog");

let text=input.value.trim();
if(text=="") return;

log.innerHTML += "<div>Сен: "+text+"</div>";

let reply="";

// 🔥 EXACT MATCH (100% STABLE)
switch(text){

case "ИИ деген не?":
reply="ИИ – адамның ойлау қабілетін модельдейтін жасанды интеллект 🤖";
break;

case "AI дизайн деген не?":
reply="AI дизайн – автомат түрде постер, логотип, визуал жасау 🎨";
break;

case "AI қайда қолданылады?":
reply="AI медицина, білім, бизнес, дизайн салаларында қолданылады.";
break;

case "Логотип":
reply="Иә, AI логотипті автомат түрде жасай алады 🎨";
break;

case "Сурет":
reply="Иә, AI мәтіннен сурет жасай алады.";
break;

case "Видео":
reply="Иә, AI видео генерация жасай алады 🎬";
break;

case "Адамды алмастыра ма?":
reply="Жоқ, AI адамды толық алмастырмайды, тек көмекші.";
break;

case "Пайда":
reply="AI уақытты үнемдейді және жұмысты жеңілдетеді 🚀";
break;

case "Қауіпсіз бе?":
reply="Иә, дұрыс қолданылса AI қауіпсіз технология.";
break;

case "Болашағы":
reply="AI болашағы өте үлкен және барлық саланы өзгертеді 🚀";
break;

default:
reply="Сұрақ базаға кірмейді 🤖";
}

// typing effect
let i=0;
let div=document.createElement("div");
log.appendChild(div);

let interval=setInterval(()=>{
div.innerHTML="Bot: "+reply.substring(0,i);
i++;

if(i>reply.length){
clearInterval(interval);

// final message
setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},400);
}

},10);

input.value="";
}

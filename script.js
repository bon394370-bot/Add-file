let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен дайынмын!</div>";
botActive = true;
}

// QUESTIONS
function ask(type){

let input=document.getElementById("userInput");

const map={
q1:"ИИ деген не?",
q2:"AI дизайн",
q3:"Қайда қолданылады?",
q4:"Логотип",
q5:"Сурет",
q6:"Видео",
q7:"Адамды алмастыра ма?",
q8:"Пайда",
q9:"Қауіпсіз бе?",
q10:"Болашағы"
};

input.value=map[type];
sendMsg();
}

function sendMsg(){

if(!botActive) return;

let input=document.getElementById("userInput");
let log=document.getElementById("chatLog");
let sound=document.getElementById("clickSound");

let text=input.value.trim();
if(text=="") return;

sound.play();

log.innerHTML += "<div>Сен: "+text+"</div>";

let reply="";

// ANSWERS
if(text.includes("ии")){
reply="ИИ – адамның ойлауын модельдейтін жасанды интеллект 🤖";
}
else if(text.includes("ai дизайн")){
reply="AI дизайн – автомат түрде визуал жасау 🎨";
}
else if(text.includes("қайда")){
reply="AI медицина, білім, бизнес және дизайнда қолданылады.";
}
else if(text.includes("логотип")){
reply="Иә, AI логотип жасайды.";
}
else if(text.includes("сурет")){
reply="Иә, AI сурет жасай алады 🎨";
}
else if(text.includes("видео")){
reply="Иә, AI видео генерация жасайды 🎬";
}
else if(text.includes("алмастыра")){
reply="Жоқ, AI адамды толық алмастырмайды.";
}
else if(text.includes("пайда")){
reply="AI уақытты үнемдейді 🚀";
}
else if(text.includes("қауіпсіз")){
reply="Иә, дұрыс қолданылса қауіпсіз.";
}
else if(text.includes("болашағы")){
reply="AI болашағы өте үлкен 🚀";
}
else{
reply="Бұл сұрақ базаға кірмейді 🤖";
}

// typing
let i=0;
let div=document.createElement("div");
log.appendChild(div);

let interval=setInterval(()=>{
div.innerHTML="Bot: "+reply.substring(0,i);
i++;

if(i>reply.length){
clearInterval(interval);

setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},400);
}

},10);

input.value="";
}

// ROLE SYSTEM
function showRole(name){

let data={
a1:"Оразбек Аяулым – AI зерттеуші 🤖",
a2:"Сафарова Айгерім – Дизайнер 🎨",
a3:"Балабек Жасұлан – Идея авторы 🧠",
a4:"Бейсенбай Рауан – Developer ⚙️",
a5:"Сұлу – Project manager 🚀"
};

document.getElementById("infoBox").innerHTML=data[name];
}

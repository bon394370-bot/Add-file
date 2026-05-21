let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен дайынмын!</div>";
botActive = true;
}

// 📌 10 QUESTIONS
function ask(type){

let input=document.getElementById("userInput");

const map={
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

// 🧠 10 EXACT ANSWERS
if(text.includes("ии деген не")){
reply="ИИ – адамның ойлауын модельдейтін жасанды интеллект 🤖";
}

else if(text.includes("ai дизайн")){
reply="AI дизайн – автомат түрде визуал, постер, логотип жасау 🎨";
}

else if(text.includes("қайда қолданылады")){
reply="AI медицина, білім, бизнес және дизайн саласында қолданылады.";
}

else if(text.includes("логотип")){
reply="Иә, AI логотипті автомат түрде жасайды.";
}

else if(text.includes("сурет")){
reply="Иә, AI мәтіннен әдемі сурет жасай алады 🎨";
}

else if(text.includes("видео")){
reply="Иә, AI видео генерация жасай алады 🎬";
}

else if(text.includes("алмастыра")){
reply="Жоқ, AI адамды толық алмастырмайды, тек көмекші.";
}

else if(text.includes("пайда")){
reply="AI уақытты үнемдейді және жұмысты жеңілдетеді 🚀";
}

else if(text.includes("қауіпсіз")){
reply="Иә, дұрыс қолданылса AI қауіпсіз технология.";
}

else if(text.includes("болашағы")){
reply="AI болашағы өте үлкен және барлық саланы өзгертеді 🚀";
}

else{
reply="Бұл сұрақ базаға кірмейді 🤖";
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

// FINAL MESSAGE
setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},500);
}

},12);

input.value="";
}

// 👨‍💻 ROLE SYSTEM
function showRole(name){

let data={
a1:"AI зерттеуші 🤖",
a2:"Креатив дизайнер 🎨",
a3:"Идея авторы 🧠",
a4:"Developer ⚙️",
a5:"Project manager 🚀"
};

document.getElementById("infoBox").innerHTML=data[name];
}

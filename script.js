let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен AI көмекшімін!</div>";
botActive = true;
}

function ask(type){

let input=document.getElementById("userInput");

const questions = {
q1:"ИИ деген не?",
q2:"AI дизайн қалай жұмыс істейді?",
q3:"AI қайда қолданылады?",
q4:"Логотип жасай ала ма?",
q5:"AI болашағы қандай?",
q6:"Сен не істейсің?",
q7:"Постер жасай ма?",
q8:"Дизайн деген не?",
q9:"AI адамды алмастыра ма?",
q10:"AI қауіпсіз бе?",
q11:"AI мысалдары қандай?",
q12:"AI қалай үйренеді?",
q13:"AI сурет сала ма?",
q14:"AI видео жасай ма?",
q15:"AI пайдасы қандай?",
q16:"Студенттерге пайдасы",
q17:"Дизайнерлерге әсері",
q18:"AI қай салаларда?",
q19:"Қазіргі AI мысалдары",
q20:"Қорытынды"
};

input.value = questions[type];
sendMsg();
}

function sendMsg(){

if(!botActive) return;

let input=document.getElementById("userInput");
let log=document.getElementById("chatLog");

let text=input.value.toLowerCase();
if(text=="") return;

log.innerHTML += "<div>Сен: "+text+"</div>";

let reply="";

// 🔥 20/20 FIXED ANSWERS (NO MIX)
if(text.includes("ии деген не")){
reply="ИИ – адамның ойлау қабілетін модельдейтін жасанды интеллект технологиясы 🤖";
}

else if(text.includes("ai дизайн қалай")){
reply="AI мәтін, стиль және деректер арқылы автомат түрде дизайн жасайды 🎨";
}

else if(text.includes("қайда қолданылады")){
reply="AI медицинада, білімде, дизайнда, бизнесте және технологияда қолданылады.";
}

else if(text.includes("логотип")){
reply="Иә, AI бірнеше секундта логотип жасай алады.";
}

else if(text.includes("болашағы")){
reply="AI болашақта көптеген саланы автоматтандырады және дамытады 🚀";
}

else if(text.includes("сен не істейсің")){
reply="Мен AI және дизайн туралы сұрақтарға жауап беремін 🤖";
}

else if(text.includes("постер")){
reply="Иә, AI әдемі постерлер мен баннерлер жасайды 🎨";
}

else if(text.includes("дизайн деген не")){
reply="Дизайн – визуалды идеяны әдемі түрде көрсету өнері.";
}

else if(text.includes("алмастыра")){
reply="Жоқ, AI адамды толық алмастырмайды, тек көмектеседі.";
}

else if(text.includes("қауіпсіз бе")){
reply="Иә, дұрыс қолданылса AI қауіпсіз технология.";
}

else if(text.includes("мысал")){
reply="ChatGPT, Midjourney, Gemini – AI мысалдары.";
}

else if(text.includes("үйренеді")){
reply="AI үлкен деректер арқылы үйренеді және тәжірибе жинайды.";
}

else if(text.includes("сурет")){
reply="Иә, AI мәтінді суретке айналдыра алады.";
}

else if(text.includes("видео")){
reply="Кейбір AI жүйелері видео генерация жасай алады.";
}

else if(text.includes("пайда")){
reply="AI уақытты үнемдейді және жұмысты жеңілдетеді.";
}

else if(text.includes("студент")){
reply="AI студенттерге оқу мен зерттеуде үлкен көмек береді.";
}

else if(text.includes("дизайнер")){
reply="AI дизайнерлердің жұмысын жылдам әрі креатив етеді.";
}

else if(text.includes("салалар")){
reply="AI барлық салаларда қолданылады: медицина, білім, бизнес, өнер.";
}

else if(text.includes("қазіргі")){
reply="ChatGPT, Gemini, Copilot – қазіргі AI жүйелері.";
}

else if(text.includes("қорытынды")){
reply="AI – болашақ технологиясы және адамға үлкен көмекші 🚀";
}

else{
reply="Кешіріңіз, бұл сұрақ базаға кірмейді 🤖";
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

// FINAL MESSAGE (ONLY ONCE)
setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},500);
}

},12);

input.value="";
}

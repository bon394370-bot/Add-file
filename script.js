let botActive = false;

function startBot(){
document.getElementById("chatBox").style.display = "block";
document.getElementById("chatLog").innerHTML =
"<div>Bot: Сәлем 🤖 Мен AI көмекшімін!</div>";
botActive = true;
}

// 📌 10 QUESTIONS
function ask(type){

let input=document.getElementById("userInput");

const map={
q1:"ИИ деген не?",
q2:"AI дизайн деген не?",
q3:"AI қайда қолданылады?",
q4:"AI логотип жасай ма?",
q5:"AI сурет сала ма?",
q6:"AI видео жасай ма?",
q7:"AI адамды алмастыра ма?",
q8:"AI пайдасы қандай?",
q9:"AI қауіпсіз бе?",
q10:"AI болашағы қандай?"
};

input.value=map[type];
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

// =====================
// 🧠 10 EXACT ANSWERS
// =====================

if(text.includes("ии деген не")){
reply="ИИ – адамның ойлау қабілетін модельдейтін жасанды интеллект технологиясы 🤖";
}

else if(text.includes("ai дизайн деген не")){
reply="AI дизайн – жасанды интеллект арқылы автомат түрде визуал, постер, логотип жасау 🎨";
}

else if(text.includes("қайда қолданылады")){
reply="AI медицинада, білімде, бизнес, дизайн және технология салаларында қолданылады.";
}

else if(text.includes("логотип")){
reply="Иә, AI бірнеше секундта логотип жасай алады 🎨";
}

else if(text.includes("сурет")){
reply="Иә, AI мәтіннен әдемі сурет жасай алады.";
}

else if(text.includes("видео")){
reply="Иә, кейбір AI жүйелері видео генерация жасай алады 🎬";
}

else if(text.includes("алмастыра")){
reply="Жоқ, AI адамды толық алмастырмайды, тек көмекші болады.";
}

else if(text.includes("пайда")){
reply="AI уақытты үнемдейді және жұмысты жеңілдетеді 🚀";
}

else if(text.includes("қауіпсіз")){
reply="Иә, дұрыс қолданылса AI қауіпсіз технология.";
}

else if(text.includes("болашағы")){
reply="AI болашағы өте үлкен – барлық саланы дамытады және автоматтандырады 🚀";
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

// final message
setTimeout(()=>{
log.innerHTML += "<div>Bot: Сау болыңыз 👋 Рақмет!</div>";
},500);
}

},12);

input.value="";
}

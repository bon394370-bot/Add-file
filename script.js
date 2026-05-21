function startBot(){
document.getElementById("chatBox").style.display = "block";
}

function sendMsg(){

let input = document.getElementById("userInput").value;
let log = document.getElementById("chatLog");
let sound = document.getElementById("clickSound");

if(input=="") return;

// sound
sound.play();

// user msg
log.innerHTML += "<div style='color:#00ffcc'>Сен: "+input+"</div>";

// typing effect
let reply = "жазып жатыр...";
let botDiv = document.createElement("div");
botDiv.style.color = "white";
log.appendChild(botDiv);

setTimeout(()=>{

if(input.toLowerCase().includes("сәлем")){
reply = "Сәлем! 🤖 Мен AI көмекшімін.";
}
else if(input.toLowerCase().includes("дизайн")){
reply = "AI дизайн логотип, постер және идея жасайды 🎨";
}
else if(input.toLowerCase().includes("рахмет")){
reply = "Әрқашан көмектесемін 😊";
}
else{
reply = "Мен тек AI дизайн туралы көмектесемін 🤖";
}

botDiv.innerHTML = "Bot: "+reply;

},1000);

// clear input
document.getElementById("userInput").value="";
}

// team info
function showInfo(name){

let info="";

if(name=="a1") info="AI дизайн және идея генерациясы";
if(name=="a2") info="Шығармашылық визуал контент";
if(name=="a3") info="AI құралдарын зерттеу";
if(name=="a4") info="Техникалық AI анализ";
if(name=="a5") info="Креативті дизайн идеялары";

document.getElementById("infoBox").innerHTML=info;
}

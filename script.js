alert(typeof supabase);

async function loadCalendar() {
    const { data, error } = await supabase
        .from("calendar")
        .select("*");
        
alert(error ? error.message : "OK");

    console.log(data);
    console.log(error);
}

loadCalendar();

const times = [
"15:00",
"16:30",
"18:00"
];

function setLang(lang){

const title=document.getElementById("title");
const subtitle=document.getElementById("subtitle");

if(lang==="ru"){
title.innerText="Yana_grum";
subtitle.innerText="Профессиональный груминг собак";
}

if(lang==="pl"){
title.innerText="Yana_grum";
subtitle.innerText="Profesjonalny grooming psów";
}

}

function showTimes(day){

document.getElementById("times").style.display="block";

let html="<h3>Дата: "+day+"</h3>";

times.forEach(time=>{
html+=`<div class="time">${time}</div>`;
});

document.getElementById("timesList").innerHTML=html;

window.scrollTo({
top:document.getElementById("times").offsetTop-20,
behavior:"smooth"
});

}
alert(typeof supabase);

console.log(supabase);
alert(Object.keys(supabase).join(", "));

async function loadCalendar() {
    try {
        alert("1");

        const { data, error } = await supabase
            .from("kalendar")
            .select("*");

        alert("2");

        if (error) {
            alert(error.message);
        } else {
            alert("OK");
        }

        console.log(data);
    } catch (e) {
        alert("Ошибка: " + e.message);
    }
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
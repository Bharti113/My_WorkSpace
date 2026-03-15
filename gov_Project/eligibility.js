const form = document.getElementById("schemeForm");
const results = document.getElementById("recommendationResults");
const profile = document.getElementById("profileInfo");


const schemes = [

{
name:"PM Kisan Samman Nidhi",
occupation:"farmer",
maxIncome:600000,
category:"all",
gender:"all"
},

{
name:"Ayushman Bharat Yojana",
occupation:"all",
maxIncome:300000,
category:"all",
gender:"all"
},

{
name:"Post Matric Scholarship",
occupation:"student",
maxIncome:500000,
category:"sc",
gender:"all"
},

{
name:"Women Empowerment Scheme",
occupation:"all",
maxIncome:800000,
category:"all",
gender:"female"
}

];


form.addEventListener("submit",function(e){

e.preventDefault();

results.innerHTML="";

let age=document.getElementById("age").value;
let gender=document.getElementById("gender").value;
let income=document.getElementById("income").value;
let occupation=document.getElementById("occupation").value;
let category=document.getElementById("category").value;


profile.innerText =
`Age: ${age} | Occupation: ${occupation} | Income: ₹${income}`;


let recommendations=[];


schemes.forEach(function(scheme){

let score=0;


/* occupation score */

if(scheme.occupation==="all" || scheme.occupation===occupation){

score+=40;

}


/* income score */

if(income<=scheme.maxIncome){

score+=30;

}


/* category score */

if(scheme.category==="all" || scheme.category===category){

score+=20;

}


/* gender score */

if(scheme.gender==="all" || scheme.gender===gender){

score+=10;

}


recommendations.push({

name:scheme.name,
score:score

});

});


recommendations.sort((a,b)=>b.score-a.score);


recommendations.slice(0,3).forEach(function(item){

displayScheme(item);

});


});



function displayScheme(item){

let card=document.createElement("div");

card.className="scheme-card";

card.innerHTML=

`<h3>${item.name}</h3>
<p>AI Recommendation Score: ${item.score}%</p>
<button class="apply-btn">Apply Now</button>`;

results.appendChild(card);

}

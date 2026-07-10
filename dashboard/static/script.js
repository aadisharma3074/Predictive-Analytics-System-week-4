// ===============================
// Customer Distribution (Pie Chart)
// ===============================

const customerCtx = document.getElementById('customerChart');

if(customerCtx){

new Chart(customerCtx,{

type:'pie',

data:{
labels:['Returning','New'],
datasets:[{

data:[65000,31000],

backgroundColor:[
'#2563eb',
'#10b981'
],

borderWidth:1

}]
},

options:{
responsive:true,
plugins:{
legend:{
position:'bottom'
}
}
}

});

}



// ===============================
// Sales by Region (Bar Chart)
// ===============================

const salesCtx = document.getElementById('salesChart');

if(salesCtx){

new Chart(salesCtx,{

type:'bar',

data:{

labels:[
'North',
'South',
'East',
'West'
],

datasets:[{

label:'Sales',

data:[
420000,
380000,
350000,
450000
],

backgroundColor:[
'#2563eb',
'#3b82f6',
'#60a5fa',
'#93c5fd'
]

}]

},

options:{

responsive:true,

plugins:{
legend:{
display:false
}
}

}

});

}



// ===============================
// Profit Analysis (Line Chart)
// ===============================

const profitCtx = document.getElementById('profitChart');

if(profitCtx){

new Chart(profitCtx,{

type:'line',

data:{

labels:[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun'
],

datasets:[{

label:'Profit',

data:[
12000,
18000,
16000,
22000,
26000,
30000
],

borderColor:'#10b981',

backgroundColor:'rgba(16,185,129,0.2)',

fill:true,

tension:0.4

}]

},

options:{

responsive:true

}

});

}



// ===============================
// Discount Analysis (Doughnut Chart)
// ===============================

const discountCtx = document.getElementById('discountChart');

if(discountCtx){

new Chart(discountCtx,{

type:'doughnut',

data:{

labels:[
'0-10%',
'10-20%',
'20-30%',
'30%+'
],

datasets:[{

data:[
35,
28,
22,
15
],

backgroundColor:[
'#2563eb',
'#3b82f6',
'#60a5fa',
'#93c5fd'
]

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:'bottom'

}

}

}

});

}



// ===============================
// Card Animation
// ===============================

const cards=document.querySelectorAll('.card');

cards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.transform='translateY(-8px)';
card.style.transition='0.3s';

});

card.addEventListener('mouseleave',()=>{

card.style.transform='translateY(0px)';

});

});



// ===============================
// Prediction Button Animation
// ===============================

const button=document.querySelector("button");

if(button){

button.addEventListener("click",function(){

button.innerHTML="Predicting...";

setTimeout(function(){

button.innerHTML="Predict Customer";

},2000);

});

}



// ===============================
// Current Date & Time
// ===============================

const today=new Date();

console.log("Dashboard Loaded");

console.log(today.toLocaleString());
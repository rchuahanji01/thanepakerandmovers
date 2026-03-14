// // counter animation

// const counters=document.querySelectorAll(".counter");

// counters.forEach(counter=>{

// let target=+counter.getAttribute("data-target");

// let count=0;

// function update(){

// count+=target/200;

// if(count<target){

// counter.innerText=Math.ceil(count);
// setTimeout(update,10);

// }else{

// counter.innerText=target;

// }

// }

// update();

// });


// // review slider

// let slider=document.getElementById("slider");

// setInterval(()=>{

// slider.appendChild(slider.firstElementChild);

// },4000);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const increment = target / 200;

if(c < target){

counter.innerText = `${Math.ceil(c + increment)}`;

setTimeout(updateCounter,10);

}else{

counter.innerText = target;

}

};

updateCounter();

});

document.getElementById("quoteForm").addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector("input[placeholder='Full Name']").value;
const phone = document.querySelector("input[placeholder='Mobile Number']").value;
const from = document.querySelector("input[placeholder='Moving From']").value;
const to = document.querySelector("input[placeholder='Moving To']").value;
const size = document.querySelector("select").value;
const details = document.querySelector("textarea").value;

const message =
`New Moving Quote Request

Name: ${name}
Phone: ${phone}
From: ${from}
To: ${to}
Move Size: ${size}
Details: ${details}`;

const whatsappURL =
`https://wa.me/919768709374?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

});
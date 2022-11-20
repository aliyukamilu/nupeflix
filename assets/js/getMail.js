$("#submit").click(function(){
let mail = document.getElementById('mail').value;

window.location.href=`account.html?id=${mail}`;


});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const maling = urlParams.get('id')
document.getElementById("mailer").textContent = maling;

$("#next1").click(function(){
  document.getElementById("baner").style.display = "none";
  document.getElementById("baner2").style.display = "flex";
})


$("#next2").click(function(){
  document.getElementById("baner").style.display = "none";
  document.getElementById("baner2").style.display = "none";
  document.getElementById("baner3").style.display = "flex";
})

$("#next3").click(function(){
  document.getElementById("baner").style.display = "none";
  document.getElementById("baner2").style.display = "none";
  document.getElementById("baner3").style.display = "none";
  document.getElementById("baner4").style.display = "flex";
})
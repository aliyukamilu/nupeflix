let submits = document.querySelectorAll('#submit')

if (submits) {
  submits.forEach(submit => {
    submit.addEventListener('click', () => {
      let mail = submit.previousElementSibling.value
      if (mail == "") {
        $('.erroMes').css('display', 'block')
      } else {
        window.location.href = `account.html?email=${mail}`;
      }

    })

  })
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const maling = urlParams.get('email')
let password = ""

document.getElementById("mailer").textContent = maling;
let passwordIn = document.querySelector('#password')
$("#next1").click(function () {
  if (passwordIn.value == "") {
    $('#warning').css('display', 'block')
  } else {
    password = passwordIn.value
    document.getElementById("baner").style.display = "none";
    document.getElementById("baner2").style.display = "flex";
  }

})


$("#next2").click(function () {
  document.getElementById("baner").style.display = "none";
  document.getElementById("baner2").style.display = "none";
  document.getElementById("baner3").style.display = "flex";
})

$("#next3").click(function () {

  async function createAccount() {
    try {
      const response = await fetch(`${HOST}/php/index.php?createUser&email=${maling}&password=${password}&account_type=free`)
      const data = await response.json()

      if (data.status == 1) {
        document.getElementById("baner").style.display = "none";
        document.getElementById("baner2").style.display = "none";
        document.getElementById("baner3").style.display = "none";
        document.getElementById("baner4").style.display = "flex";
      } else {
        $('.errorMessage').html(`An Error Occurred.`)
      }
    } catch (error) {
      $('.errorMessage').html(`An Error Occurred.`)
    }



  }
  createAccount()



})
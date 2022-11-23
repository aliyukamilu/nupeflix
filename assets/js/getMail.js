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

$('.mailer').html(maling);
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

$('#loginStart').click(function (e) {
  e.preventDefault()
  let email = document.querySelector('#emailInput').value
  let password = document.querySelector('#passwordInput').value

  $('#loginStart').attr('disabled', 'true')

  async function loginMeIn() {
    try {
      const response = await fetch(`${HOST}/php/index.php?login&email=${email}&password=${password}`)
      const loginData = await response.json()

      console.log(loginData)
      $('#loginStart').html('Logging you in 🍿......')

      setTimeout(() => {
        window.location.href = `app/home.html`
      }, 2000);

    } catch (error) {
      $('.msg_Box').html('<p class="text-danger">User Not Found</p>')
      $('#loginStart').removeAttr('disabled')
    }

  }
  if (email == "" || password == "") {
    $('.msg_Box').html('<p class="text-danger">Please fill in the blanks</p>')
    setTimeout(() => {
      $('.msg_Box').html('')
      $('#loginStart').removeAttr('disabled')
    }, 1000);

  } else {
    loginMeIn()
  }

})
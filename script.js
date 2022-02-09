const obj = {};
let inputFild = document.forms.form1

function showCV() {
    event.preventDefault();
    document.getElementById("signIn").classList.add('displayNone')
    document.getElementById("signOut").classList.remove('displayNone')
    document.getElementById("signOut").classList.add('displayShow')
    outUserDates();
}

function outUserDates() {
    document.getElementsByClassName("user_name")[0].innerHTML = obj['firstName'] + " " + obj['lastName']
    document.getElementsByClassName("emailUser")[0].innerHTML = obj['eMail']
    document.getElementsByClassName("chooseUser")[0].innerHTML = obj['choose']
}

function goToForm() {
    document.getElementById("signIn").classList.remove('displayNone')
    document.getElementById("signOut").classList.add('displayNone')

    document.getElementById("signOut").classList.add('displayShow')
    location.reload()
}

document.getElementById("sign-out-button").addEventListener('mouseover', function () {
    document.getElementById("sign-out-button").classList.add('activeOutButton')
})
document.getElementById("sign-out-button").addEventListener('mouseout', function () {
    document.getElementById("sign-out-button").classList.add('activeOverButton')
})
document.getElementById('sign-out-button').addEventListener('click', goToForm)

inputFild[0].addEventListener('blur', function () {
    obj.firstName = this.value
})
inputFild[1].addEventListener('blur', function () {
    obj.lastName = this.value
})
inputFild[2].addEventListener('blur', function () {
    obj.eMail = this.value
})
inputFild[3].addEventListener('click', function () {
    obj.sex = this.value
    if (inputFild[3].checked) {
        document.getElementById('avatar').classList.add('man')
    }
})
inputFild[4].addEventListener('click', function () {
    obj.sex = this.value
    if (inputFild[4].checked) {
        document.getElementById('avatar').classList.add('woman')
    }

    obj.checked = this.checked
})
inputFild[5].addEventListener('click', function () {
    obj.choose = this.value
})

inputFild[6].addEventListener('click', function () {
    if (inputFild[6].checked) {
        obj.checked = !this.checked
    }
    obj.checked = this.checked
})
console.log(10);
let takeUserid = document.getElementById('userName');
let password = document.getElementById('password');
let takeLoginButton = document.getElementById('loginButton');
takeLoginButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (takeUserid.value === "masudalll336@gmail.com" && password.value === "123645") {
        alert('Right');
        location.href = "inside.html";
    } else {

        alert('Wrong!')
    }


})
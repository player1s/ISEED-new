window.onload=function() {

    const btnLogin = document.getElementById('btnLogin');
    const btnCreateAcc = document.getElementById('btnCreateAcc');

    btnCreateAcc.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogin");
        window.location.href = "createAccount.html";
    });

    btnLogin.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogin");
        window.location.href = "login.html";
    });
}
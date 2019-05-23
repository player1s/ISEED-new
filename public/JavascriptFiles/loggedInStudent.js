window.onload=function() {
    const btnLogout = document.getElementById('btnLogout');

    btnLogout.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogout");
        firebase.auth().signOut().then(function () {
            window.location.href = "login.html";
        })
    });
};
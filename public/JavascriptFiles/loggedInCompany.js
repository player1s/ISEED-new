window.onload=function() {
    const btnCreateCase = document.getElementById('btnCreateCase');

    btnCreateCase.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogin");
        window.location.href = "createCase.html";
    });
};
window.onload=function() {

        const btnStudent = document.getElementById('btnStudent');
        const btnEducationalInstitute = document.getElementById('btnEducationalInstitute');
        const btnCompany = document.getElementById('btnCompany');

        btnStudent.addEventListener("click", function () {
            console.log("in: click eventlistener for btnStudent");
            window.location.href="HTMLPages/createAccount.html";
        });

        btnEducationalInstitute.addEventListener("click", function () {
            console.log("in: click eventlistener for btnEducationalInstitute");
            window.location.href="HTMLPages/createAccount.html";
        });

        btnCompany.addEventListener("click", function () {
            console.log("in: click eventlistener for btnCompany");
            window.location.href="HTMLPages/createAccount.html";
        });

    };
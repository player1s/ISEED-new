const fieldEmail = document.getElementById('fieldEmail');
const fieldPassword = document.getElementById('fieldPassword');
const btnLogin = document.getElementById('btnLogin');
const pFeedback = document.getElementById('feedback');

btnLogin.addEventListener("click", function () {
    console.log("in: click eventlistener for btnLogin");
    const email = fieldEmail.value;
    const pass = fieldPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => pFeedback.innerText = e.message);

});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log("this user logged in: " + firebaseUser);
        document.getElementById('btnLogout').removeAttribute("hidden");
    } else {
        console.log("not logged in");
        document.getElementById('btnLogout').setAttribute("hidden", "hidden");
    }
});
window.onload=function() {
    const fieldEmail = document.getElementById('fieldEmail');
    const fieldPassword = document.getElementById('fieldPassword');
    const btnLogin = document.getElementById('btnLogin');
    const pFeedback = document.getElementById('feedback');
    let firestore = firebase.firestore();
    let docRef = null;
    let type = null;

    btnLogin.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogin");
        const email = fieldEmail.value;
        const pass = fieldPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass).then( function () {
            const user = firebase.auth().currentUser;
            docRef = firestore.collection("Users").doc(user.uid);

            docRef.get().then(function (doc) {

                console.log(doc);
                console.log(doc.exists);

                if (doc && doc.exists) {
                    const myData = doc.data();
                    type = myData.type;
                    console.log(type);
                }

            if(type.localeCompare("Student") === 0) {
                window.location.href = "student.html";
            }
            if(type.localeCompare("EducationalInstitute") === 0) {
                window.location.href = "education.html";
            }
            if(type.localeCompare("Company") === 0) {
                window.location.href = "company.html";
            }
            });
        });
        promise.catch(e => pFeedback.innerText = e.message);

    });
};
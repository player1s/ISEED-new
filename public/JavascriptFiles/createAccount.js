window.onload=function() {
    const firestore = firebase.firestore();
    const fieldEmail = document.getElementById('createAccountFieldEmail');
    const fieldPassword = document.getElementById('createAccountFieldPassword');
    const createAccountBtnCreateAccount = document.getElementById('createAccountBtnCreateAccount');
    const createAccountFieldName = document.getElementById('createAccountFieldName');
    const createAccountRadioStudent = document.getElementById('createAccountRadioStudent');
    const createAccountRadioEducationalInstitute = document.getElementById('createAccountRadioEducationalInstitute');
    const createAccountRadioCompany = document.getElementById('createAccountRadioCompany');
    const createAccountFeedback = document.getElementById('createAccountFeedback');

    createAccountBtnCreateAccount.addEventListener("click", function () {
        console.log("in: click eventlistener for btnCreateAccount");
        const email = fieldEmail.value;
        const pass = fieldPassword.value;
        const name = createAccountFieldName.value;
        const auth = firebase.auth();
        let type = null;


        const promise = auth.createUserWithEmailAndPassword(email, pass).then( function () {

                if(createAccountRadioCompany.checked)
                {
                    console.log("in: click eventlistener for btnCreateAccount in createAccountRadioCompany");
                    const user = firebase.auth().currentUser;
                    type = "Company";
                    let docBaseRef = firestore.collection("Users").doc(user.uid);

                    docBaseRef.set({name: name, type: type}).then(function () {
                        console.log("these items were saved: Name: " + name + " Type: " + type);
                        window.location.href="loggedInCompany.html";

                    }).catch(function (error) {
                        console.log("Got error ", error);
                    })

                }

            if(createAccountRadioEducationalInstitute.checked) {
                console.log("in: click eventlistener for btnCreateAccount in createAccountRadioEducationalInstitute");
                const user = firebase.auth().currentUser;
                type = "EducationalInstitute";
                let docBaseRef = firestore.collection("Users").doc(user.uid);

                docBaseRef.set({name: name, type: type}).then(function () {
                    console.log("these items were saved: Name: " + name + " Type: " + type);
                    window.location.href="loggedInEducationalInstitute.html";

                }).catch(function (error) {
                    console.log("Got error ", error);
                })

            }

            if(createAccountRadioStudent.checked) {
                console.log("in: click eventlistener for btnCreateAccount in createAccountRadioStudent");
                const user = firebase.auth().currentUser;
                type = "Student";
                let docBaseRef = firestore.collection("Users").doc(user.uid);

                            docBaseRef.set({name: name, type: type}).then(function () {
                                console.log("these items were saved: Name: " + name + " Type: " + type);
                                window.location.href="loggedInStudent.html";

                            }).catch(function (error) {
                                console.log("Got error ", error);
                            })
                        }
                    });

        promise.catch(function(e) {
            createAccountFeedback.innerText = e.message;
            console.log(e.message);
        });

    });









        /* fires all the time


        saveBtn.addEventListener("click", function () {
            console.log("in: click eventlistener for savebtn");
            docRef = firestore.collection("Companies").doc("1");
            const textToSave = inputTextField.value;
            console.log("saving this to firestore: " + textToSave);
            docRef.set({name: textToSave}).then(function () {
                console.log("status saved!");
            }).catch(function (error) {
                console.log("Got error ", error);
            })
        });









                    firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            user.sendEmailVerification().then(function () {
                                console.log("email sent")
                            }).catch(function (error) {
                                console.log("verification email error " + error)
                            });
                        }

                    })

         */


};
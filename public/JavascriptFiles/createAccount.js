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
    let size = null;

    createAccountBtnCreateAccount.addEventListener("click", function () {
        console.log("in: click eventlistener for btnCreateAccount");
        const email = fieldEmail.value;
        const pass = fieldPassword.value;
        const auth = firebase.auth();
        let num = null;
        let myData = null;


        //firestore.collection("Companies").doc("1").set({currentAmountOfDocs: num});


        const promise = auth.createUserWithEmailAndPassword(email, pass).then( function () {

                if(document.getElementById("createAccountRadioCompany").checked)
                {

                    console.log("in: click eventlistener for btnCreateAccount");

                    let three = 3;
                    three = three.toString();

                    const increment = firebase.firestore.FieldValue.increment(1);

// Document reference
                    let docBaseRef = firestore.collection("Companies").doc("1");

// Update read count
                    docBaseRef.update({ currentAmountOfDocs: increment });


                    let docRef = firestore.collection("Companies").doc(three);
                    docRef.set({name: "wazze"}).then(function () {
                        console.log("status saved!");
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
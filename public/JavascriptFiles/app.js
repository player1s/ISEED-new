


var firestore = firebase.firestore();
    window.onload=function() {
        let docRef = null;
        const outputHeader = document.querySelector("#hotdogOutput");
        const inputTextField = document.querySelector("#status");
        const loadBtn = document.querySelector("#loadbtn");
        const saveBtn = document.querySelector("#savebtn");
        const pageSwitchbtn = document.querySelector("#pageSwitchbtn");

        const fieldEmail = document.getElementById('fieldEmail');
        const fieldPassword = document.getElementById('fieldPassword');
        const btnLogin = document.getElementById('btnLogin');
        const btnCreateAccount = document.getElementById('btnCreateAccount');
        const btnLogout = document.getElementById('btnLogout');
        const pFeedback = document.getElementById('feedback');

        btnLogin.addEventListener("click", function () {
            console.log("in: click eventlistener for btnLogin");
            const email = fieldEmail.value;
            const pass = fieldPassword.value;
            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => pFeedback.innerText = e.message);

        });

        pageSwitchbtn.addEventListener("click", function () {
            console.log("in: click eventlistener for btnLogin");
            window.location.href="login.html";
        });

        btnCreateAccount.addEventListener("click", function () {
            console.log("in: click eventlistener for btnCreateAccount");
            const email = fieldEmail.value;
            const pass = fieldPassword.value;
            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise.catch(e => pFeedback.innerText = e.message);

/* fires all the time
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
        });

        btnLogout.addEventListener("click", function () {
            console.log("in: click eventlistener for btnLogout");
            firebase.auth().signOut();
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

        loadBtn.addEventListener("click", function () {
            console.log("in: click eventlistener for loadbtn");
            docRef.get().then(function (doc) {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    outputHeader.innerText = "Hot dog status: " + myData.name;

                }
            })
        });

// not getting to the deploy
        /*
        getRealtimeUpdates = function () {
            docRef.onSnapshot(function (doc) {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    outputHeader.innerText = "Hot dog status: " + myData.name;

                }
            });
        };
        getRealtimeUpdates();
        */



    };
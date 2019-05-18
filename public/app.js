var firebaseConfig = {
    apiKey: "AIzaSyA5WwCvhoJv6-3G7VfmVwI0HcRWFtiSipQ",
    authDomain: "iseed-d26e9.firebaseapp.com",
    databaseURL: "https://iseed-d26e9.firebaseio.com",
    projectId: "iseed-d26e9",
    storageBucket: "iseed-d26e9.appspot.com",
    messagingSenderId: "275576830551",
    appId: "1:275576830551:web:bf48eebf3862a8bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.collection("Companies").doc("1");
const outputHeader = document.querySelector("#hotdogOutput");
const inputTextField = document.querySelector("#status");
const saveBtn = document.querySelector("#savebtn");

saveBtn.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("saving this to firestore: " + textToSave);
    docRef.set({name: textToSave}).then(function () {
    console.log("status saved!");
}).catch(function (error) {
    console.log("Got error ", error);
})
});


function adds() {

    db.collection("Companies").add({
        name: "Ada",
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}
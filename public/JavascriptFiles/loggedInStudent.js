window.onload=function() {
    const btnLogout = document.getElementById('btnLogout');
    const CaseShow = document.getElementById('CaseShow');

    let db = firebase.firestore();


    var docRef = db.collection("Cases").doc("1566835055609");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data().name);
            CaseShow.innerText = doc.data().name;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    btnLogout.addEventListener("click", function () {
        console.log("in: click eventlistener for btnLogout");
        firebase.auth().signOut().then(function () {
            window.location.href = "login.html";
        })
    });



};

getRealtimeUpdates = function () {
    let firestore = firebase.firestore();
    let docRef = firestore.collection("Cases").where("*");

    docRef.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            CaseShow.innerText = myData.name;

        }
    });
};
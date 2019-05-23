window.onload=function() {
    const btnLogout = document.getElementById('btnLogout');
    const CaseShow = document.getElementById('CaseShow');

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
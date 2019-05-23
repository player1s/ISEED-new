window.onload=function() {

    const btnCreateCase = document.getElementById('btnCreateCase');
    const fieldName = document.getElementById('fieldName');
    const firestore = firebase.firestore();
    let ownerCompany = null;
    let date = new Date();

    btnCreateCase.addEventListener("click", function () {
        console.log("in: click eventlistener for btnCreateCase");
        const name = fieldName.value;

        const user = firebase.auth().currentUser;
        ownerCompany = user.uid;
        let docBaseRef = firestore.collection("Cases").doc(date.getTime().toString());

        docBaseRef.set({name: name, owner: ownerCompany}).then(function () {
            console.log("these items were saved: Name: " + name + " ownerCompany: " + ownerCompany);
            window.location.href="loggedInCompany.html";

        }).catch(function (error) {
            console.log("Got error ", error);
        })


    });
};
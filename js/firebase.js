var firebaseConfig = {
    apiKey: "AIzaSyD3QsIWKfHYiKdMAtTMojG30kRx_xViY70",
    authDomain: "fir-test-f851a.firebaseapp.com",
    databaseURL: "https://fir-test-f851a-default-rtdb.firebaseio.com",
    projectId: "fir-test-f851a",
    storageBucket: "fir-test-f851a.appspot.com",
    messagingSenderId: "139616435763",
    appId: "1:139616435763:web:1707cb8cd87b82c0d1ad46",
    measurementId: "G-S2QYW5HQ23"
};

firebase.initializeApp(firebaseConfig);





const userid = document.getElementById("userid"),
    firstname = document.getElementById("firstname"),
    lastname = document.getElementById("lastname"),
    age = document.getElementById("age"),
    addbtn = document.getElementById("addbtn"),
    updatebtn = document.getElementById("updatebtn"),
    removebtn = document.getElementById("reomvebtn");



const databasefire = firebase.database();
const rootref = databasefire.ref('users');

addbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    rootref.child(userid.value).set({
        first_name: firstname.value,
        last_name:lastname.value,
        age:age.value
    })
})

updatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newdata = {
        first_name: firstname.value,
        last_name:lastname.value,
        age:age.value
    };

    // rootref.child(userid.value).update(newdata);
    updates = {};
    updates['/users/' + userid.value] = newdata;
    databasefire.ref().update(updates);
});

removebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    rootref.child(userid.value).remove()
        .then(()=>{
            window.alert("user remove from database");
        })
        .catch(()=>{
            console.log(error);
        })

});

// rootref.on('value',snapshot => {
//     console.log('new event on database');
// })

// rootref.once('child_changed',snapshot => {
//     console.log('new event on');
// })

// rootref.child(0).once('child_changed',snapshot => {
//     console.log('new event on database');
// })

// rootref.child(0).on('child_changed',snapshot => {
//     console.log(snapshot.val());
// })
// rootref.child(5).on('child_changed',snapshot => {
//     console.log(snapshot.val());
// })

// rootref.orderByKey().on("value",snapshot => {
//     console.log(snapshot.val());
//     // let data = aao.val();
//     // console.log(data[1].age);
// })

// rootref.orderByChild('age').limitToFirst(2).on('value',snapshot =>{
//     console.log(snapshot.val());
// })
//
// rootref.orderByChild('first_name').equalTo("maung").on('value',snapshot=>{
//     console.log(snapshot.val());
// })

rootref.orderByChild('first_name').startAt('k').on('value',snapshot =>{
    console.log(snapshot.val());
})



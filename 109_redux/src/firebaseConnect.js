import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAU5UdqniWT4P57ll-1-oEjRcLbmofrPcM",
    authDomain: "notereactfedu-7cf1a.firebaseapp.com",
    databaseURL: "https://notereactfedu-7cf1a.firebaseio.com",
    projectId: "notereactfedu-7cf1a",
    storageBucket: "notereactfedu-7cf1a.appspot.com",
    messagingSenderId: "453175701428"
};
export const firebaseConnect =  firebase.initializeApp(config);

var data = firebase.database().ref('dataForNote/note2');

    data.set(
        {
        id: 1,
        titleNote: "Ngay 20/12",
        contentNote: "Demo content for note"
    })

    data.once('value').then(function(snapchat){
        console.log(snapchat.val());
    })
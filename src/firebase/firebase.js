import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childeSnapshot) => {
//             expenses.push({
//                 id: childeSnapshot.key,
//                 ...childeSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childeSnapshot) => {
//             expenses.push({
//                 id: childeSnapshot.key,
//                 ...childeSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 1000,
//     createdAt: 1000,
//     note: 'ugrent'
// });

// database.ref('notes/-Kzh4lnzTkxQ4U8ig8ag').remove();

// database.ref('notes').push({
//     title: 'Study',
//     body: 'React Native, angular, nodejs'
// });

// const firebaseNotes = {
//     notes: {
//         11213: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         4343: {
//             title: 'Second note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '15',
//     title: 'Second note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (err) => {
//     console.log('Error fetcing data', err);
// });

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Developer'
//     });
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((err) => {
//     console.log('Error fetching data', err)
// });

// database.ref().set({
//     name: "Ahmed Mokhtar",
//     age: 25,
//     stressLevel: 5,
//     job: {
//         title: 'Web developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Port Said',
//         country: 'Egypt'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('This failed.', err);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(26);
// database.ref('location/city').set('Port Fouad');

// database.ref('attributes').set({
//     height: 177,
//     weight: 85
// }).then(() => {
//     console.log('Succeed');
// }).catch((err) => {
//     console.log('failed:', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Cairo'
// }).then(() => {
//     console.log('data was updated');
// }).catch((err) => {
//     console.log('data was not updated', err);
// });

// database.ref('isSingle').set(null);

// database.ref()
// .remove()
// .then(() => {
//     console.log('data was removed');
// }).catch((err) => {
//     console.log('did not remove data', err);
// });
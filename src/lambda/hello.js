var firebase = require("firebase");
global.self = {fetch: require('node-fetch')}

const config = {
  apiKey: "AIzaSyAdYHiXD6FquBDDEyMvqswrR4iN1UP_kRY",
  authDomain: "senradio-aefe9.firebaseapp.com",
  databaseURL: "https://senradio-aefe9.firebaseio.com",
  projectId: "senradio-aefe9",
  storageBucket: "senradio-aefe9.appspot.com",
  messagingSenderId: "657788299894",
  appId: "1:657788299894:web:3fca618732fe15a56b0d57"
}

firebase.initializeApp(config)

// this uses the callback syntax, however, we encourage you to try the async/await syntax shown in async-dadjoke.js
export function handler(event, context, callback) {

  console.log('feradeda')
  const radios = {}
  const radioRef = firebase.database().ref('radio')
  console.log('firebase')
  radioRef.once('value').then(snapshot => {
    radios = snapshot.val()
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Hello, World!', radios: radios }),
      })
  })

  
}

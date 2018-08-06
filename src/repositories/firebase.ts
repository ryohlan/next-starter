import * as firebase from 'firebase'

// It occures errror when initializeApp called more then twice
// so, it must not be initialized on client side.
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCNLIr04LFwcdT26nfVziL9XCGYvcfu2EA',
    authDomain: 'next-starter.firebaseapp.com',
    databaseURL: 'https://next-starter.firebaseio.com',
    projectId: 'next-starter',
    storageBucket: 'next-starter.appspot.com',
    messagingSenderId: '840101482949'
  })
}

export const Firebase = firebase

export const auth = firebase.auth()

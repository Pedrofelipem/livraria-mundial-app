import React from 'react';
import { MainNavegation } from './src/navegations';
import firebase from "firebase"
import { firebaseConfig } from './src/config/firebase';

firebase.initializeApp(firebaseConfig)

export default function App() {
  return ( <MainNavegation/> );
}

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-FlAdmNr47vTLYzddQw6C_ok6LnIwaOg",
  projectId: "aslappauth",
  storageBucket: "aslappauth.firebasestorage.app",
  messagingSenderId: "557625661362",
  appId: "1:557625661362:ios:d5467422eb68c3b4f5b6ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


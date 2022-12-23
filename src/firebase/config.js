import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyBrhOJvgya120Iv8-0fkn22kTjaDlTq2B0",
	authDomain: "fkproj1-8415a.firebaseapp.com",
	databaseURL: "https://fkproj1-8415a.firebaseio.com",
	projectId: "fkproj1-8415a",
	storageBucket: "fkproj1-8415a.appspot.com",
	messagingSenderId: "108173435093",
	appId: "1:108173435093:web:f3d561077c79fa6ddc425c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app)

export { auth, db, storage };

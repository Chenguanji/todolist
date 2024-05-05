import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyClda7Sykv99bEpZoPCxef60ItKKov2Yq8",
   authDomain: "sign1-a46b2.firebaseapp.com",
   projectId: "sign1-a46b2",
   storageBucket: "sign1-a46b2.appspot.com",
   messagingSenderId: "365666080589",
   appId: "1:365666080589:web:30863e6225774d35b98904",
   measurementId: "G-FBMR4DQ8W3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }

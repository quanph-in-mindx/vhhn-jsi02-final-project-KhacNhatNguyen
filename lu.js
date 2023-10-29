import { initalizedApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCw1V-C4WzKqyPEmv0B3pJYr1AE7QtKPKE",
    authDomain: "kri6-f2aaf.firebaseapp.com",
    projectId: "kri6-f2aaf",
    storageBucket: "kri6-f2aaf.appspot.com",
    messagingSenderId: "730065236245",
    appId: "1:730065236245:web:d6a67456dc5b72927cf91c"
};

const app = initalizedApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user))
            window.location.href = "/ri.html";
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
export { app, auth, signInWithGoogle };

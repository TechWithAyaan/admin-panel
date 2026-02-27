import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCAwXu6AWlRpSxA2wsxHF_CLkws9IEQNAM",
  authDomain: "admin-panel-44063.firebaseapp.com",
  projectId: "admin-panel-44063",
  storageBucket: "admin-panel-44063.firebasestorage.app",
  messagingSenderId: "114216179796",
  appId: "1:114216179796:web:88295c509125e20eb235c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

async function signupHandler(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("signup kar raha ho sabr 2 minute serverthora busy hai");
      const user = userCredential.user;
      // ...
      console.log(user);
      getDataAll(
        {
          email: email,
          password: password,
        },
        user.uid,
      );
      console.log("db mai add hogae");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "error founding ayaan ");
      // ..
    });
}

function loginHandler(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      localStorage.setItem("login", "true");
      console.log("user login sucess");
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      const cheackLogin = localStorage.getItem("login");

      if (cheackLogin == "true") {
        window.location.href = "dashboard.html";
      } else {
        alert("pls first login");
        window.location.href = "login.html";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "eroro bhai");

      // Console ke bajaye alert ya UI text istemal karein
      if (errorCode === "auth/invalid-credential") {
        alert("Email ya Password galat hai!");
      } else if (errorCode === "auth/user-not-found") {
        alert("Is email par koi account nahi mila. Pehle Sign Up karein.");
      } else {
        alert("Login nahi ho saka: " + error.message);
      }

      console.error("Error code:", errorCode); // Developer ke li
    });
}

const getDataAll = async (userData, id) => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "users", id), userData);
};

const getsingleData = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
const getAllUserData = async () => {
  let user = []
  const q = query(collection(db, "users"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    user.push(doc.data())
    console.log(doc.id, " => ", doc.data());
  });
  return user
};

export { signupHandler, loginHandler, getsingleData, getAllUserData };

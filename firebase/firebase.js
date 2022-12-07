import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvvYP9g2brFk9k2lPvehDfqHVliV3v_sU",
  authDomain: "buon-appetito-1e30a.firebaseapp.com",
  projectId: "buon-appetito-1e30a",
  storageBucket: "buon-appetito-1e30a.appspot.com",
  messagingSenderId: "977327910796",
  appId: "1:977327910796:web:71ad6b510a8632f75b70a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const uploadImage =  async (image, name) => {
    const storage = getStorage(app);

    const mountainsRef = ref(storage, `images/${name}.png`);
    

    await uploadBytes(mountainsRef, image)

    return await getDownloadURL(mountainsRef)
   
} 

export {

  uploadImage

}

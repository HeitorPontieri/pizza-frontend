
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js"

const firebaseConfig = {

  apiKey: "AIzaSyDPH7ryO6PYHWolBOSFKRqrwMmJTiZpcPU",
  authDomain: "buon-appetito-4ba56.firebaseapp.com",
  projectId: "buon-appetito-4ba56",
  storageBucket: "buon-appetito-4ba56.appspot.com",
  messagingSenderId: "248130316470",
  appId: "1:248130316470:web:4e6cd6070055851f865e17"

};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

const uploadImage =  async (image, name) => {

  const storage = getStorage(app);

  const mountainsRef = ref(storage, `image/${name}`);
  
  await uploadBytes(mountainsRef, image)

  return await getDownloadURL(mountainsRef)
 
} 


export {

  uploadImage

}

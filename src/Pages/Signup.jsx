import React from 'react'
import image from '../images/image.png'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage, db} from '../firebase'
import {  useState } from 'react';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

function Signup() {

  
  const [error, setError] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      console.log(res);

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = await ref(storage, displayName);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(
  (error) => {
    setError(true)
    console.log(error);
    switch (error.code) {
      case 'storage/unauthorized':
        break;
      case 'storage/canceled':
        break;
      case 'storage/unknown':
        break;
    }
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user , {
        displayName ,
        photoURL:downloadURL
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
    });
  }
);

  

    } catch (error) {
      setError(true)
      console.log(error);
    }


  }


  return (
    <div className='form-container'>
      <div className="form-wrapper">

            <span className='logo'>BDS Chat</span>
            <span className='title'>Register</span>


        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <input style={{display:"none"}} type="file" name="" id="file" />
            <label htmlFor="file">
                <img src={image} alt="" />
                <span>Add an avathar</span>
            </label>

            <button type='submit' className='btn-outline-primary'>Sign up</button>
            {error  && <span>Something went wrong</span> }
            <p>You do have an account ? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Signup

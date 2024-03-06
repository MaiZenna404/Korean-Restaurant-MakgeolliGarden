import React, { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
import './FormFooter.css'
import Snackbar from './Snackbar';

export default function FormFooter() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, review);

        addDoc(collection(db, "customers-reviews"), {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "review": review
        })

        }

      const SnackbarState = {
    completed: "completed",
    error: "error",
}

const snackbarRef = useRef(null)

  return (
    <>
        
        <div className='formWrapper'>
            <form className="formContent" onSubmit={handleSubmit}>
                
<fieldset>
            <legend><h2 className='contactForm'>Contact Us 🤙</h2></legend>
                <label htmlFor='firstName'>First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder="Enter your First Name here" autoComplete='given-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label htmlFor='lastName'>Last Name</label>
                <input type="text" name="lasttName" id="lastName" placeholder="Enter your Last Name here" autoComplete="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor='email'>Email</label>
                <input type="text" name="email" id="email" placeholder='makgeolli-garden@mail.com' autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='review'> Havin' something to share ? 😉 </label>
                <textarea type="text" id = "review" rows = {10} cols={15} placeholder="Write here your review ! 😙" autoComplete="off" name="name" value={review} onChange={(e) => setReview(e.target.value)} />
</fieldset>
            <button href="/" type="submit" className='showSnackbar' onClick={() => {snackbarRef.current.appear()}}>Send</button>
            <Snackbar 
            ref={snackbarRef}
            message="Your review has been sent to us ! 👍" type={SnackbarState.completed}/>
            </form>
           
        </div>
           
    </>
  )
}
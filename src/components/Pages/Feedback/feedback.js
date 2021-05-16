import React, { useState } from "react";
import firebase from '../../firebase'

import './feedback.css'

const Feedback = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true)

        firebase.firestore().collection('feedback').add({
            name: name,
            email: email,
            feedback: feedback,
        }).then(() => {
            alert('Response has been submitted')
            setLoading(false)

        })
            .catch((error) => {
                alert(`Error : ${error.message}`)
                setLoading(false)
            })


        setName('')
        setEmail('')
        setFeedback('')
    }
    return (
        <div>
            <form className="feedbackform" onSubmit={handleSubmit}>

                <h1>Feedback Form</h1>

                <label>Name</label>
                <input placeholder="Name" value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <input type="mail" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Feedback</label>
                <textarea placeholder="Message" value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}></textarea>

                <button type="submit" style={{
                    background: loading ? "#ccc" : "rgb(0, 0, 196)"

                }}>Submit</button>
            </form>

        </div>
    )
}

export default Feedback

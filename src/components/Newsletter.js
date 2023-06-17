import React from "react";
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import db from "./firebase";
import firebase from "firebase/compat/app";

export const Newsletter = ({ status, message, onValidated }) => {
  const [messages, setMessage] = useState("");
  const [input, setinput] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    //firebase

    db.collection("emails").add({
      email: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setinput("");
    setMessage("Thank you for subscribing!");
    setTimeout(() => {
      setMessage("");
    }, 10000)

  }



  return (

    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={input} type="email" onChange={(e) => setinput(e.target.value)} placeholder="Email Address" />
                <button onClick={handleSubmit} type="submit">Submit</button>
              </div>
            </form>
            <br></br>
            {messages && <h4 className="alert-message" style={{ color: "red" }}>{messages}</h4>}
          </Col>
        </Row>
      </div>
    </Col>


  )
}

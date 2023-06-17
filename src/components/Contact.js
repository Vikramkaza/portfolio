import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_vkk4k9f', 'template_lcdvxdc', form.current, 'TavCwsxGKfBOajJxy')
      .then((result) => {
        console.log(result.text);
        setButtonText("Sent");
        setStatus({ succes: true, message: 'Message sent successfully' });
      }, (error) => {
        console.log(error.text);
        setButtonText("Sent");
        setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
      });
  };



  return (
    <section className="contact" id="contact-form">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_firstname" placeholder="First Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_lastname" placeholder="Last Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="user_email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="user_phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea name="message" rows="6" placeholder="Message" ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React, { useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../assets/styles/Contact.scss';
//import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */
    /*
    if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
         message: message
       };

       console.log(templateParams);
       emailjs.send('service_8mnoe37', 'template_xbs2qic', templateParams, '04Z4hWMtv8e_FqP0w').then(
         (response) => {
           console.log('SUCCESS!', response.status, response.text);
         },
         (error) => {
           console.log('FAILED...', error);
         },
       );
       setName('');
       setEmail('');
       setMessage('');
     }
  };
*/
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contactez moi</h1>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Votre Nom"
                placeholder="Quel est votre nom?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
                error={nameError}
                helperText={nameError ? "entre votre nom, s'il vous plait" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Téléphone"
                placeholder="Comment puis-je vous contacter?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
                error={emailError}
                helperText={emailError ? "Entre votre numéro de téléphone ou email" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Envoyer moi un message"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                console.log(message);
              }}
              error={messageError}
              helperText={messageError ? "Veuillez entrer votre message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
  }
}

export default Contact;
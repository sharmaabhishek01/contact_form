import './App.css';
import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';

function App() {

  const [pending, setPending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs.sendForm('service_8x0nz2h', 'template_mlbuexp', form.current, {
        publicKey: 'KlDcRVKgFh9ttQF6Z',
      })
      .then((result) => {
          setPending(false);
          console.log(result.text);
          alert("We've recieved your meaasge!")
          form.current.reset();
        }, (error) => {
          setPending(false);
          console.log( error.text);
          alert("Sorrey , there was some error")
          form.current.reset();
        },
      );
  };
  return (
    <div className="App">

      <div className="form-wrapper">
        <form className="form-container" ref={form} onSubmit={sendEmail}>

          <h1>Contact Us</h1>

          <lable> Your Name:</lable>
          <input type="text" placeholder="Enter your name.." name="name"required/>

          <lable>Contact No:</lable>
          <input type="number" placeholder="xxxxxxxxxx" name="number"required/>

          <lable>Email:</lable>
          <input type="email" placeholder="xyz@gmail.com" name="email"required/>

          <lable>Message:</lable>
          <textarea placeholder="your message.." name="message"required/>

          <div className="button-container">
            <button type="submit" disabled={pending ? true : false}>{pending ? "Loading..." : "Send Meassage"}</button>
          </div>


        </form>

      </div>

    </div>
  );
}

export default App;

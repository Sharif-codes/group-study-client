import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n9k7oqm', 'template_92j9n8s', form.current, 'zZe7zFYLI5EnmjTIq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text"  name="user_name"  placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <input type="text" name="user_email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Your Comment</span>
            </label>
            <textarea type="text"  name="message" placeholder="Your message" className="input input-bordered" required />
            
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Send Email</button>
        </div>
    </form>
    );
};

export default Contact;
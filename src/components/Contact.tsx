import '@/styles/contact.scss';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-wrapper container'>
        <div className='contact-left-content'>
          <h2>Conveniently Located in the Heart of Downtown Winnipeg</h2>
          <h3>Dr. Carmine Scarpino Dental is located in the Power Building at 428 Portage Ave.&nbsp;</h3>
          <h4>HOURS</h4>
          <div>
            <ul>
              <li><strong>Monday:</strong> <span>08:00 am - 04:30 pm</span></li>
              <li><strong>Tuesday:</strong> <span>08:00 am - 04:30 pm</span> </li>
              <li><strong>Wednesday:</strong> <span>08:00 am - 04:30 pm</span> </li>
              <li><strong>Thursday:</strong> <span>08:00 am - 04:30 pm</span> </li>
              <li><strong>Friday:</strong> <span>08:00 am - 01:00 pm</span> </li>
              <li><strong>Saturday:</strong> <span>Closed</span></li>
              <li><strong>Sunday:</strong> <span>Closed</span></li>
            </ul>
          </div>
          <h5>ADDRESS</h5>
          <p>402-428 Portage Avenue, Winnipeg, MB R3C 0E2 🇨🇦</p>
          <iframe title="Google Map clinic for Dr. Carmine Scarpino Dental" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20563.194991144468!2d-97.149072!3d49.891305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73e2b6773d91%3A0x709b2a5a650d8a7e!2sDr.%20Carmine%20Scarpino%20Dental!5e0!3m2!1sen!2sca!4v1710479951352!5m2!1sen!2sca" width="100%" height="400" loading="lazy"></iframe>
          <h6>NOTE: Links to independent third-party websites are not endorsed by or affiliated with Dr. Carmine Scarpino Dental.</h6>
        </div>
        <div className='contact-right-content'>
          <h2>Contact Us Today!</h2>
          <form method="get" action="/" role="search">
            <div className="contact-form-group">
              <label htmlFor="fname">First Name <span>*</span></label>
              <input type="text" id="fname" name="fname" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="lname">Last Name <span>*</span></label>
              <input type="text" id="lname" name="lname" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="phone">Phone <span>*</span></label>
              <input type="number" id="phone" name="phone" required  />
            </div>
            <div className="contact-form-group">
              <label htmlFor="question">Your Question <span>*</span></label>
              <textarea id="question" name="question" rows={10} required ></textarea>
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact">How should we contact you <span>*</span></label>
              <select name="contact" id="contact">
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            <label htmlFor="blocker">Spam Blocker</label>
            <ReCAPTCHA 
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />
            <input type="submit" id="submit" name="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
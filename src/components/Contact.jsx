
const Contact = () => {
  return (
    <div id='contact' className="contact-section">
              <div className="inner-row">
                         <div className="contact-section-content">
                                       <div className="intro">
                                                <h4>Let&apos;s Talk</h4>
                                                <h1>Get in Touch with Me</h1>
                                                <p>I&apos;d like to hear from you, whether you need a clarification or would like to team up to bring your project into reality, simply fill in your details below and I&apos;ll reach back to you as soon as I possibly can.</p>
                                       </div>
                                       <div className="form-section">
                                                  <form action="" method="get">
                                                             <div className="form-row">
                                                                         <label htmlFor="full name">Full Name <span>*</span></label>
                                                                         <input type="text" className="input-control" placeholder="John Doe" />
                                                             </div>
                                                             <div className="form-row">
                                                                         <label htmlFor="full name">Email Address <span>*</span></label>
                                                                         <input type="text" className="input-control" placeholder="johndoe@email.com" />
                                                             </div>
                                                             <div className="form-row">
                                                                         <label htmlFor="full name">Subject <span>*</span></label>
                                                                         <input type="text" className="input-control" placeholder="General Inquiry" />
                                                             </div>
                                                             <div className="form-row">
                                                                       <label htmlFor="message">Message <span>*</span></label>
                                                                       <textarea name="" id="" cols="30" rows="10" placeholder="Write your message"></textarea>
                                                             </div>
                                                             <div className="form-btn">
                                                                        <button type="submit">Send your Message</button>
                                                             </div>
                                                  </form>
                                       </div>
                         </div>
              </div>
    </div>
  )
}

export default Contact
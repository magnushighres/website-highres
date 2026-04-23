import React from 'react';

const Contact = ({ data }) => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info fade-in-up">
          <h2>{data.heading_start} <span className="accent">{data.heading_accent}</span></h2>
          <div className="info-item">
            <h4>{data.email_label}</h4>
            <p>{data.email_value}</p>
          </div>
          <div className="info-item">
            <h4>{data.location_label}</h4>
            <p>{data.location_value}</p>
          </div>
          

        </div>
        
        <div className="contact-form-wrapper fade-in-up" style={{animationDelay: '0.2s'}}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder={data.form_name} required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder={data.form_email} required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder={data.form_message} required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start'}}>{data.form_button}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

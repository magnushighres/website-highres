import React from 'react';

const Contact = ({ data }) => {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info fade-in-up">
          <h2>{data.heading_start} <span className="accent">{data.heading_accent}</span></h2>
          <p className="contact-lead">Send en kort brief, en løs idé eller et konkret behov. Jeg svarer med neste steg.</p>
          <div className="info-item">
            <h4>{data.email_label}</h4>
            <p><a href={`mailto:${data.email_value}`}>{data.email_value}</a></p>
          </div>
          <div className="info-item">
            <h4>{data.location_label}</h4>
            <p>{data.location_value}</p>
          </div>
          <div className="contact-tags" aria-label="Typiske leveranser">
            <span>Event</span>
            <span>Reklame</span>
            <span>SoMe</span>
            <span>3D/VFX</span>
          </div>
          

        </div>
        
        <div className="contact-form-wrapper fade-in-up" style={{animationDelay: '0.2s'}}>
          <form className="contact-form" action="https://formsubmit.co/magnus@highres.no" method="POST">
            <input type="hidden" name="_subject" value="Ny melding fra Highres nettside!" />
            <div className="form-group">
              <input type="text" name="navn" className="form-control" placeholder={data.form_name} required />
            </div>
            <div className="form-group">
              <input type="email" name="epost" className="form-control" placeholder={data.form_email} required />
            </div>
            <div className="form-group">
              <textarea name="melding" className="form-control" placeholder={data.form_message} required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start'}}>{data.form_button}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactoInfo = ({ heading, email, url, text }) => {
  return (
    <div className="contacto__info-wrapper">
      <h2 className="contacto__subheading text-heading-secondary">{heading}</h2>
      <div>
        {email && (
          <a className="text-body" href={`mailto:${email}`}>
            {email}
          </a>
        )}
        {url && (
          <a className="text-body" href={url}>
            {text}
          </a>
        )}
        {text && !url && !email && <p className="text-body">{text}</p>}
      </div>
    </div>
  );
};

export default ContactoInfo;

const ContactoInfo = ({ heading, email, url, text }) => {
  const renderContent = () => {
    if (email) {
      return (
        <a className="text-body" href={`mailto:${email}`}>
          {email}
        </a>
      );
    }
    if (url) {
      return (
        <a className="text-body" href={url}>
          {text}
        </a>
      );
    }
    if (text && !url && !email) {
      return heading.toLowerCase() === "address" ? (
        <address className="text-body">{text}</address>
      ) : (
        <p>{text}</p>
      );
    }
  };

  return (
    <div className="contacto__info">
      <h2 className="contacto__subheading text-heading-secondary">{heading}</h2>
      <div className="contacto__details">{renderContent()}</div>
    </div>
  );
};

export default ContactoInfo;

import { motion } from "framer-motion";
import { scrollVariants } from "../../utils/animations";

const ContactoInfo = ({ heading, email, url, text }) => {
  const renderContent = () => {
    if (email) {
      return (
        <a className="" href={`mailto:${email}`}>
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
    <motion.div
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="contacto__info"
    >
      <h2 className="contacto__subheading">{heading}</h2>
      <div className="contacto__details">{renderContent()}</div>
    </motion.div>
  );
};

export default ContactoInfo;

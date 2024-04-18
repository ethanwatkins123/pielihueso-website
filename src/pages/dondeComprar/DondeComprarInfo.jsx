const DondeComprarInfo = ({
  country,
  company,
  website,
  address,
  instagram,
}) => {
  return (
    <div className="dondeComprar__info-wrapper">
      <h2 className="dondeComprar__subheading text-heading-secondary">
        {country}
      </h2>
      <div>
        <p className="dondeComprar__company">{company}</p>
        <a className="dondeComprar__website text-body" href={website}>
          {website}
        </a>
        <address className="dondeComprar__address text-body">{address}</address>
        <a className="dondeComprar__instagram text-body" href={instagram}>
          {`@${
            instagram
              .replace(/https?:\/\//, "")
              .replace(/\/$/, "")
              .split(".com")[0]
          }`}
        </a>
      </div>
    </div>
  );
};

export default DondeComprarInfo;

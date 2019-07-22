import React from 'react';

const Heading = ({
  name,
  url,
  rating,
  location = {},
  phone,
  display_phone
}) => (
    <div className="heading">
      <h2>
        <a
          href={url}
          title={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </h2>
      <div><span className="rating">Rating: </span><span>{rating}</span></div>
      {location.formatted_address && <address className="full-address">{location.formatted_address}</address>}
      {display_phone && <a href={`tel:${phone}`} className="telephone">{display_phone}</a>}
    </div>
  );

export default Heading;

import React from 'react';

const Photos = ({ name, photos: [photo] }) => (
  <div className="photo">
    <img src={photo} alt={name} />
  </div>
);

Photos.defaultProps = {
  photos: []
};

export default Photos;

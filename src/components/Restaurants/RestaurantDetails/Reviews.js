import React from 'react';

const Reviews = ({ reviews = [] }) => (
  <div className="reviews">
    <h3>Reviews</h3>
    {reviews.length > 0 ?
      (<ul>
        {reviews.map((review, index) => (
          <li key={`${index}-${review.text}`}>
            <div>
              <span className="rating">Rating: </span>
              <span>{review.rating}</span>
            </div>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>) : 'No reviews'}
  </div>
);

export default Reviews;

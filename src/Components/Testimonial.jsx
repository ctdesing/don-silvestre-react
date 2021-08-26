import React from 'react'
import './Testimonial.css';

const BaseTestimonial = ({testimonial, name}) =>{
  return (
    <div className="testimonial">
      <svg
        className="small"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        viewBox="0 0 41 35"
      >
        <path
          d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
          fill="#000"
          fillRule="evenodd"
        ></path>
      </svg>
      <p>{ testimonial }</p>
      <p>{ name }</p>
    </div>
  );
}
export default BaseTestimonial;
import Testimonial from './Testimonial'
import './TestimonialGrid.css';

const BaseGrid = () =>{
  const testimonial = 'This Product is great';
  const name = 'Julio Cesar';
  return(
    <div className="testimonial-container">
      <h2 className="title">TESTIMONIALS</h2>
      <div className="testimonials-grid">
          <Testimonial testimonial={testimonial} name={name}></Testimonial>
          <Testimonial testimonial={testimonial} name={name}></Testimonial>
          <Testimonial testimonial={testimonial} name={name}></Testimonial>
      </div>
    </div>
  );

}
export default BaseGrid;
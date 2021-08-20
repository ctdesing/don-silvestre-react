import BaseTestimonial from "./BaseTestimonial";
import './BaseGrid.css';
const BaseGrid = () =>{
const testimonial = 'This Product is great';
const name = 'Julio Cesar';
return(
<div className="container">
    <BaseTestimonial testimonial={testimonial} name={name}></BaseTestimonial>

</div>
);

}
export default BaseGrid;
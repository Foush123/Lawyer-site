import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data from the mock API
    axios.get('https://66a25d2f967c89168f1fcd48.mockapi.io/Testimonial/Testimonial')
      .then(response => {
        // Format the data to match the structure of your testimonials if needed
        const formattedTestimonials = response.data.map(testimonial => ({
          id: testimonial.id,
          title: testimonial.title,
          text: testimonial.comment,
          name: testimonial.name,
          position: testimonial.position,
          image: testimonial.avatar, // Assuming the mock API provides an image URL
          rating: testimonial.rate // Assuming the mock API provides a rating
        }));
        setTestimonials(formattedTestimonials);
      })
      .catch(error => {
        console.error('Error fetching testimonials:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 slides
    slidesToScroll: 2, // Scroll 2 slides
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
        ))}
      </div>
    );
  };

  return (
    <section id="Testimonials" className="forth-section" style={{ backgroundColor: '#F2F7FF' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="testimonial-header">Clients Testimonial</h2>
          </div>
        </div>
        <Slider {...settings} className="owl-carousel owl-theme">
          {testimonials.map((testimonial) => (
            <div className="item" key={testimonial.id}>
              <div className="card-testimonials">
                <div className="card-body-testimonials">
                  <h5 className="card-title-testimonials">{testimonial.title}</h5>
                  <p className="card-text-testimonials">{testimonial.text}</p>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-details d-flex align-items-center mt-3">
                <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle testimonial-image me-3" />
                <div>
                  <h6 className="mb-0">{testimonial.name}</h6>
                  <p className="mb-0">{testimonial.position}</p> {/* Display position */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="custom-nav text-center mt-3">
          <button className="custom-prev">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="custom-next">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

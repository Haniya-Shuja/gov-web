"use client";
import Image from 'next/image';
import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          console.log('Bootstrap JS loaded successfully');
        })
        .catch((error) => console.error('Error loading Bootstrap JS:', error));
    }
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner d-flex flex-column"> {/* flex-column for vertical stacking */}
        <div className="carousel-item active">
          <Image
            className="d-block w-100"
            src="/image/pic1.jpg" // Update with actual path to your image
            alt="First slide"
            width={800}
            height={400}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            src="/image/pic2.jpg" // Update with actual path to your image
            alt="Second slide"
            width={800}
            height={400}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="d-block w-100"
            src="/image/pic3.jpg" // Update with actual path to your image
            alt="Third slide"
            width={800}
            height={400}
          />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel; 

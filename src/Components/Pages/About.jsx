import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="container" py-5 ms-5>
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Quia et reprehenderit molestias nobis facilis illo consequatur quis, aspernatur
               fugit officia libero voluptatibus, ratione alias eius sint. Illum optio id quos.
            </p>
            <Link to="/contact" className='btn btn-outline-primary px-3'>Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center mt-5">
            <img  height="400px" width="400px"src="https://png.pngitem.com/pimgs/s/124-1246858_creative-about-us-hd-png-download.png" alt="aboutimg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

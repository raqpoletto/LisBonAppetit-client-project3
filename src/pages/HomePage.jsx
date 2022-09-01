import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <div>
      <div className="main-create-rest home-carrousel">
        <Carousel className="carrosel-ph">
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100 "
              src="https://res.cloudinary.com/poletto/image/upload/v1662063256/Restaurants/pexels-vincent-ma-janssen-1310777_giejjb.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Looking for an affordable dinner in Lisbon?</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/poletto/image/upload/v1662063260/Restaurants/pexels-quang-nguyen-vinh-2159065_ylkuqz.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Authentic and under the radar restaurants</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/poletto/image/upload/v1661964411/Restaurants/mdlmqfkeahla3abyks7b.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Find meals under €15</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src="https://res.cloudinary.com/poletto/image/upload/v1662063252/Restaurants/pexels-chan-walrus-941861_ft70pj.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Discover the city!</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <main>
        <section id="about">
          <div class="about-wrapper container">
            <div class="about-text">
              <p class="small">About TasKas</p>
              <h2>We want to make people happy </h2>
              <p>
                TasKas helps people discover new places to eat good, tasty and
                traditional food from Portugal and review them. You can save
                your favourites to remember the ones you liked the most!
              </p>
            </div>
          </div>
        </section>

        <section id="food-menu">
          <h2 className="food-menu-heading">
            Do you want to register your tasca?
          </h2>
          <div className="food-menu-container container">
            <div className="food-menu-item">
              <div className="food-img">
                <img
                  src="https://res.cloudinary.com/dnorytyjz/image/upload/v1654782806/Taskas/Rectangle_45_whgsxn.png"
                  alt=""
                />
              </div>
              <div className="food-description">
                <h2 className="food-title">Contact us</h2>
                <p>
                  Give us more information about you and your business and we
                  will contact you as soon as possible.
                </p>
                <p className="emailctc">
                  <u>taskasadmin@gmail.com</u>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="footer">
          <h2>Taskas &copy; by Marina Palma - Web Dev Ironhack</h2>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

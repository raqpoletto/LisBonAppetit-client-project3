import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <div>
      {/* <div className="main-create-rest home-carrousel">
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
      </div> */}
      <main>
        <section id="about">
          <div class="about-wrapper container">
            <div class="about-text">
              <h2>Find your hotspot in Lisbon!</h2>
              <p>
                We believe that delicious and genuine food doesn't have to be
                absurdly expensive. This selection is places visited and
                revisited, selected not only for the attractive price, but also
                because they are cozy restaurants, with truly good meals and
                with the Lisbon charm. You can also join and add your favorite
                places to our list. Have fun and thank you for visiting this
                little corner of a former chef's mind.
              </p>
            </div>
          </div>
        </section>

        <div id="footer">
          <h2>LisBon Appétit &copy; by Raquel Poletto </h2>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

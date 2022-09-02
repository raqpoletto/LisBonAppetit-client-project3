import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  return (
    <section className="container-fluid">
      <div className="row bg-dark text-white">
        <div className="col-lg-7 p-0">
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
                src="https://res.cloudinary.com/poletto/image/upload/v1662063261/Restaurants/pexels-creative-vix-370984_sbe0b4.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>Discover the city!</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-lg-5 p-4 align-self-center">
          <h1 className="display-4">Find your hotspot in Lisbon!</h1>
          <p class="lead">
            Find your hotspot in Lisbon! We believe that delicious and genuine
            food doesn't have to be absurdly expensive. This selection was
            visited and revisited, selected not only for the attractive price
            but also because they are cozy restaurants, with truly good meals
            and with the Lisbon charm. You can also join and add your favorite
            places to our list. Have fun and thank you for visiting this little
            corner of a former chef's mind.
          </p>
        </div>
      </div>

      <div id="footer">
        <h2>LisBon Appétit &copy; by Raquel Poletto </h2>
      </div>
    </section>
  );
}

export default HomePage;

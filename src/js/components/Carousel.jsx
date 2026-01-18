
const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://picsum.photos/1200/300?random=1"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-white">First slide</h5>
            <p className="text-white">Caption 1</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://picsum.photos/1200/300?random=2"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-white">Second slide</h5>
            <p className="text-white">Caption 2</p>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://picsum.photos/1200/300?random=3"
            className="d-block w-100"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-white">Third slide</h5>
            <p className="text-white">Caption 3</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden text-light">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

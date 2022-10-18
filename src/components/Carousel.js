import { useParams } from "react-router-dom";
import { useState } from "react";
import './Carousel.css';

const Carousel = ({haustierArray}) => {
  const [active, setActive] = useState(0);
  const {id} = useParams();
  const { images } = haustierArray.find(haustier => haustier.id === +id);
  const handleIndexClick = (event) => {
    setActive(+event.target.dataset.index)
  }
  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" data-testid="hero" />
      <div className="carousel-small">
        {images.map((photo, index) => (
          <img
            data-testid={`thumbnail${index}`}
            data-index={index}
            src={photo}
            alt="animal thumbnail"
            key={photo}
            className={index === active ? "active" : ""}
            onClick={handleIndexClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
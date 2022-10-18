import './Haustier.css';
import { Link } from "react-router-dom";

const Haustier = (props) => {
  let hero = "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/612/original/DCI__logo_wordmark_blue.png";

  if (Array.isArray(props.images) && props.images.length > 0) {
    hero = props.images[0];
  }
console.log(props.id);
  return (
    <div className="haustier-container">
      <Link to={`/pictures/${props.id}`}><img src={hero} alt={props.name} width="300" data-testid="thumbnail" /></Link>
      <div>
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    </div>
  );
};

export default Haustier;
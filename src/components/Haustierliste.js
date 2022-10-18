import Haustier from "./Haustier.js";

const Haustierliste = ({haustierArray}) => {
  return (
    <>
      {haustierArray.map((haustier) => {
        return (
          <Haustier
            name={haustier.name}
            animal={haustier.animal}
            breed={haustier.breed}
            key={haustier.id}
            id={haustier.id}
            images={haustier.images}
          />
        );
      })}
    </>
  );
};

export default Haustierliste;
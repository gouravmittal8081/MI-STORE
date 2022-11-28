
import NavCard from "./NavCard.js";
import "../styles/NavOptios.css";

const NavOptios = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {

  return (
    <div className="navOptions">
      {miPhones
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {redmiPhones
        ? redmiPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {tv
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {laptop
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {fitnessAndLifeStyle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {home
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {audio
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessories
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptios;

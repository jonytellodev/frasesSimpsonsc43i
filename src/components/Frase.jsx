import { Card } from "react-bootstrap";

const Frase = ({datosPersonaje}) => {
  return (
    <section className="my-5">
      <h2>{datosPersonaje.character}</h2>
      <hr />
      <img className="mb-3" src={datosPersonaje.image} alt='Nelson' />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>{datosPersonaje.quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
            {datosPersonaje.character} in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;

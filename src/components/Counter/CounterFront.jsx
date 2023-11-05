const CounterFront = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
    
      <div className="counter-container">
        <div className="counter">
        <button className="button-cart" onClick={restar}>
          -
        </button>
        <h2>{contador}</h2>
        <button className="button-cart" onClick={sumar}>
          +
        </button>
        </div>

        <button className="button-cart" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default CounterFront;
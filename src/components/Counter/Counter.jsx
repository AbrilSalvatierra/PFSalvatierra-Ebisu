import { useState } from "react";
import Swal from "sweetalert2";
import CounterFront from "./CounterFront";

const Counter = ({ stock, onAdd, initial = 1 }) => {

  const [contador, setContador] = useState( initial );

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
        Swal.fire({
            position:'center',
            title: 'Error!',
            text: 'Ha llegado a la cantidad maxima',
            icon: 'error',
            timer: 1200
          });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterFront sumar={sumar} restar={restar} contador={contador} onAdd={onAdd}/>
  );
};

export default Counter;
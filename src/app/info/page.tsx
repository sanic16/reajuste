import React from "react";

export default function page() {
  return (
    <div className="wrapper container">
      <div className="payment">
        <h3>Información de pago</h3>
        <div className="payment__container">
            <div>Clase Magistral: Q 161.86</div>
            <div>Laboratorio: Q 24.35</div>
        </div>
        <div className="payment__accounts">
            <ul>
                <li>Banrural Ahorro - 4229166624</li>
                <li>Bi Ahorro - 0757571</li>
                <li>Bantrab ahorro 1233320399</li>
            </ul>
            <p>
                Nombre: <strong>Julio Rubén Sanic Martínez</strong>
            </p>
        </div>
      </div>

    </div>
  );
}

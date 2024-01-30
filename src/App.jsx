import { useEffect, useState } from "react";
import "./App.css";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// libreria scaner qr:npm i html5-qrcode
// importacion de libreria
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  // estado que contiene lo escaneado de la camara
  const [scanResult, setScanResult] = useState(null);

  /*metemos la constante/objeto que tiene la configuracion del
  escaneador camara dentro de un usseefcet para que pueda renderizar*/
  useEffect(() => {
    // creamos una constante que contiene un objeto para el apartado de la camara
    // con la propiedad  Html5QrcodeScanner que es propia de la lbireria
    const scanearQr = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    //funcion que agarra lo escaneado 
    const success = (result) => {
      scanearQr.clear; //limpia el scaneo
      setScanResult(result);//guarda el escaeno eb¿n ets estado
    };

    // funcion error caso contrario
    const error = (err) => {
      console.warn(err);
    };

    //renderizamos el apartado de la camara con la funcion success
    scanearQr.render(success, error);

    // funcion succes el cual verificra cuando se escanea exitosamente el QR
    // succes recibe como parametro el resultado del escaneo
  }, []);

  return (
    <div className="App">
      <h1>Escanee su codigo QR</h1>

      {/* contenedor de elemento con id=reader par
   que rendireze dentro de ese el apartado de scaneo camara*/}
      {/* ante ponemos condicional par arenderizar */}
      {scanResult ? (
        <div>
          Success:<a href={"http://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
      // renderiza la camra que escanea
        <div id="reader"></div>
      )}
    </div>
  );
}



// codigo de boton descarga 

export default App;

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ButtonSuscribe() {

    const [subscribe, setSubscribe] = useState(false)

    return (
        <>

        <button
            onClick={ () => {
                toast.success('Felicidades ya estas suscrito');
                setSubscribe(!subscribe)
            }}
        > 
           {
            subscribe ? "Ya estas suscrito" : "Click para sucribirte"
           }
        </button>

        <ToastContainer/>

        </>
    )
}

export default ButtonSuscribe
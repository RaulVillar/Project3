import { useState } from "react";
import { useParams } from "react-router-dom";
import CallAxios from "../../Services/CallAxios";
import { useEffect } from "react";


export default function FormEdit() {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [email, setEmail] = useState("");
    const [precio, setPrecio] = useState("");
    const [voice, setVoice] = useState("");
    const { id } = useParams();

    const handleUpdate = (id) => {
        CallAxios().getVoicesById(id)
            .then(response => {
                setVoice(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    };
    useEffect(() => {
        handleUpdate(id)

    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: nombre||voice.name,
            category: categoria||voice.category,
            email: email||voice.email,
            price: precio||voice.price,
            id: id
        }
        
        CallAxios().updateVoice(data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} className="container d-flex justify-content-center mt-5">
            <div>
                <form name="datos" className="form-container">
                    <h1 className="d-flex justify-content-center">Modifica tu anuncio</h1>
                    <div className="mb-3">
                        <input required type="text" className="form-control" id="name"
                            placeholder="Nombre y Apellidos" onChange={(e) => setNombre(e.target.value)} defaultValue={voice.name}></input>
                    </div>
                    <div className="mb-3">
                        <select required className="form-control" id="category" onChange={(e) => setCategoria(e.target.value)} defaultValue={voice.category}>
                            <option value="" disabled="disabled">Categoría</option>
                            <option value="Animación">Animación</option>
                            <option value="Cine">Cine</option>
                            <option value="Famosos">Famosos</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input required type="text" className="form-control"
                            placeholder="Escribe aquí tu mail"
                            id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={voice.email}></input>
                    </div>
                    <div className="mb-3">
                        <input required className="form-control" placeholder="Introduce un importe en euros"
                            id="price" onChange={(e) => setPrecio(e.target.value)} defaultValue={voice.price}></input>
                    </div>
                    <button type="submit" className="btn btn-dark">Enviar</button>

                    <button onClick={handleSubmit} type="button" className="btn btn-dark ms-2">Actualizar</button>
                </form>
            </div>
        </div>
    )
}
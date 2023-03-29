import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallAxios from "../../Services/CallAxios";

export default function FormEdit() {

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [email, setEmail] = useState("");
    const [precio, setPrecio] = useState("");
    const { id } = useParams();

    const handleUpdate = () => {
        CallAxios().getVoices(id)
            .then(response => {
                setNombre(response.name);
                setCategoria(response.category);
                setEmail(response.email);
                setPrecio(response.price);

            })
            .catch(error => {
                console.error(error);
            });
    }
    useState(() => {
        handleUpdate();
    })

    const handleDelete = (id) => {
        CallAxios().deleteVoice(id)
            .then(response => {
                console.log("carta eliminada");
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: nombre,
            category: categoria,
            email: email,
            price: precio,
            id: id
        };

        CallAxios().updateVoice(id, data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div style={{ background: "rgba(219, 171, 236, 1)", padding: "5%", borderRadius: "10px" }} className="container d-flex justify-content-center mt-5">
            <div>
                <form className="form-container">
                    <h1 className="d-flex justify-content-center">Modifica tu anuncio</h1>
                    <div className="mb-3">
                        <input required type="text" className="form-control" id="name"
                            placeholder="Nombre y Apellidos" onChange={(e) => setNombre(e.target.value)} value={nombre}></input>
                    </div>
                    <div className="mb-3">
                        <select required className="form-control" id="category" onChange={(e) => setCategoria(e.target.value)} value={categoria}>
                            <option value="selected">Categoría</option>
                            <option value="Animación">Animación</option>
                            <option value="Cine">Cine</option>
                            <option value="Famosos">Famosos</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input required type="text" className="form-control"
                            placeholder="Escribe aquí tu mail"
                            id="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="mb-3">
                        <input required className="form-control" placeholder="Introduce un importe en euros"
                            id="price" onChange={(e) => setPrecio(e.target.value)} value={precio}></input>
                    </div>
                    <button onClick={() => handleUpdate()} type="button" className="btn btn-dark ms-2">Actualizar</button>
                    <button type="button" onClick = {()=>handleDelete(id)}  className="btn btn-dark ms-2">Eliminar</button>
                </form>
            </div>
        </div>
    )
}


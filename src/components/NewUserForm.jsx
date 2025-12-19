import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function NewUserForm({}) {
  const { trips, setTrips } = useSearch();

  const { id } = useParams();

  //Create a varible to store form data
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [taxIdCode, setTaxIdCode] = useState("");

  const newUser = {
    id: `${name}${Date.now()}`,
    nome: name,
    cognome: lastName,
    telefono: phone,
    email: email,
    codiceFiscale: taxIdCode,
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    trips.forEach((viaggio) => {
      if (viaggio.id == id) {
        viaggio.viaggiatori.push(newUser);
      }
    });

    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setTaxIdCode("");
  }

  return (
    <div className="container my-5">
      <h3 className="mb-3">Aggiungi un nuovo viaggiatore</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="nome"
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cognome" className="form-label">
            Cognome
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="cognome"
            id="cognome"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Telefono
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="telefono"
            id="telefono"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Codice fiscale
          </label>
          <input
            value={taxIdCode}
            onChange={(e) => setTaxIdCode(e.target.value)}
            type="text"
            name="codice-fiscale"
            id="codice-fiscle"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Aggiungi Utente
        </button>
      </form>
    </div>
  );
}

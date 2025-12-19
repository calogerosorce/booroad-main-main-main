import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
/* import { useSearch } from "../context/SearchContext"; */

export default function DettaglioViaggio() {

  const { id } = useParams();

  const { search, trips, setTrips } = useSearch()

  //get the single trip
  const singleTrip = trips.find((items) => items.id == id);

  //Transform search to lowercase
  const searchLower = search.toLowerCase();

  //Search logic

  const viaggiatoriFiltrati = [];

  singleTrip.viaggiatori.forEach((viaggiatore) => {
    if (
      `${viaggiatore.nome} ${viaggiatore.cognome}`
        .toLowerCase()
        .includes(searchLower)
    ) {
      viaggiatoriFiltrati.push(viaggiatore);
    }
  });



  function handleTrash(codiceFiscale) {
    const removeTraveler = singleTrip.viaggiatori.filter(
      (viaggiatore) => viaggiatore.codiceFiscale !== codiceFiscale
    );

    setTrip([{ ...trip[0], viaggiatori: removeTraveler }]);
  }

  useEffect(() => { }, [trips])

  return (
    <>
      <div className="container">
        <div className="row justify-content-center p-3">
          <div className="col-lg-8 col-sm-12">
            <div className="d-flex justify-content-between mb-3">
              <h2 className="fs-3">Rubrica Viaggiatori</h2>
              <Link to={`/${id}/travelerForm`} className="btn btn-primary">Aggiungi Viaggiatore</Link>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="d-none d-md-table-cell text-center"
                  >
                    Cognome
                  </th>
                  <th scope="col" className="text-center">
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody>
                {viaggiatoriFiltrati.map((viaggiatore) => (
                  <tr key={viaggiatore.codiceFiscale}>
                    <td className="align-middle text-center">
                      {viaggiatore.nome}
                    </td>
                    <td className="d-none align-middle d-md-table-cell text-center">
                      {viaggiatore.cognome}
                    </td>
                    <td className="log text-center">
                      <Link to={`/${id}/${viaggiatore.id}`}>
                        <button
                          type="button"
                          className="eye btn btn-outline-primary"
                        >
                          <i className="bi bi-eye-fill"></i>
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => handleTrash(viaggiatore.codiceFiscale)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

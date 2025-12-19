import { useState } from "react";
import { useSearch } from "../context/SearchContext";

export default function NewTripForm() {
  //Create a varible to store form data
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { addTrip } = useSearch();

  const newTrip = {
    id: `${destination}${Date.now()}`,
    destinazione: destination,
    dataInizio: startDate,
    dataFine: endDate,
    viaggiatori: [],
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    addTrip(newTrip);

    setDestination("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <>
      <h3 className="mb-3">Aggiungi un nuovo viaggio</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="destinazione" className="form-label">
            Destinazione
          </label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            name="destinazione"
            id="destinazione"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="data-di-inizio" className="form-label">
            Data di inizio
          </label>
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="text"
            name="data-di-inizio"
            id="data-di-inizio"
            className="form-control"
            placeholder="YYYY-MM-DD"
            aria-describedby="helpId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="data-di-fine" className="form-label">
            Data di fine
          </label>
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="text"
            name="data-di-fine"
            id="data-di-fine"
            className="form-control"
            placeholder="YYYY-MM-DD"
            aria-describedby="helpId"
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Aggiungi Viaggio
        </button>
      </form>
    </>
  );
}

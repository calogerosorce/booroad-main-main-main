import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { useEffect } from "react";

export default function ListaViaggi() {
  const { search, trips } = useSearch();
  const searchLower = search.toLowerCase().trim();

  let viaggiFiltrati = [];

  function getFilteredTrips() {
    if (!searchLower) {
      viaggiFiltrati = trips;
      return;
    }

    trips.forEach((viaggio) => {
      let viaggiatoriMatch = [];

      viaggio.viaggiatori.forEach((viaggiatore) => {
        if (
          `${viaggiatore.nome} ${viaggiatore.cognome}`
            .toLowerCase()
            .includes(searchLower)
        ) {
          viaggiatoriMatch.push(viaggiatore);
        }
      });

      if (viaggiatoriMatch.length > 0) {
        viaggiFiltrati.push(viaggio);
      }
    });
  }

  getFilteredTrips();

  function getStatoViaggio(dataInizio, dataFine) {
    const oggi = new Date();
    const inizio = new Date(dataInizio);
    const fine = new Date(dataFine);

    if (oggi < inizio) return "futuro";
    if (oggi > fine) return "passato";
    return "in-corso";
  }

  useEffect(() => {
    getFilteredTrips();
    console.log(viaggiFiltrati);
  }, [trips, searchLower]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-between align-items-center row-cols-4">
          <div className="col">
            <h1 className="mt-3 text-center fw-bold">Lista Viaggi</h1>
            <p className="text-center text-muted mb-4">
              Destinazioni, date e dettagli
            </p>
          </div>
          <div className="col text-end">
            <Link to={'/tripForm'} className="btn btn-primary" >
              Aggiungi viaggio
            </Link>
          </div>
        </div>
        <div className="row">
          {viaggiFiltrati.map((viaggio) => (
            <div key={viaggio.id} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm viaggio-card position-relative">
                <span
                  className={`pallino-stato pallino-${getStatoViaggio(
                    viaggio.dataInizio,
                    viaggio.dataFine
                  )}`}
                ></span>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{viaggio.destinazione}</h5>

                  <p className="card-text text-muted small">
                    Data partenza:
                    <strong>
                      {new Date(viaggio.dataInizio).toLocaleDateString(
                        "it-IT",
                        { day: "2-digit", month: "short", year: "numeric" }
                      )}
                    </strong>
                    <br />
                    Data arrivo:
                    <strong>
                      {new Date(viaggio.dataFine).toLocaleDateString("it-IT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </strong>
                  </p>

                  <Link
                    to={`/${viaggio.id}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    Dettagli viaggio
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

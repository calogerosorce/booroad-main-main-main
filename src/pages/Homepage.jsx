import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div
        className="p-5 text-center bg-image rounded-3 position-relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519885277449-12eee5564d68?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">BooRoad</h1>
              <h4 className="mb-5 fw-normal text-white">
                Destinazioni, date e dettagli delle tue prossime avventure
              </h4>
              <Link to={`/viaggi`}>
                <button className="btn btn-outline-light">Lista viaggi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center mb-5">Perch&eacute; viaggiare con noi?</h2>
        <div className="row text-center g-4">
          <div className="col-md-3">
            <i className="bi bi-people-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Gruppi piccoli</h5>
            <p className="text-muted">
              Viaggi in gruppi ridotti per vivere esperienze più autentiche e
              creare legami veri.
            </p>
          </div>
          <div className="col-md-3">
            <i className="bi bi-compass-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Accompagnatori locali</h5>
            <p className="text-muted">
              Guide esperte che conoscono il territorio come casa loro.
            </p>
          </div>
          <div className="col-md-3">
            {" "}
            <i className="bi bi-calendar-check-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Date flessibili</h5>
            <p className="text-muted">
              Partenze durante tutto l'anno per adattarsi ai tuoi ritmi.
            </p>
          </div>
          <div className="col-md-3">
            {" "}
            <i className="bi bi-heart-fill fs-1 text-primary mb-3"></i>
            <h5 className="mt-3">Esperienze autentiche</h5>
            <p className="text-muted">
              Non il solito viaggio: vivi la destinazione dall'interno.
            </p>
          </div>
        </div>
        <hr className="mt-5 border border-2 opacity-50 shadow-sm" />
      </div>

      <div className="text-center my-5">
        <h2>Pronto a partire?</h2>
        <Link to="/viaggi">
          <button className="btn btn-dark mt-3 mb-5">
            Scopri tutti i viaggi
          </button>
        </Link>
      </div>
    </>
  );
}

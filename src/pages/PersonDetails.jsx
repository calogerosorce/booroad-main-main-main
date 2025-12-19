import { useParams } from "react-router-dom";
import user from "../assets/user.jpg";
import viaggi from "../data/viaggi";

export default function PersonDetail() {
  const { id, travelerID } = useParams();

  const filterTrip = viaggi.filter((items) => items.id == id);

  const filterUser = filterTrip[0].viaggiatori.find(
    (items) => items.id == travelerID
  );

  const traveler = filterUser;

  //console.log(filterUser);

  return (
    <div className="container my-5 text-center d-flex justify-content-center">
      <div className="card p-5">
        <div className="card-top">
          <img src={user}></img> {/*IMMAGE DELLA PERSONA*/}
        </div>
        <div className="card-bottom">
          <p className="name">
            <h3 className="mt-4">
              {traveler.nome} {traveler.cognome}
            </h3>
          </p>
          {/*TENDENZIALMENTE QUESTO DA FARE IN STRONG*/}
          <p>
            <strong>Codice fiscale:</strong>
            {traveler.codiceFiscale}
          </p>
          <p>
            <strong>Email:</strong> {traveler.email}
          </p>
          <p>
            <strong>Numero di telefono:</strong>+39 {traveler.telefono}
          </p>
        </div>
      </div>
    </div>
  );
}

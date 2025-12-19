import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center bg-body-tertiary">
      <div className="pt-4">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter-x"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            data-mdb-ripple-init
            className="btn btn-link btn-lg text-body m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
        >
          &copy;2025 Copyright:
          <Link to="/" className="ms-2">
            BooRoad.com
          </Link>
        </div>
      </div>
    </footer>
  );
}


function Competences() {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">

      {/* Titre */}
      <div className="d-flex align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Mes compétences</h3>
          <p className="text-secondary mb-0">
            Mes connaissances techniques
          </p>
        </div>
      </div>

      {/* Développement Front-end */}
      <h6 className="text-secondary text-uppercase fw-bold mb-3"
          style={{ fontSize: 12, letterSpacing: 1 }}>
        Développement Front-end
      </h6>

      {/* HTML / CSS */}
      <div className="border rounded-3 p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className="fw-semibold">HTML / CSS</span>
          </div>
          <span className="text-primary fw-bold">90%</span>
        </div>

        <div className="progress rounded-pill" style={{ height: 8 }}>
          <div
            className="progress-bar bg-primary rounded-pill"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      {/* JavaScript */}
      <div className="border rounded-3 p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-filetype-js text-warning fs-4"></i>
            <span className="fw-semibold">JavaScript</span>
          </div>
          <span className="text-primary fw-bold">75%</span>
        </div>

        <div className="progress rounded-pill" style={{ height: 8 }}>
          <div
            className="progress-bar bg-warning rounded-pill"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      {/* React */}
      <div className="border rounded-3 p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-filetype-jsx text-info fs-4"></i>
            <span className="fw-semibold">React.js</span>
          </div>
          <span className="text-primary fw-bold">60%</span>
        </div>

        <div className="progress rounded-pill" style={{ height: 8 }}>
          <div
            className="progress-bar bg-info rounded-pill"
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
            <div className="border rounded-3 p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-filetype-jsx text-info fs-4"></i>
            <span className="fw-semibold">PYTHON</span>
          </div>
          <span className="text-primary fw-bold">58%</span>
        </div>

        <div className="progress rounded-pill" style={{ height: 8 }}>
          <div
            className="progress-bar bg-info rounded-pill"
            role="progressbar"
            style={{ width: "58%" }}
            aria-valuenow={58}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

  
                  <div className="border rounded-3 p-3 mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-filetype-js text-warning fs-4"></i>
            <span className="fw-semibold">Langage C</span>
          </div>
          <span className="text-primary fw-bold">55%</span>
        </div>

        <div className="progress rounded-pill" style={{ height: 8 }}>
          <div
            className="progress-bar bg-warning rounded-pill"
            role="progressbar"
            style={{ width: "55%" }}
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
       {/* Autres compétences */}
      <hr className="opacity-25 mb-4" />
       <h6 className="text-secondary text-uppercase fw-bold mb-3"
          style={{ fontSize: 12, letterSpacing: 1 }}>
        Autres technologies
      </h6>

      <div className="d-flex flex-wrap gap-2">
        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
          <i className="bi bi-bootstrap me-1"></i>
          Bootstrap
        </span>

        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
          <i className="bi bi-git me-1"></i>
          Git / GitHub
        </span>

        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
          TypeScript
        </span>

        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
          Responsive Design
        </span>
      </div>


    </div>
  );
}

export default Competences;
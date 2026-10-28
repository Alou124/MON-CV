
export default function Experiences() {
    return (
        <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">

            {/* Titre */}
            <div className="d-flex align-items-center mb-4">

                <div>
                    <h3 className="fw-bold mb-1">Expériences professionnelles</h3>
                    <p className="text-secondary mb-0">
                        Mon parcours et mes réalisations
                    </p>
                </div>
            </div>

            {/* Expérience 1 */}
            <div className="border rounded-4 p-3 p-md-4 mb-4">

                {/* Date et statut */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2">
                        2025 - 2026
                    </span>

                    <span className="badge bg-success-subtle text-success px-3 py-2">
                        Stage
                    </span>
                </div>

                {/* Entreprise et poste */}
                <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                        className="bg-light rounded-3 d-flex align-items-center justify-content-center p-2"
                        style={{ width: 75, height: 75, flexShrink: 0 }}
                    >
                        <img
                            src="/src/assets/LOGO-SONATEL.webp"
                            alt="Logo SONATEL"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    <div>
                        <h5 className="fw-bold mb-1">
                            Développeur Web Stagiaire
                        </h5>

                        <h6 className="text-primary mb-1">SONATEL</h6>

                        <small className="text-secondary">
                            <i className="bi bi-geo-alt me-1"></i>
                            Dakar, Sénégal
                        </small>
                    </div>
                </div>

                <hr className="text-secondary opacity-25" />


                <h6 className="fw-bold mb-3">
                    Missions et réalisations
                </h6>

                <ul className="list-unstyled mb-4">
                    <li className="d-flex mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                            Développement d'interfaces web modernes et
                            responsives avec React.js.
                        </span>
                    </li>

                    <li className="d-flex mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                            Création de composants réutilisables et gestion
                            des données avec les hooks React.
                        </span>
                    </li>

                    <li className="d-flex mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                            Intégration de maquettes avec HTML, CSS et Bootstrap.
                        </span>
                    </li>

                    <li className="d-flex">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>
                            Amélioration de l'expérience utilisateur et adaptation
                            des interfaces aux appareils mobiles.
                        </span>
                    </li>
                </ul>

                {/* Technologies */}
                <h6 className="fw-bold mb-3">
                    <i className="bi bi-code-slash text-primary me-2"></i>
                    Technologies utilisées
                </h6>

                <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        React.js
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        TypeScript
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        HTML5
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        CSS3
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        Bootstrap
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        Git
                    </span>
                </div>
            </div>

            {/* Expérience 2 : à personnaliser */}
            <div className="border rounded-4 p-3 p-md-4">

                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
                    <span className="badge bg-secondary-subtle text-secondary px-3 py-2">
                        2025 - 2026
                    </span>

                    <span className="badge bg-info-subtle text-info px-3 py-2">
                        Projet personnel
                    </span>
                </div>

                <h5 className="fw-bold mb-2">
                    Développeur Front-end
                </h5>

                <p className="text-secondary mb-3">
                    Projet de création d'une application web
                </p>

                <ul className="list-unstyled mb-3">
                    <li className="d-flex mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>Conception d'interfaces utilisateur interactives.</span>
                    </li>

                    <li className="d-flex mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>Gestion des événements et des états avec React.</span>
                    </li>

                    <li className="d-flex">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>Organisation du code en composants réutilisables.</span>
                    </li>
                </ul>

                <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        React.js
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        JavaScript
                    </span>

                    <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                        Bootstrap
                    </span>
                </div>
            </div>

        </div>
    );
}

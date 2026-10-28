
export default function InfosPerso() {
    return (
        <div className="card border-0 shadow rounded-4 overflow-hidden mb-4">

            {/* Bandeau supérieur */}
            <div className="bg-primary" style={{ height: 6 }}></div>

            <div className="p-4 p-md-5">

                <div className="row align-items-center g-4">

                    {/* Photo de profil */}
                    <div className="col-12 col-md-4 text-center">
                        <img
                            src="./src/assets/image.jpeg"
                            alt="Photo de profil d'Alassane Sow"
                            className="rounded-circle shadow border border-3 border-white"
                            width="160"
                            height="160"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Informations principales */}
                    <div className="col-12 col-md-8 text-center text-md-start">

                        <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
                            <i className="bi bi-person-badge me-2"></i>
                            PROFIL PROFESSIONNEL
                        </span>

                        <h2 className="fw-bold mb-2">
                            ALASSANE SOW
                        </h2>

                        <h5 className="text-primary fw-semibold mb-3">
                            Étudiant en Génie Logiciel
                        </h5>

                        <p className="text-secondary lh-lg mb-4">
                            Passionné par le développement web, je conçois
                            des interfaces modernes et responsives. Je développe
                            mes compétences en React.js, JavaScript et dans
                            les technologies du web.
                        </p>

                        {/* Coordonnées */}
                        <div className="d-flex flex-column gap-3">

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                                <div className="bg-primary-subtle text-primary rounded-3 p-2">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>

                                <div className="text-start">
                                    <small className="text-secondary d-block">
                                        Téléphone
                                    </small>
                                    <a
                                        href="tel:+221781113141"
                                        className="text-dark text-decoration-none fw-semibold"
                                    >
                                        +221 78 111 31 41
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                                <div className="bg-primary-subtle text-primary rounded-3 p-2">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>

                                <div className="text-start">
                                    <small className="text-secondary d-block">
                                        Adresse e-mail
                                    </small>
                                    <a
                                        href="mailto:kanesowalassane@gmail.com"
                                        className="text-dark text-decoration-none fw-semibold text-break"
                                    >
                                        kanesowalassane@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
                                <div className="bg-primary-subtle text-primary rounded-3 p-2">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>

                                <div className="text-start">
                                    <small className="text-secondary d-block">
                                        Localisation
                                    </small>
                                    <span className="fw-semibold">
                                        Dakar, Sénégal
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <hr className="my-4 opacity-25" />

                {/* Compétences principales */}
                <div>
                    <h6 className="fw-bold mb-3 text-center">
                        <i className="bi bi-code-slash text-primary me-2"></i>
                        Technologies principales
                    </h6>

                    <div className="d-flex flex-wrap justify-content-center gap-2">

                        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                            React.js
                        </span>

                        <span className="badge rounded-pill bg-light text-dark border px-3 py-2">
                            JavaScript
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

                    </div>
                </div>

            </div>
        </div>
    );
}

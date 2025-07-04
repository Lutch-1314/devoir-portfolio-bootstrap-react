const Legalnotice = () => {
    return (
        <div>
            <header>
                <h1>Mentions légales</h1>
            </header>
            <main>
                <section className="accordion" id="accordionLegalNotice">
                    <article className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Éditeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionLegalNotice">
                            <address className="accordion-body d-flex flex-column">
                                <strong>John Doe</strong>
                                <span>
                                    <i className="bi bi-map"> </i>
                                    40 rue Laure Diebold
                                </span>
                                <span>
                                    <i className="bi bi-geo-alt"> </i>
                                    69009 Lyon, France
                                </span>
                                <span>
                                    <i className="bi bi-phone"> </i>
                                    10 20 30 40 50
                                </span>
                                <span>
                                    <i className="bi bi-envelope-at"> </i>
                                    johndoe@gmail.com
                                </span>
                            </address>
                        </div>
                    </article>
                    <article className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionLegalNotice">
                            <address className="accordion-body d-flex flex-column">
                                <strong>alwaysdata</strong>
                                <span>
                                    91 Rue du Faubourg Saint-Honoré, 75008 Paris
                                </span>
                                <span>
                                    <i class="bi bi-globe"> </i>
                                    <a href="https://www.alwaysdata.com/fr/" target="blank">www.alwaysdata.com</a>
                                </span>
                            </address>
                        </div>
                    </article>
                    <article className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Crédits</strong>
                                <p>Ce site a été réalisé par John Doe, étudiant au 
                                    <a href="https://www.centre-europeen-formation.fr/" target="blank"> Centre Européen de Formation.</a>
                                </p>
                                <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                                    <a href="https://www.flaticon.com/fr/" target="blank"> Pixabay.</a>
                                </p>
                                <p>Le favicon de ce site a été fourni par 
                                    <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="blank"> John doe Icons erstellt von Freepik - Flaticon.</a>
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Legalnotice;
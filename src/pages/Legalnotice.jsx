import { useEffect } from 'react';

const Legalnotice = () => {
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);
    
    return (
        <div className="container-fluid">
            <header className="text-center mb-5">
                <h1 className="mt-5">Mentions légales</h1>
                <div className="mx-auto my-3 bg-primary" style={{ width: '30%', height: '4px', marginTop: '5px' }}></div>
            </header>
            <main className="container mb-5">
                <section className="accordion" id="accordionLegalNotice">
                    <article className="accordion-item">
                        <h2 className="accordion-header" id="accordion-header-one">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                              Éditeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionLegalNotice" aria-labelledby="accordion-header-one">
                            <address className="accordion-body d-flex flex-column">
                                <strong>John Doe</strong>
                                <span>
                                    <i className="bi bi-map me-1"></i>
                                    40 rue Laure Diebold
                                </span>
                                <span>
                                    <i className="bi bi-geo-alt me-1"></i>
                                    69009 Lyon, France
                                </span>
                                <span>
                                    <i className="bi bi-phone me-1"></i>
                                    10 20 30 40 50
                                </span>
                                <span>
                                    <i className="bi bi-envelope-at me-1"></i>
                                    johndoe@gmail.com
                                </span>
                            </address>
                        </div>
                    </article>
                    <article className="accordion-item">
                        <h2 className="accordion-header" id="accordion-header-two">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionLegalNotice" aria-labelledby="accordion-header-two">
                            <address className="accordion-body d-flex flex-column">
                                {/* L'apparence est différente de la maquette mais j'ai préféré garder la cohérence avec le 1er accordéon */}
                                <strong>alwaysdata</strong>
                                <span>
                                    91 Rue du Faubourg Saint-Honoré, 75008 Paris
                                </span>
                                <span>
                                    <i class="bi bi-globe me-1"></i>
                                    <a href="https://www.alwaysdata.com/fr/" target="blank">www.alwaysdata.com</a>
                                </span>
                            </address>
                        </div>
                    </article>
                    <article className="accordion-item">
                        <h2 className="accordion-header" id="accordion-header-three">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionLegalNotice" aria-labelledby="accordion-header-three">
                            <div className="accordion-body">
                                {/* L'apparence est différente de la maquette mais j'ai préféré garder la cohérence avec le 1er accordéon */}
                                <strong>Crédits</strong>
                                <p>Ce site a été réalisé par John Doe, étudiant au
                                    <a href="https://www.centre-europeen-formation.fr/" className="ms-1" target="blank">Centre Européen de Formation.</a>
                                </p>
                                <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                                    <a href="https://www.flaticon.com/fr/" className="ms-1" target="blank">Pixabay.</a>
                                </p>
                                <p>Le favicon de ce site a été fourni par 
                                    <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" className="ms-1" target="blank">John doe Icons erstellt von Freepik - Flaticon.</a>
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
const Contact = () => {
    return (
        <div className="container-fluid p-0">
            <header className="w-100 text-center">
                <h1 className="mt-5">Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className="mx-auto my-3 bg-primary" style={{ width: '30%', height: '4px', marginTop: '5px' }}></div>
            </header>
            <main className="container">
                <section className="row row-cols-1 row-cols-md-2 g-4 my-5 border shadow rounded">
                    <article>
                        <h2>Formulaire de contact</h2>
                        <div className="mx-auto my-3 bg-primary" style={{ width: '100%', height: '3px', marginTop: '5px' }}></div>
                        <form action="">
                            <label htmlFor="name" className="visually-hidden">Nom</label>
                            <input id="name" type="text" className="form-control mb-2" placeholder="Votre nom" required/>
                            <label htmlFor="email" className="visually-hidden">Adresse email</label>
                            <input id="email" type="email" className="form-control mb-2" placeholder="Votre adresse email" required/>
                            <label htmlFor="phone" className="visually-hidden">Numéro de téléphone</label>
                            <input id="phone" type="number" className="form-control mb-2" placeholder="Votre numéro de téléphone" required/>
                            <label htmlFor="subject" className="visually-hidden">Sujet</label>
                            <input id="subject" type="text" className="form-control mb-2" placeholder="Sujet" required/>
                            <label htmlFor="message" className="visually-hidden">Message</label>
                            <textarea id="message" type="text" className="form-control mb-3" placeholder="Votre message" rows={15} required/>
                        </form>
                        <button type="submit" className="btn btn-primary d-block mx-auto mb-5">Envoyer</button>
                    </article>
                    <article>
                        <h2>Mes coordonnées</h2>
                        <div className="mx-auto my-3 bg-primary" style={{ width: '100%', height: '3px', marginTop: '5px' }}></div>
                        <h4>John Doe</h4>
                        <address className="d-flex flex-column">
                            <span>
                                <i class="bi bi-map"> </i>
                                40 rue Laure Diebold
                            </span>
                            <span>
                                <i class="bi bi-geo-alt"> </i>
                                69009 Lyon, France
                            </span>
                            <span>
                                <i class="bi bi-phone"> </i>
                                10 20 30 40 50
                            </span>
                            <span>
                                <i class="bi bi-envelope-at"> </i>
                                johndoe@gmail.com
                            </span>
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253938949142!2d4.7941079851210056!3d45.778665637849514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1747837191821!5m2!1sfr!2sfr" width="100%" height="480vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Contact;
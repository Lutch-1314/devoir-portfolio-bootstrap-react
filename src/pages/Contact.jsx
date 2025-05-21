const Contact = () => {
    return (
        <div>
            <header>
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </header>
            <hr />
            <main>
                <section>
                    <article>
                        <h2>Formulaire de contact</h2>
                        <hr />
                        <form action="">
                            <label htmlFor="name"></label>
                            <input type="text" placeholder="Votre nom"/>
                            <label htmlFor="mail"></label>
                            <input type="text" placeholder="Votre adresse email"/>
                            <label htmlFor="phone"></label>
                            <input type="text" placeholder="Votre numéro de téléphone"/>
                            <label htmlFor="subject"></label>
                            <input type="text" placeholder="Sujet"/>
                            <label htmlFor="message"></label>
                            <textarea type="text" placeholder="Votre message"/>
                        </form>
                        <button>Envoyer</button>
                    </article>
                    <article>
                        <h2>Mes coordonnées</h2>
                        <hr />
                        <h4>John Doe</h4>
                        <address>
                            <span>
                                <i class="bi bi-map"></i>
                                40 rue Laure Diebold
                            </span>
                            <span>
                                <i class="bi bi-geo-alt"></i>
                                69009 Lyon, France
                            </span>
                            <span>
                                <i class="bi bi-phone"></i>
                                10 20 30 40 50
                            </span>
                            <span>
                                <i class="bi bi-envelope-at"></i>
                                johndoe@gmail.com
                            </span>
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253938949142!2d4.7941079851210056!3d45.778665637849514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1747837191821!5m2!1sfr!2sfr" width="" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Contact;
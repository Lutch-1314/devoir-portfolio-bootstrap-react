

const Portfolio = () => {
    return (
        <div>
            <header>
                <img src="./images/banner.jpg" alt="une bannière bleue" />
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations.</p>
            </header>
            <hr />
            <main>
                <section>
                    <article>
                        <img src="./images/portfolio/fresh-food.jpg" alt="une cagette avec des légumes" />
                        <h2>Fresh Food</h2>
                        <p>Site de vente de produits frais en ligne</p>
                        <button>Voir le site</button>
                        <aside>Site réalisé avec PHP et MySQL</aside>
                    </article>
                    <article>
                        <img src="./images/portfolio/restaurant-japonais.jpg" alt="des sushis et des makis" />
                        <h2>Restaurant Akira</h2>
                        <p>Site de restaurant japonais</p>
                        <button>Voir le site</button>
                        <aside>Site réalisé avec WordPress</aside>
                    </article>
                    <article>
                        <img src="./images/portfolio/espace-bien-etre.jpg" alt="une tête de bouddha, une fleur de lotus et une pile de galets avec un coucher de soleil en fond" />
                        <h2>Espace bien-être</h2>
                        <p>Site de vente de produits de bien-être</p>
                        <button>Voir le site</button>
                        <aside>Site réalisé avec LARAVEL</aside>
                    </article>
                    <article>
                        <img src="./images/portfolio/seo.jpg" alt="des mots en rapport avec le seo sur fond bleu" />
                        <h2>SEO</h2>
                        <p>Amélioration du référencement d'un site e-commerce</p>
                        <button>Voir le site</button>
                        <aside>Utilisation des outils SEO</aside>
                    </article>
                    <article>
                        <img src="./images/portfolio/coder.jpg" alt="du code informatique sur un écran pc" />
                        <h2>Création d'une API</h2>
                        <p>Création d'une API RESTFULL publique</p>
                        <button>Voir le site</button>
                        <aside>PHP - SYMFONY</aside>
                    </article>
                    <article>
                        <img src="./images/portfolio/screens.jpg" alt="des ordinateurs, un clavier et une tablette sur un bureau" />
                        <h2>Maquette d'un site web</h2>
                        <p>Création du prototype d'un site</p>
                        <button>Voir le site</button>
                        <aside>Réalisé avec FIGMA</aside>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Portfolio;
import Card from '../other components/Card'

const articlesData = [
  {
    imageSrc: "./images/portfolio/fresh-food.jpg",
    imageAlt: "une cagette avec des légumes",
    title: "Fresh Food",
    text: "Site de vente de produits frais en ligne",
    buttonText: "Voir le site",
    footerText: "Site réalisé avec PHP et MySQL"
  },
  {
    imageSrc: "./images/portfolio/restaurant-japonais.jpg",
    imageAlt: "des sushis et des makis",
    title: "Restaurant Akira",
    text: "Site de restaurant japonais",
    buttonText: "Voir le site",
    footerText: "Site réalisé avec WordPress"
  },
  {
    imageSrc: "./images/portfolio/espace-bien-etre.jpg",
    imageAlt: "une tête de bouddha, une fleur de lotus et une pile de galets avec un coucher de soleil en fond",
    title: "Espace bien-être",
    text: "Site de vente de produits de bien-être",
    buttonText: "Voir le site",
    footerText: "Site réalisé avec LARAVEL"
  },
  {
    imageSrc: "./images/portfolio/seo.jpg",
    imageAlt: "des mots en rapport avec le seo sur fond bleu",
    title: "SEO",
    text: "Amélioration du référencement d'un site e-commerce",
    buttonText: "Voir le site",
    footerText: "Utilisation des outils SEO"
  },
  {
    imageSrc: "./images/portfolio/coder.jpg",
    imageAlt: "du code informatique sur un écran pc",
    title: "Création d'une API",
    text: "Création d'une API RESTFULL publique",
    buttonText: "Voir le site",
    footerText: "PHP - SYMFONY"
  },
  {
    imageSrc: "./images/portfolio/screens.jpg",
    imageAlt: "des ordinateurs, un clavier et une tablette sur un bureau",
    title: "Maquette d'un site web",
    text: "Création du prototype d'un site",
    buttonText: "Voir le site",
    footerText: "Réalisé avec FIGMA"
  }
];

const Portfolio = () => {
    return (
        <div className="container-fluid p-0">
            <header className="w-100 text-center">
                <img src="./images/banner.jpg" className="img-fluid w-100" alt="une bannière bleue" />
                <h1 className="mt-5">Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations.</p>
                <div className="mx-auto my-3 bg-primary" style={{ width: '30%', height: '3px', marginTop: '5px' }}></div>
            </header>
            <main className="container">
                <section className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {articlesData.map((article, index) => (
                        <article className="col" key={index}>
                            <Card {...article} />
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Portfolio;
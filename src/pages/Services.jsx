import ServicesCard from "../other components/ServicesCard";

const articlesData = [
  {
    icon: "bi bi-brush fs-2 text-primary",
    title: "UX Design",
    text: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    icon: "bi bi-code-slash fs-2 text-primary",
    title: "Développement web",
    text: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
  },
  {
    icon: "bi bi-search fs-2 text-primary",
    title: "Référencement",
    text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
  },
];

const Services = () => {
    return (
        <div className="container-fluid p-0">
            <header className="w-100 text-center">
                <img src="./images/banner.jpg" className="img-fluid w-100" alt="une bannière bleue" />
                <h1 className="mt-5">Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="mx-auto my-3 bg-primary" style={{ width: '30%', height: '3px', marginTop: '5px' }}></div>
            </header>
            <main className="container">
                <section className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {articlesData.map((article, index) => (
                        <article className="col" key={index}>
                            <ServicesCard {...article} />
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Services;
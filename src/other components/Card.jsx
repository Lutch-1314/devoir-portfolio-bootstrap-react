const Card = ({ imageSrc, imageAlt, title, text, buttonText, footerText }) => {
  return (
    <article className="card h-100 text-center">
      <img className="card-img-top" src={imageSrc} alt={imageAlt} />
      <div className="card-body">
        <h2 className="card-title fw-bold">{title}</h2>
        <p className="card-text">{text}</p>
        <button type="button" className="btn btn-primary mb-3">
            {buttonText}
        </button>
      </div>
      <aside className="card-footer text-body-secondary">{footerText}</aside>
    </article>
  );
};

export default Card;
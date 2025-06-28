const ServicesCard = ({ icon, title, text, }) => {
  return (
    <article className="card h-100 text-center">
      <i className={`${icon} card-icon pt-5`}></i> 
      <div className="card-body">
        <h2 className="card-title fw-bold">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </article>
  );
};

export default ServicesCard;
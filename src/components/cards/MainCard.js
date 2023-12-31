const MainCard = ({ heading, description, children }) => {
  return (
    <div className="mainCard">
      <h2 className="mt-0 mb-2">{heading}</h2>
      <p className="mt-0 mb-4 text-muted fs-6">{description}</p>
      {children}
    </div>
  );
};

export default MainCard;

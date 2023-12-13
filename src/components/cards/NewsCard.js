const NewsCard = ({ news }) => {
  return (
    <div className="news">
      <img src={news.img} alt="" />
      <div className="info">
        <h3>{news.title}</h3>
        <p>{news.description}</p>
      </div>
      <div className="label">{news.day}</div>
    </div>
  );
};

export default NewsCard;

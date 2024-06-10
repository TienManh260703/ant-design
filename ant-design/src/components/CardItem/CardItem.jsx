import "./CardItem.css";
function CardItem(props) {
  // eslint-disable-next-line react/prop-types
  const { title, style } = props;
  return (
    <>
      <div className="card-item" style={style}>
        {title && <h4> {title}</h4>}
      </div>
    </>
  );
}

export default CardItem;

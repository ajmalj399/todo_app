import "./Card.css";
const Card = (props) => {
  return (
    <div className="card w-100 mb-3 padding">
      <div className="card-body">
        <h6 id="textToStrike" className="card-title">
          {props.task}
        </h6>
        <p className="card-text"></p>
      </div>
    </div>
  );
};
export default Card;

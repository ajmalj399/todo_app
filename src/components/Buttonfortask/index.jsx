import "./Buttontask.css";
const Buttontask = (props) => {
  const Delete = () => {
    props.onClick(props.indexNumber);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-dark btn-padding-new"
        onClick={Delete}
      >
        {props.name}
      </button>
    </>
  );
};
export default Buttontask;

import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button type="button" className="btn btn-dark" onClick={props.onClick}>
        Add Task
      </button>
    </>
  );
};
export default Button;

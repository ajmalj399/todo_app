import "./Textbox.css";

const Box = (props) => {
  return (
    <>
      <input
        type="text"
        className="text-box"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
      ></input>
    </>
  );
};
export default Box;

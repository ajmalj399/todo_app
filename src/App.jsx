import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Button from "./components/buttons";
import Buttontask from "./components/Buttonfortask";

import Card from "./components/card";
import Box from "./components/textbox";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const onButtonClick = () => {
    if (input) {
      setData([input, ...data]);
    }

    setInput("");
  };
  const onDelete = (index) => {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);
  };
  const onKeyDown = (e) => {
    if (e.key == "Enter" && input) {
      setData([input, ...data]);
      setInput("");
    }
  };

  return (
    <>
      <div className="inner-body">
        <div className="task-body">
          <h1 className="todo-app">TODO APP</h1>

          {/* <Button></Button> */}
        </div>
        <div className="textbox-container">
          <Box
            onChange={onInputChange}
            value={input}
            placeholder={"enter your task..."}
            onKeyDown={onKeyDown}
          ></Box>
          <Button onClick={onButtonClick}></Button>
        </div>

        {data.map((item, index) => {
          return (
            <>
              <div className="task-gap">
                <div className="task-display">
                  <Card task={item} index={index}></Card>
                  <Buttontask
                    name={"Delete"}
                    onClick={onDelete}
                    indexNumber={index}
                  ></Buttontask>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./Architect.css";

export default function Architect(props) {

  const [architectColor, setArchitectColor] = useState("black");

  const changeColor = () => {
    setArchitectColor(architectColor === "black" ? "red" : "black");
  }

  return (
    <>
      <p className={architectColor} onMouseOver={changeColor}>Sr. Don Excelentísimo {props.name} {props.firstSurname} {props.secondSurname ? props.secondSurname : "No tiene"}</p>
    </>
  );
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./App.css"



ReactDOM.render(<App name="mekala praveen" age="29" desig="SDE" ranks={[1,2,3,"first","second","third"]} company={{first:"Google",second:"Amazon"}}/>,
document.getElementById("root"))


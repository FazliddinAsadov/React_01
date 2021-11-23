import React from "react";
import Header from "./components/Todo/Header";
import "./App.css";
import Headeriteam from "./components/Headeriteam";

function App() {
  const Todos = [
    { id: 1, completed: false, title: "Barselona" },
    { id: 2, completed: false, title: "Leverpol" },
    { id: 3, completed: false, title: "Chelse" },
  ];
  return (
    <div className="App">
      <h1>Welcome React</h1>
      <p>yugujygjuyguj</p>

      <Headeriteam Todos={Todos} />
    </div>
  );
}
export default App;

import "./App.css";
import Form from "./components/Form/Form";
import ListTask from "./components/ListTask/ListTask";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <p>ReactJs + Nodejs + Mogodb</p>
      <Form state={state} setState={setState} />
      <ListTask state={state} setState={setState} />
    </div>
  );
}

export default App;

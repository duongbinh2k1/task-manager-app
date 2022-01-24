import "./App.css";
import Form from "./components/Form/Form";
import ListTask from "./components/ListTask/ListTask";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <Form state={state} setState={setState} />
      <ListTask state={state} setState={setState} />
    </div>
  );
}

export default App;

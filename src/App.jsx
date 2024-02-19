import { Grid } from "@mui/material";
import { useState } from "react";
import FormGenerator from "./components/form-generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FormGenerator />
    </div>
  );
}

export default App;

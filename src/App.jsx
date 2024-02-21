import { Route, Routes } from "react-router-dom";
import FormGenerator from "./components/form-generator";
import Layout from "./components/Layout";
import DisplayForm from "./components/display-form";
import BackToHome from "./components/back";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/create-form" element={<FormGenerator />} />
        <Route path="/view-form" element={<DisplayForm />} />
      </Routes>
    </div>
  );
}

export default App;

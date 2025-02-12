import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./app/layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout> <Dashboard /> </Layout>} />
      </Routes>
    </>
  );
}

export default App;

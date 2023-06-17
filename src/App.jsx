import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screens from "./pages/Screens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screens />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import HomeClass from "./components/HomeClass";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<Home />} />
          <Route path="/desc" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

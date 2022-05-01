import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import HomeClass from "./components/HomeClass";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeClass />} />
          <Route path="/:page" element={<HomeClass />} />
          <Route path="/desc" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

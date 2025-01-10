import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Main";



function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/recipes" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Main from "./components/Main";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<Main />}/>

        {/* default redirect to home page */}
        <Route path="*" element={<Navigate to="/recipes" />} />
      </Routes>
    </Router>
  );
}

export default App;

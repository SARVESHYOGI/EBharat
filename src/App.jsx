import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import NoPage from "./pages/noPage/NoPage.jsx";

export default function Example() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );

}

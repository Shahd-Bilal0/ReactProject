import "./App.css";
import "./components/cards/Cards.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router basename="/ReactProject">
      <div className="page">
        <Sidebar />
        <Content />
      </div>
    </Router>
  );
};

export default App;

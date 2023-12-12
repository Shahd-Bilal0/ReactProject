import "./App.css";
import "./components/cards/Cards.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
const App = () => {
  return (
    <div className="page">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;

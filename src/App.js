import "./App.css";
import Container from "./components/Container";
import LeftColumn from "./layout/LeftColumn";
import RightColumn from "./layout/RightColumn";

const App = () => {
  return (
    <div className="App">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

export default App;

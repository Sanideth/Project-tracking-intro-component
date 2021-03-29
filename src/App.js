import "./App.prefixed.css";
import Header from "./layout/Header";
import LeftColumn from "./layout/LeftColumn";
import RightColumn from "./layout/RightColumn";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="row u-fl-c">
          <LeftColumn />
          <RightColumn />
        </div>
      </main>
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log("clicked")} variant={"secondary"} size={"large"}>
          Button
        </Button>
      </header>
    </div>
  );
}

export default App;
